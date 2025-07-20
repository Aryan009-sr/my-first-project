const OPENWEATHER_API_KEY = '4c7c01a68f9c2f41f833bd43ec63abd8';
const CITY_NAME = '';
const UNITS = 'metric';

async function fetchWeatherData(city) {
    try {
        const response =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHER_API_KEY}&units=${UNITS}`); 

        if(!response.ok) {
            const errorData = await response.json();
            throw new Error (`HTTP error! Status: ${response.status} - ${errorData.message}`);
        }

        const data = await response.json();
        console.log('Current weather data for' , city, ':', data);
        return data;
    } catch (error) {
        console.error('Error fetching current weather data:', error);
        return null;
    }
}

fetchWeatherData('Thane');