const boxs = document.querySelectorAll(".box");

function checkSlide() {
  boxs.forEach((box) => {
    const slideInAt =
      window.scrollY + window.innerHeight - box.offsetHeight / 5;
    const slideInBottom = box.offsetTop + box.offsetHeight;
    const isHalfShown = slideInAt > box.offsetTop;
    const isNotScrolledPast = window.scrollY < slideInBottom;
    if (isHalfShown && isNotScrolledPast) {
      box.classList.add("active");
    } else {
      box.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", checkSlide);
