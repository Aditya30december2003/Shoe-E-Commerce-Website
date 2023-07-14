
// const wrapper=document.querySelector(".wrapper")
// const menuItem=document.querySelector(".pointer")

let slider=document.querySelectorAll(".slider")
var counter=0;
let display=document.querySelectorAll('.image')
let pointer=document.querySelectorAll('.pointer')

slider.forEach((slider,index)=>{
    slider.style.left= `${index*100}%`
})
function toAir(){
    counter=0;
    slideImage();
}
function toJordan(){
    counter=1;
    slideImage();
}
function toBlazer(){
    counter=2;
    slideImage();
}
function toCrater(){
    counter=3;
    slideImage();
}
function toHippie(){
    counter=4;
    slideImage();
}

function slideImage(){
    slider.forEach((slider)=>{
        slider.style.transform=`translateX(-${counter*100}%)`
    })
}


pointer.forEach((pointer)=>{
    pointer.addEventListener("click",(e)=>{
       let imageID=e.currentTarget.dataset.id;
       display.forEach((display)=>{
        let displayId=display.getAttribute('id')
        if(displayId==imageID){
            display.classList.add('display')
        }
        else{
            display.classList.remove('display')
        }
        })
    })
})

let shoeImages=document.querySelectorAll('.images')
let button=document.querySelectorAll('.color-button')
let shoeColor=document.querySelectorAll('.shoe-color')

button.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        let shoeId=e.currentTarget.dataset.id
        shoeColor.forEach((shoeColor)=>{
            let shoeC=shoeColor.getAttribute('id')
            if(shoeC==shoeId){
                shoeColor.style.opacity=1
            }
            else{
                shoeColor.style.opacity=0;
            }
        })
    })
})

// let sizeButton=document.querySelectorAll('.size-button')

// sizeButton.forEach((sizeButton)=>{
//     sizeButton.addEventListener("click",(e)=>{
//         e.currentTarget.style.color="white";
//         e.currentTarget.style.backgroundColor="black";
//     })
// })
