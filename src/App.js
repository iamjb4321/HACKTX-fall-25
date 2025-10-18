import { useState } from 'react';
import './App.css';
import { tarotCards } from './cards-frontend';

function App() {
  const [question, setQuestion] = useState('');
  const [showCards, setShowCards] = useState(false);
  const [selectedCards, setSelectedCards] = useState([]);
  const [aiReading, setAiReading] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [readingComplete, setReadingComplete] = useState(false);

  const handleSubmit = () => {
    if (question.trim().length > 0) {
      setShowCards(true);
    }
  };

  const handleCardSelect = (card) => {
    if (!readingComplete && selectedCards.length < 3 && !selectedCards.find(c => c.id === card.id)) {
      setSelectedCards([...selectedCards, card]);
    }
  };

  const handleCardDeselect = (cardId) => {
    if (!readingComplete) {
      setSelectedCards(selectedCards.filter(c => c.id !== cardId));
    }
  };

  const resetReading = () => {
    setQuestion('');
    setShowCards(false);
    setSelectedCards([]);
    setAiReading('');
    setIsLoading(false);
    setReadingComplete(false);
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1 className="App-title">Ask Me Anything Longhorn</h1>
        
        {!showCards ? (
          <div className="input-section">
            <div className="chat-container">
              <textarea 
                className="chat-input"
                placeholder="Type your question here... (200 word limit)"
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
                      <h4>Card {index + 1}: {card.name}</h4>
                      <p>{card.meaning}</p>
                    </div>
                  ))}
                </div>
                <div className="action-buttons">
                  <button className="new-reading-btn" onClick={resetReading}>
                    Ask Another Question
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="instructions">
                  <h3>Select 3 cards for your reading:</h3>
                  <p>Click on any card to select it. You can deselect by clicking again.</p>
                  {selectedCards.length > 0 && (
                    <p className="selection-status">
                      Selected: {selectedCards.length}/3 cards
                    </p>
                  )}
                </div>
                
                <div className="cards-grid">
                  {tarotCards.map((card) => {
                    const isSelected = selectedCards.find(c => c.id === card.id);
                    return (
                      <div 
                        key={card.id}
                        className={`card-back ${isSelected ? 'selected' : ''}`}
                        onClick={() => isSelected ? handleCardDeselect(card.id) : handleCardSelect(card)}
                      >
                        <div className="card-number">{card.id + 1}</div>
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
                        className="ai-reading-btn" 
                        onClick={async () => {
                          setIsLoading(true);
                          try {
                            console.log('Getting AI reading for selected cards:', selectedCards.map(c => c.name));
                            const response = await fetch('http://localhost:3001/getReading', {
                              method: 'POST',
                              headers: {
                                'Content-Type': 'application/json',
                              },
                              body: JSON.stringify({ 
                                userInput: question,
                                selectedCards: selectedCards 
                              }),
                            });
                            
                            const data = await response.json();
                            setAiReading(data.aiReading);
                            setReadingComplete(true);
                          } catch (error) {
                            console.error('Error fetching AI reading:', error);
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
