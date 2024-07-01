const CoinClicker=document.getElementById("CoinClicker")
const coinslabel = document.getElementById("coinslabel")
const GemClicker = document. getElementById("GemClicker")
const gemslabel = document. getElementById("gemslabel")

let coins = 0
let gems = 0

GemClicker.addEventListener("click", () => {
gems++
gemslabel.innerText = "Gems:" + gems
})
CoinClicker.addEventListener("click", () => {
    coins++
    coinslabel.innerText = "Coins:" + coins
})