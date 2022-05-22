let sidebar = document.querySelector("#none");
let menuBtnOpen = document.querySelector("#open");
let menuBtnClose = document.querySelector("#close");
menuBtnOpen.onclick = function Show(){
    sidebar.style.right = "0px";
    sidebar.style.transition = "2s all";
}
menuBtnClose.onclick = function Close(){
    sidebar.style.right = "-350px";
    sidebar.style.transition = "2s all";
}


let slides = ['13.jpg','15.jpg','16.jpg','14.jpg','17.jpg','18.jpg'];
let frame = 0;
let slide = document.getElementById("slide");
const next = ()=>{
    if(frame >= slides.length){
        frame = 0;
    }
    slide.src = slides[frame]
    frame += 1
    console.log(frame)
}
const prev = ()=>{
    if(frame <= 0){
        frame = slides.length;
    }
    frame -= 1
    slide.src = slides[frame]
    console.log(frame)

}

function Controls(index){
    index = parseInt(index);
    slide.src = slides[index]
}

function AutoSlider(){
    if(frame >= slides.length){
       frame = 0;
    }
    slide.src = slides[frame];
    frame += 1;
}
window.onload = () =>{
    setInterval(AutoSlider,5000) // 1-param function 2-param interval milliseconds
}


let sideba = document.querySelector("#btn5");
let sideb = document.querySelector("#scr");
let side = document.querySelector("#scrrr");
let sid = document.querySelector("#scrrrr");
let si = document.querySelector("#scrr");
let s = document.querySelector("#sc");
let al = document.querySelector("#s");
let menuBtnOpe = document.querySelector("#btn6");

menuBtnOpe.onclick = function Show(){
    sideb.style.display = "none";
    side.style.display = "none";
    sid.style.display = "none";
    si.style.display = "block";
    s.style.display = "block";
    al.style.display = "block";
    menuBtnOpe.style.background = "#03a9f4";
    sideba.style.background = "#555";
}
sideba.onclick = function Sho(){
    sideb.style.display = "block";
    side.style.display = "block";
    sid.style.display = "block";
    si.style.display = "none";
    s.style.display = "none";
    al.style.display = "none";
    menuBtnOpe.style.background = "#555";
    sideba.style.background = "#03a9f4";
}
