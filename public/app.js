let header = document.querySelector('header');
let openMenu = document.querySelector('.menu-icon');
let closeMenu = document.querySelector('.close-menu');
let menu = document.querySelector('.menu');
let menuItems = document.querySelectorAll('.menu li a');

openMenu.addEventListener('click', () => {
    menu.classList.add('active');
    header.classList.add('hidden');
    closeMenu.addEventListener('click', () => {
        menu.classList.remove('active');
        header.classList.remove('hidden');
    });
});

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('active');
        header.classList.remove('hidden');
    });
});

let featureMenu = document.querySelectorAll('.features-row li');
let features = document.querySelectorAll('.features .container > .feature');

featureMenu.forEach(li => {
    li.addEventListener('click', (e) => {
        featureMenu.forEach(li => {
            li.classList.remove('active');
        });
        e.target.classList.add('active');
        featureToggle(e);
    });
    
    features.forEach(el => {
        let activeLi = document.querySelector('.features-row li.active').dataset.feature;
        if (activeLi == el.dataset.feature) {
            el.classList.add('active');
        }
    });
});


function featureToggle(e) {
    features.forEach(el => {
        el.classList.remove('active');
        if (e.target.classList.contains('active') && e.target.dataset.feature == el.dataset.feature) {
            el.classList.add('active');
        }
    });
}



let questionAnswer = document.querySelectorAll('.question-answer');

questionAnswer.forEach(container => {
    let showText = container.querySelector('.question i');
    
    container.addEventListener('click', () => {
        container.classList.toggle('active');
        container.classList.contains('active') ?
            showText.style.cssText = 'transform: rotate(180deg); color: hsl(0, 94%, 66%);' :
                showText.style.cssText = 'transform: rotate(0deg); color: hsl(231, 69%, 60%);';
    });
});


let contactUs = document.querySelector('.contact-us');
let emailInput = document.querySelector('.email-input');
let emailErr = document.querySelector('.error-msg');
let iconErr = document.querySelector('.error-icon');

contactUs.addEventListener('click', () => {
    let regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/ig;
    if (regex.test(emailInput.value)) {
        emailErr.innerText = 'Email sent';
        inputValid();
    } else if (emailInput.value == '') {
        emailErr.innerText = 'Input cannot be empty';
        inputNotValid();
    } else {
        emailErr.innerText = "Whoops, make shure it's an email";
        inputNotValid();
    }
});

function inputValid() {
    emailErr.classList.remove('error');
        emailInput.classList.remove('error');
        iconErr.classList.remove('error');
        emailErr.classList.add('done');
        emailInput.classList.add('done');
        setTimeout(() => {
            emailErr.classList.remove('done');
            emailInput.classList.remove('done');
            emailInput.value = '';
        }, 2000);
};

function inputNotValid() {
    emailErr.classList.remove('done');
    emailInput.classList.remove('done');
    emailErr.classList.add('error');
    iconErr.classList.add('error');
    emailInput.classList.add('error');
}