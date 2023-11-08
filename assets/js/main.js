var search = document.querySelectorAll(".nav-button i")[0]
console.log(search);
search.addEventListener("click", function (e) {
  document.querySelector(".modal").style.display = "flex";

})
var modal = document.querySelector(".modal");
modal.addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target == modal) {
    modal.style.display = "none";
  }
})



var aside = document.querySelector("aside ");
var icon = document.querySelector("aside i");
var sidebar = document.querySelectorAll(".nav-button i")[1];
sidebar.addEventListener("click", function (e) {
  aside.style.transform = "translateX(0)";
})
icon.addEventListener("click", function () {
  aside.style.transform = "translateX(100%)";
})



var navbar = document.querySelector(".navbar");
// var headerIcons = document.querySelector(".header");
var eded = document.querySelectorAll(".num-1 h1 span");
window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    navbar.classList.add("teze");
  }
  else {
    navbar.classList.remove("teze");

  }


})


var stop1 = false;
var eded = document.querySelectorAll(".num-1 h1 span");
window.addEventListener("scroll", function () {
  if (window.scrollY > 2100 && !stop1) {

    eded.forEach(item => {
      var reqem = Number(item.getAttribute("zehra"));
      var duration = 1000;
      var step = reqem / (duration / 10);
      var current = 0;
      var artim = setInterval(function () {
        current += step;
        if (current >= reqem) {
          item.innerText = Math.round(current);
          clearInterval(artim);
        } else {
          item.innerText = Math.round(current);
        }
      }, 10)
    });
    stop1 = true;
  }

})


var slides = document.querySelectorAll(".mySlides");
let slideIndex = 0;
console.log(slides.length);
function next() {
  if (slideIndex >= slides.length - 1) {
    slideIndex = 0
  } else {
    slideIndex++
  }
  showSlides()
}
function prev() {
  if (slideIndex <= 0) {
    slideIndex = slides.length - 1
  } else {
    slideIndex--
  }
  showSlides()
}
function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}
showSlides();


var list = document.querySelectorAll(".heading-product ul li");
var cart = document.querySelectorAll(".product-cart");

list.forEach(element => {
  if (element.getAttribute("class") != "active") {
    document.querySelectorAll("." + element.getAttribute("filter")).forEach(item => {
      item.style.display = "none";
    });
  }
});
list.forEach(item => {
  item.addEventListener("click", function () {
    list.forEach(element => {
      element.classList.remove("active");
    });
    item.classList.add("active");
    cart.forEach(cart => {
      console.log(cart.classList[1]);
      if (cart.classList[1] != item.getAttribute("filter")) {
        cart.style.display = "none";
      }
      else{
        cart.style.display = "block";
      }

    });
  })
});







