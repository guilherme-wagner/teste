function clickMenu() {
    const menu = document.querySelector("nav"); // Seleciona o menu
    menu.classList.toggle("open"); // Alterna a classe 'open'
}

function maxScreen() {
const hiddenElements = document.getElementsByClassName("hidden");
const msg = document.getElementById("msg");

if (window.innerWidth > 1920) {
    // Itera sobre todos os elementos com a classe "hidden" e os oculta
    for (let element of hiddenElements) {
        element.style.display = "none";
    }
    msg.style.display = 'flex'; // Exibe a mensagem
} else {
    // Itera sobre todos os elementos com a classe "hidden" e os exibe
    for (let element of hiddenElements) {
        element.style.display = "flex";
    }
    msg.style.display = 'none'; // Oculta a mensagem
}
}
// Chama a função ao carregar a página
window.onload = maxScreen;
// Chama a função ao redimensionar a janela
window.onresize = maxScreen;
