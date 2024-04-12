function getWeather() {
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your OpenWeatherMap API key
    const cityInput = document.getElementById('cityInput');
    const weatherInfo = document.getElementById('weatherInfo');

    if (cityInput.value === '') {
        alert('Please enter a city name.');
        return;
    }

    const cityName = cityInput.value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                alert('City not found. Please enter a valid city name.');
            } else {
                const temperature = data.main.temp;
                const description = data.weather[0].description;
                weatherInfo.innerHTML = `Temperature: ${temperature}K, Description: ${description}`;
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('An error occurred. Please try again.');
        });
}
