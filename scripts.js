//nav-links-active
const open = () => {
    document.getElementById('nav-links').classList.add("nav-links-active");
}

const close = () => {
    document.getElementById('nav-links').classList.remove("nav-links-active");
}

document.getElementById("menu-icon").addEventListener("click", () => {
    if (document.getElementById('nav-links').classList.contains("nav-links-active")) {
        close();
    } else {
        open();
    }
});

const cards = document.getElementsByClassName("faq-item");
const cardsButtons = document.getElementsByClassName("faq-button");
for (let i = 0; i < cards.length; i++) {
    cardsButtons[i].addEventListener("click", () => {
        cards[i].classList.toggle("active");
    });
}