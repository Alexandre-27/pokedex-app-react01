const loader = document.querySelector(".loader");

window.addEventListener("load", () => {
    loader.classList.add("fondu-out");
    setTimeout(() => {
        loader.classList.add("end-animation");
    }, 5000);
});