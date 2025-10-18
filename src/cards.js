// Tarot Card Data Structure
// You can fill in the actual card data here

const tarotCards = [
  // Major Arcana (0-21)
  {
    id: 0,
    name: "The Fool",
    image: "/cards/fool.jpg",
    meaning: "New beginnings, innocence, spontaneity",
    category: "Major Arcana"
  },
  {
    id: 1,
    name: "The Magician",
    image: "/cards/magician.jpg",
    meaning: "Manifestation, willpower, skill",
    category: "Major Arcana"
  },
  {
    id: 2,
    name: "The High Priestess",
    image: "/cards/high-priestess.jpg",
    meaning: "Intuition, mystery, subconscious",
    category: "Major Arcana"
  },
  {
    id: 3,
    name: "The Empress",
    image: "/cards/empress.jpg",
    meaning: "Fertility, nature, abundance",
    category: "Major Arcana"
  },
  {
    id: 4,
    name: "The Emperor",
    image: "/cards/emperor.jpg",
    meaning: "Authority, structure, leadership",
    category: "Major Arcana"
  },
  {
    id: 5,
    name: "The Hierophant",
    image: "/cards/hierophant.jpg",
    meaning: "Tradition, spirituality, guidance",
    category: "Major Arcana"
  },
  {
    id: 6,
    name: "The Lovers",
    image: "/cards/lovers.jpg",
    meaning: "Love, relationships, choices",
    category: "Major Arcana"
  },
  {
    id: 7,
    name: "The Chariot",
    image: "/cards/chariot.jpg",
    meaning: "Determination, willpower, victory",
    category: "Major Arcana"
  },
  {
    id: 8,
    name: "Strength",
    image: "/cards/strength.jpg",
    meaning: "Inner strength, courage, patience",
    category: "Major Arcana"
  },
  {
    id: 9,
    name: "The Hermit",
    image: "/cards/hermit.jpg",
    meaning: "Soul-searching, introspection, guidance",
    category: "Major Arcana"
  },
  {
    id: 10,
    name: "Wheel of Fortune",
    image: "/cards/wheel-of-fortune.jpg",
    meaning: "Change, cycles, destiny",
    category: "Major Arcana"
  },
  {
    id: 11,
    name: "Justice",
    image: "/cards/justice.jpg",
    meaning: "Fairness, truth, balance",
    category: "Major Arcana"
  },
  {
    id: 12,
    name: "The Hanged Man",
    image: "/cards/hanged-man.jpg",
    meaning: "Sacrifice, letting go, new perspective",
    category: "Major Arcana"
  },
  {
    id: 13,
    name: "Death",
    image: "/cards/death.jpg",
    meaning: "Transformation, endings, new beginnings",
    category: "Major Arcana"
  },
  {
    id: 14,
    name: "Temperance",
    image: "/cards/temperance.jpg",
    meaning: "Balance, moderation, patience",
    category: "Major Arcana"
  },
  {
    id: 15,
    name: "The Devil",
    image: "/cards/devil.jpg",
    meaning: "Temptation, bondage, materialism",
    category: "Major Arcana"
  },
  {
    id: 16,
    name: "The Tower",
    image: "/cards/tower.jpg",
    meaning: "Sudden change, revelation, upheaval",
    category: "Major Arcana"
  },
  {
    id: 17,
    name: "The Star",
    image: "/cards/star.jpg",
    meaning: "Hope, inspiration, guidance",
    category: "Major Arcana"
  },
  {
    id: 18,
    name: "The Moon",
    image: "/cards/moon.jpg",
    meaning: "Illusion, fear, subconscious",
    category: "Major Arcana"
  },
  {
    id: 19,
    name: "The Sun",
    image: "/cards/sun.jpg",
    meaning: "Joy, success, vitality",
    category: "Major Arcana"
  },
  {
    id: 20,
    name: "Judgement",
    image: "/cards/judgement.jpg",
    meaning: "Rebirth, absolution, awakening",
    category: "Major Arcana"
  },
  {
    id: 21,
    name: "The World",
    image: "/cards/world.jpg",
    meaning: "Completion, achievement, fulfillment",
    category: "Major Arcana"
  },
  
  // Minor Arcana - Wands (22-35)
  {
    id: 22,
    name: "Ace of Wands",
    image: "/cards/ace-wands.jpg",
    meaning: "New opportunities, inspiration, potential",
    category: "Wands"
  },
  {
    id: 23,
    name: "Two of Wands",
    image: "/cards/two-wands.jpg",
    meaning: "Planning, personal power, future planning",
    category: "Wands"
  },
  {
    id: 24,
    name: "Three of Wands",
    image: "/cards/three-wands.jpg",
    meaning: "Expansion, foresight, leadership",
    category: "Wands"
  },
  {
    id: 25,
    name: "Four of Wands",
    image: "/cards/four-wands.jpg",
    meaning: "Celebration, harmony, homecoming",
    category: "Wands"
  },
  {
    id: 26,
    name: "Five of Wands",
    image: "/cards/five-wands.jpg",
    meaning: "Competition, conflict, tension",
    category: "Wands"
  },
  {
    id: 27,
    name: "Six of Wands",
    image: "/cards/six-wands.jpg",
    meaning: "Victory, success, recognition",
    category: "Wands"
  },
  {
    id: 28,
    name: "Seven of Wands",
    image: "/cards/seven-wands.jpg",
    meaning: "Challenge, competition, defending position",
    category: "Wands"
  },
  {
    id: 29,
    name: "Eight of Wands",
    image: "/cards/eight-wands.jpg",
    meaning: "Speed, action, rapid movement",
    category: "Wands"
  },
  {
    id: 30,
    name: "Nine of Wands",
    image: "/cards/nine-wands.jpg",
    meaning: "Resilience, persistence, last stretch",
    category: "Wands"
  },
  {
    id: 31,
    name: "Ten of Wands",
    image: "/cards/ten-wands.jpg",
    meaning: "Burden, responsibility, hard work",
    category: "Wands"
  },
  {
    id: 32,
    name: "Page of Wands",
    image: "/cards/page-wands.jpg",
    meaning: "Exploration, enthusiasm, new ideas",
    category: "Wands"
  },
  {
    id: 33,
    name: "Knight of Wands",
    image: "/cards/knight-wands.jpg",
    meaning: "Adventure, impulsiveness, energy",
    category: "Wands"
  },
  {
    id: 34,
    name: "Queen of Wands",
    image: "/cards/queen-wands.jpg",
    meaning: "Confidence, independence, determination",
    category: "Wands"
  },
  {
    id: 35,
    name: "King of Wands",
    image: "/cards/king-wands.jpg",
    meaning: "Natural-born leader, vision, entrepreneurship",
    category: "Wands"
  },
  
  // Minor Arcana - Cups (36-49)
  {
    id: 36,
    name: "Ace of Cups",
    image: "/cards/ace-cups.jpg",
    meaning: "New love, emotional fulfillment, spiritual awakening",
    category: "Cups"
  },
  {
    id: 37,
    name: "Two of Cups",
    image: "/cards/two-cups.jpg",
    meaning: "Unified love, partnership, mutual attraction",
    category: "Cups"
  },
  {
    id: 38,
    name: "Three of Cups",
    image: "/cards/three-cups.jpg",
    meaning: "Friendship, community, celebration",
    category: "Cups"
  },
  {
    id: 39,
    name: "Four of Cups",
    image: "/cards/four-cups.jpg",
    meaning: "Meditation, contemplation, apathy",
    category: "Cups"
  },
  {
    id: 40,
    name: "Five of Cups",
    image: "/cards/five-cups.jpg",
    meaning: "Loss, grief, disappointment",
    category: "Cups"
  },
  {
    id: 41,
    name: "Six of Cups",
    image: "/cards/six-cups.jpg",
    meaning: "Revisiting the past, childhood memories, innocence",
    category: "Cups"
  },
  {
    id: 42,
    name: "Seven of Cups",
    image: "/cards/seven-cups.jpg",
    meaning: "Choices, illusion, fantasy",
    category: "Cups"
  },
  {
    id: 43,
    name: "Eight of Cups",
    image: "/cards/eight-cups.jpg",
    meaning: "Disappointment, abandonment, withdrawal",
    category: "Cups"
  },
  {
    id: 44,
    name: "Nine of Cups",
    image: "/cards/nine-cups.jpg",
    meaning: "Satisfaction, emotional stability, luxury",
    category: "Cups"
  },
  {
    id: 45,
    name: "Ten of Cups",
    image: "/cards/ten-cups.jpg",
    meaning: "Divine love, blissful relationships, harmony",
    category: "Cups"
  },
  {
    id: 46,
    name: "Page of Cups",
    image: "/cards/page-cups.jpg",
    meaning: "Creative opportunities, intuitive messages, curiosity",
    category: "Cups"
  },
  {
    id: 47,
    name: "Knight of Cups",
    image: "/cards/knight-cups.jpg",
    meaning: "Following the heart, idealist, romantic",
    category: "Cups"
  },
  {
    id: 48,
    name: "Queen of Cups",
    image: "/cards/queen-cups.jpg",
    meaning: "Compassionate, caring, emotionally stable",
    category: "Cups"
  },
  {
    id: 49,
    name: "King of Cups",
    image: "/cards/king-cups.jpg",
    meaning: "Emotional balance, diplomacy, control",
    category: "Cups"
  },
  
  // Minor Arcana - Swords (50-63)
  {
    id: 50,
    name: "Ace of Swords",
    image: "/cards/ace-swords.jpg",
    meaning: "New ideas, mental clarity, success",
    category: "Swords"
  },
  {
    id: 51,
    name: "Two of Swords",
    image: "/cards/two-swords.jpg",
    meaning: "Difficult choices, indecision, stalemate",
    category: "Swords"
  },
  {
    id: 52,
    name: "Three of Swords",
    image: "/cards/three-swords.jpg",
    meaning: "Heartbreak, emotional pain, sorrow",
    category: "Swords"
  },
  {
    id: 53,
    name: "Four of Swords",
    image: "/cards/four-swords.jpg",
    meaning: "Rest, recovery, contemplation",
    category: "Swords"
  },
  {
    id: 54,
    name: "Five of Swords",
    image: "/cards/five-swords.jpg",
    meaning: "Unbridled ambition, win at all costs, betrayal",
    category: "Swords"
  },
  {
    id: 55,
    name: "Six of Swords",
    image: "/cards/six-swords.jpg",
    meaning: "Transition, change, rite of passage",
    category: "Swords"
  },
  {
    id: 56,
    name: "Seven of Swords",
    image: "/cards/seven-swords.jpg",
    meaning: "Deception, trickery, tactics and strategy",
    category: "Swords"
  },
  {
    id: 57,
    name: "Eight of Swords",
    image: "/cards/eight-swords.jpg",
    meaning: "Imprisonment, entrapment, self-victimization",
    category: "Swords"
  },
  {
    id: 58,
    name: "Nine of Swords",
    image: "/cards/nine-swords.jpg",
    meaning: "Anxiety, hopelessness, trauma",
    category: "Swords"
  },
  {
    id: 59,
    name: "Ten of Swords",
    image: "/cards/ten-swords.jpg",
    meaning: "Failure, collapse, crisis",
    category: "Swords"
  },
  {
    id: 60,
    name: "Page of Swords",
    image: "/cards/page-swords.jpg",
    meaning: "New ideas, curiosity, thirst for knowledge",
    category: "Swords"
  },
  {
    id: 61,
    name: "Knight of Swords",
    image: "/cards/knight-swords.jpg",
    meaning: "Action, impulsiveness, defending beliefs",
    category: "Swords"
  },
  {
    id: 62,
    name: "Queen of Swords",
    image: "/cards/queen-swords.jpg",
    meaning: "Clear boundaries, direct communication, independence",
    category: "Swords"
  },
  {
    id: 63,
    name: "King of Swords",
    image: "/cards/king-swords.jpg",
    meaning: "Clear thinking, intellectual power, authority",
    category: "Swords"
  },
  
  // Minor Arcana - Pentacles (64-77)
  {
    id: 64,
    name: "Ace of Pentacles",
    image: "/cards/ace-pentacles.jpg",
    meaning: "New opportunity, potential, manifestation",
    category: "Pentacles"
  },
  {
    id: 65,
    name: "Two of Pentacles",
    image: "/cards/two-pentacles.jpg",
    meaning: "Priorities, adaptability, time management",
    category: "Pentacles"
  },
  {
    id: 66,
    name: "Three of Pentacles",
    image: "/cards/three-pentacles.jpg",
    meaning: "Teamwork, collaboration, learning",
    category: "Pentacles"
  },
  {
    id: 67,
    name: "Four of Pentacles",
    image: "/cards/four-pentacles.jpg",
    meaning: "Conservation, frugality, security",
    category: "Pentacles"
  },
  {
    id: 68,
    name: "Five of Pentacles",
    image: "/cards/five-pentacles.jpg",
    meaning: "Need, poverty, insecurity",
    category: "Pentacles"
  },
  {
    id: 69,
    name: "Six of Pentacles",
    image: "/cards/six-pentacles.jpg",
    meaning: "Giving, receiving, sharing wealth",
    category: "Pentacles"
  },
  {
    id: 70,
    name: "Seven of Pentacles",
    image: "/cards/seven-pentacles.jpg",
    meaning: "Long-term view, sustainable results, perseverance",
    category: "Pentacles"
  },
  {
    id: 71,
    name: "Eight of Pentacles",
    image: "/cards/eight-pentacles.jpg",
    meaning: "Skill development, quality, mastery",
    category: "Pentacles"
  },
  {
    id: 72,
    name: "Nine of Pentacles",
    image: "/cards/nine-pentacles.jpg",
    meaning: "Abundance, luxury, self-sufficiency",
    category: "Pentacles"
  },
  {
    id: 73,
    name: "Ten of Pentacles",
    image: "/cards/ten-pentacles.jpg",
    meaning: "Legacy, culmination, inheritance",
    category: "Pentacles"
  },
  {
    id: 74,
    name: "Page of Pentacles",
    image: "/cards/page-pentacles.jpg",
    meaning: "Ambition, desire, new venture",
    category: "Pentacles"
  },
  {
    id: 75,
    name: "Knight of Pentacles",
    image: "/cards/knight-pentacles.jpg",
    meaning: "Efficiency, hard work, responsibility",
    category: "Pentacles"
  },
  {
    id: 76,
    name: "Queen of Pentacles",
    image: "/cards/queen-pentacles.jpg",
    meaning: "Practical, homely, motherly",
    category: "Pentacles"
  },
  {
    id: 77,
    name: "King of Pentacles",
    image: "/cards/king-pentacles.jpg",
    meaning: "Abundance, prosperity, security",
    category: "Pentacles"
  }
];

// Helper function to shuffle cards
const shuffleCards = (cards) => {
  const shuffled = [...cards];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Helper function to select random cards
const selectRandomCards = (cards, count = 3) => {
  const shuffled = shuffleCards(cards);
  return shuffled.slice(0, count);
};

module.exports = {
  tarotCards,
  shuffleCards,
  selectRandomCards
};
