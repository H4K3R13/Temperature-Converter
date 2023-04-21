const convertBtn = document.getElementById("btn");
const temperatureInput = document.getElementById("temperature");
const fromUnitSelect = document.getElementById("from-unit");
const toUnitSelect = document.getElementById("to-unit");
const resultDiv = document.getElementById("result");

convertBtn.addEventListener("click", convertTemperature); //Click Calls the function

function convertTemperature() {
  const temperature = parseFloat(temperatureInput.value);
  const fromUnit = fromUnitSelect.value;
  const toUnit = toUnitSelect.value;
  
  if (isNaN(temperature)) {
    resultDiv.innerText = "Please enter a valid temperature";
    return;
  }
  
  let convertedTemperature;
  
  if (fromUnit === "celsius" && toUnit === "fahrenheit") {
    convertedTemperature = temperature * 9 / 5 + 32;
  } else if (fromUnit === "celsius" && toUnit === "kelvin") {
    convertedTemperature = temperature + 273.15;
  } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
    convertedTemperature = (temperature - 32) * 5 / 9;
  } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
    convertedTemperature = (temperature - 32) * 5 / 9 + 273.15;
  } else if (fromUnit === "kelvin" && toUnit === "celsius") {
    convertedTemperature = temperature - 273.15;
  } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
    convertedTemperature = (temperature - 273.15) * 9 / 5 + 32;
  } else {
    convertedTemperature = temperature;
  }
  
  resultDiv.innerText = `${convertedTemperature.toFixed(2)} ${toUnit}`;
}
