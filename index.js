// document.getElementById("count-el").innerText = 5

let saveEl =  document.getElementById("save")

let countEl = document.getElementById("count-el")
let count = 0

function increment () {
    count = count + 1
    countEl.innerText = count
}

function save() {
     saveEl.textContent += count + " - "
     count=0
     countEl.innerText = count
}

