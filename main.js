var form = document.getElementById("form")
const imgAprovado = '<img src="images/aprovado.png" alt="Festa"> '
const imgReprovado = '<img src="images/reprovado.png" alt="triste"> '


const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'

const notaMinima = Number(prompt('Digite o valor da nota Mínima: '))

let linhas = ''
const atividade = []
const notas = []

form.addEventListener('submit', function(e){
   e.preventDefault(); //remove  o comportamento de atuliazar a página

    adicionarLinha()
    atualizaTabela()
    atulizeMedia()

})

function adicionarLinha(){
    
    const inputNomeAtividade = document.getElementById('nome');
    const inputNotaAtividade = document.getElementById('nota');
    
    
    //inpede que se tenha atividades com o mesmo nome
        if (atividade.includes(inputNomeAtividade.value)){
            alert(`A Atividade: ${inputNomeAtividade.value}, já foi inserida`)   
        }else{ //criação de linhas na tabela

        atividade.push(inputNomeAtividade.value);
        notas.push(Number(inputNotaAtividade.value));
        

        let linha = '<tr>'; 
        linha +=  `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        
                
        // se  a nota da atividade for mair que  7 vai ser aprovado, se não vaoi ser reprovado
        linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>';
        
        linhas += linha;}
        
    

    // limpa os campos no formulário
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}




function atualizaTabela(){
    // atuliza a tabela adicionando novas linhas
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atulizeMedia(){
    const mediaFinal = calculoMedia();

    document.getElementById('media-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-resultado').innerHTML = mediaFinal >= 7 ? spanAprovado : spanReprovado ;

    
}

function calculoMedia(){
    let somaDasNotas = 0;
    
    for (let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i];
    }

    let m = somaDasNotas / notas.length;

    return m

}

