import { kelvinToCelsius, kelvinToFahrenheit } from "./temp-conversion";

const background = document.getElementById('content');

export default function changeBackground(data) {

    // Get temperatures in celsius and fahrenheit.
    const celsius = kelvinToCelsius(data.main.temp);
    const fahrenheit = kelvinToFahrenheit(data.main.temp);

    const temperatureText = document.getElementById('temperature');
    const temperatureLabel = document.getElementById('temp-label');
    temperatureLabel.textContent = "Temperature: ";

    // Set temp text content.
    let string = `${celsius.toFixed(2)}°C (${fahrenheit.toFixed(2)}°F)`;
    temperatureText.textContent = string;

    // Set background and flavor text.
    if(celsius < 0) {
        background.style.backgroundColor = "lightblue"; // cold
        // temperatureText.textContent += "... It sure is cold. Brrr.";
    }
    else if(celsius >= 0 && celsius <= 20) {
        background.style.backgroundColor = "lightgray"; // tepid
        // temperatureText.textContent += "... Not quite hot. Not quite cold.";
    }
    else {
        background.style.backgroundColor = "orange"; // hot
        // temperatureText.textContent += "... Pretty hot!";
    }

    const cloudCoverText = document.getElementById('cloud-cover');
    const cloudLabel = document.getElementById('cloud-label');
    cloudLabel.textContent = "Cloud cover: ";

    const cloudCoverData = data.weather[0].description;
    string = `${cloudCoverData}`;
    cloudCoverText.textContent = string;
}