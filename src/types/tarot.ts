//  tarot.ts

// 塔羅牌基礎介面

export interface TarotCard {
  id: number;
  name: string;
  chinese_name: string;
  suit: TarotSuit;
  number: number;
  keywords: string[];
  meaning_up: string; // 正位意義
  meaning_rev: string; // 逆位意義
  description: string;
  element?: TarotElement; // 元素屬性
  imageUrl?: string;
}


// 抽卡中牌卡的狀態

export interface GameCard {
  id: number;
  card: TarotCard | null;
  isFlipped: boolean; // 是否翻面
  isSelected: boolean; // 是否被選中

}

// 花色類型
export type TarotSuit = 'major' | 'swords' | 'cups' | 'wands' | 'pentacles';

// 元素類型
export type TarotElement = 'fire' | 'water' | 'earth' | 'air';

// 遊戲狀態介面
export interface GameState {
  gameCards: GameCard[];
  remainingDraws: number;
  isLoading: boolean;
  gameStarted: boolean;
  allCardsRevealed: boolean;
  showLoginModal: boolean;
}

