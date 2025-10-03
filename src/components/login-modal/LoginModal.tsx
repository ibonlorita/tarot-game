// components/LoginModal/LoginModal.tsx

import { useEffect } from 'react';
import styles from './LoginModal.module.scss';

/**
 * 🔐 登入彈窗元件的 Props
 */
interface LoginModalProps {
  isOpen: boolean; // 是否顯示彈窗
  onClose: () => void; // 關閉彈窗的回調
  onLogin: () => void; // 登入成功的回調
}

/**
 * 🔐 登入彈窗元件
 *
 * 職責：
 * - 顯示登入提示
 * - 處理登入操作
 * - 提供關閉功能
 */
export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onLogin,
}) => {
  /**
   * 🎯 處理背景點擊（點擊遮罩關閉彈窗）
   */
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // 只有點擊遮罩本身才關閉，點擊內容區不關閉
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  /**
   * ⌨️ 處理 ESC 鍵關閉
   */
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // 只有在彈窗開啟時才監聽
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    // 清理函數
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  /**
   * 🔒 阻止背景滾動
   */
  useEffect(() => {
    if (isOpen) {
      // 開啟彈窗時禁止 body 滾動
      document.body.style.overflow = 'hidden';
    } else {
      // 關閉彈窗時恢復滾動
      document.body.style.overflow = 'unset';
    }

    // 清理函數
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // 如果不顯示，直接返回 null
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={styles.backdrop}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className={styles.modal}>
        {/* 關閉按鈕 */}
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="關閉彈窗"
        >
          ✕
        </button>

        {/* 圖示 */}
        <div className={styles.icon}>🔮✨</div>

        {/* 標題 */}
        <h2 id="modal-title" className={styles.title}>
          解鎖無限神秘能量
        </h2>

        {/* 說明文字 */}
        <div className={styles.content}>
          <p className={styles.description}>您已體驗完免費占卜次數</p>
          <ul className={styles.benefits}>
            <li>🌟 登入後即可無限次探索塔羅牌的神秘指引</li>
            <li>💫 解鎖專屬個人化占卜記錄</li>
            <li>📊 查看您的占卜歷史和趨勢分析</li>
          </ul>
        </div>

        {/* 按鈕組 */}
        <div className={styles.buttonGroup}>
          <button onClick={onLogin} className={styles.loginButton}>
            🚀 立即登入
          </button>
          <button onClick={onClose} className={styles.cancelButton}>
            稍後再說
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
