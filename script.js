
// back to top button show on screen

window.addEventListener('scroll', onScroll)


function onScroll() {
    showBackToTopButtonOnScroll()
}


function showBackToTopButtonOnScroll() {
    const backToTopButton = window.document.getElementById('backToTopButton')

    if (scrollY > 400) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}




// hide & show function to each project


// shadow effect when card shows on screen
let shadow = window.document.querySelector('.shadow');



// ================= DoctorCare ====================//

let cardDC = window.document.querySelector('#cardDC');

let cardShowDC = window.document.querySelector('.cardShowDC');

let closeDC = window.document.querySelector('.closeDC');


cardDC.addEventListener('click', () => {
        cardShowDC.style.display = 'block';
        shadow.style.display = 'block';
})

closeDC.addEventListener('click', () => {
    cardShowDC.style.display = 'none';
    shadow.style.display = 'none';
})


// ================= MCC ====================//

let cardMCC = window.document.querySelector('#cardMCC');

let cardShowMCC = window.document.querySelector('.cardShowMCC');

let closeMCC = window.document.querySelector('.closeMCC');


cardMCC.addEventListener('click', () => {
        cardShowMCC.style.display = 'block';
        shadow.style.display = 'block';
})

closeMCC.addEventListener('click', () => {
    cardShowMCC.style.display = 'none';
    shadow.style.display = 'none';
})


// ================= NFX ====================//

let cardNFX = window.document.querySelector('#cardNFX');

let cardShowNFX = window.document.querySelector('.cardShowNFX');

let closeNFX = window.document.querySelector('.closeNFX');


cardNFX.addEventListener('click', () =>{
    cardShowNFX.style.display = 'block';
    shadow.style.display = 'block';
})

closeNFX.addEventListener('click', () => {
    cardShowNFX.style.display = 'none';
    shadow.style.display = 'none';
})


// ================= FR ====================//

let cardFR = window.document.querySelector('#cardFR');

let cardShowFR = window.document.querySelector('.cardShowFR');

let closeFR = window.document.querySelector('.closeFR');


cardFR.addEventListener('click', () =>{
    cardShowFR.style.display = 'block';
    shadow.style.display = 'block';
})

closeFR.addEventListener('click', () => {
    cardShowFR.style.display = 'none';
    shadow.style.display = 'none';
})


let cardFR2 = window.document.querySelector('#cardFR2');

cardFR2.addEventListener('click', () =>{
    cardShowFR.style.display = 'block';
    shadow.style.display = 'block';
})

closeFR.addEventListener('click', () => {
    cardShowFR.style.display = 'none';
    shadow.style.display = 'none';
})
