// components/CardInterpretation/CardInterpretation.tsx

import React from 'react';
import type { GameCard } from './../../types/tarot';
import { getSuitColor, getSuitIcon } from '../../utils/cardHelpers';
import styles from './CardInterpretation.module.scss';

/**
 * 📖 牌卡解讀元件的 Props
 */
interface CardInterpretationProps {
  cards: GameCard[]; // 已翻開的牌卡陣列
}

/**
 * 📖 牌卡完整解讀元件
 *
 * 職責：
 * - 顯示所有已翻開牌卡的詳細解讀
 * - 包含正位、逆位意義
 * - 包含牌卡描述
 */
export const CardInterpretation: React.FC<CardInterpretationProps> = ({
  cards,
}) => {
  // 過濾出有牌卡資料的項目
  const validCards = cards.filter((gameCard) => gameCard.card !== null);

  // 如果沒有牌卡，不顯示
  if (validCards.length === 0) {
    return null;
  }

  return (
    <section className={styles.interpretation}>
      {/* 標題 */}
      <h3 className={styles.title}>🔮 您的完整塔羅解讀</h3>

      {/* 牌卡列表 */}
      <div className={styles.cardList}>
        {validCards.map((gameCard, index) => {
          const card = gameCard.card!; // 已確認不是 null

          return (
            <article
              key={gameCard.id}
              className={styles.cardItem}
              style={{
                borderColor: getSuitColor(card.suit),
                backgroundColor: `${getSuitColor(card.suit)}05`,
              }}
            >
              {/* 牌卡標題 */}
              <h4
                className={styles.cardTitle}
                style={{ color: getSuitColor(card.suit) }}
              >
                {getSuitIcon(card.suit)} 第 {index + 1} 張牌：
                {card.chinese_name}
              </h4>

              {/* 英文名稱 */}
              <p className={styles.cardEnglishName}>{card.name}</p>

              {/* 牌卡內容 */}
              <div className={styles.cardContent}>
                {/* 描述 */}
                <div className={styles.section}>
                  <strong className={styles.sectionLabel}>🎴 牌卡描述：</strong>
                  <p className={styles.sectionText}>{card.description}</p>
                </div>

                {/* 正位意義 */}
                <div className={styles.section}>
                  <strong className={styles.sectionLabel}>🌟 正位意義：</strong>
                  <p className={styles.sectionText}>{card.meaning_up}</p>
                </div>

                {/* 逆位警示 */}
                <div className={styles.section}>
                  <strong className={styles.sectionLabel}>⚠️ 逆位警示：</strong>
                  <p className={styles.sectionText}>{card.meaning_rev}</p>
                </div>

                {/* 關鍵字 */}
                {card.keywords && card.keywords.length > 0 && (
                  <div className={styles.section}>
                    <strong className={styles.sectionLabel}>🔑 關鍵字：</strong>
                    <div className={styles.keywords}>
                      {card.keywords.map((keyword, idx) => (
                        <span
                          key={idx}
                          className={styles.keyword}
                          style={{
                            backgroundColor: `${getSuitColor(card.suit)}20`,
                            color: getSuitColor(card.suit),
                          }}
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default CardInterpretation;
