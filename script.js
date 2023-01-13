
// hide & show function to each project

// ================= DoctorCare ====================//

let cardDC = window.document.querySelector('#cardDC');

let cardShowDC = window.document.querySelector('.cardShowDC');

let closeDC = window.document.querySelector('.closeDC')

let shadow = window.document.querySelector('.shadow')

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

let closeMCC = window.document.querySelector('.closeMCC')


cardMCC.addEventListener('click', () => {
        cardShowMCC.style.display = 'block';
        shadow.style.display = 'block';
})

closeMCC.addEventListener('click', () => {
    cardShowMCC.style.display = 'none';
    shadow.style.display = 'none';
})


// ================= NFX ====================//

