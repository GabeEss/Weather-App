import './style.css';
import getUserInput from './user-input';
import getWeather from './request-weather';

const searchForm = document.getElementById('search-form');

searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const userInput = getUserInput();
    const weatherReport = await getWeather(userInput);
    
    
    console.log(weatherReport.weather[0].description);
})