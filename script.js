let memoryValue;
const numbers=document.querySelectorAll('.Number-button');
const clearButton=document.querySelector('.All-Clear-Button');
const deleteButton=document.querySelector('.Delete-Button');
const operations=document.querySelectorAll('.Operation-button');
const equalsButton=document.querySelector('.Equals-button');
const restTobutton=document.querySelector('.restTo-button');
const factorialButton=document.querySelector('.Factorial-button');
const InverseButton=document.querySelector('.Inverse-button');
const AbsButton=document.querySelector('.Abs-button');
const sqrtButton=document.querySelector('.sqrt-button');
const plusOrminusButton=document.querySelector('.plusOrminus-button');
const logButton=document.querySelector('.Log-button');
const lnButton=document.querySelector('.ln-button');
const MsButton=document.querySelector('.MS-button');
const MrButton=document.querySelector('.MR-button');
const McButton=document.querySelector('.MC-button');
const MplusButton=document.querySelector('.Mplus-button');
const MminusButton=document.querySelector('.Mminus-button');
const PIbutton=document.querySelector('.PI-button');
const exp=document.querySelector('.exp-button');
const squareButton=document.querySelector('.square-button');
const tenButton=document.querySelector('.ten-button');

// Event Listeners
numbers.forEach(number=>{
    number.addEventListener('click',()=>{
    appendNumber(number.innerText)


    
})
})

clearButton.addEventListener('click',()=>{
    clearDisplay();
})

deleteButton.addEventListener('click',()=>{
    deleteNumber();
})

operations.forEach(operation=>{
    operation.addEventListener('click',()=>{
        updateDisplay(operation.innerText);
    })
})

equalsButton.addEventListener('click',()=>{
    evaluateExpression();
})

restTobutton.addEventListener('click',()=>{
    restTocalculation();
})

factorialButton.addEventListener('click',()=>{
    countFactorial();
})
InverseButton.addEventListener('click',()=>{
    Inverse();
})

AbsButton.addEventListener('click',()=>{
    findAbsValue();
})

sqrtButton.addEventListener('click',()=>{
    findSqrt();
})

plusOrminusButton.addEventListener('click',()=>{
    plusOrminusfunction();
})

logButton.addEventListener('click',()=>{
    logFunction();
})

lnButton.addEventListener('click',()=>{
    lnFunction();
})

MsButton.addEventListener('click',()=>{
    memoryValue= document.querySelector('.current-operand').innerHTML;

    memoryStoreFunction(memoryValue);

})
MrButton.addEventListener('click',()=>{
    memoryRecoveryFunction(memoryValue);
})

McButton.addEventListener('click',()=>{
    memoryValue="";
    document.querySelector('.current-operand').innerHTML="";
})

MplusButton.addEventListener('click',()=>{
       
    memoryPlus(memoryValue);
})

MminusButton.addEventListener('click',()=>{

    memoryMinus(memoryValue);
})

PIbutton.addEventListener('click',()=>{
    piFunction();

})

exp.addEventListener('click',()=>{
    expFunction();
})

squareButton.addEventListener('click',()=>{
    findSquare();
})

tenButton.addEventListener('click',()=>{
    tenFunction();
})
// keyboard events
document.addEventListener('keydown',(event)=>{
    
    let keyValue=event.key;
    if(keyValue=="0"||keyValue=="1"||keyValue=="2"||keyValue=="3"||keyValue=="4"||keyValue=="5"||keyValue=="6"||keyValue=="7"||keyValue=="8"||keyValue=="9"||keyValue=="("||keyValue==")"){
        appendNumber(keyValue);
    }
    else if(keyValue=="Backspace"){
        clearDisplay();
    }
    else if(keyValue=="Enter"){
        evaluateExpression();
    }
    else if(keyValue=="Shift"){
        return;
    }
    else if(keyValue=="!"){
        countFactorial();
    }
    else if(keyValue=="+"||keyValue=="-"||keyValue=="**"||keyValue=="*"||keyValue=="/"||keyValue=="%"||keyValue=="."){
        appendNumber(keyValue);
    }
    else if(keyValue=="Delete"){
        deleteNumber();
    }
    else{
        return;
    }


    
})

    




// Functions


function appendNumber(number){

    
    document.querySelector('.current-operand').innerText+=number;
    
}

function clearDisplay(){
    document.querySelector('.current-operand').innerText="";
    document.querySelector('.previous-operand').innerText="";
}

function deleteNumber(){
    let string = document.querySelector('.current-operand').innerHTML
    string = string.slice(0, -1)
    document.querySelector('.current-operand').innerText = string
}

function updateDisplay(operation){
   
    document.querySelector('.current-operand').innerText+=operation;

}

function evaluateExpression(){
    let str=document.querySelector('.current-operand').innerText;
    let ans=eval(str);
    document.querySelector('.current-operand').innerText=ans;
     
}

function restTocalculation(){
    document.querySelector('.current-operand').append("**")
    

    
}

function countFactorial(){
    let num=Number(document.querySelector('.current-operand').innerHTML);
    let temp=1;
    for(let i=num;i>0;i--){
        temp=temp*i;
    }
    document.querySelector('.current-operand').innerText=temp;
}

function Inverse(){
    let num=1/Number(document.querySelector('.current-operand').innerHTML);
    document.querySelector('.current-operand').innerHTML=num;
}

function findAbsValue(){
    evaluateExpression();
    let str1=document.querySelector('.current-operand').innerHTML;
    console.log(str1);
    if(str1.indexOf("-")!=-1){
        str1=str1.substring(1);
    }
    document.querySelector('.current-operand').innerHTML=str1;
    console.log(str1);
}

function findSqrt(){

    document.querySelector('.current-operand').append("**0.5");



}

function plusOrminusfunction(){
    let str=document.querySelector('.current-operand').innerText;
    const arr=Object.assign([],str);
    if(arr.length>2){
        if(arr.at(arr.length-2)=='+'){
            arr.splice(-2,1,"-");
        }
        else if(arr.at(arr.length-2)=='-'){
            arr.splice(-2,1,"+")
        }
        else if(arr.at(arr.length-2)=='*'||arr.at(arr.length-2)=='**'||arr.at(arr.length-2)=='%'||arr.at(arr.length-2)=='/'){
            arr.splice(-1,0,"-");
        }
        else{
            arr.splice(0,0,"-");
        }
    }
    else{
        if(arr.at(0)=='-'){
            arr.splice(0,1);
        }
        else{
            arr.splice(0,0,"-");
        }
    }

    str=arr.toString();
    str=str.replaceAll(',','');
    document.querySelector('.current-operand').innerHTML=str;

    
}

function logFunction(){
    document.querySelector('.current-operand').innerHTML= Math.log10(document.querySelector('.current-operand').innerHTML);
}

function lnFunction(){
    document.querySelector('.current-operand').innerHTML=Math.log2( document.querySelector('.current-operand').innerHTML);
}

function memoryStoreFunction(expression){
    document.querySelector('.current-operand').innerHTML=" ";
}

function memoryRecoveryFunction(expression){
    document.querySelector('.current-operand').innerHTML=expression;
}

function memoryPlus(expression){
    let str= document.querySelector('.current-operand').innerHTML;
    expression=expression+"+"+str;
    document.querySelector('.current-operand').innerHTML=expression;
    
    evaluateExpression();
}

function memoryMinus(expression){
    let str= document.querySelector('.current-operand').innerHTML;
    expression=expression+"-"+str;
    document.querySelector('.current-operand').innerHTML=expression;
    
    evaluateExpression();

}

function piFunction(){
    
    document.querySelector('.current-operand').append("3.14");  
    

}

function expFunction(){
    document.querySelector('.current-operand').append("2.718");  
    
    
}

function findSquare(){
    document.querySelector('.current-operand').append("**2");
}

function tenFunction(){
    document.querySelector('.current-operand').append("10**");

}