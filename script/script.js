let womanPrice = document.getElementsByClassName('woman-price')[0]
let womanResult = document.getElementsByClassName('woman-result')[0]
let wQuantity = document.getElementsByClassName('woman-quantity')[0]
let mQuantity = document.getElementsByClassName('men-quantity')[0]
let menPrice = document.getElementsByClassName('men-price')[0]
let menResult = document.getElementsByClassName('men-result')[0]
let calc = document.getElementsByTagName('button')[1]
let mainResult = document.getElementsByClassName('total')[0]
let order = document.getElementsByClassName('confirm')[0]


//order.addEventListener('click', orderSubmit)

function orderSubmit(){
    alert('Your order has been confirmed')
}
wQuantity.addEventListener('input', womenCalc)
mQuantity.addEventListener('input', menCalc)

function womenCalc() {
   let wTotal = parseFloat(womanPrice.innerHTML) * parseFloat(wQuantity.value)
   
   if (!isNaN(wTotal)) {
    womanResult.innerHTML = wTotal.toFixed(2)
    }else{
     womanResult.innerHTML = "0.00"
    }
}

function menCalc() {
   let mTotal = parseFloat(menPrice.innerHTML) * parseFloat(mQuantity.value)
   
   if (!isNaN(mTotal)) {
    menResult.innerHTML = mTotal.toFixed(2)
    }else{
        menResult.innerHTML = "0.00"
    }
}

calc.addEventListener('click', calculate)


function calculate(){ 
   let menVal = parseFloat(menResult.innerHTML)
   let womanVal = parseFloat(womanResult.innerHTML)

   if (!isNaN(menVal) || !isNaN(womanVal)){
    mainResult.innerHTML = (menVal + womanVal).toFixed(2)
   }else{
    mainResult.innerHTML = '0.00'
   }
   
}
