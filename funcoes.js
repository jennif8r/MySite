//funcao que muda cor da pagina:
function toggleTheme() {
    document.body.classList.toggle("dark-theme");
}
// Script para atualizar a palavra "DEV" na animação
const wordSwapElement = document.getElementById("wordSwap");
const words = ["DEV","TECH", "PROG"]; 
let currentIndex = 0;

function swapWords() {
    const currentText = wordSwapElement.textContent;
    const newText = currentText.replace("DEV", words[currentIndex]);
    wordSwapElement.textContent = newText;
    currentIndex = (currentIndex + 1) % words.length;
}

setInterval(swapWords, 3000);