const display = document.querySelector('.calculator-input');
const keys = document.querySelector('.calculator-keys');

let displayValue = '0';
let firstValue = null;
let operator = null;
let waitForSecondValue = false;

function updateDisplay(){
    display.value = displayValue;
}

updateDisplay()

keys.addEventListener('click', (e)=>{
    const element = e.target;
    if(!element.matches('button')){return;}


    if(element.classList.contains('operator')){
        handleValue(element.value);
        updateDisplay()
        return;
    }

    if(element.classList.contains('decimal')){
        inputDecimal()
        updateDisplay()
        return;
    }

    if(element.classList.contains('clear')){
        clear()
        updateDisplay()
        return;
    }

    inputNumber(element.value);
    updateDisplay();
})
function handleValue(nextOperator){
    const value = parseFloat(displayValue);
    if(firstValue === null){
        firstValue = value;
    }
    else if (operator){
        const result = calculate(firstValue, value, operator);

        displayValue = String(result);
        firstValue = result;
    }
    waitForSecondValue = true;    
    operator = nextOperator;
}
function calculate(firstValue, secondValue, operator){
    switch(operator){
        case '+':
            return firstValue + secondValue;
        case '-':
            return firstValue - secondValue;
        case 'x':
            return firstValue * secondValue;
        case '÷':
            return firstValue / secondValue;
        default:
            return secondValue;
    }
}


function inputNumber(num){
    if(waitForSecondValue){
        displayValue = num;
        waitForSecondValue = false;
    }
    else{
        displayValue = displayValue === '0' ? num : displayValue + num;
    }
}

function inputDecimal(){
    if(!displayValue.includes('.')){
        displayValue += '.';
    }
}

function clear(){
    displayValue = '0';
}