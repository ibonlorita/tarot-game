// hooks/useTarotGame.ts

import { useState, useCallback } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { GAME_CONFIG } from "../utils/constants";
import type { GameCard } from "../types/tarot";
import { TAROT_DECK } from "../services/tarotDatabase";
import { shuffleArray } from "../utils/genericHelpers";
import type { TarotCard } from "../types/tarot";


/**
 * 塔羅遊戲主邏輯hook
 *
 * 遊戲狀態（牌卡/次數/載入）
 * 處理抽牌邏輯
 * 處理翻牌邏輯
 * 管理 localStorage 持久化
 *  * 設計理念：
 * - 把所有邏輯集中在 Hook 裡
 * - 讓頁面元件保持乾淨，只負責顯示
 * - 透過解構回傳狀態和方法，避免 props drilling
 *
 * @returns {Object} 遊戲狀態和控制方法
 */

export const useTarotGame = () => {
  // 狀態管理

  /**
   * 剩餘抽牌次數 （使用 localStorage 持久化）
   */

  const [remainingDraws, setRemainingDraws] = useLocalStorage<number>(
    GAME_CONFIG.STORY_AGE_KEY,
    GAME_CONFIG.INITIAL_DRAWS
  );

  /** 
   * 遊戲牌卡狀態
   * 
   * 使用函數式初始化，建立三個空位
   */
  const [gameCards, setGameCards] = useState<GameCard[]>(() => 
    Array.from({ length: GAME_CONFIG.CARD_COUNT }, (_, index) => ({
      id: index + 1,
      card: null,
      isFlipped: false,
      isSelected: false
    }))
  );


  /**
   * 載入狀態
   */
  const [isLoading, setIsLoading] = useState<boolean>(false);

  /**
   * 遊戲是否開始
   * 
   */
  const [gameStarted, setGameStarted] = useState<boolean>(false);

  /**
   * 所有牌是否都已翻開
   */
  const [allCardsRevealed, setAllCardsRevealed] = useState<boolean>(false);

  /**
   * 登入彈窗顯示狀態
   */
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);

  
  
  // 核心邏輯函數

  /**
   * 抽取三張牌卡
   */
  const drawThreeCards = useCallback((): TarotCard[] => {
    console.log('抽取三張牌卡');

    // 複製並洗牌 （使用 Fisher-Yates 洗牌算法）
    const shuffledCards = shuffleArray([...TAROT_DECK]);

    // 取前三張
    const selectedCards = shuffledCards.slice(0, GAME_CONFIG.CARD_COUNT);

    console.log('抽取的牌卡:', selectedCards.map(card => card.chinese_name));

    return selectedCards;
  }, []);


  /**
   * 開始遊戲（抽牌）
   * 
   * 流程：
   * 1.檢查剩餘次數
   * 2.顯示載入動畫
   * 3.抽牌
   * 4.更新狀態
   */
  const handleStartGame = useCallback(async () => {
    // 檢查次數
    if (remainingDraws <= 0) {
      console.log('達到抽牌上限，顯示登入彈窗');
      setShowLoginModal(true);
      return;
    }

    setIsLoading(true);

    try {
      // 模擬 API 延遲效果
      // 在真實專案中，這裡會呼叫 tarotApi.drawRandomCards(3)
      await new Promise(resolve => setTimeout(resolve, GAME_CONFIG.LOADING_DELAY));

      // 抽取牌卡
      const cards = drawThreeCards();

      // 更新牌卡狀態 （使用函數更新確保狀態正確）
      setGameCards(prev => prev.map((gameCard, index) => ({
        ...gameCard,
        card: cards[index] || null
      })))

      // 更新遊戲狀態
      setGameStarted(true);
      setRemainingDraws(prev => prev - 1);

      console.log('遊戲開始，剩餘次數:', remainingDraws - 1);
    } catch (error) {
      console.error('遊戲開始失敗:', error);
      alert('遊戲開始失敗，請稍後再試');
    } finally {
      // 無論成功失敗，都設置載入狀態
      setIsLoading(false);
    }
  }, [remainingDraws, drawThreeCards, setRemainingDraws]);


  /**
   * 翻牌處理
   *
   * ＠param cardId - 被點擊的牌卡
   */
  const handleCardClick = useCallback((cardId: number) => {
    // 檢查遊戲是否可以翻牌
    if (!gameStarted || isLoading) {
      console.log('遊戲尚未開始或正在載入，無法翻牌');
      return;
    }
    console.log('翻牌:', cardId);

    // 使用函數確保更新狀態正確
    setGameCards(prev => {
      // 更新點擊的牌卡
      const updated = prev.map(gameCard =>
        gameCard.id === cardId
        ? { ...gameCard, isFlipped: true, isSelected: true}
        : gameCard
      );


      // 檢查是否所有牌都翻開了
      const allRevealed = updated.every(card => card.isFlipped);

      if (allRevealed) {
        setAllCardsRevealed(true);
        console.log('所有牌都翻開了');
      }

      return updated;

    });
  }, [gameStarted, isLoading]);


  /**
   * 重新開始遊戲
   * 
   * 重置所有遊戲狀態，但不影響剩餘次數
   */
  const handleRestart = useCallback(() => {
    console.log('重新開始遊戲');

    // 重置牌卡狀態
    setGameCards(Array.from({length: GAME_CONFIG.CARD_COUNT}, (_, index) => ({
      id: index + 1,
      card: null,
      isFlipped: false,
      isSelected: false,
    })));
    // 重置遊戲狀態
    setGameStarted(false);
    setAllCardsRevealed(false);
    console.log('遊戲重置完成');
  }, []);

  /**
   * 登入模擬處理
   * 
   * 呼叫API
   * 儲存token
   * 更新使用者狀態
   * */
  const handleLogin = useCallback(() => {
    console.log('用戶登入成功');

    // 設定為無限次數
    setRemainingDraws(GAME_CONFIG.UNLIMITED_DRAWS);

    // 關閉登入彈窗
    setShowLoginModal(false);

  }, [setRemainingDraws])

  // 回傳外部使用的介面
  return {
    // 狀態
    gameCards,
    remainingDraws,
    isLoading,
    gameStarted,
    allCardsRevealed,
    showLoginModal,
    // 方法
    handleStartGame,
    handleCardClick,
    handleRestart,
    handleLogin,
    setShowLoginModal
  }
}

