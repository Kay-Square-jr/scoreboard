let homes= 0 
let aways = 0
a = document.getElementById("home-score")
b = document.getElementById("away-score")

function home1() {
    homes = homes + 1
    a.textContent = homes
}
function home2() {
    homes = homes + 2
    a.textContent = homes
}
function home3() {
    homes = homes + 3
    a.textContent = homes
}
function away1() {
    aways = aways + 1
    b.textContent = aways
}
function away2() {
    aways = aways + 2
    b.textContent = aways
}
function away3() {
    aways = aways + 3
    b.textContent = aways
}