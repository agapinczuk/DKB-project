//BANNER SLIDER

//parameters
let activeElement = 0;

//take banner slider's elements
const imgHtml = document.querySelector('.slider');
const h1Html = document.querySelector('.welcome h1');
const h2Html = document.querySelector('.welcome h2');

//array info
const images = ['images/accountant-4008603_1280x698.jpg', 'images/accountant-3922732_1280.jpg'];
const h1Text = ['Nie masz księgowej?', 'Ty rozwijaj firmę'];
const h2Text = ['Wybierz biuro rachunkowe DKB', 'ja zajmę się Twoimi fakturami'];


function changeElement() {
    activeElement++;

    if (activeElement == images.length) {
        activeElement = 0;
    }

    imgHtml.src = images[activeElement];
    h1Html.textContent = h1Text[activeElement];
    h2Html.textContent = h2Text[activeElement];
}
setInterval(changeElement, 8000);


// SCROLL ANIMATION IN SECTIONS

$(document).on('scroll', function () {

    const windowHeight = $(window).height();
    const scrollValue = $(this).scrollTop();

    // img's in who section

    const $imgWho = $('.who img');
    const $who = $('.who');
    const whoFromTop = $who.offset().top;
    const whoHeight = $who.height();

    if (scrollValue > whoFromTop + whoHeight - windowHeight) {
        $imgWho.addClass('active');
    }

    // service column in service section

    const $serviceColumn = $('.service');
    const $servicesSection = $('.services');
    const servicesSectionFromTop = $servicesSection.offset().top;
    const servicesSectionHeight = $servicesSection.height();

    if (scrollValue > servicesSectionFromTop + servicesSectionHeight - windowHeight) {
        $serviceColumn.addClass('active');
    }

    // clear class

    if (scrollValue < 100) {
        $imgWho.removeClass('active');
        $serviceColumn.removeClass('active');
    }

})

// TRIANGLE SWITCH IN TOGGLE SECTION

const toggle = document.querySelector('.toggle');
const toggleTwo = document.querySelector('.toggleTwo');
const triangleUpAndDown = document.querySelectorAll('.triangle');


function toggleSwitch() {
    for (let i = 0; i < triangleUpAndDown.length; i++) {
        triangleUpAndDown[i].classList.toggle('active');
    }
}

toggle.addEventListener('click', toggleSwitch);
toggleTwo.addEventListener('click', toggleSwitch);


// CLICK BURGER ANIMATION IN SECTIONS

const burger = document.querySelector('.burger');
const showElement = document.querySelectorAll('.show');

burger.addEventListener('click', function () {
    for (let i = 0; i < showElement.length; i++) {
        showElement[i].classList.toggle('active');
    }
})

//CONTACT HIDDING DIV's

// contact-form

// const emailBtn = document.querySelector('.email');
// const contactForm = document.querySelector('.contact-form');

// emailBtn.addEventListener('click', function () {
//     contactForm.classList.toggle('active');
// })

$('.email').on('click', function () {
    $('.contact-form').toggleClass('active');

    // const goToContactForm = "[data-section=" + $(this).attr('class') + "]";
    const goToContactForm = $('.contact-form')
    $('body, html').animate({
        scrollTop: $(goToContactForm).offset().top
    })


});

//toTopButton

const toTopButton = document.getElementById("toTopButton");

window.addEventListener('scroll', function () {

    const yScrollAxis = window.pageYOffset;

    if (yScrollAxis > 300) {
        toTopButton.style.display = "block";
    } else {
        toTopButton.style.display = "none";
    }
})

toTopButton.addEventListener("click", function () {
    window.scrollBy(0, -1 * window.pageYOffset);
})