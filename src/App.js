import { useState, useEffect } from 'react';
import './App.css';
import { tarotCards, shuffleCards } from './cards-frontend';

function App() {
  const [question, setQuestion] = useState('');
  const [showCards, setShowCards] = useState(false);
  const [selectedCards, setSelectedCards] = useState([]);
  const [aiReading, setAiReading] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [readingComplete, setReadingComplete] = useState(false);
  const [shuffledCards, setShuffledCards] = useState([]);
  const [revealedCards, setRevealedCards] = useState(new Set());
  const [visibleCards, setVisibleCards] = useState(0);

  // Scroll effect for progressive card animation
  useEffect(() => {
    if (!showCards) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calculate scroll percentage (0 to 1)
      const scrollPercentage = scrollPosition / (documentHeight - windowHeight);
      
      // Calculate how many cards should be visible based on scroll
      const totalCards = shuffledCards.length;
      const cardsToShow = Math.min(Math.floor(scrollPercentage * totalCards * 1.5), totalCards);
      
      setVisibleCards(cardsToShow);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial call to set initial state
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [showCards, shuffledCards]);

  const handleSubmit = () => {
    if (question.trim().length > 0) {
      // Shuffle the cards when showing the card grid
      const shuffled = shuffleCards([...tarotCards]);
      setShuffledCards(shuffled);
      setShowCards(true);
      setVisibleCards(0); // Reset visible cards count
    }
  };

  const handleCardSelect = (card) => {
    if (!readingComplete && selectedCards.length < 3 && !selectedCards.find(c => c.id === card.id)) {
      setSelectedCards([...selectedCards, card]);
      // Automatically reveal the card when selected
      setRevealedCards(prev => new Set(prev).add(card.id));
    }
  };

  const resetReading = () => {
    setQuestion('');
    setShowCards(false);
    setSelectedCards([]);
    setAiReading('');
    setIsLoading(false);
    setReadingComplete(false);
    setShuffledCards([]);
    setRevealedCards(new Set());
    setVisibleCards(0);
  };

  return (
    <div className="App">
      <div className="App-header">
        {/* Celestial Elements */}
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        
        <div className="large-star"></div>
        <div className="large-star"></div>
        <div className="large-star"></div>
        <div className="large-star"></div>
        <div className="large-star"></div>
        <div className="large-star"></div>
        <div className="large-star"></div>
        <div className="large-star"></div>
        <div className="large-star"></div>
        <div className="large-star"></div>
        
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        
        <div className="floating-particle"></div>
        <div className="floating-particle"></div>
        <div className="floating-particle"></div>
        <div className="floating-particle"></div>
        <div className="floating-particle"></div>
        <div className="floating-particle"></div>
        <div className="floating-particle"></div>
        <div className="floating-particle"></div>
        
        <div className="drifting-sparkle"></div>
        <div className="drifting-sparkle"></div>
        <div className="drifting-sparkle"></div>
        <div className="drifting-sparkle"></div>
        <div className="drifting-sparkle"></div>
        <div className="drifting-sparkle">        </div>
        
        {/* Loading Overlay */}
        {isLoading && (
          <div className="loading-overlay">
            <div className="loading-container">
              <img src="/Eye.gif" alt="Loading..." className="loading-eye" />
              <p className="loading-text">The cards are speaking...</p>
            </div>
          </div>
        )}
        
        <h1 className="App-title">Ask Me Anything Longhorn</h1>
        
        {!showCards ? (
          <div className="input-section">
            <div className="chat-container">
              <textarea 
                className="chat-input"
                placeholder="Type your question here... (1000 character limit)"
                rows="8"
                cols="50"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                maxLength="1000"
              />
            </div>
            <div className="word-count">
              {question.length}/1000 characters
            </div>
            <button 
              className="submit-btn"
              onClick={handleSubmit}
              disabled={question.trim().length === 0 || isLoading}
            >
              {isLoading ? 'Consulting the Cards...' : 'Get Your Reading'}
            </button>
          </div>
        ) : (
          <div className="reading-section">
            <div className="question-display">
              <h3>Your Question:</h3>
              <p>"{question}"</p>
            </div>
            
            {readingComplete ? (
              <div className="reading-results">
                <h3>Your Reading:</h3>
                <div className="ai-reading">
                  <h4>✨ AI Interpretation ✨</h4>
                  <p className="ai-text">{aiReading}</p>
                </div>
                <div className="selected-cards-display">
                  {selectedCards.map((card, index) => (
                    <div key={card.id} className="reading-card">
                      <img src={card.image} alt={card.name} className="card-image" />
                      <h4>Card {index + 1}: {card.name}</h4>
                      <p>{card.meaning}</p>
                    </div>
                  ))}
                </div>
                <div className="action-buttons">
                  <button className="new-reading-btn" onClick={resetReading}>
                    Ask Another Question
                  </button>
                  <button 
                    className="test-api-btn" 
                    onClick={async () => {
                      try {
                        console.log('Testing API...');
                        const response = await fetch('/api/test-api');
                        const data = await response.json();
                        console.log('API Test Result:', data);
                        alert(`API Test: ${data.success ? 'SUCCESS' : 'FAILED'}\n${JSON.stringify(data, null, 2)}`);
                      } catch (error) {
                        console.error('API Test Error:', error);
                        alert(`API Test Error: ${error.message}`);
                      }
                    }}
                    style={{
                      backgroundColor: '#ff6b35',
                      color: 'white',
                      border: 'none',
                      padding: '10px 20px',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      marginLeft: '10px'
                    }}
                  >
                    Test API
                  </button>
                </div>
              </div>
            ) : (
              <>
                            <div className="instructions">
                              <h3>Select 3 cards for your reading:</h3>
                              <p>Scroll down to reveal cards</p>
                              <p>Click on any card to reveal and select it. Once selected, cards cannot be changed. Choose wisely!</p>
                              {selectedCards.length > 0 && (
                                <p className="selection-status">
                                  Selected: {selectedCards.length}/3 cards
                                  {selectedCards.length === 3 && " - Selection complete!"}
                                </p>
                              )}
                            </div>
                
                        <div className="cards-grid">
                          {shuffledCards.map((card, index) => {
                    const isSelected = selectedCards.find(c => c.id === card.id);
                    const isRevealed = revealedCards.has(card.id);
                    return (
                        <div 
                          key={card.id}
                          className={`card-back ${isSelected ? 'selected' : ''} ${selectedCards.length === 3 && !isSelected ? 'locked' : ''} ${index < visibleCards ? 'animate-in' : ''}`}
                          onClick={() => {
                            // If 3 cards are already selected and this card isn't selected, don't allow clicking
                            if (selectedCards.length === 3 && !isSelected) {
                              return;
                            }
                            
                            // If card is already selected, don't allow any interaction
                            if (isSelected) {
                              return;
                            }
                            
                            // Select the card (which will automatically reveal it)
                            handleCardSelect(card);
                          }}
                        >
                        {isRevealed ? (
                          <img src={card.image} alt={card.name} className="card-front-image" />
                        ) : (
                          <div className="card-back-image"></div>
                        )}
                        {isSelected && <div className="selected-indicator">✓</div>}
                      </div>
                    );
                  })}
                </div>
                
                {selectedCards.length === 3 && (
                  <div className="manual-reading-results">
                    <h3>Your Selected Cards:</h3>
                    <div className="selected-cards-display">
                      {selectedCards.map((card, index) => (
                        <div key={card.id} className="reading-card">
                          <img src={card.image} alt={card.name} className="card-image" />
                          <h4>Card {index + 1}: {card.name}</h4>
                          <p>{card.meaning}</p>
                        </div>
                      ))}
                    </div>
                    <div className="action-buttons">
                      <button className="new-reading-btn" onClick={resetReading}>
                        Ask Another Question
                      </button>
                      <button 
                        className="test-api-btn" 
                        onClick={async () => {
                          try {
                            console.log('Testing API...');
                            const response = await fetch('/api/test-api');
                            const data = await response.json();
                            console.log('API Test Result:', data);
                            alert(`API Test: ${data.success ? 'SUCCESS' : 'FAILED'}\n${JSON.stringify(data, null, 2)}`);
                          } catch (error) {
                            console.error('API Test Error:', error);
                            alert(`API Test Error: ${error.message}`);
                          }
                        }}
                        style={{
                          backgroundColor: '#ff6b35',
                          color: 'white',
                          border: 'none',
                          padding: '10px 20px',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          marginLeft: '10px'
                        }}
                      >
                        Test API
                      </button>
                              <button 
                                className="ai-reading-btn" 
                                onClick={async () => {
                                  setIsLoading(true);
                                  try {
                                    console.log('Getting AI reading for selected cards:', selectedCards.map(c => c.name));
                                    console.log('API endpoint:', '/api/getReading');
                                    console.log('Request payload:', { 
                                      userInput: question,
                                      selectedCards: selectedCards 
                                    });
                                    
                                    const response = await fetch('/api/getReading', {
                                      method: 'POST',
                                      headers: {
                                        'Content-Type': 'application/json',
                                      },
                                      body: JSON.stringify({ 
                                        userInput: question,
                                        selectedCards: selectedCards 
                                      }),
                                    });
                                    
                                    console.log('Response status:', response.status);
                                    console.log('Response ok:', response.ok);
                                    
                                    if (!response.ok) {
                                      const errorText = await response.text();
                                      console.error('API Error:', errorText);
                                      throw new Error(`API Error: ${response.status} - ${errorText}`);
                                    }
                                    
                                    const data = await response.json();
                                    console.log('Response data:', data);
                                    
                                    setAiReading(data.aiReading);
                                    setReadingComplete(true);
                                    
                                    // Scroll to top after AI response is ready
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                  } catch (error) {
                                    console.error('Error fetching AI reading:', error);
                                    // Show error to user
                                    setAiReading(`Error: ${error.message}. Please check the console for more details.`);
                                    setReadingComplete(true);
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                  } finally {
                                    setIsLoading(false);
                                  }
                                }}
                                disabled={isLoading}
                              >
                                {isLoading ? 'Getting AI Reading...' : 'Get AI Interpretation'}
                              </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
