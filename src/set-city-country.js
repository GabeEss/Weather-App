export default function changeName(data) {
    const cityElement = document.getElementById('city-name');
    cityElement.textContent = data.name;

    const countryAbbreviation = document.getElementById('country');
    countryAbbreviation.textContent = data.sys.country;
}