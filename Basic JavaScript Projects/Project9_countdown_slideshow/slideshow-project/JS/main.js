//NOTE:
//THIS CODE INDEXES THE ELEMENTS IN THE PAGE.
//IT MUST BE CALLED AFTER OTHER ELEMENTS ARE
//LOADED  IN THE HTML FILE.


//slideIndex is the currently displayed slide
let slideIndex = 1;
showSlides(slideIndex);

//increment slideIndex by n and show the slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//show slide n
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    //collect the slide elements into variable 'slides'
    let slides = document.getElementsByClassName("mySlides");
    //collect dot elements into variable 'dots'
    let dots = document.getElementsByClassName("dot");


    //if the requested slide index is higher than the number of slides, wrap to 1
    if (n > slides.length) {slideIndex = 1}

    //if the requested slide is less than 1, wrap to the end
    if (n < 1) {slideIndex = slides.length}

    //hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    //deactivate all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active","");
    }

    //show requested slide
    slides[slideIndex-1].style.display = "block";
    //activate requested dot
    dots[slideIndex-1].className += " active";
}