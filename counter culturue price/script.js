let startX = 0;
let index = 0;
const images = document.querySelectorAll(".gallery img");
const dots = document.querySelectorAll(".dot");
const screenContainer = document.querySelector(".screen-container");


function updateBackground(imageSrc) {
    screenContainer.style.backgroundImage = `url(${imageSrc})`;
}

updateBackground(images[index].src);


function updateDots() {
    dots.forEach((dot, i) => {
        dot.classList.toggle("active-dot", i === index);
    });
}

function showImage(newIndex) {
    images[index].classList.remove("active");
    index = newIndex;
    images[index].classList.add("active");

   
    updateDots();

   
    updateBackground(images[index].src);
}


document.querySelector(".gallery").addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

document.querySelector(".gallery").addEventListener("touchend", (e) => {
    let endX = e.changedTouches[0].clientX;
    if (startX - endX > 50 && index < images.length - 1) {
        showImage(index + 1);
    } else if (startX - endX < -50 && index > 0) {
        showImage(index - 1);
    }
});


updateDots();