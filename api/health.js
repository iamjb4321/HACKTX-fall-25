const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

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

  res.json({ 
    status: 'OK', 
    message: 'Tarot reading server is running',
    apiKeyPresent: !!process.env.GEMINI_API_KEY,
    apiKeyLength: process.env.GEMINI_API_KEY ? process.env.GEMINI_API_KEY.length : 0
  });
};
