let blackWhight = document.querySelector(".buton-black-whight");
blackWhight.addEventListener("click", function () {
  document.body.classList.toggle("activebackground");
  document.body.classList.toggle("activeColorWhfit");
  $('.par-name').toggleClass('light');
  $('.par-name').toggleClass('dark');
  
});

let menudownR = document.querySelector(".menu-right");
let menudownL = document.querySelector(".menu-left");
let navmenu = document.querySelector(".nave-ul");

menudownR.addEventListener("click", function () {
    navmenu.style.right = "50%";
    menudownR.style.display = "none";
    menudownL.style.display = "inline-block";
});

menudownL.addEventListener("click", function () {
    navmenu.style.right = "-60%";
    menudownR.style.display = "inline-block";
    menudownL.style.display = "none";
});



let slayjs = document.querySelector(".slay");

setTimeout(() => {
  slayjs.classList.add("noneslah");
}, 5000);

setTimeout(() => {
  slayjs.classList.remove("noneslah");
}, 10000);

setTimeout(() => {
  slayjs.classList.add("noneslah");
}, 15000);

setTimeout(() => {
  slayjs.classList.remove("noneslah");
}, 2000);

setTimeout(() => {
  slayjs.classList.add("noneslah");
}, 25000);

setTimeout(() => {
  slayjs.classList.remove("noneslah");
}, 30000);

setTimeout(() => {
  slayjs.classList.add("noneslah");
}, 35000);

setTimeout(() => {
  slayjs.classList.remove("noneslah");
}, 40000);



//===================
//صفحة معرفة الكود 
//===================
let next = document.querySelector(".nextJs");
let part = document.querySelector(".list-contnta");
let P2 = document.querySelector(".lis");
let res = document.querySelector(".res");

next.addEventListener("click", (eo) => {
    res.style.opacity = 0;
    if (part.value === "P") {
        P2.style.display = "flex";
    }else{
        P2.style.display = "none";
    }
});



//==============
let enter = document.querySelector(".enterJs");
let subject = document.querySelector(".liS");
let code = document.getElementById("code");
let hour1 = document.getElementById("hour");


enter.addEventListener("click", (eo) => {
    // قسم الفيزياء الاجباري
    if (subject.value === "P178") {
        res.style.opacity = 1;
        code.innerHTML = subject.value;
        hour1.innerHTML = "3 hours";
    }
});