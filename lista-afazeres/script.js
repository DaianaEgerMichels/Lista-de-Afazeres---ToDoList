function criarCampos(tarefa){
   
    var li = document.createElement('li');
    var checkBox = document.createElement('input');
    li.appendChild(checkBox); 
    li.type = "none";
    li.classList = "listaItem";
    
    checkBox.type = "checkbox";
    checkBox.className = "check";
 
    var texto = document.createElement('span');
    texto.innerHTML = tarefa
    var tarefa = document.getElementById('novoItem').value;
    li.appendChild(texto);
    
    var botao = document.createElement('button');
    botao.classList = "excluirItem";
    botao.innerHTML = 'X';
    li.appendChild(botao);
    botao.addEventListener('click', function(){ var confirmacao =
     window.confirm('Tem certeza que deseja excluir?');
    if(confirmacao){
       li.remove()
       salvarLista()
    }})
    var ul = document.querySelector('#listaUl');
    ul.appendChild(li);

 salvarLista()
}

document.querySelector('#btn').addEventListener('click', function (){
    if(document.getElementById('novoItem').value.trim() == ''){
        alert('Campo vazio, favor inserir um texto!');
        return
    }
    criarCampos(document.getElementById('novoItem').value)
    document.getElementById('novoItem').value = null; 
});


function salvarLista(){
    let afazeres = document.querySelectorAll("#listaUl li span");
    let itensLista = [];

    for(let tarefa of afazeres){
        itensLista.push(tarefa.innerText);
    }
    localStorage.setItem("Local", JSON.stringify(itensLista));
}


function carregarLista(){
    let itensLista = localStorage.getItem("Local");

    if(!itensLista){
        window.alert("Não há itens salvos!");
        return
    }

    itensLista = JSON.parse(itensLista);

    for (var tarefa of itensLista){
        criarCampos(tarefa);
    }
}
carregarLista()
