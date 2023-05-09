/*OPERATORS*/
const ACBtn = document.getElementById('AC')
const CBtn = document.getElementById('C')
const remainderBtn = document.getElementById('remainderBtn')
const divideBtn = document.getElementById('divideBtn')
const plusBtn = document.getElementById('plusBtn')
const minusBtn = document.getElementById('minusBtn')
const multiplyBtn = document.getElementById('multiplyBtn')
const equalBtn = document.getElementById('equalBtn') 

/*NUMBERS*/
const oneBtn = document.querySelector('#oneBtn') 
const twoBtn = document.getElementById('twoBtn') 
const threeBtn = document.getElementById('threeBtn') 
const fourBtn = document.getElementById('fourBtn') 
const fiveBtn = document.getElementById('fiveBtn') 
const sixBtn = document.getElementById('sixBtn')
const sevenBtn = document.getElementById('sevenBtn')
const eightBtn = document.getElementById('eightBtn')
const nineBtn = document.getElementById('nineBtn')
const zeroBtn = document.getElementById('zeroBtn') 

/*DECIMAL*/
const dotBtn = document.getElementById('dotBtn')

/*DISPLAY OPERATION*/
const input1= document.getElementById('input1')
const displayResult = document.getElementById('displayResult')

resultStatus=false;
operatorStatus=false;
let firstOperand;
let secondOperand;
let operator;
let result;

//EQUAL BUTTON, GETTING SECOND OPERAND, OPERATING
equalBtn.addEventListener('click', () => {
    resultStatus=true;
    secondOperand = Number(input1.value.substring(1));
    operate();
    displayResult.innerHTML=`=${result}`;
})
//

//DOBIJANJE PRVOG OPERANDA NAKON SELEKCIJE OPERATORA
plusBtn.addEventListener('click', () => {
    if(resultStatus===true){
        operator='+';
        handleOperator();
        firstOperand=result;
        operatorStatus=true;
    }
    else if(input1.value.slice(-1)==='.'){

    }
    else{
        firstOperand=parseFloat(input1.value)
        operator='+';
        input1.value='+';
        operatorStatus=true;
    }
})

minusBtn.addEventListener('click', () => {
    if(resultStatus===true){
        operator='-';
        handleOperator();
        firstOperand=result;
        operatorStatus=true;
    }
    else if(input1.value.slice(-1)==='.'){
        
    }
    else{
        firstOperand=parseFloat(input1.value)
        operator='-';
        input1.value='-';
        operatorStatus=true;
    }
})

multiplyBtn.addEventListener('click', () => {
    if(resultStatus===true){
        operator='*';
        handleOperator();
        firstOperand=result;
        operatorStatus=true;
    }
    else if(input1.value.slice(-1)==='.'){
        
    }
    else{
        firstOperand=parseFloat(input1.value)
        operator='*';
        input1.value='*';
        operatorStatus=true;
    }
})

divideBtn.addEventListener('click', () => {
    if(resultStatus===true){
        operator='/';
        handleOperator();
        firstOperand=result;
        operatorStatus=true;
    }
    else if(input1.value.slice(-1)==='.'){
        
    }
    else{
        firstOperand=parseFloat(input1.value)
        operator='/';
        input1.value='/';
        operatorStatus=true;
    }
})

remainderBtn.addEventListener('click', () => {
    if(resultStatus===true){
        operator='%';
        handleOperator();
        firstOperand=result;
        operatorStatus=true;
    }
    else if(input1.value.slice(-1)==='.'){
        
    }
    else{
        firstOperand=parseFloat(input1.value)
        operator='%';
        input1.value='%';
        operatorStatus=true;
    }
})
//

dotBtn.addEventListener('click', () => {
    if(input1.value.includes('.') || input1.value.trim()===""){

    }
    else{
        input1.value+='.';
    }
})

oneBtn.addEventListener('click', () => {
    handleResult();
    if(operatorStatus===true){
        if(operator==='+'){
            input1.value='+1';
            operatorStatus=false;
        }
        else if(operator==='-'){
            input1.value='-1';
            operatorStatus=false;
        }
        else if(operator==='*'){
            input1.value='*1';
            operatorStatus=false;
        }
        else if(operator==='/'){
            input1.value='/1';
            operatorStatus=false;
        }
        else if(operator==='%'){
            input1.value='%1';
            operatorStatus=false;
        }
    }
    else{
        input1.value+=1;
    }
})

twoBtn.addEventListener('click', () => {
    handleResult();
    if(operatorStatus===true){
        if(operator==='+'){
            input1.value='+2';
            operatorStatus=false;
        }
        else if(operator==='-'){
            input1.value='-2';
            operatorStatus=false;
        }
        else if(operator==='*'){
            input1.value='*2';
            operatorStatus=false;
        }
        else if(operator==='/'){
            input1.value='/2';
            operatorStatus=false;
        }
        else if(operator==='%'){
            input1.value='%2';
            operatorStatus=false;
        }
    }
    else{
        input1.value+=2;
    }
})



threeBtn.addEventListener('click', () => {
    handleResult();
    if(operatorStatus===true){
        if(operator==='+'){
            input1.value='+3';
            operatorStatus=false;
        }
        else if(operator==='-'){
            input1.value='-3';
            operatorStatus=false;
        }
        else if(operator==='*'){
            input1.value='*3';
            operatorStatus=false;
        }
        else if(operator==='/'){
            input1.value='/3';
            operatorStatus=false;
        }
        else if(operator==='%'){
            input1.value='%3';
            operatorStatus=false;
        }
    }
    else{
        input1.value+=3;
    }
})

fourBtn.addEventListener('click', () => {
    handleResult();
    if(operatorStatus===true){
        if(operator==='+'){
            input1.value='+4';
            operatorStatus=false;
        }
        else if(operator==='-'){
            input1.value='-4';
            operatorStatus=false;
        }
        else if(operator==='*'){
            input1.value='*4';
            operatorStatus=false;
        }
        else if(operator==='/'){
            input1.value='/4';
            operatorStatus=false;
        }
        else if(operator==='%'){
            input1.value='%4';
            operatorStatus=false;
        }
    }
    else{
        input1.value+=4;
    }
})

fiveBtn.addEventListener('click', () => {
    handleResult();
    if(operatorStatus===true){
        if(operator==='+'){
            input1.value='+5';
            operatorStatus=false;
        }
        else if(operator==='-'){
            input1.value='-5';
            operatorStatus=false;
        }
        else if(operator==='*'){
            input1.value='*5';
            operatorStatus=false;
        }
        else if(operator==='/'){
            input1.value='/5';
            operatorStatus=false;
        }
        else if(operator==='%'){
            input1.value='%5';
            operatorStatus=false;
        }
    }
    else{
        input1.value+=5;
    }
})

sixBtn.addEventListener('click', () => {
    handleResult();
    if(operatorStatus===true){
        if(operator==='+'){
            input1.value='+6';
            operatorStatus=false;
        }
        else if(operator==='-'){
            input1.value='-6';
            operatorStatus=false;
        }
        else if(operator==='*'){
            input1.value='*6';
            operatorStatus=false;
        }
        else if(operator==='/'){
            input1.value='/6';
            operatorStatus=false;
        }
        else if(operator==='%'){
            input1.value='%6';
            operatorStatus=false;
        }
    }
    else{
        input1.value+=6;
    }
})

sevenBtn.addEventListener('click', () => {
    handleResult();
    if(operatorStatus===true){
        if(operator==='+'){
            input1.value='+7';
            operatorStatus=false;
        }
        else if(operator==='-'){
            input1.value='-7';
            operatorStatus=false;
        }
        else if(operator==='*'){
            input1.value='*7';
            operatorStatus=false;
        }
        else if(operator==='/'){
            input1.value='/7';
            operatorStatus=false;
        }
        else if(operator==='%'){
            input1.value='%7';
            operatorStatus=false;
        }
    }
    else{
        input1.value+=7;
    }
})

eightBtn.addEventListener('click', () => {
    handleResult();
    if(operatorStatus===true){
        if(operator==='+'){
            input1.value='+8';
            operatorStatus=false;
        }
        else if(operator==='-'){
            input1.value='-8';
            operatorStatus=false;
        }
        else if(operator==='*'){
            input1.value='*8';
            operatorStatus=false;
        }
        else if(operator==='/'){
            input1.value='/8';
            operatorStatus=false;
        }
        else if(operator==='%'){
            input1.value='%8';
            operatorStatus=false;
        }
    }
    else{
        input1.value+=8;
    }
})

nineBtn.addEventListener('click', () => {
    handleResult();
    if(operatorStatus===true){
        if(operator==='+'){
            input1.value='+9';
            operatorStatus=false;
        }
        else if(operator==='-'){
            input1.value='-9';
            operatorStatus=false;
        }
        else if(operator==='*'){
            input1.value='*9';
            operatorStatus=false;
        }
        else if(operator==='/'){
            input1.value='/9';
            operatorStatus=false;
        }
        else if(operator==='%'){
            input1.value='%9';
            operatorStatus=false;
        }
    }
    else{
        input1.value+=9;
    }
})

zeroBtn.addEventListener('click', () => {
    handleResult();
    if(operatorStatus===true){
        if(operator==='+'){
            input1.value='+0';
            operatorStatus=false;
        }
        else if(operator==='-'){
            input1.value='-0';
            operatorStatus=false;
        }
        else if(operator==='*'){
            input1.value='*0';
            operatorStatus=false;
        }
        else if(operator==='/'){
            input1.value='/0';
            operatorStatus=false;
        }
        else if(operator==='%'){
            input1.value='%0';
            operatorStatus=false;
        }
    }
    else{
        input1.value+=0;
    }
})


function operate(){
    if(operator==='+'){
        result=firstOperand+secondOperand;
    }
    else if(operator==='-'){
        result=firstOperand-secondOperand;
    }
    else if(operator==='*'){
        result=firstOperand*secondOperand;
    }
    else if(operator==='/'){
        result=firstOperand/secondOperand;
    }
    else if(operator==='%'){
        result=firstOperand%secondOperand;
    }
}

ACBtn.addEventListener('click', () => {
    input1.value='';
    displayResult.innerHTML='';
})

CBtn.addEventListener('click', () => {
    let inputValueAfterC = input1.value.slice(0, -1);
    input1.value=inputValueAfterC;
})


function handleResult(){
    if(resultStatus===true){
        displayResult.innerHTML='';
        input1.value='';
        resultStatus=false;
    }
}


function handleOperator(){
        input1.value=result+operator;
        displayResult.innerHTML='';
        resultStatus=false;
}
