import {
  menuBtn,
  menuContainer,
  menuCloseBtn,
  menuPosting,
  postingPopup,
} from "./elements.js";
import { toggleHidden } from "./utils.js";

function clickMenuOpen() {
  toggleHidden(menuContainer);
}

function clickMenuClose() {
  toggleHidden(menuContainer);
}

function openSalesPost() {
  toggleHidden(postingPopup);
}
menuBtn.addEventListener("click", clickMenuOpen);
menuCloseBtn.addEventListener("click", clickMenuClose);
menuPosting.addEventListener("click", openSalesPost);
