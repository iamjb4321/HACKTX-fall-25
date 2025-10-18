// This is the main entry point for the Cloudflare Worker
export default {
  async fetch(request, env) {
    // Define CORS headers to allow our frontend to connect
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*', // Allows any origin
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    // The browser sends a preflight "OPTIONS" request to check CORS policy
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    // Get the city from the request URL, e.g., "...?city=Austin"
    const url = new URL(request.url);
    const city = url.searchParams.get('city');

    if (!city) {
      const error = { error: 'City query parameter is required.' };
      return new Response(JSON.stringify(error), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Get the secret API key from the worker's environment variables
    // THIS IS THE SECURE PART. The key is never exposed to the public.
    const apiKey = env.WEATHER_API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    // Fetch the weather data from the external API
    const apiResponse = await fetch(apiUrl);

    if (!apiResponse.ok) {
      const error = { error: `Weather data not found for ${city}.` };
      return new Response(JSON.stringify(error), {
        status: apiResponse.status,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const weatherData = await apiResponse.json();

    // Create a simple, clean object to send back to the frontend
    const result = {
      city: weatherData.name,
      temp: Math.round(weatherData.main.temp),
      description: weatherData.weather[0].main,
      icon: weatherData.weather[0].icon,
    };

    // Return the result as a JSON response
    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  },
};
