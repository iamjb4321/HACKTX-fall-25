const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { GoogleGenerativeAI } = require('@google/generative-ai');

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

// Test API key endpoint
app.get('/', async (req, res) => {
  try {
    if (!process.env.GEMINI_API_KEY) {
      return res.json({ 
        success: false, 
        error: 'No API key configured',
        apiKeyPresent: false 
      });
    }
    
    console.log('🧪 Testing Gemini API...');
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent("Say 'API test successful'");
    const response = result.response.text();
    
    res.json({ 
      success: true, 
      message: 'API test successful',
      response: response,
      apiKeyPresent: true,
      apiKeyLength: process.env.GEMINI_API_KEY.length
    });
  } catch (error) {
    console.error('❌ API test failed:', error);
    res.json({ 
      success: false, 
      error: error.message,
      apiKeyPresent: !!process.env.GEMINI_API_KEY,
      apiKeyLength: process.env.GEMINI_API_KEY ? process.env.GEMINI_API_KEY.length : 0
    });
  }
});

// Export for Vercel
module.exports = app;
