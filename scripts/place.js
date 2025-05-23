const temperature = document.getElementById('temperature');
const windSpeed = document.getElementById('windSpeed');
const windChill = document.getElementById('windChill');

function calculateWindChill(temperature, windSpeed) {
    const temp = parseFloat(temperature.textContent);
    const wind = parseFloat(windSpeed.textContent);
    if (temp <= 10 && wind >= 4.8) {
        const chill = 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
        windChill.textContent = `${chill.toFixed(1)} °C`;
        
    } else {
        windChill.textContent = 'N/A';
    }
    console.log(windChill.textContent);
}

calculateWindChill(temperature, windSpeed)