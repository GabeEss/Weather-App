import './style.css';
import getUserInput from './user-input';
import getWeather from './request-weather';
import changeBackground from './set-temperature-cloudcover';
import changeName from './set-city-country';

const searchForm = document.getElementById('search-form');
const container = document.getElementById('content');

searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    // searchForm.classList.add('hidden');
    // const loadingText = document.createElement("span");
    // loadingText.classList.add("loading-text");
    // loadingText.textContent = "LOADING...";
    // container.appendChild(loadingText);
    
    const userInput = getUserInput();
    const weatherReport = await getWeather(userInput);
    if(weatherReport) {
        console.log(weatherReport);
        changeBackground(weatherReport);
        changeName(weatherReport);
    }

    // container.removeChild(loadingText);
    // searchForm.classList.remove('hidden');
})