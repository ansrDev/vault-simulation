const circleNumber = document.querySelector(".circle-number")
const input = document.querySelector(".input-code input")
const btnStart = document.querySelector(".btn-group .start")
const btnRestar = document.querySelector(".btn-group .reset")
const passKey = document.querySelector(".key-wrapper")
const tip = document.querySelector(".tip-number")
const arr = []
let loop


// add event

input.addEventListener("input",function(){
  this.value = this.value.slice(0,4)
})

btnRestar.addEventListener("click",function(){
  reset()
})
btnStart.addEventListener("click",function(){
  simulation()
})

createNumber()

// function state
async function createNumber(){
  for(let i = 0;i<10;i++){
    let span = document.createElement("span")
    span.innerHTML = i
    arr.push(span)
    circleNumber.appendChild(span)
  }
  arr.forEach(async(element,i)=>{
    await delay(100)
    element.style.transform = `rotate(${(i*36)}deg)`
  })
}
function  delay(sec = 1000){
  return new Promise((res,rej)=>{
    setTimeout(()=>{
      res()
    },sec)
  })
}

// function animate
async function show(element,time = 1000){
  element.classList.remove("show")
}
async function show(element,time = 1000){
  element.classList.add("show")
  await delay(time)
  element.classList.remove("show")
}

function changeText(element,text){
  element.innerHTML = text;
}

function disableElement(element){
  element.disabled = !element.disabled
}

// function alogorithm
function simulation(){
    if( input.value.length !=  4 ){
      changeText(tip,"must contain 4 characters")
      show(tip,3000)
     return false 
    }
    disableElement(btnStart)
    let text = input.value
    let i = 0
    passKey.style.transform = `rotate(${(text[i]*36)}deg)`;
     loop = setInterval(()=>{
      i++
      passKey.style.transform = `rotate(${(text[i]*36)}deg)`;
      if(i==text.length){
        clearInterval(loop)
      }
    },3000)
}

function reset(){
    passKey.style.transform = `rotate(${(0*36)}deg)`;
    input.value = ""
    disableElement(btnStart)
    clearInterval(loop)
}

