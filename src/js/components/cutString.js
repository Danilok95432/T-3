import { cutString } from "../_functions"

//обрезка длинных строк

const allCutStrings = document.querySelectorAll('[data-shear]')

if (allCutStrings) {
  cutString(allCutStrings)
}

