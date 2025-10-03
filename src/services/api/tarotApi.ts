// services/api/tarotApi.ts

import axiosInstance from "./axiosInstance";
import type { TarotCard } from "../../types/tarot";
import type { AxiosResponse } from "axios";


/**
 *  塔羅牌 API服務
 *
 * 封裝所有塔羅相關的API 呼叫
 */

export const tarotApi = {

  /**
   *  取得所有塔羅牌
   */
  getAllCards: async (): Promise<TarotCard[]> => {
    try {
      const response = await axiosInstance.get('/cards');
      return response.data;
    } catch (error) {
      console.error('取得塔羅失敗:', error);
      throw error;
    }
  },

  /**
   * 隨機抽取指定數量的牌
   */
  drawCards: async (count: number = 3): Promise<TarotCard[]> => {
    try {
      const response = await axiosInstance.post('/traot/draw', {count});
      return response.data;
    } catch (error) {
      console.error('抽牌失敗:', error);
      throw error;
    }
  },

  /**
   * 根據 ID 取得單張牌
   */
  getCardById: async(id: number): Promise<TarotCard> => {
    try {
      const response: AxiosResponse<TarotCard> = await axiosInstance.get(`/tarot/cards/${id}`);
      return response.data;
    } catch (error) {
      console.error(`取得牌卡 ID ${id} 失敗:`, error);
      throw error;
    }
  },

  /**
   * 儲存占卜記錄
   */
  saveReadings: async (cards: TarotCard[], userId?: string): Promise<void> => {
    try {
      await axiosInstance.post('/tarot/readings', {
        cards: cards.map(card => card.id),
        userId,
        timestamp: new Date().toISOString(),
      })
      console.log('占卜記錄儲存成功');
    } catch (error) {
      console.error('儲存占卜記錄失敗:', error);
      throw error;
    }
  }
};