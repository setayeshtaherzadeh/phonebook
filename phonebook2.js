//element haie DOM ro ke bahashun kar darim to samte script js entekhab mikonim 
const firstValue = document.querySelector('.C')
const secondValue = document.querySelector('.F')
const converter = document.querySelector('#converter')
const result = document.querySelector('.result')
const convertButton = document.querySelector('.convertButton')
const resetButton = document.querySelector('.resetButton')
const changeButton = document.querySelector('.changeButton')


//agar input khali bud khata bede agar cherto pert vared karde budan khata bde tabdil ham bokone 
function convert(){
  if(converter.value===''){
     result.innerHTML="enter something"
     result.style.color= 'red'

}else if(isNaN(converter.value)){
    result.innerHTML="enter number"
    result.style.color='red'
}else{
     if(firstValue.innerHTML==="°C"){ // c to f
       let resultValue =(converter.value*1.8)+32
       result.innerHTML= converter.value +' C is  ' + resultValue + ' F'
     }
     else{
        let resultValue =(converter.value - 32)*5/9
        result.innerHTML=converter.value + 'F is  ' + resultValue + ' C'  
     }}}


function reset(){
result.innerHTML=''
//converter.setAttribute('value','')
converter.value=''
}



function change(){
    if(firstValue.innerHTML==="°C"){
         firstValue.innerHTML="°F"
         secondValue.innerHTML="°C"
         converter.setAttribute('placeholder','°F')
         document.title='SalzLearn| Js | °F to °C '
    }else{
         firstValue.innerHTML="°C"
         secondValue.innerHTML="°F"
    //converter.setAttribute('placeholder','°C')
         document.title='SalzLearn| Js | °C to °F'
}}


convertButton.addEventListener('click', convert)
resetButton.addEventListener('click',reset)
changeButton.addEventListener('click',change)
