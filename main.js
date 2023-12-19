const root = document.querySelector('#root')
const btnAdd = document.querySelector('.btn-add')
const sumInfo=document.querySelector('.show-sum')

let tolal=0

function Counter(){
    let counterNum = 0
    const makeElement =(tag, attr_n, attr_v, counter) => {
          let output = document.createElement(tag)
          output.setAttribute(attr_n , attr_v)
          output.textContent = counter
          return output    
    }
    // render

    const updateCounter =(n) =>{
        if(counterNum + n < 0){
            return
        }
        counterNum += n
        tolal += n
        number.textContent = counterNum
        sumInfo.textContent = `Sum = ${tolal}`
    }
    const deleteCounter = (e) =>{
        updateCounter(-counterNum)
        e.target.closest('.counter').remove()      
    }
    
    const counter  = makeElement('div','class','counter','' )
    const btnInc   = makeElement('button','class','btn-inc','+')
    const number   =  makeElement('h3','class','number','0')
    const btnDec   = makeElement('button','class','btn-dec','-')
    const btnClr   = makeElement('button','class','btn-clr','0')
    const btnDel = makeElement('button','class','btn-del','x')
    
    btnInc.addEventListener('click',() => updateCounter(1) )
    btnDec.addEventListener('click',() => updateCounter(-1) )
    btnClr.addEventListener('click',() => updateCounter(-counterNum) )
    btnDel.addEventListener('click',deleteCounter)


    counter.append(btnInc,number,btnDec,btnClr,btnDel)
   

    return counter
} 

// root.append(Counter())

const hdlAddCounter = () =>{
    root.append(Counter())
}
btnAdd.addEventListener('click', hdlAddCounter)