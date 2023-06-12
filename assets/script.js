const slides = [
    {
        image: "slide1.jpg",
        tagLine:
            "Impressions tous formats <span>en boutique et en ligne</span>",
    },
    {
        image: "slide2.jpg",
        tagLine:
            "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
    },
    {
        image: "slide3.jpg",
        tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
    },
    {
        image: "slide4.png",
        tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
    },
];

const banner = document.querySelector("#banner");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const slideImg = document.querySelector("#banner > img");
const slideText = document.querySelector("#banner > p");
const dots = document.querySelector(".dots");
const numberOfSlide = slides.length;

arrowLeft.addEventListener("click", function () {
    console.log("click gauche");
});

arrowRight.addEventListener("click", function () {
    console.log("click droit");
});


for (let i = 0; i < numberOfSlide; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dots.appendChild(dot);
    if (i === 0) {
        dots.children[i].classList.add("dot_selected");
    }
}
