const optionGrid = document.querySelectorAll(".option-grid-product span");

const grid1 = document.querySelector(".grid-1");
const grid2 = document.querySelector(".grid-2");
const grid4 = document.querySelector(".grid-4");
const productItems = document.querySelectorAll(".product-item");

grid2.addEventListener("click", () => {
  for (let i = 0; i < productItems.length; i++) {
    productItems[i].classList.remove(
      "col-lg-4",
      "col-4",
      "col-12",
      "col-lg-12"
    );
    productItems[i].classList.add("col-lg-3", "col-3");

    optionGrid[i].classList.remove("active");
  }
  grid2.classList.add("active");
});

grid1.addEventListener("click", () => {
  for (let i = 0; i < productItems.length; i++) {
    productItems[i].classList.remove(
      "col-lg-3",
      "col-3",
      "col-12",
      "col-lg-12"
    );
    productItems[i].classList.add("col-lg-4", "col-4");

    optionGrid[i].classList.remove("active");
  }
  grid1.classList.add("active");
});

grid4.addEventListener("click", () => {
  for (let i = 0; i < productItems.length; i++) {
    productItems[i].classList.remove("col-lg-3", "col-3", "col-4", "col-lg-4");
    productItems[i].classList.add("col-lg-12", "col-12");

    optionGrid[i].classList.remove("active");
  }
  grid4.classList.add("active");
});
