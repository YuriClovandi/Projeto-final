function pesquisa(){
    const pesquisar = document.getElementById("usuario").value.toLowerCase();


    const vestidos = ["vestido", "vestidos"];
    const conjuntos = ["conjunto", "conjuntos", "saia", "saias", "blusa", "blusas", "cropped","croppeds", "camiseta", "camisetas"];
    const promoções = ["promocao", "promoção", "promocoes", "promoções"];


    if (vestidos.includes(pesquisar)){
        window.location.href="/código vestidos/html/index_vestido.html";
    }

    else if (conjuntos.includes(pesquisar)){
        window.location.href="/código conjuntos/html/index_conjunto.html";
    }
    
    else if (promoções.includes(pesquisar)){
        window.location.href="/código promoções/html/index_promoções.html";
    }
    
    else {
        alert("opção inválida");
    } 
}

function verificarEnter(event){
    if (event.key==="Enter") {
        pesquisa();
    }

}


    function login_usuario(){
       const nome = document.getElementById("nome_usuario").value;
       const senha = document.getElementById("senha_usuario").value;

       if ( nome === "" || senha === ""){
        
        return alert("Por favor, preencha todos os campos!");
       }

       else {
        alert ("Você está logado, bem vindo (a)" + " " + nome + " " + "!")
       }
    }

    document.addEventListener("keydown", verificarEnter);