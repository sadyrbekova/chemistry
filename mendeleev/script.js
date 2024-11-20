import data from './PeriodicTableJSON.json' assert { type: "json" };
const info = JSON.parse(localStorage.getItem('info'))

// const $name = document.querySelector('.name')
// const $symbol = document.querySelector('.symbol')
// const $number = document.querySelector('.number')
// const $weight = document.querySelector('.weight')
// 
// $name.innerHTML = info.name
// $symbol.innerHTML = info.symbol
// $weight.innerHTML = info.weight
// $number.innerHTML = info.number

function findElementAndDraw() {
  const element = data.elements.find(el => el.name === info.name);
  const source = element.source.replace('en.', 'ru.')
  var ifrm = document.createElement("iframe");
  ifrm.setAttribute("src", source);
  ifrm.style.width = "100%";
  ifrm.style.height = "100%";
  document.body.appendChild(ifrm);
}
findElementAndDraw()