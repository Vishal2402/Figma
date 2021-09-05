
const more = document.getElementById('more');
const btn = document.getElementById('show');
let btn1 = btn.innerText;
console.log(btn1)
var i=0;
function read(){

    if(!i){
        more.style.display = "inline";
        btn.innerText = "Show less";
        i=1;
    }
    else
    {
        more.style.display = "none";
        btn.innerText = "+3 more";
        i=0;
     }
}
const more1 = document.getElementById('more1');
const btn2 = document.getElementById('show1');
let btn3 = btn.innerText;

var j=0;
function readmore(){

    if(!j){
        more1.style.display = "block";
        btn2.innerText = "Show less";
        j=1;
    }
    else
    {
        more1.style.display = "none";
        btn2.innerText = "See More";
        j=0;
     }
}

// const rating = document.querySelectorAll("#rating");
// const star = document.querySelectorAll(" form label ");
// let ratingstar = star.length;
// let ratingnumber = rating.length;
// console.log(ratingstar, ratingnumber)
// rating.forEach(myfunct);
// function myfunct(){
//     document.getElementById("rating").innerHTML += ratingstar;
// }
const ul = document.querySelector('.nav_menu_1');
const nav1 = document.querySelector('.nav1');
const burger = document.getElementById('burger');
burger.addEventListener('click', ()=>{
    ul.classList.toggle('responsivemenu');
    // nav1.classList.toggle('nav1-resp');

})





