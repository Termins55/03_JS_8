"use strict";
// 1) Зробити запит даних до одного із серверів (одного з API) на вибір, використовуючи fetch()
// 2) Відобразити дані на сторінці за допомогою DOM
// 3) * Прикрасити стилями за потребою

const binanceUrl = "https://api2.binance.com/api/v3/ticker/24hr";

fetch(binanceUrl)
  .then((response) => response.json())
  .then((data) => generateBinanceTable(data))
  .catch((err) => console.log(err));

function generateBinanceTable(data) {
  const tbodyEl = document.querySelector("tbody");

  data.slice(0, 100).forEach(({ symbol, lastPrice, priceChangePercent }) => {
    const trEl = document.createElement("tr");

    const symbolEl = document.createElement("td");
    symbolEl.classList.add("symbol");
    symbolEl.textContent = `${symbol}`;

    const lastPriceEl = document.createElement("td");
    lastPriceEl.classList.add("lastPrice");
    lastPriceEl.textContent = `${lastPrice}`;

    const priceChangePercentEl = document.createElement("td");
    priceChangePercentEl.classList.add("priceChangePercent");
    priceChangePercentEl.textContent = `${priceChangePercent}`;
    trEl.append(symbolEl, lastPriceEl, priceChangePercentEl);
    tbodyEl.append(trEl);

    if (priceChangePercent > 0) {
      priceChangePercentEl.classList.add("positive");
    } else {
      priceChangePercentEl.classList.add("negative");
    }
  });
}
