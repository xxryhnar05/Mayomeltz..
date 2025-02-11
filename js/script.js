//toggle class active untuk menu
const navbarNav = document.querySelector(".navbar-nav");
//ketika menu di click
document.querySelector("#mayo-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//toogle cllas aktive untuk search
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

//toggle class aktive untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

//klik diluar elemen
const mayo = document.querySelector("#mayo-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!mayo.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

//modal box
const itemdetailModal = document.querySelector("#item-detail-modal");
const itemdetailButtons = document.querySelectorAll(".item-detail-button");

itemdetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemdetailModal.style.display = "flex";
    e.preventDefault();
  };
});

//klik tombol close
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemdetailModal.style.display = "none";
  e.preventDefault();
};

//klik diluar modal
window.onclick = (e) => {
  if (e.target === itemdetailModal) {
    itemdetailModal.style.display = "none";
  }
};
