// Função global para o SIM/NÃO
function resposta(opcao) {
  const saida = document.getElementById("resposta");

  if (opcao === "sim") {
    saida.innerHTML = "Perfeito! Mal posso esperar por nosso encontro dia 30 de agosto, às 19h!❤️";
  } else {
    saida.innerHTML = "Ahh, que pena... mas ainda vou te conquistar! 😉";
  }
}
$("#messageState").on("change", (x) => {
	$(".message").removeClass("openNor").removeClass("closeNor");
	if ($("#messageState").is(":checked")) {
		$(".message").removeClass("closed").removeClass("no-anim").addClass("openNor");
		$(".heart").removeClass("closeHer").removeClass("openedHer").addClass("openHer");
		$(".container").stop().animate({"backgroundColor": "#79042bff"}, 2000);
		console.log("Abrindo");

		function criarPetala() {
  const petala = document.createElement("div");
  petala.classList.add("petala");

  // sorteia um tipo de cor
  const tipos = ["tipo1", "tipo2", "tipo3", "tipo4"];
  petala.classList.add(tipos[Math.floor(Math.random() * tipos.length)]);

  document.body.appendChild(petala);

  // posição horizontal aleatória
  petala.style.left = Math.random() * 100 + "vw";

  // duração da animação (3 a 6 segundos)
  petala.style.animationDuration = (Math.random() * 3 + 3) + "s";

  // remove depois que cai
  setTimeout(() => {
    petala.remove();
  }, 7000);
}

// cria uma nova pétala a cada 250ms
setInterval(criarPetala, 250);

		
	} else {
		$(".message").removeClass("no-anim").addClass("closeNor");
		$(".heart").removeClass("openHer").removeClass("openedHer").addClass("closeHer");
		$(".container").stop().animate({"backgroundColor": "#fce4ec"}, 2000);
		console.log("fechando");
	}
});

$(".message").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
	console.log("Animation End");
	if ($(".message").hasClass("closeNor"))
		$(".message").addClass("closed");
	$(".message").removeClass("openNor").removeClass("closeNor").addClass("no-anim");
});

$(".heart").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
	console.log("Animation End");
	if (!$(".heart").hasClass("closeHer"))
		$(".heart").addClass("openedHer").addClass("beating");
	else
		$(".heart").addClass("no-anim").removeClass("beating");
	$(".heart").removeClass("openHer").removeClass("closeHer");
});