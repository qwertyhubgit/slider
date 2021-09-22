let slides = document.querySelectorAll('.slide');

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClass();

        slide.classList.add('active');
    })
}

function clearActiveClass() {
    slides.forEach((item) => {
        item.classList.remove('active');
    })
}