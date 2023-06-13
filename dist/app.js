"use strict";
const compteur = document.querySelector('#compteur');
let i = 0;
var increment = function (e) {
    e.preventDefault();
    i++;
    const span = compteur === null || compteur === void 0 ? void 0 : compteur.querySelector('span');
    if (span) {
        span.innerText = i.toString();
    }
};
compteur === null || compteur === void 0 ? void 0 : compteur.addEventListener("click", increment);
