const hamBtn = document.querySelector('.burger')
const header = document.querySelector('header')
const menuList = document.querySelector('.menu')
const mainHeading = document.querySelector('.content_heading')
const subHeading = document.querySelector('.sub_heading')
const bgImage = document.querySelector('.bg_image')
const mainBody =document.querySelector('body')
hamBtn.addEventListener('click',function (ev)  {

    this.classList.toggle('open')
    menuList.classList.toggle('open')
    header.classList.toggle('header_position')
    mainBody.classList.toggle('freeze')
      
})


window.addEventListener('load',function(){
   
    mainHeading.classList.add('enter')
})

window.addEventListener('load',()=>{
    setTimeout(()=>{
        subHeading.classList.add('enter_sub')
    },2000)
})

window.addEventListener('scroll',()=>{
   
    const scrollY = window.scrollY 
    
      console.log(scrollY)
      if(scrollY  > 100){
       setTimeout(()=>{
          console.log("hai")
       },2000)
      }
})

