document.getElementById("menu-icon").addEventListener("click", () => {
    document.getElementById('nav-links').classList.toggle("nav-links-active");
});

const cards = document.getElementsByClassName("faq-item");
const cardsButtons = document.getElementsByClassName("faq-button");
for (let i = 0; i < cards.length; i++) {
    cardsButtons[i].addEventListener("click", () => {
        cards[i].classList.toggle("active");
    });
}