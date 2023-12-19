const counter = document.querySelector('.counter')
const btnInc = document.querySelector('.btn-inc')
const btnDec = document.querySelector('.btn-dec')
const btnClr = document.querySelector('.btn-clr')
const number = document.querySelector('.number')


let countNum = 0

function updateCaunter(n){
    if(countNum +n <0){
        return
    }
    countNum += n
    number.textContent = countNum

}

btnInc.addEventListener('click', ()=>  updateCaunter(1))
btnDec.addEventListener('click' , ()=> updateCaunter(-1))
btnClr.addEventListener('click', ()=>updateCaunter(-countNum))
