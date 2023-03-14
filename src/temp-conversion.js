export function kelvinToCelsius(kelvin)
{
    let celsius = kelvin - 273.15;
    return celsius;
}

export function kelvinToFahrenheit(kelvin)
{
    let fahrenheit = 1.8*(kelvin-273) + 32;
    return fahrenheit;
}