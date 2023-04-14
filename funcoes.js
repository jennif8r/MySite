//funcao que muda cor da pagina:
function toggleTheme() {
    document.body.classList.toggle("dark-theme");
}
let words = ["TECH", "TI","DEV"];
		let index = 0;

		function swapWord() {
			let span = document.querySelector("#wordSwap span");
			span.innerText = words[index];
			index = (index + 1) % words.length;
		}

		setInterval(swapWord, 3300);
        