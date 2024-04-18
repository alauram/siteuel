const openMenu1 = document.querySelector('.menu1');
const Arrow1 = document.querySelector('.arrow1')
const openMenu2 = document.querySelector('.menu2');
const Arrow2 = document.querySelector('.arrow2');
const openMobile = document.querySelector('.mobile-open');
const closeMobile = document.querySelector('.mobile-close');
const mobileMenu = document.querySelector('.mobile-menu')

document.querySelector('.btn1').addEventListener('click', function () {
    this.classList.toggle('active');
    openMenu1.classList.toggle('active');
    Arrow1.classList.toggle('active');

    if (openMenu2.classList.contains('active')) {
        openMenu2.classList.remove('active');
        Arrow2.classList.remove('active');
    }
});

document.querySelector('.btn2').addEventListener('click', function () {
    this.classList.toggle('active');
    openMenu2.classList.toggle('active');
    Arrow2.classList.toggle('active');

    if (openMenu1.classList.contains('active')) {
        openMenu1.classList.remove('active');
        Arrow1.classList.remove('active');
    }
});
openMobile.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
});
closeMobile.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
});

document.getElementById('wordButton').addEventListener('click', function () {
    window.location.href = '';
});

document.getElementById('powerPointButton').addEventListener('click', function () {
    window.location.href = '';
});

document.getElementById('excelButton').addEventListener('click', function () {
    window.location.href = '';
});

document.getElementById('docsButton').addEventListener('click', function () {
    window.location.href = 'index2.html';
});

document.getElementById('apresentacoesButton').addEventListener('click', function () {
    window.location.href = '';
});

document.getElementById('planilhasButton').addEventListener('click', function () {
    window.location.href = '';
});

document.getElementById('perguntasButton').addEventListener('click', function () {
    window.location.href = '';
});
