// console.log("hello")


// let boxes = document.getElementsByClassName("box")
let boxes = document.querySelector(".container").children
console.log(boxes)

function GetrandomColor(){
    let val1 = Math.ceil(Math.random() * 200)
    let val2 =  Math.ceil(Math.random() * 160)
    let val3 =  Math.ceil(Math.random() * 120)
    return `rgba(${val1}, ${val2}, ${val3})`
}


document.getElementById('btn').addEventListener('click',  function(){

    Array.from(boxes).forEach((e)=>{
       e.style.backgroundColor = GetrandomColor()
    })
})
// console.log(GetrandomColor())