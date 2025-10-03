// utils/constants.ts

// 塔羅花色顏色映射
export const SUIT_COLORS = {
  major: '#8b5cf6',      // 紫色 - 神秘
  swords: '#06b6d4',     // 藍色 - 理智
  cups: '#10b981',       // 綠色 - 情感
  wands: '#f59e0b',      // 橙色 - 熱情
  pentacles: '#ef4444'   // 紅色 - 物質
} as const;

// 塔羅花色圖標
export const SUIT_ICONS = {
  major: '🔮',
  swords: '⚔️',
  cups: '🍷',
  wands: '🔥',
  pentacles: '💰'
} as const;

// 塔羅花色中文名稱
export const SUIT_NAMES_ZH = {
  major: '大牌',
  swords: '寶劍',
  cups: '聖杯',
  wands: '權杖',
  pentacles: '錢幣',

} as const;

// 遊戲常數
export const GAME_CONFIG = {
  INITIAL_DRAWS: 3, // 初始免費抽卡數
  UNLIMITED_DRAWS: 999, // 登入後的抽卡次數
  CARD_COUNT: 3, // 每局抽牌數量
  LOADING_DELAY: 1500, // 抽牌動畫延遲-毫秒
  STORY_AGE_KEY: 'tarot_remaining_draws', // 存儲剩餘抽牌數的本地儲存鍵
} as const;



/*
 * Rider-Waite 塔羅牌圖片基礎 URL
 * 使用 Internet Archive 的免費資源
*/

export const TAROT_IMAGE_BASE_URL = 'https://archive.org/download/rider-waite-tarot/RiderWaiteCards/';

/* 
 * 牌卡檔名映射（對應Internet Archive 的檔名）
*/

export const CARD_IMAGE_FILENAMES: Record<number, string> = {
  // Major Arcana
  0: '00-fool.jpg',
  1: '01-magician.jpg',
  2: '02-high-priestess.jpg',
  3: '03-empress.jpg',
  4: '04-emperor.jpg',
  5: '05-hierophant.jpg',
  13: '13-death.jpg',
  19: '19-sun.jpg',

  // 寶劍組
  36: 'swords-ace.jpg',
  42: 'swords-07.jpg',

  // 聖杯組
  50: 'cups-ace.jpg',
  52: 'cups-03.jpg',

  // 權杖組
  64: 'wands-ace.jpg',
  69: 'wands-06.jpg',

  // 錢幣組
  78: 'pentacles-ace.jpg',
  85: 'pentacles-08.jpg'
};