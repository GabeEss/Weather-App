import './style.css';
import getUserInput from './user-input';
import getWeather from './request-weather';
import changeBackground from './set-temperature-cloudcover';
import changeName from './set-city-country';

const searchForm = document.getElementById('search-form');

searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const userInput = getUserInput();
    const weatherReport = await getWeather(userInput);
    if(weatherReport) {
        console.log(weatherReport);
        changeBackground(weatherReport);
        changeName(weatherReport);
    }
})