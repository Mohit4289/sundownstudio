const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function page4Animation(){
    let elemC = document.querySelector('#elem-container')
    let fixed = document.querySelector('#fixed-image')
    elemC.addEventListener("mouseenter", function(){
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function(){
        fixed.style.display = "none"
    })
    
    let elements = document.querySelectorAll(".elem");
    
    elements.forEach(elem => {
      elem.addEventListener("mouseenter", function() {
        let img = elem.getAttribute("data-image");
        fixed.style.backgroundImage = `url(${img})`;
      });
    });
}

function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
    });
}

swiperAnimation()
page4Animation()