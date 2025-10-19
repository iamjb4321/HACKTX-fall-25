# 🔮 Ask Me Anything Longhorn - AI Tarot Reading App

A mystical tarot card reading application built with React and Node.js, featuring AI-powered interpretations using Google's Gemini API. Experience the magic of tarot with beautiful animations, celestial effects, and personalized readings.

![UT Burnt Orange Theme](https://img.shields.io/badge/Theme-UT%20Burnt%20Orange-orange)
![React](https://img.shields.io/badge/React-18.0-blue)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![AI Powered](https://img.shields.io/badge/AI-Gemini%20API-purple)

## ✨ Features

### 🎴 **Interactive Tarot Experience**
- **78 Tarot Cards**: Complete deck with Major Arcana and Minor Arcana
- **Card Selection**: Choose 3 cards for your personalized reading
- **Shuffled Deck**: Cards appear in different order for each question
- **Scroll-Based Animations**: Cards reveal progressively as you scroll

### 🤖 **AI-Powered Interpretations**
- **Gemini AI Integration**: Advanced AI interpretations for each reading
- **Personalized Responses**: Unique interpretations based on your question and selected cards
- **200-Word Limit**: Concise, meaningful readings
- **Loading Animation**: Mystical eye.gif overlay during AI processing

### 🌟 **Mystical Visual Experience**
- **Celestial Effects**: Sparkles, stars, and shooting stars with fade animations
- **UT Burnt Orange Theme**: Dark, mysterious atmosphere with university colors
- **Gradient Backgrounds**: Circular burst gradients from burnt orange to black
- **Smooth Animations**: Card slide-up effects with bounce and scale animations
- **Custom Typography**: Religath font for mystical feel

### 🎨 **User Interface**
- **Responsive Design**: Works on desktop and mobile devices
- **Interactive Elements**: Hover effects and smooth transitions
- **Card Locking System**: Once selected, cards cannot be changed
- **Auto-Scroll**: Automatically scrolls to results after AI interpretation
- **Loading States**: Beautiful loading overlays and progress indicators

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Google Gemini API key

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd HACKTX-fall-25
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   SERVER_PORT=3001
   ```

4. **Add card images**
   Place your tarot card images in the `public/cards/` directory. Make sure to include:
   - All 78 tarot card images (named according to the card names)
   - `Background.png` for the card back design
   - `Eye.gif` for the loading animation

### Running the Application

1. **Start both frontend and backend**
   ```bash
   npm run dev
   ```
   This will start:
   - Frontend on `http://localhost:3000`
   - Backend on `http://localhost:3001`

2. **Or run separately**
   ```bash
   # Terminal 1 - Backend
   npm run server
   
   # Terminal 2 - Frontend
   npm start
   ```

## 🎯 How to Use

1. **Ask Your Question**: Type your question in the text area (up to 200 words)
2. **Get Your Reading**: Click "Get Your Reading" to shuffle the cards
3. **Select Cards**: Scroll down and click on 3 cards to reveal them
4. **Get AI Interpretation**: Click "Get AI Interpretation" for personalized reading
5. **View Results**: The app will scroll to the top to show your reading

## 🏗️ Project Structure

```
HACKTX-fall-25/
├── public/
│   ├── cards/           # Tarot card images
│   ├── Eye.gif         # Loading animation
│   └── RELIGATH-Demo.otf # Custom font
├── src/
│   ├── App.js          # Main React component
│   ├── App.css         # Styling and animations
│   ├── cards-frontend.js # Card data for frontend
│   └── cards.js        # Card data for backend
├── server.js           # Express backend server
├── .env               # Environment variables
└── package.json       # Dependencies and scripts
```

## 🛠️ Technical Details

### Frontend (React)
- **React Hooks**: useState, useEffect for state management
- **Scroll Detection**: Custom scroll listener for progressive card animations
- **CSS Animations**: Keyframe animations for cards, particles, and effects
- **Responsive Grid**: CSS Grid for card layout
- **Custom Fonts**: Religath font integration

### Backend (Node.js/Express)
- **Express Server**: RESTful API endpoints
- **Gemini AI Integration**: Google's Generative AI for tarot interpretations
- **CORS Support**: Cross-origin requests enabled
- **Environment Variables**: Secure API key management

### Key Components
- **Card Grid**: Responsive grid with scroll-based animations
- **Loading Overlay**: Full-screen overlay with eye.gif animation
- **Celestial Effects**: Multiple particle systems with different animations
- **AI Reading Display**: Formatted display of AI interpretations

## 🎨 Customization

### Adding New Cards
1. Add card image to `public/cards/`
2. Update card data in `src/cards-frontend.js` and `src/cards.js`
3. Ensure image filename matches card name

### Styling Changes
- **Colors**: Modify CSS variables in `src/App.css`
- **Animations**: Adjust keyframe animations and timing
- **Layout**: Update grid properties and responsive breakpoints

### AI Prompts
- Modify the AI prompt in `server.js` to change interpretation style
- Adjust response length and tone

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Google Gemini AI** for providing the AI interpretation capabilities
- **UT Austin** for the burnt orange color inspiration
- **Tarot Community** for card meanings and interpretations
- **React Community** for the amazing framework and ecosystem

## 🔮 Future Enhancements

- [ ] Card reversal interpretations
- [ ] Multiple spread types (Celtic Cross, Three-Card, etc.)
- [ ] User accounts and reading history
- [ ] Card meaning database
- [ ] Mobile app version
- [ ] Voice input for questions
- [ ] Share reading functionality

---

**Made with 🔮 and ☕ for HACKTX Fall 2025**

*"The cards speak through the digital realm, guided by ancient wisdom and modern technology."*