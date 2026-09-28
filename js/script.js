const btnCalcular = document.getElementById("btnCalcular");
const btnLimpar = document.getElementById("btnLimpar");

btnCalcular.addEventListener("click", function () {

    const nota1 = Number(document.getElementById("nota1").value);
    const nota2 = Number(document.getElementById("nota2").value);
    const nota3 = Number(document.getElementById("nota3").value);
    const nota4 = Number(document.getElementById("nota4").value);

    const campo1 = document.getElementById("nota1").value;
    const campo2 = document.getElementById("nota2").value;
    const campo3 = document.getElementById("nota3").value;
    const campo4 = document.getElementById("nota4").value;

    const valorMedia = document.getElementById("valorMedia");
    const icone = document.getElementById("iconeSituacao");
    const situacao = document.getElementById("textoSituacao");
    const descricao = document.getElementById("textoDescricao");
    const resultado = document.getElementById("resultado");


    // Verificar campos vazios

    if (
        campo1 === "" ||
        campo2 === "" ||
        campo3 === "" ||
        campo4 === ""
    ) {

        valorMedia.textContent = "—";
        icone.textContent = "!";
        situacao.textContent = "Preencha todas as notas";
        descricao.textContent = "Digite as quatro notas para continuar.";

        resultado.className = "resultado recuperacao";

        return;
    }


    // Verificar notas

    if (
        nota1 < 0 || nota1 > 10 ||
        nota2 < 0 || nota2 > 10 ||
        nota3 < 0 || nota3 > 10 ||
        nota4 < 0 || nota4 > 10
    ) {

        valorMedia.textContent = "—";
        icone.textContent = "!";
        situacao.textContent = "Nota inválida";
        descricao.textContent = "As notas devem estar entre 0 e 10.";

        resultado.className = "resultado reprovado";

        return;
    }


    // CALCULAR MÉDIA

    const media = (nota1 + nota2 + nota3 + nota4) / 4;

    valorMedia.textContent = media.toFixed(1).replace(".", ",");


    // RESULTADO

    if (media >= 7) {

        resultado.className = "resultado aprovado";

        icone.textContent = "♥";

        situacao.textContent = "Você foi aprovado!";

        descricao.textContent =
            "Parabéns! Você alcançou a média necessária.";

    } else if (media >= 5) {

        resultado.className = "resultado recuperacao";

        icone.textContent = "♡";

        situacao.textContent = "Você está de recuperação";

        descricao.textContent =
            "Ainda é possível melhorar sua média.";

    } else {

        resultado.className = "resultado reprovado";

        icone.textContent = "•";

        situacao.textContent = "Você foi reprovado";

        descricao.textContent =
            "Não desanime. Continue estudando.";
    }

});


/* BOTÃO LIMPAR */

btnLimpar.addEventListener("click", function () {

    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("nota3").value = "";
    document.getElementById("nota4").value = "";

    document.getElementById("valorMedia").textContent = "0,0";

    document.getElementById("iconeSituacao").textContent = "♡";

    document.getElementById("textoSituacao").textContent =
        "Aguardando notas";

    document.getElementById("textoDescricao").textContent =
        "Digite suas notas para ver o resultado.";

    document.getElementById("resultado").className = "resultado";

});