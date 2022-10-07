const numberEl = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-button");
const lengthEl = document.getElementById("length-result");
const volumeEl = document.getElementById("volume-result");
const massEl = document.getElementById("mass-result");

convertBtn.addEventListener("click", function () {
  const num = Number(numberEl.value);

  if (num) {
    lengthEl.textContent = `
    ${num} meters = ${MeterToFeet(num)} feet | ${num} feet = ${FeetToMeter(
      num
    )} meters
  `;

    volumeEl.textContent = `
    ${num} liters = ${LiterToGallon(
      num
    )} gallons | ${num} gallons = ${GallonToLiter(num)} liters
  `;

    massEl.textContent = `
  ${num} kilos = ${KiloToPound(num)} pounds | ${num} pounds = ${PoundToKilo(
      num
    )} kilos
`;
  } else {
    lengthEl.textContent = "Please enter a Number";

    volumeEl.textContent = "Please enter a Number";

    massEl.textContent = "Please enter a Number";
  }
});

function MeterToFeet(num) {
  return (num * 3.281).toFixed(3);
}

function FeetToMeter(num) {
  return (num / 3.281).toFixed(3);
}

function LiterToGallon(num) {
  return (num * 0.264).toFixed(3);
}

function GallonToLiter(num) {
  return (num / 0.264).toFixed(3);
}

function KiloToPound(num) {
  return (num * 2.204).toFixed(3);
}

function PoundToKilo(num) {
  return (num / 2.204).toFixed(3);
}
