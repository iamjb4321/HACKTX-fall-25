const cors = require('cors');
const dotenv = require('dotenv');
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Load environment variables
dotenv.config();

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY, {
  apiVersion: 'v1'
});

// CORS middleware
const corsMiddleware = cors();

// Main handler function
module.exports = async (req, res) => {
  // Apply CORS
  corsMiddleware(req, res, () => {});
  
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

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
};
