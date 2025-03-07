const images = [
  "images/image1.jpeg",
  "images/image2.jpeg",
  "images/image3.jpeg",
  "images/image4.jpeg",
  "images/image5.jpeg",
  "images/image6.jpeg",
  "images/image7.jpeg",
  "images/image8.jpeg",
  "images/image9.jpeg",
  "images/image10.jpeg",
  "images/image11.jpeg",
  "images/image12.jpeg",
  "images/image13.jpeg",
  "images/image14.jpeg",
  "images/image15.jpeg",
];

let index = 0;

const imageElement = document.getElementById("main-image");
const backBtn = document.getElementById("back");
const goBtn = document.getElementById("go");

backBtn.addEventListener("click", () => {
  if (index === 0) {
    index = images.length - 1;
  } else {
    index--;
  }
  imageElement.src = images[index];
});

goBtn.addEventListener("click", () => {
  if (index === images.length - 1) {
    index = 0;
  } else {
    index++;
  }
  imageElement.src = images[index];
});

const startDate = new Date(2024, 0, 19, 19, 30, 0);

function updateCounter() {
  const currentDate = new Date();
  const difference = currentDate - startDate;

  const seconds = Math.floor(difference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const years = Math.floor(days / 365.25);

  let timeString = "";
  if (years > 0) timeString += `${years} ano, `;
  if (days % 365 > 0) timeString += `${days % 365} dias, `;
  if (hours % 24 > 0) timeString += `${hours % 24} horas, `;
  if (minutes % 60 > 0) timeString += `${minutes % 60} minutos, `;
  if (seconds % 60 >= 0) timeString += `${seconds % 60} segundos`;

  const counterElement = document.getElementById("counter");
  counterElement.textContent = timeString;
}

setInterval(updateCounter, 1000);
