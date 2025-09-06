"use strict";
// 1) Зробити запит даних до одного із серверів (одного з API) на вибір, використовуючи fetch()
// 2) Відобразити дані на сторінці за допомогою DOM
// 3) * Прикрасити стилями за потребою

// const binanceUrl = "https://api2.binance.com/api/v3/ticker/24hr";

// fetch(binanceUrl)
//   .then((response) => response.json())
//   .then((data) => generateBinanceTable(data))
//   .catch((err) => console.log(err));

// function generateBinanceTable(data) {
//   const tbodyEl = document.querySelector("tbody");

//   data.slice(0, 100).forEach(({ symbol, lastPrice, priceChangePercent }) => {
//     const trEl = document.createElement("tr");

//     const symbolEl = document.createElement("td");
//     symbolEl.classList.add("symbol");
//     symbolEl.textContent = `${symbol}`;

//     const lastPriceEl = document.createElement("td");
//     lastPriceEl.classList.add("lastPrice");
//     lastPriceEl.textContent = `${lastPrice}`;

//     const priceChangePercentEl = document.createElement("td");
//     priceChangePercentEl.classList.add("priceChangePercent");
//     priceChangePercentEl.textContent = `${priceChangePercent}`;
//     trEl.append(symbolEl, lastPriceEl, priceChangePercentEl);
//     tbodyEl.append(trEl);

//     if (priceChangePercent > 0) {
//       priceChangePercentEl.classList.add("positive");
//     } else {
//       priceChangePercentEl.classList.add("negative");
//     }
//   });
// }

// - Випадкове зображення собаки https://dog.ceo/api/breeds/image/random
// Наприклад, при натисканні на кнопку або саме зображення змінювати зображення на нове рандомне.

// const dogUrl = "https://dog.ceo/api/breeds/image/random";

// function clickBtnHandler() {
//   fetch(dogUrl)
//     .then((response) => response.json())
//     .then((data) => {
//       const dogImgDiv = document.querySelector(".dog-image");
//       dogImgDiv.style.backgroundImage = `url(${data.message})`;
//     })
//     .catch((err) => console.log(err));
// }
// const clickBtn = document.querySelector(".click-me");
// clickBtn.addEventListener("click", clickBtnHandler);

// const clickDogImg = document.querySelector(".dog-image");
// clickDogImg.addEventListener("click", clickBtnHandler);

// - Випадкові факти про котів https://catfact.ninja/fact
// Наприклад, при натисканні на кнопку змінювати рядок на новий рандомний.

// const catUrl = "https://catfact.ninja/fact";

// function catFactHandler() {
//   fetch(catUrl)
//     .then((response) => response.json())
//     .then((data) => {
//       const catFactEl = document.querySelector(".cat-fact");
//       catFactEl.textContent = data.fact;
//       catFactEl.style.display = "block";
//     })
//     .catch((err) => console.log(err));
// }

// const catBtn = document.querySelector(".cat-btn");
// catBtn.addEventListener("click", catFactHandler);

// - Погодне API https://open-meteo.com/
// Наприклад, вивести на наступні 3 дні дані про
// --- максимальну швидкість вітру (Maximum Wind Speed),
// --- максимальні пориви вітру (Maximum Wind Gusts )
// у вигляді таблиці
// | швидкість вітру | пориви вітру | бали для швидкості вітру |
// де бали визначити за шкалою Бофорта i підсвічуються кольором з тпблиці https://ru.wikipedia.org/wiki/%D0%A8%D0%BA%D0%B0%D0%BB%D0%B0_%D0%91%D0%BE%D1%84%D0%BE%D1%80%D1%82%D0%B0 (дані завантажуються у км/год).

const weatherUrl =
  "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=wind_speed_10m_max,wind_gusts_10m_max&timezone=auto&forecast_days=3";

fetch(weatherUrl)
  .then((response) => response.json())
  .then((data) => createWeaterTable(data))
  .catch((err) => console.log("error :>> ", err));

const tbody = document.querySelector("tbody");

function getBeaufortScale(speed) {
  if (speed < 1) return { score: 0, color: "#e0f7fa" };
  if (speed < 6) return { score: 1, color: "#b2ebf2" };
  if (speed < 12) return { score: 2, color: "#80deea" };
  if (speed < 20) return { score: 3, color: "#4dd0e1" };
  if (speed < 29) return { score: 4, color: "#26c6da" };
  if (speed < 39) return { score: 5, color: "#00bcd4" };
  if (speed < 50) return { score: 6, color: "#00acc1" };
  if (speed < 62) return { score: 7, color: "#0097a7" };
  if (speed < 75) return { score: 8, color: "#00838f" };
  if (speed < 89) return { score: 9, color: "#006064" };
  if (speed < 103) return { score: 10, color: "#ff9800" };
  if (speed < 118) return { score: 11, color: "#f44336" };
  return { score: 12, color: "#b71c1c" };
}

function createWeaterTable(data) {
  const days = data.daily.time;
  const speeds = data.daily.wind_speed_10m_max;
  const gusts = data.daily.wind_gusts_10m_max;

  days.forEach((day, i) => {
    const trEl = document.createElement("tr");

    const tdDay = document.createElement("td");
    tdDay.textContent = day;

    const tdSpeed = document.createElement("td");
    tdSpeed.textContent = speeds[i];

    const tdGust = document.createElement("td");
    tdGust.textContent = gusts[i];

    const beaufort = getBeaufortScale(speeds[i]);
    const tdBeaufort = document.createElement("td");
    tdBeaufort.textContent = `${beaufort.score} points`;

    trEl.append(tdDay, tdSpeed, tdGust, tdBeaufort);
    tbody.append(trEl);
  });
}

