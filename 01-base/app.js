// let num = 42; 
// let firstName = `Chulpan`;
// const isProgrammer = true;

// /* CAN DO
// $
// $num
// num$
// _
// _num
// num_
// myNum
// num1
// */

// /* RESTRICTED
// 42num
// my-num
// let, var, const, true, false, alert
// */

// console.log(num+10);
// console.log(num-10);
// console.log(num*10);
// console.log(num/10);

// let num2=num+10;
// console.log(num, num2);

// num=num2-num;
// console.log(num,num2);

const resultElement = document.getElementById('result');
const input1=document.getElementById('input1');
const input2=document.getElementById('input2');
const submitBtn=document.getElementById('submit');
const plusBtn=document.getElementById('plus');
const minusBtn=document.getElementById('minus');
let action = '+';

plusBtn.onclick=function(){
    action='+';
}

minusBtn.onclick=function(){
    action='-';
}
function printResult(result){
    if (result<0){
        resultElement.style.color= 'red';
    }
    else{
        resultElement.style.color='green';
    }
    resultElement.textContent=result;
}

function computeNumbersWithAction(input1, input2,actionSymbol){
    const num1=Number(input1.value);
    const num2=Number(input2.value);
    // if (actionSymbol=='+'){
    //     return num1+num2;
    // } else if (actionSymbol=='-'){
    //     return num1-num2;
    // }

    return actionSymbol=='+' ? num1+num2 : num1-num2;
}

submitBtn.onclick = function(){
    const result = computeNumbersWithAction(input1, input2, action);
    printResult(result);

    // if(action=='+'){
    //     const sum = Number(input1.value) + Number(input2.value);
    //     printResult(sum);
    // }
    // else {
    //     const sum = Number(input1.value) - Number(input2.value);
    //     printResult(sum);
    // }
}


