
// passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML
const abas = document.querySelectorAll(".aba");

abas.forEach(aba=> {
//passo 2 - dar um jeito de identificar o clique no elemento da aba
aba.addEventListener("click", function() {

    if(aba.classList.contains("selecionado")){
        return;
    }

//passo 3 - quando o usuario cliar, desmarcar a aab selecionada
const abaSelecionada = document.querySelector(".aba.selecionado");
abaSelecionada.classList.remove("selecionado")

//passo 4 - marcar a aba clicada como selecionado
aba.classList.add("selecionado")

//passo 5 - esconder o conteudo anterior
const informacaoSelecionada = document.querySelector(".informacao.selecionado");
informacaoSelecionada.classList.remove("selecionado");

//passo 6 - mostrae o conteudo da aba selecionada
const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

const informacaoASerMostrada = document. getElementById(idDoElementoDeInformacoesDaAba)
informacaoASerMostrada.classList.add("selecionado")

});
})