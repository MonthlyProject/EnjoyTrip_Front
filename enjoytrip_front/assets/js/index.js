import { initHeader } from "./headerScript.js";

const makeShadow = () => {
    const target = document.querySelector(".pageHeader");

    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
            target.classList.add('change');
        } else {
            target.classList.remove('change');
        }
    });
}

window.addEventListener('load', () => {
    initHeader();
    makeShadow();
});