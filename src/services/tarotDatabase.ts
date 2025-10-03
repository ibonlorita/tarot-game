// services/taroDatabase.ts

import type { TarotCard } from "../types/tarot"
import { getCardImageUrl } from "../utils/cardHelpers"

/** 
 * 塔羅牌資料庫
 * 
 * 資料來源：
* - 牌義參考：傳統萊德-韋特塔羅系統
 * - 圖片資源：Internet Archive (CC0 授權)
 * - 圖庫連結：https://archive.org/details/rider-waite-tarot
*/
export const TAROT_DECK: TarotCard[] = [
  // ═══════════════════════════════════════
  // 大阿爾克那 (Major Arcana) - 22張
  // ═══════════════════════════════════════
  {
    id: 0,
    name: "The Fool",
    chinese_name: "愚者",
    suit: "major",
    number: 0,
    keywords: ["新開始", "冒險", "純真", "自由"],
    meaning_up: "愚者代表新的開始和無限可能。他鼓勵你踏出舒適圈，以開放和好奇的心態面對未知的旅程。這是一張關於信任直覺、擁抱變化的牌。",
    meaning_rev: "可能表示魯莽行事或缺乏計劃。需要在行動前更謹慎地思考後果，避免因為過度樂觀而忽略風險。",
    description: "一個年輕人站在懸崖邊，背著行囊，手持白玫瑰，無懼地踏出下一步。",
    imageUrl: getCardImageUrl(0)
  },
  {
    id: 1,
    name: "The Magician",
    chinese_name: "魔術師",
    suit: "major",
    number: 1,
    keywords: ["意志力", "創造", "技能", "專注"],
    meaning_up: "魔術師象徵將想法轉化為現實的能力。你擁有實現目標所需的所有工具和技能，關鍵在於如何運用你的意志力和專注力。",
    meaning_rev: "可能暗示濫用權力、欺騙或缺乏專注。需要檢視自己的動機是否純正，避免用技能來操縱他人。",
    description: "一位法師站在祭壇前，右手指向天空，左手指向大地，象徵天地能量的結合。",
    imageUrl: getCardImageUrl(1)
  },
  {
    id: 2,
    name: "The High Priestess",
    chinese_name: "女祭司",
    suit: "major",
    number: 2,
    keywords: ["直覺", "神秘", "內在智慧", "潛意識"],
    meaning_up: "女祭司代表內在智慧和直覺力量。她提醒你要傾聽內心的聲音，相信自己的直覺，答案就在你的潛意識深處。",
    meaning_rev: "可能表示與內在智慧失去連結，或被表面的事物所迷惑。需要花時間靜心冥想，重新找回內在的平靜。",
    description: "一位神秘的女性坐在黑白柱子之間，身後是象徵潛意識的水面。",
    imageUrl: getCardImageUrl(2)
  },
  {
    id: 3,
    name: "The Empress",
    chinese_name: "皇后",
    suit: "major",
    number: 3,
    keywords: ["豐饒", "母性", "創造力", "自然"],
    meaning_up: "皇后象徵豐富的創造力和滋養能量。她代表新生命的誕生、創意項目的開花結果，以及對他人的關愛照顧。",
    meaning_rev: "可能暗示過度保護、創意受阻或缺乏自我照顧。需要在給予他人關愛的同時，也要記得滋養自己。",
    description: "一位懷孕的女性坐在豐饒的花園中，周圍充滿生機勃勃的自然景象。",
    imageUrl: getCardImageUrl(3)
  },
  {
    id: 4,
    name: "The Emperor",
    chinese_name: "皇帝",
    suit: "major",
    number: 4,
    keywords: ["權威", "秩序", "領導", "結構"],
    meaning_up: "皇帝代表穩定的領導力和建立秩序的能力。他象徵透過紀律和組織來實現目標，是權威和責任的體現。",
    meaning_rev: "可能表示濫用權力、過度控制或缺乏彈性。需要學會在堅持原則的同時保持開放和包容的態度。",
    description: "一位威嚴的統治者坐在石製王座上，手持權杖，展現穩固的統治力。",
    imageUrl: getCardImageUrl(4)
  },
  {
    id: 13,
    name: "Death",
    chinese_name: "死神",
    suit: "major",
    number: 13,
    keywords: ["轉變", "結束", "重生", "釋放"],
    meaning_up: "死神代表重大的轉變和舊階段的結束。這不是物理死亡，而是舊我的死去和新我的誕生，是成長必經的過程。",
    meaning_rev: "抗拒變化、停滯不前或恐懼轉變。需要放下對過去的執著，勇敢地迎接新的開始。",
    description: "死神騎著白馬，手持黑旗，象徵轉變和重生的必然性。",
    imageUrl: getCardImageUrl(13)
  },
  {
    id: 19,
    name: "The Sun",
    chinese_name: "太陽",
    suit: "major",
    number: 19,
    keywords: ["快樂", "成功", "活力", "樂觀"],
    meaning_up: "太陽是塔羅牌中最正面的牌之一，代表純真的快樂、生命力和成功。一切都在朝著光明的方向發展。",
    meaning_rev: "過度樂觀、自大或暫時的挫折。需要保持謙遜，記住快樂來自內心而非外在成就。",
    description: "燦爛的太陽照耀著一個騎著白馬的快樂孩童，象徵純真的喜悅。",
    imageUrl: getCardImageUrl(19)
  },

  // ═══════════════════════════════════════
  // 小阿爾克那 - 寶劍組 (Swords)
  // ═══════════════════════════════════════
  {
    id: 36,
    name: "Ace of Swords",
    chinese_name: "寶劍王牌",
    suit: "swords",
    number: 1,
    keywords: ["新思維", "突破", "真相", "清晰"],
    meaning_up: "寶劍王牌代表心智的突破和新想法的誕生。這是一個充滿潛力的開始，真相即將浮現，你將獲得前所未有的清晰思維。",
    meaning_rev: "思緒混亂、缺乏方向或被錯誤信息誤導。需要冷靜下來，重新整理思緒，尋找事實真相。",
    description: "一隻手從雲中伸出，握著一把直立的劍，劍尖戴著桂冠。",
    element: "air",
    imageUrl: getCardImageUrl(36)
  },
  {
    id: 42,
    name: "Seven of Swords",
    chinese_name: "寶劍七",
    suit: "swords",
    number: 7,
    keywords: ["策略", "機智", "獨立行動", "避免衝突"],
    meaning_up: "寶劍七象徵需要運用智慧和策略來達成目標。有時需要獨自行動或採用非傳統方法，巧妙地避開障礙和衝突。",
    meaning_rev: "可能暗示欺騙、背叛或不誠實的行為。也可能表示計劃被發現或策略失敗，需要重新評估方法。",
    description: "一個人悄悄地從營地偷走五把劍，另外兩把劍仍插在地上。",
    element: "air",
    imageUrl: getCardImageUrl(42)
  },

  // ═══════════════════════════════════════
  // 小阿爾克那 - 聖杯組 (Cups)
  // ═══════════════════════════════════════
  {
    id: 50,
    name: "Ace of Cups",
    chinese_name: "聖杯王牌",
    suit: "cups",
    number: 1,
    keywords: ["新感情", "愛", "靈性覺醒", "情感豐富"],
    meaning_up: "聖杯王牌代表情感和靈性的新開始。可能是新戀情的開始、深度友誼的建立，或是內在愛與慈悲的覺醒。",
    meaning_rev: "情感封閉、愛情失望或靈性迷失。需要打開心房，學會重新愛自己和他人。",
    description: "一隻手從雲中伸出，握著一個溢滿水的聖杯，白鴿銜著聖餅飛向杯中。",
    element: "water",
    imageUrl: getCardImageUrl(50)
  },
  {
    id: 52,
    name: "Three of Cups",
    chinese_name: "聖杯三",
    suit: "cups",
    number: 3,
    keywords: ["友誼", "慶祝", "社交", "團結"],
    meaning_up: "聖杯三象徵友誼的歡樂和社交生活的和諧。這是慶祝成功、享受友情、參與社群活動的美好時光。",
    meaning_rev: "社交衝突、友誼破裂或過度沉溺於派對娛樂。需要在享樂和責任之間找到平衡。",
    description: "三位女性舉杯慶祝，展現友誼的歡樂和生活的美好。",
    element: "water",
    imageUrl: getCardImageUrl(52)
  },

  // ═══════════════════════════════════════
  // 小阿爾克那 - 權杖組 (Wands)
  // ═══════════════════════════════════════
  {
    id: 64,
    name: "Ace of Wands",
    chinese_name: "權杖王牌",
    suit: "wands",
    number: 1,
    keywords: ["創意火花", "新計劃", "熱情", "機會"],
    meaning_up: "權杖王牌代表創意和行動的新開始。這是一個充滿熱情和能量的時期，新的機會和創意項目正在萌芽。",
    meaning_rev: "缺乏動力、創意受阻或計劃延遲。需要重新點燃內在的熱情火焰，找回行動的動力。",
    description: "一隻手從雲中伸出，握著一根綠葉繁茂的權杖，象徵生命力和創造力。",
    element: "fire",
    imageUrl: getCardImageUrl(64)
  },
  {
    id: 69,
    name: "Six of Wands",
    chinese_name: "權杖六",
    suit: "wands",
    number: 6,
    keywords: ["勝利", "認可", "成功", "領導"],
    meaning_up: "權杖六象徵努力後的成功和他人的認可。你的領導能力得到肯定，是時候享受勝利的果實並激勵他人。",
    meaning_rev: "成功延遲、缺乏認可或自大傲慢。需要保持謙遜，繼續努力而不是沉溺於過去的成就。",
    description: "一位騎士騎著白馬，手持裝飾著桂冠的權杖，群眾在旁歡呼。",
    element: "fire",
    imageUrl: getCardImageUrl(69)
  },

  // ═══════════════════════════════════════
  // 小阿爾克那 - 錢幣組 (Pentacles)
  // ═══════════════════════════════════════
  {
    id: 78,
    name: "Ace of Pentacles",
    chinese_name: "錢幣王牌",
    suit: "pentacles",
    number: 1,
    keywords: ["新機會", "物質基礎", "實用性", "豐盛"],
    meaning_up: "錢幣王牌代表物質世界的新機會和穩固基礎的建立。可能是新工作、投資機會或建立長期財務安全的開始。",
    meaning_rev: "錯失機會、財務不穩定或過於物質主義。需要重新評估價值觀，找到物質與精神的平衡。",
    description: "一隻手從雲中伸出，握著一枚金色錢幣，下方是美麗的花園小徑。",
    element: "earth",
    imageUrl: getCardImageUrl(78)
  },
  {
    id: 85,
    name: "Eight of Pentacles",
    chinese_name: "錢幣八",
    suit: "pentacles",
    number: 8,
    keywords: ["專精", "技能", "勤奮", "學習"],
    meaning_up: "錢幣八象徵透過專注和勤奮來精進技能。這是一段需要投入時間和努力來學習新技能或完善現有能力的時期。",
    meaning_rev: "缺乏專注、半途而廢或完美主義阻礙進步。需要找到學習的樂趣，避免過度追求完美。",
    description: "一位工匠專注地雕刻錢幣，展現對技藝的專注和對完美的追求。",
    element: "earth",
    imageUrl: getCardImageUrl(85)
  }
];

// 取得資料庫資料
export const getDatabaseStats = () => {
  return {
    total: TAROT_DECK.length,
    major: TAROT_DECK.filter(card => card.suit === 'major').length,
    swords: TAROT_DECK.filter(card => card.suit === 'swords').length,
    cups: TAROT_DECK.filter(card => card.suit === 'cups').length,
    wands: TAROT_DECK.filter(card => card.suit === 'wands').length,
    pentacles: TAROT_DECK.filter(card => card.suit === 'pentacles').length

  }
}