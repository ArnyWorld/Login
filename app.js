let loginform = document.getElementById('loginform');
let regform = document.getElementById('regform');
let btndesign = document.getElementById('btndesign');

let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');

function logform() {

    if (window.matchMedia('(max-width:768px)').matches) {
        loginform.style.left = "-500px";
        regform.style.left = "11%";
        btndesign.style.left = "110px";
         btn1.style.color = "black";
        btn2.style.color = "white";
    }

    if (window.matchMedia('(max-width:812px)').matches) {
        loginform.style.left = "-500px";
        regform.style.left = "12%";
        btndesign.style.left = "110px";
        btn1.style.color = "black";
        btn2.style.color = "white";
    } else {
        loginform.style.left = "-500px";
        regform.style.left = "15%";
        btndesign.style.left = "110px";
        btn1.style.color = "black";
        btn2.style.color = "white";
    }


}

function rgform() {

    if (window.matchMedia('(max-width:768px)').matches) {
        loginform.style.left = "11%";
        regform.style.left = "450px";
        btndesign.style.left = "0px";
        btn2.style.color = "black";
        btn1.style.color = "white";
    }

    if (window.matchMedia('(max-width:812px)').matches) {
        loginform.style.left = "12%";
        regform.style.left = "450px";
        btndesign.style.left = "0px";
        btn2.style.color = "black";
        btn1.style.color = "white";
    } else {
        loginform.style.left = "15%";
        regform.style.left = "450px";
        btndesign.style.left = "0px";
        btn2.style.color = "black";
        btn1.style.color = "white";
    }

}
