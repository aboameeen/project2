// Start Slider
let imgslider = Array.from(
  document.querySelectorAll(".slider .slider-one img")
);
let currentSlide = 1;
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");
let span = document.querySelector(".slider-one span");
nextBtn.onclick = next;
prevBtn.onclick = prev;
let imageSlides = imgslider.length;
// console.log(imageSlides);
function prev() {
  if (currentSlide == "1") {
  } else {
    --currentSlide;
    Show();
  }
}
function next() {
  if (currentSlide == imageSlides) {
  } else {
    ++currentSlide;
    Show();
  }
}
let ul = document.createElement("ul");
ul.className = "ul-paggination";
let indicator = document.querySelector(".indicator");
indicator.appendChild(ul);
for (let i = 0; i < imageSlides; i++) {
  let paginationLi = document.createElement("li");
  paginationLi.className = `pagination-li${i + 1}`;
  paginationLi.setAttribute("data-index", i + 1);
  paginationLi.appendChild(document.createTextNode(i + 1));
  ul.appendChild(paginationLi);
}
let paginationlis = document.querySelectorAll(".indicator li");
paginationlis.forEach(function (li) {
  li.addEventListener("click", function () {
    currentSlide = li.dataset.index;
    Show();
  });
});
function Show() {
  imgslider.forEach((img) => {
    img.style.display = "none";
  });
  imgslider[currentSlide - 1].style.display = "block";
  paginationlis.forEach((li) => {
    li.classList.remove("active");
  });
  paginationlis[currentSlide - 1].classList.add("active");
  span.innerHTML = `#image ${currentSlide} Of ${imageSlides}`;
  if (currentSlide == 1) {
    prevBtn.classList.add("active");
  } else {
    prevBtn.classList.remove("active");
  }
  if (currentSlide == imageSlides) {
    nextBtn.classList.add("active");
  } else {
    nextBtn.classList.remove("active");
  }
}
Show();
// End Slider
// video
let btns = document.querySelectorAll(".video button");
let video = document.querySelector("video");
btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    btns.forEach(function (btn) {
      btn.classList.toggle("active");
    });
    if (btn.classList.contains("a")) {
      video.play();
    }
    if (btn.classList.contains("b")) {
      video.pause();
    }
  });
});
// video
let up = document.querySelector(".up");

window.onscroll = function () {
  if (window.scrollY >= 200) {
    up.style.display = "block";
  } else {
    up.style.display = "none";
  }
};
up.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
