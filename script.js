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
  resultDiv.innerHTML = `The fiber track in the cable is ${trackNumber}.`;
}
