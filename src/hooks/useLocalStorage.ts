// hooks/useLocalStorage.ts

import { useState, useCallback, useEffect } from 'react';

/**
 * localStorage 持久化 Hook
 *
 * 功能：
 * - 支援任何類型的數據存儲（泛型）
 * - 自動序列化/反序列化 JSON
 * - 提供類似 useState 的 API
 * - 錯誤處理和容錯機制
 */

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, (value: T | ((prev: T) => T)) => void] {

  /**
   * 初始化：從 localStorage 讀取或使用預設值
   *
   * 使用函數式初始化 （lazy initialization）
   * 只在元件首次渲染時執行一次，提升效能
   */
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`讀取 localStorage key "${key}" 失敗:`, error);
      return initialValue;
    }
  });

  /**
   *  儲存到 localStorage
   *
   * 使用 useCallback 避免不必要的重新建立函數
   */
  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      try {
        const valueToStore = value instanceof Function
        ? value(storedValue)
        : value;

        setStoredValue(valueToStore);

        window.localStorage.setItem(key, JSON.stringify(valueToStore));
        console.log(`已儲存到 localStorage key "${key}"`, valueToStore);
      } catch (error) {
        console.error(`儲存到 localStorage key "${key}" 失敗:`, error);
      }
    },
    [key, storedValue]
  );

  /**
   * 監聽其他分頁的 localStorage 變化(可選功能)
   * 
   * 當用戶在多個分頁中打開同個網站時，
   * 一個分頁修改 localStorage ，其他分頁也會同步更新
   */
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key && e.newValue) {
        try {
          setStoredValue(JSON.parse(e.newValue));
        } catch (error) {
          console.error('解析 storage event 失敗:', error);
        }
      }
    };

    // 監聽 storage 事件
    window.addEventListener('storage', handleStorageChange);

    // 清理函數：元件卸載時移除監聽
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [key]);

  return [storedValue, setValue];

}

/**
 * // 儲存數字
* const [count, setCount] = useLocalStorage<number>('count', 0);
* setCount(5);                    // 直接設值
* setCount(prev => prev + 1);     // 函數式更新
* 
* // 儲存物件
* const [user, setUser] = useLocalStorage<User>('user', { name: '', age: 0 });
* setUser({ name: 'John', age: 25 });
* 
* // 儲存陣列
* const [items, setItems] = useLocalStorage<string[]>('items', []);
* setItems(prev => [...prev, 'new item']);
*/