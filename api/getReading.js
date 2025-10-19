const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const { tarotCards, selectRandomCards } = require('../src/cards');

// Load environment variables
dotenv.config();

const app = express();

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY, {
  apiVersion: 'v1'
});

// Middleware
app.use(cors());
app.use(express.json());

// Tarot reading endpoint
app.post('/', async (req, res) => {
  console.log('📡 Received request:', req.body);
  console.log('🔑 API Key present:', !!process.env.GEMINI_API_KEY);
  console.log('🔑 API Key length:', process.env.GEMINI_API_KEY ? process.env.GEMINI_API_KEY.length : 0);
  
  // Declare selectedCards at function scope so it's accessible in catch block
  let selectedCards;
  
  try {
    const { userInput, selectedCards: userSelectedCards } = req.body;
    
    if (!userInput || userInput.trim().length === 0) {
      console.log('❌ No user input provided');
      return res.status(400).json({ error: 'User input is required' });
    }

    console.log('🎯 User question:', userInput);
    
    // Use user-selected cards if provided, otherwise select random cards
    if (userSelectedCards && userSelectedCards.length === 3) {
      selectedCards = userSelectedCards;
      console.log('🃏 Using user-selected cards:', selectedCards.map(c => c.name));
    } else {
      selectedCards = selectRandomCards(tarotCards, 3);
      console.log('🃏 Selected random cards:', selectedCards.map(c => c.name));
    }
    
    // Check if API key is set
    if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'your_gemini_api_key_here') {
      console.log('⚠️ No Gemini API key set, using fallback');
      return res.json({
        cards: selectedCards,
        aiReading: "⚠️ API Key Error: No Gemini API key configured. Please check your environment variables. The cards speak of change and new beginnings. Trust in your intuition as you navigate this path forward."
      });
    }
    
    // Construct the AI prompt
    const prompt = `
User's question: "${userInput}"
Selected cards:
1. ${selectedCards[0].name} - ${selectedCards[0].meaning}
2. ${selectedCards[1].name} - ${selectedCards[1].meaning}
3. ${selectedCards[2].name} - ${selectedCards[2].meaning}

Task: Write a short, mystical yet clear decent lengthy paragraph summary explaining what these cards might mean for the user's situation/question. Avoid repetition. Make it sound like a tarot reading. Be encouraging and insightful while maintaining the mystical tarot reading atmosphere. INclude the names of the chosen cards in the paragraph.
`;

    console.log('🤖 Calling Gemini API...');
    console.log('🤖 Model:', "gemini-2.5-flash");
    console.log('🤖 Prompt length:', prompt.length);
    
    // Get AI response
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent(prompt);
    const aiReading = result.response.text();
    console.log('✨ AI response received');
    console.log('✨ Response length:', aiReading.length);

    // Return the response
    res.json({
      cards: selectedCards,
      aiReading: aiReading.trim()
    });

  } catch (error) {
    console.error('❌ Error generating reading:', error);
    console.error('❌ Error message:', error.message);
    console.error('❌ Error stack:', error.stack);
    
    // Fallback response if AI fails - use the same cards that were already selected
    res.json({
      cards: selectedCards,
      aiReading: `⚠️ API Error: ${error.message}. The cards speak of change and new beginnings. Trust in your intuition as you navigate this path forward.`
    });
  }
});

// Export for Vercel
module.exports = app;
