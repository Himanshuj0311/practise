 // Add your JavaScript code here
 document.getElementById("convertButton").addEventListener("click", function () {
    const temperatureInput = document.getElementById("temperatureInput").value;
    const unitSelect = document.getElementById("unitSelect").value;
    const result = document.getElementById("result");
    let convertedTemperature;

    if (isNaN(temperatureInput)) {
      result.innerText = "Please enter a valid number.";
      return;
    }

    const temperature = parseFloat(temperatureInput);

    if (unitSelect === "celsius") {
      convertedTemperature = (temperature * 9/5) + 32;
      result.innerText = `Converted temperature: ${convertedTemperature.toFixed(2)}°F`;
    } else if (unitSelect === "fahrenheit") {
      convertedTemperature = (temperature - 32) * 5/9;
      result.innerText = `Converted temperature: ${convertedTemperature.toFixed(2)}°C`;
    } else if (unitSelect === "kelvin") {
      convertedTemperature = temperature + 273.15;
      result.innerText = `Converted temperature: ${convertedTemperature.toFixed(2)}K`;
    }
  });