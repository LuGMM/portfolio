let modalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
    const shapes = document.querySelectorAll('.shape');
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; i++) {
        const isOdd = i % 2 !== 0;
        const boolInteger = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInteger}px, ${y * boolInteger}px)`
    }
}

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += ' dark-theme';
    } else {
        document.body.classList.remove('dark-theme');
    }
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += ' modal__overlay--visible';
    emailjs
        .sendForm(
            'service_g4pxhr9',
            'template_76nsoxw',
            event.target,
            'EHRN0BFn-UJeXbYiZ'
        ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
        }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is temporarily unavailable. Please contact me directly at martinnezl@gmail.com"
        )
        })

}


function toggleModal() {
    modalOpen = !modalOpen;
    if (!modalOpen) return document.body.classList.remove('modal--open');
    document.body.classList += ' modal--open';
}
