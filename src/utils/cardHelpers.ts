// utils/cardHelpers.ts

import type { TarotCard, TarotSuit } from './../types/tarot';
import { SUIT_COLORS, SUIT_ICONS, TAROT_IMAGE_BASE_URL, CARD_IMAGE_FILENAMES } from './constants';


// 根據花色取得對應顏色
/**
 * @param suit - 塔羅花色
 * @returns 對應的顏色
 */
export const getSuitColor = (suit: TarotSuit): string => {
  return SUIT_COLORS[suit] || '#6b7280';
}

// 根據花色取得對應圖標
/**
 * @param suit - 塔羅花色
 * @returns 對應的圖標
 */
export const getSuitIcon = (suit: TarotSuit): string => {
  return SUIT_ICONS[suit] || '🔮';
}

// 洗牌算法 使用 Fisher-Yates 洗牌算法
/*
 *
 * 這是最標準的洗牌算法，確保每種排列的機率相等
 * 時間複雜度：O(n)
 * 空間複雜度：O(n) - 因為複製了一份陣列
 *
 * @param array - 要洗牌的陣列
 * @returns 洗好的新陣列（不修改原陣列）
 *
 * @example
 * const cards = [1, 2, 3, 4, 5];
 * const shuffled = shuffleArray(cards);
 * console.log(shuffled); // [3, 1, 5, 2, 4]（隨機結果）
*/
export function shuffleArray<T>(array: T[]): T[] {

  const shuffled = [ ...array ];


  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    // 使用解構賦值交換兩個元素的位置
    // ES6 語法糖，等同於
    // const temp = shuffled[i];
    // shuffled[i] = shuffled[j];
    // shuffled[j] = temp;
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

// 格式化剩餘次數顯示
/*
* @param draws - 剩餘次數
* @returns 格式化後的字串
*
*/
export const formatRemainingDraws = (remaining: number): string => {
  if (remaining > 900) return '無限';
  if (remaining <= 0) return '0';
  return remaining.toString();
}


// 檢查是否所有牌都已翻開
/**
 * @param cards - 牌卡陣列
 * @returns 是否所有牌都已翻開 boolean
 *
 */
export const areAllCardsRevealed = (cards: Array<{ isFlipped: boolean }>): boolean => {

  // 只要有一個false就返回false (every 檢查陣列中所有元素是否都滿足條件)
  return cards.every(card => card.isFlipped);
}


// 取得塔羅圖片URL
/*
* @param cardId - 牌卡ID
* @returns 塔羅圖片URL
*
* @example
* const cardId = 1;
* const imageUrl = getTarotImageUrl(cardId);
* console.log(imageUrl); // https://archive.org/download/rider-waite-tarot/RiderWaiteCards/01-magician.jpg
*/
export const getCardImageUrl = (cardId: number): string => {
  const filename = CARD_IMAGE_FILENAMES[cardId];

  if(!filename) {
    console.warn(`找不到 ID ${cardId} 圖片檔名，使用預設圖`);
    return '/image/card-back.png';
  }
  return `${TAROT_IMAGE_BASE_URL}${filename}`;

};

// 根據 ID 尋找牌卡
/*
 * @parm cards - 牌卡陣列
 * @parm id - 牌卡ID
 * @returns 找到的牌卡 或 undefined
*/
export const findCardById = (cards: TarotCard[], id: number): TarotCard | undefined => {
  return cards.find(card => card.id === id)
}

// 根據花色取得漸層背景
/*
 * @param suit - 塔羅花色
 * @returns CSS 漸層字串 
*/
export const getSuitGradient = (suit: TarotSuit): string => {
  const color = getSuitColor(suit);
  return `linear-gradient(145deg, ${color}20 0%, ${color}05 100%)`;
}

