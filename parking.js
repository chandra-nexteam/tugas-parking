// Motor://
//1 jam pertama = 2000//
//Jam berikutnya = +1000 per jam//
//Rumus: 2000 + (jam - 1) * 1000//

//Mobil://
//1 jam pertama = 5000//
//Jam berikutnya = +2000 per jam//
//Rumus: 5000 + (jam - 1) * 2000//

function calculateMotorcycle(hours) {
  if (hours <= 0) return 0;
  return 2000 + (hours - 1) * 1000;
}

function calculateCar(hours) {
  if (hours <= 0) return 0;
  return 5000 + (hours - 1) * 2000;
}

function hitungBiaya() {
  const vehicle = document.getElementById('vehicle').value;
  const hours = parseInt(document.getElementById('hours').value);

  let biaya = 0;
  if (vehicle === "motor") {
    biaya = calculateMotorcycle(hours);
  } else {
    biaya = calculateCar(hours);
  }

  document.getElementById('result').innerText = 
    `Biaya Parkir ${vehicle.charAt(0).toUpperCase() + vehicle.slice(1)}: Rp ${biaya}`;
}
