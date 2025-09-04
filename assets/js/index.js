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

const catUrl = "https://catfact.ninja/fact";

function catFactHandler() {
  fetch(catUrl)
    .then((response) => response.json())
    .then((data) => {
      const catFactEl = document.querySelector(".cat-fact");
      catFactEl.textContent = data.fact;
      catFactEl.style.display = "block";
    })
    .catch((err) => console.log(err));
}

const catBtn = document.querySelector(".cat-btn");
catBtn.addEventListener("click", catFactHandler);
