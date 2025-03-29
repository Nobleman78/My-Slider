let slideIndex = 1;
showSlides(slideIndex);
function createButton(direction) {
    const button = document.createElement('button');
    button.innerHTML = direction === 'next' ? '>' : '<';
    button.className = ` ${direction}`;
    button.type = 'button';
    button.addEventListener('click', ()=> {
        plusSlides(direction === 'prev' ? -1 : 1);
    });
    return button;
}
const slider = document.querySelector('.slider-container');
slider.appendChild(createButton('prev'))
slider.appendChild(createButton('next'))

function plusSlides(n) {
    showSlides(slideIndex = slideIndex + n);
}

function showSlides(index) {
    let slides = document.getElementsByClassName("mySlides");
    // Suppose [1,2,3]if [1,2,3,4] in this case index is greater so the index will be 1,
    // Thats mean [1,2,3] will be the index.
    if (index > slides.length) {
        slideIndex = 1
    }
    // If [-1,1,2,3] then it will be [-1]=[3] thats mean slides[3] will be store on slides[-1]
    if (index < 1) {
        slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    //Using this code I just accessing the first index of the slides array.
    slides[slideIndex - 1].style.display = 'block';

}
setInterval(() => {
    plusSlides(1)
}, 2000);

