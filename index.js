const CoinClicker=document.getElementById("CoinClicker")
const coinslabel = document.getElementById("coinslabel")
const Machine = document.getElementById("Machine")
const SuperMachine = document.getElementById("SuperMachine")
const RogerFederer = document.getElementById("RogerFederer")
const NojakDjokovic = document.getElementById("NojakDjokovic")

let tennisballs = 0

let tennisballsperclick = 1

let machinecost = 25

let supermachinecost = 100

let RogerFederercost = 50

let NojakDjokoviccost = 250

let tennisballspersecond = 0

setInterval(ballspersecond, 1000)

SuperMachine.addEventListener("click", () => {
    if(tennisballs >= supermachinecost) {
        tennisballsperclick += 10
        tennisballs-= supermachinecost
        coinslabel.innerText = "Tennis Balls: " + tennisballs
        supermachinecost = Math.ceil(supermachinecost*1.1)
        SuperMachine.innerText = "Machine ($" + supermachinecost + ")"
    }
})

Machine.addEventListener("click", () => {
    if(tennisballs >= machinecost) {
        tennisballsperclick++ 
        tennisballs-= machinecost
        coinslabel.innerText = "Tennis Balls: " + tennisballs
        machinecost = Math.ceil(machinecost*1.1)
        Machine.innerText = "Machine ($" + machinecost + ")"
    }
})

RogerFederer.addEventListener("click", () => {
    if(tennisballs >= RogerFederercost) {
        tennisballspersecond++
        tennisballs-= RogerFederercost
        RogerFederer.innerText = "Tennis Balls: " + tennisballs
        RogerFederercost = Math.ceil(RogerFederercost*1.1)
        RogerFederer.innerText = "Roger Federer ($" + RogerFederercost + ")"
    }
})

NojakDjokovic.addEventListener("click", () => {
    if(tennisballs >= NojakDjokoviccost) {
        tennisballspersecond+=10
        tennisballs-= NojakDjokoviccost
        NojakDjokovic.innerText = "Tennis Balls: " + tennisballs
        NojakDjokoviccost = Math.ceil(RogerFederercost*1.1)
        NojakDjokovic.innerText = "Nojak Djokovic ($" + NojakDjokoviccost + ")"
    }
})

CoinClicker.addEventListener("click", () => {
    tennisballs+=tennisballsperclick
    coinslabel.innerText = "Tennis Balls: " + tennisballs
})

function  ballspersecond() {
    tennisballs+= tennisballspersecond
    coinslabel.innerText = "Tennis Balls: " + tennisballs
}