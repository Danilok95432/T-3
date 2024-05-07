import { cutString } from "../_functions";

//обрезка длинных строк

const allCutStrings = document.querySelectorAll("[data-shear]");

if (allCutStrings) {
  cutString(allCutStrings);
}

const paymentStrings = document.querySelectorAll(".payment-cut-string");
const mediaQuery = window.matchMedia("(max-width: 390px)");

if (mediaQuery.matches) {
  cutString(paymentStrings);
}
