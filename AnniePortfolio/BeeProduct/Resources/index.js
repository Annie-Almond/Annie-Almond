
  const weatherBtn = document.getElementById("weather-btn");
  const weatherInfo = document.getElementById("weather-info");

  weatherBtn.addEventListener("click", () => {
    // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
    const apiKey = '7ed2dc2614564bb482e22337230706';
    const cityName = 'Oklahoma City'; // Replace with the desired city name

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${oklahomaCity}&appid=${apiKey7ed2dc2614564bb482e22337230706}`)
      .then(response => response.json())
      .then(data => {
        const temperatureCelsius = Math.round(data.main.temp - 273.15); // Convert temperature from Kelvin to Celsius
        const temperatureFahrenheit = Math.round((temperatureCelsius * 9/5) + 32); // Convert temperature from Celsius to Fahrenheit
        
        const description = data.weather[0].description;
        
        console.log("Temperature: " + temperatureFahrenheit + "°F");
        console.log("Description: " + description);

        weatherInfo.innerHTML = `Temperature: ${temperature}&deg;C, Description: ${description}`;
      })
      .catch(error => {
        console.error('Error:', error);
        weatherInfo.innerHTML = 'An error occurred while fetching weather data.';
      });
  });







