const addressbtn = document.querySelector('#address-form')
const addressclose = document.querySelector('#address-close')

addressbtn.addEventListener("click",function(){
    document.querySelector('.address-form').style.display = "flex"
})
addressclose.addEventListener("click",function(){
    document.querySelector('.address-form').style.display = "none"
})
//slider----
const rightbtn = document.querySelector('.fa-chevron-right')
const leftbtn = document.querySelector('.fa-chevron-left')

const imgnumber = document.querySelectorAll('.slider-content-left-top img')
let index = 0

rightbtn.addEventListener("click",function(){
    index = index+1
    if(index>imgnumber.length-1){
        index = 0
    }
    document.querySelector(".slider-content-left-top").style.right = index * 100+"%"
})

leftbtn.addEventListener("click",function(){
    index = index-1
    if(index<=0){
        index = imgnumber.length-1
    }
    document.querySelector(".slider-content-left-top").style.right = index * 100+"%"
})

// slider 1----

const imgnumberli = document.querySelectorAll('.slider-content-left-bottom li')

imgnumberli.forEach(function(slide1,index){
    slide1.addEventListener("click",function(){
        removeactive()
        document.querySelector(".slider-content-left-top").style.right = index * 100+"%"
        slide1.classList.add("active")
    })
})

function removeactive(){
    let imgactive = document.querySelector('.active')
    imgactive.classList.remove("active")
}