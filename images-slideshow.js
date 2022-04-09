const slideshow = document.querySelector('.slider__slideshow');
const images = document.querySelectorAll('.slideshow-link img');
const totalImages = images.length;
const names = document.querySelectorAll(".slideshow-link h4");
let index = 2;
const percent = document.querySelector(".show-percent");
let counter = 5;

const removeImage = () => {
    names.forEach((name) => name.classList.remove("current-txt"));
    images.forEach((image) => image.classList.remove("current-img"));
}

const checkCurrentImage = () => {
    if(index < 0) index = totalImages - 1;
    if(index > totalImages - 1) index = 0;
}

const changeImage = (idx) => {
    names[idx].classList.add("current-txt");
    images[idx].classList.add("current-img");

    const firstIcon = slideshow.firstElementChild;

    const thirdIcon = slideshow.children[3];
    thirdIcon.classList.add('light');
    thirdIcon.previousElementSibling.classList.remove('light');
    
    // first
    slideshow.removeChild(firstIcon);
    slideshow.appendChild(firstIcon);
}

let intervalImage = setInterval(showImage, 5000);

function showImage() {
    index++;
    removeImage();
    checkCurrentImage();
    changeImage(index);    
}

percent.textContent = `${counter}`;
setInterval(() => {
    counter--;
    if(counter <= 0) {
        counter = 5;
    }
    percent.textContent = `${counter}`;
}, 1000);