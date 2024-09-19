let slideIndex = 0;
showSlides(slideIndex);

// Criando função para trocar as imgs no carrosel

function plusSlides2(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("Slides2");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

setInterval(function () {
  plusSlides2(1);
}, 5000);

