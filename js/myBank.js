let sum = document.getElementById("sum")
let btn = document.getElementById("btn");
let btn1 = document.getElementById("btn1");
let inp = document.getElementById("inp");
let transaction = document.getElementById("btn2");
let block_transaction = document.getElementById("block_card_transaction")
let answer = document.getElementById("answer")
let card = document.getElementById("block_card");
let veriable = 500;
sum.innerHTML = veriable;

btn.onclick = function() {
      

    if(veriable == 0){

        answer.innerHTML = "Поповніть баланс картки"

    }

    else if(inp.value > veriable){

        answer.innerHTML = "На Вашій карці не достаньо коштів"



    }
    else if(inp.value <= veriable){

        veriable = veriable - inp.value;

        sum.innerHTML = veriable;

    }
    

}
btn1.onclick = function() {

    let tax = Number(inp.value) / 100 * 15;

    if(isNaN(inp.value)){

        answer.innerHTML = "Введіть суму на яку хочете поповнити Ваш рахунок";

    }
    else{

        veriable = (veriable + Number(inp.value)) - tax;

        sum.innerHTML = veriable;
        answer.innerHTML = "Податок 15% із суми поповнення балансу";



    }

}

transaction.onclick = function(){

    if(block_transaction.style.display == ""){

        block_transaction.style.display = "block"

    }
    else if(block_transaction.style.display == "block"){

        block_transaction.style.display = ""

    }

}


card.onclick = function(){

    window.location.href = './myCard.html';

}

