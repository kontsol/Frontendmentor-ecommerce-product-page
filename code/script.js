const presentation_img = document.getElementById("presentation-img");
const thumbnail = document.querySelectorAll(".thumbnail");
const portions = document.querySelector('input[type="number"]');
const portions_mobile = document.getElementById("#input-portion");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const cart_svg = document.getElementById("cart-svg");
const add_to_cart = document.getElementById("add-to-cart");
const shoe_price = document.getElementById("shoe-price");
// CART
const cart_box = document.querySelector(".cart-box");
const cart_content = document.querySelector(".cart-content");
const empty_cart = document.querySelector(".empty-cart");
const number_of_portions = document.getElementById("number-of-portions");
const final_price = document.getElementById("final-price");
const delete_svg = document.getElementById("delete-svg");
const shoe_price_cart = document.getElementById("shoe-price-cart");
const svg_number_of_portions = document.querySelector(
  ".svg-number-of-portions"
);
// MODAL
const close_btn = document.getElementById("close-btn");
const big_shoe_img = document.getElementById("big-shoe-img");
const shoe_presentation = document.querySelector(".shoe-presentation");
const shoe_thumbnail_modal = document.querySelectorAll(".shoe-thumbnail-modal");
// MOBILE
const next_btn = document.getElementById("next-btn");
const previous_btn = document.getElementById("previous-btn");
const next_btn_mobile = document.getElementById("next-btn-mobile");
const previous_btn_mobile = document.getElementById("previous-btn-mobile");
const menu_btn = document.getElementById("menu-button");
const close_menu_btn = document.getElementById("close-menu-btn");
const mob_nav = document.querySelector(".mobile-navigation");
const overlay = document.querySelector(".overlay");
let parse_shoe_price = parseFloat(shoe_price.textContent.replace("$", ""));
// MOBILE

thumbnail.forEach((img, i) => {
  img.addEventListener("click", () => {
    console.log(i);
    remove_thumb_active(thumbnail);
    presentation_img.src = `/images/image-product-${i + 1}.jpg`;
    img.classList.add("shoe-thumbnail-active");
  });
});

function remove_thumb_active(elem) {
  elem.forEach((img) => {
    img.classList.remove("shoe-thumbnail-active");
  });
}

minus.addEventListener("click", () => {
  if (
    portions.value > 0 &&
    portions.value !== null &&
    portions.value !== undefined
  ) {
    let int_portions = parseInt(portions.value);
    portions.value--;
  }
});

plus.addEventListener("click", () => {
  if (
    portions.value >= 0 &&
    portions.value !== null &&
    portions.value !== undefined
  ) {
    let int_portions = parseInt(portions.value);
    portions.value++;
  }
});

// CREATE CART BOX
cart_svg.addEventListener("click", () => {
  document.querySelector(".cart-box").classList.toggle("hidden");
});

add_to_cart.addEventListener("click", () => {
  if (
    portions.value > 0 &&
    portions.value !== null &&
    portions.value !== undefined
  ) {
    const add_items = document.createElement("div");
    add_items.innerHTML = `
    // <div class="cart-content">
    //     <img src="" alt ="" />

    // </div>
    
    `;
  }
});

delete_svg.addEventListener("click", () => {
  document.querySelector(".cart-content").classList.add("hidden");
  document.querySelector(".empty-cart").classList.remove("hidden");
  svg_number_of_portions.classList.add("hidden");
  cart_box.classList.add("hidden");
});

add_to_cart.addEventListener("click", () => {
  console.log(typeof Number(portions.value));
  if (Number(portions.value) > 0) {
    cart_content.classList.remove("hidden");
    empty_cart.classList.add("hidden");
    shoe_price_cart.textContent = shoe_price.textContent;
    svg_number_of_portions.classList.remove("hidden");
    svg_number_of_portions.textContent = parseInt(portions.value);
    number_of_portions.textContent = parseInt(portions.value);
    final_price.textContent =
      "$" + (parse_shoe_price * portions.value).toFixed(2);
  } else if (Number(portions.value) === 0) {
    cart_box.classList.remove("hidden");
    cart_content.classList.add("hidden");
    empty_cart.classList.remove("hidden");
    svg_number_of_portions.classList.add("hidden");
  }
});
presentation_img.addEventListener("click", () => {
  overlay.classList.remove("hidden");
  shoe_presentation.classList.remove("hidden");
});
// MODAL
close_btn.addEventListener("click", () => {
  overlay.classList.add("hidden");
  shoe_presentation.classList.add("hidden");
});

shoe_thumbnail_modal.forEach((img, i) => {
  img.addEventListener("click", () => {
    remove_thumb_active(shoe_thumbnail_modal);
    big_shoe_img.src = `/images/image-product-${i + 1}.jpg`;
    img.classList.add("shoe-thumbnail-active");
  });
});

let index = 1;

const active_thumbnail = function (num) {
  remove_thumb_active(shoe_thumbnail_modal);
  document
    .getElementById(`product_modal${num}`)
    .classList.add("shoe-thumbnail-active");
  big_shoe_img.src = `/images/image-product-${num}.jpg`;
};

const next = function () {
  if (index === shoe_thumbnail_modal.length) {
    index = 1;
  } else {
    index++;
    console.log(index);
  }
  active_thumbnail(index);
};

const previous = function () {
  if (index === 1) {
    index = shoe_thumbnail_modal.length;
  } else {
    index--;
  }
  active_thumbnail(index);
};

next_btn.addEventListener("click", next);
previous_btn.addEventListener("click", previous);

overlay.addEventListener("click", () => {
  overlay.classList.add("hidden");
  shoe_presentation.classList.add("hidden");
  mob_nav.style.transform = "translateX(-140%)";
  close_menu_btn.style.display = "none";
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    console.log(e.key);
    overlay.classList.add("hidden");
    shoe_presentation.classList.add("hidden");
  }
});

let idx_mob = 1;

const next_mobile = function () {
  if (idx_mob === 4) {
    idx_mob = 1;
  } else {
    idx_mob++;
  }
  active_image(idx_mob);
};

const previous_mobile = function () {
  if (idx_mob === 1) {
    idx_mob = 4;
  } else {
    idx_mob--;
  }
  active_image(idx_mob);
};

const active_image = function (num) {
  presentation_img.src = `/images/image-product-${num}.jpg`;
};

next_btn_mobile.addEventListener("click", next_mobile);
previous_btn_mobile.addEventListener("click", previous_mobile);

menu_btn.addEventListener("click", () => {
  mob_nav.style.transform = "translate(-25%, -3.3%)";
  overlay.classList.remove("hidden");
  menu_btn.style.display = "none";
  close_menu_btn.style.display = "block";
  close_menu_btn.style.transform = "translateX(800%)";
  cart_box.classList.add("hidden");
  avatar.style.backdropFilter = "blur(3px)";
});

close_menu_btn.addEventListener("click", () => {
  close_menu_btn.style.display = "none";
  menu_btn.style.display = "block";
  mob_nav.style.transform = "translateX(-140%)";
  close_menu_btn.style.transform = "translateX(-1000%)";
  overlay.classList.add("hidden");
});

console.log(screen.width);

function disable_event_handler() {
  if (screen.width <= 425) {
    console.log("object");
    presentation_img.style.pointerEvents = "none";
  }
}

disable_event_handler();
