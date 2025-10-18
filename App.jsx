import React, { useState } from 'react';
import './App.css'; // We'll create this file next for styling

function App() {
  // State variables to manage user input, API data, loading, and errors
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // ❗ IMPORTANT: Replace this with the URL of your deployed Cloudflare Worker
  const workerUrl = 'https://weather-api-backend.your-subdomain.workers.dev';

  // Function to call our backend worker
  const handleFetchWeather = async () => {
    if (!city) {
      setError('Please enter a city name.');
      return;
    }

    // Reset state for a new request
    setLoading(true);
    setError(null);
    setWeatherData(null);

    try {
      const response = await fetch(`${workerUrl}?city=${encodeURIComponent(city)}`);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'City not found.');
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      // This runs whether the fetch succeeded or failed
      setLoading(false);
    }
  };

  // Function to handle "Enter" key press
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleFetchWeather();
    }
  };

  return (
    <div className="weather-card">
      <h1>Weather Checker 🚀</h1>
      <div className="input-container">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Enter a city..."
          disabled={loading} // Disable input while loading
        />
        <button onClick={handleFetchWeather} disabled={loading}>
          {loading ? 'Loading...' : 'Get Weather'}
        </button>
      </div>

      <div className="weather-result">
        {error && <p className="error-message">{error}</p>}
        {weatherData && (
          <div className="weather-info">
            <h2>{weatherData.city}</h2>
            <img 
              src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`} 
              alt="Weather icon"
            />
            <p><strong>Temperature:</strong> {weatherData.temp}°F</p>
            <p><strong>Condition:</strong> {weatherData.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
