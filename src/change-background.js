import { kelvinToCelsius, kelvinToFahrenheit } from "./temp-conversion";

const background = document.getElementById('content');

export default function changeBackground(data) {

    const celsius = kelvinToCelsius(data.main.temp);
    const fahrenheit = kelvinToFahrenheit(data.main.temp);

    const temperatureText = document.getElementById('temperature');

    let string = `The temperature is ${celsius.toFixed(2)}°C (${fahrenheit.toFixed(2)}°F).`;

    temperatureText.textContent = string;

    if(celsius < 0) {
        background.style.backgroundColor = "lightblue"; // cold
        temperatureText.textContent += " It sure is cold. Brrr.";
    }
    else if(celsius >= 0 && celsius <= 20) {
        background.style.backgroundColor = "lightgray"; // tepid
        temperatureText.textContent += " Not quite hot. Not quite cold.";
    }
    else {
        background.style.backgroundColor = "orange"; // hot
        temperatureText.textContent += " Pretty hot!";
    }
}