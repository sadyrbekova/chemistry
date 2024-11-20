const info = JSON.parse(localStorage.getItem('info'))

const $name = document.querySelector('.name')
const $symbol = document.querySelector('.symbol')
const $number = document.querySelector('.number')
const $weight = document.querySelector('.weight')

$name.innerHTML = info.name
$symbol.innerHTML = info.symbol
$weight.innerHTML = info.weight
$number.innerHTML = info.number