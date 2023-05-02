//special countdown
let daysItem = document.querySelector("#days");
let hoursItem=document.querySelector("#hours");
let minItem=ducument.querySelector("#min");
let secItem=ducument.querySelector("#sec");

let countdown = () => {
    let futureDate = new Date ("30 April 2023");
    let currentDate = new Date ();
    let myDate = futureDate - currentDate;

    let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
    let hours = Math.floor(myDate / 1000 / 60 /60) % 24;
    let min = Math.floor(myDate / 1000 / 60)%60;
    let sec = Math.floor(myDate / 1000)%60;

    daysItem.innerHTML = days;
    hoursItem.innerHTML = hours;
    minItem.innerHTML = min;
    secItem.innerHTML = sec;
}

countdown()

setInterval (countdown ,1000)

//scroll back to top

function scrollTopBack() {
    let scroollTopButton = ducument.querySelector("#scrollup");
    window.onscroll = function(){
        var scroll = ducument.ducumentElement.scrollTop;
        if (scroll >= 250) {
            scroollTopButton.classList.add('scrollActive');
        }
        else
        {
            scroollTopButton.classList.remove('scrollActive');
        }
    }
}
scrollTopBack();

//Nav Hide

let Navbar = document.querySelectorAll('.nav-link');
let NavCollapse = document.querySelector('.navbar-collapse.collapse');
Navbar.forEach(function (a) {
    a.addEventListener('click' , function () {
        NavCollapse.classList.remove("show");
    })
})