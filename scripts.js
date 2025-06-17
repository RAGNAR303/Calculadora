

// expressão para mostrar numero no input
function adicionarCaracter(caracter){
    const input = document.querySelector(".display").value
    document.querySelector(".display").value = input + caracter
console.log(input);
}

// expressão para limpar a tela
function limparTela(){
    document.querySelector(".display").value = ""
}


// espressão para fazer o calculo
function calcular(){
if( document.querySelector(".display").value === ""){
    alert("Por favor, insira uma expressão para calcular")
}else{
    const input = document.querySelector(".display").value
document.querySelector(".display").value = eval(input)
}
}

function inverte(){
    const input = document.querySelector(".display").value

    document.querySelector(".display").value = input * -1
}