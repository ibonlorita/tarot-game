// services/api/axiosInstance.ts

import axios from 'axios';
import type {
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios';

/**
 * Axios 基礎配置實例
 *
 * Vite 注意事項：
 * - 環境變數必須以 VITE_ 開頭
 * - 修改 .env 後需要重啟 npm run dev
 */
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

/**
 * 請求攔截器
 */
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('auth_token');
    
    if(token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log('發送請求：', {
      method: config.method?.toUpperCase(),
      url: config.url,
      data: config.data,
    });

    return config;
  },
  (error: AxiosError) => {
    console.error('請求錯誤：', error);
    return Promise.reject(error);
  }
);

/**
 * 回應攔截器
 */
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log('收到回應：', {
      status: response.status,
      url: response.config.url,
      data: response.data,
    })

    return response;
  },
  (error: AxiosError) => {
    if(error.response) {
      const status = error.response.status;

      switch(status) {
        case 401:
          console.error('未授權401：請重新登入');
          localStorage.removeItem('auth_token');
          window.location.href = '/login';
          break;

        case 403:
          console.error('禁止訪問 403: 權限不足');
          break;

        case 404:
          console.error('資源不存在 404:', error.config?.url);
          break;

        case 500:
          console.error('伺服器錯誤 500: 請稍後再試');
          break;

        default:
          console.error(`請求失敗: ${status}:`, error.response.data);
      }

    } else if (error.request) {
      console.error('網路錯誤：無法連接伺服器');
    } else {
      console.error('請求配置錯誤:', error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;