document.getElementById("fiberNumber").addEventListener("input", function () {
  let fiberNumberInput = document.getElementById("fiberNumber");
  let value = fiberNumberInput.value;

  if (isNaN(value) || value.trim() === "") {
    fiberNumberInput.style.color = "red";
    fiberNumberInput.placeholder = "Enter a valid number";
  } else {
    fiberNumberInput.style.color = "";
    fiberNumberInput.placeholder = "Enter a number";
  }
});

function calculateTrackNumber() {
  let fiberNumberInput = document.getElementById("fiberNumber").value;
  let resultDiv = document.getElementById("result");

  if (fiberNumberInput === "") {
    resultDiv.style.color = "red";
    resultDiv.innerHTML = "Please enter a fiber number.";
    return;
  }

  let fiberNumber = parseInt(fiberNumberInput);

  if (isNaN(fiberNumber) || fiberNumber <= 0) {
    resultDiv.style.color = "red";
    resultDiv.innerHTML = "Please enter a valid positive number.";
    return;
  }

  let divisionResult = fiberNumber / 16;
  let trackNumber;

  if (Number.isInteger(divisionResult)) {
    trackNumber = divisionResult;
  } else {
    trackNumber = Math.ceil(divisionResult);
  }
  resultDiv.style.color = "black";
  resultDiv.innerHTML = `The Fiber-track is: ${trackNumber}.`;
}

function calculateRibbonNumber() {
  let fiberNumberInput = document.getElementById("fiberNumber").value;
  let resultDiv = document.getElementById("result");
  let colorCircle = document.getElementById("colorCircle");

  if (fiberNumberInput === "") {
    resultDiv.style.color = "red";
    resultDiv.innerHTML = "Please enter a fiber number.";
    colorCircle.style.backgroundColor = "transparent";
    return;
  }

  let fiberNumber = parseInt(fiberNumberInput);

  if (isNaN(fiberNumber) || fiberNumber <= 0) {
    resultDiv.style.color = "red";
    resultDiv.innerHTML = "Please enter a valid positive number.";
    colorCircle.style.backgroundColor = "transparent";
    return;
  }

  // Calculate Ribbon Number
  let divisionResult = fiberNumber / 4;
  let ribbonNumber;

  if (Number.isInteger(divisionResult)) {
    ribbonNumber = divisionResult;
  } else {
    ribbonNumber = Math.ceil(divisionResult);
  }

  // Calculate Fiber Color
  let colors = ["red", "blue", "white", "green"];
  let fiberPosition = (fiberNumber - 1) % 4;
  let fiberColor = colors[fiberPosition];

  resultDiv.style.color = "black";
  resultDiv.innerHTML = `Fiber-Ribbon number is: ${ribbonNumber}.<br/>Fiber-color is: ${fiberColor}.`;
  colorCircle.style.backgroundColor = fiberColor;
}
