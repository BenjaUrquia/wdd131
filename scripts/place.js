const currentYear = new Date().getFullYear();

document.getElementById("currentyear").textContent = currentYear;

const lastModified = document.lastModified;

document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;


/* Wind Chill Calculate */

const temperature = 10;
const wind = 15;
let windChill = "N/A";

function calculateWindChill(temperature, wind) {
    return 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(wind, 0.16)) + (0.3965 * temperature * Math.pow(wind, 0.16));
}

function windChillDisplayer(temperature, wind, windChill) {
    if (temperature > 10 || wind < 4.8) {
        return windChill;
    } else {
        windChill = calculateWindChill(temperature, wind).toFixed(1);
        return `${windChill}°C`;
    }
}

const result = windChillDisplayer(temperature, wind, windChill);
document.getElementById("windChill").textContent = result;