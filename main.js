const botoes = querySelectorAll(". botao");

for(let i=0; i< botoes.length; i++){
    botoes[i].onclick = function(){
        for (j=0; j< botoes.length;j++){
            botoes[j].classlistremove("ativo");
        }
        botoes[i].classlist.add("ativo")
    }
}