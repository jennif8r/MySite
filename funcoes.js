//funcao que muda cor da pagina:
function toggleTheme() {
    document.body.classList.toggle("dark-theme");
}
// cabeçalho animação
let words = ["TECH", "TI","DEV"];
		let index = 0;

		function swapWord() {
			let span = document.querySelector("#wordSwap span");
			span.innerText = words[index];
			index = (index + 1) % words.length;
		}

		setInterval(swapWord, 3300);

// validação de formulario: 
function validarFormulario() {
	var nome = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var mensagem = document.getElementById("message").value;
  
	if (nome == "" || email == "" || mensagem == "") {
	  alert("Por favor, preencha todos os campos.");
	  return false;
	}
  
	return true;
  }
        