const hamBtn = document.querySelector('.burger')
const header = document.querySelector('header')
const menuList = document.querySelector('.menu')
const mainHeading = document.querySelector('.content_heading')
const subHeading = document.querySelector('.sub_heading')
const bgImage = document.querySelector('.bg_image')
const mainBody =document.querySelector('body')
const imageContent = document.querySelector('.bg_content')
const imageSubContent = document.querySelector('.bg_subContent')



hamBtn.addEventListener('click',function (ev)  {

    this.classList.toggle('open')
    menuList.classList.toggle('open')
    header.classList.toggle('header_position')
    mainBody.classList.toggle('freeze')
      
})


window.addEventListener('load',function(){
   console.log(details)
    mainHeading.classList.add('enter')
})

window.addEventListener('load',()=>{
    setTimeout(()=>{
        subHeading.classList.add('enter_sub')
        
    },2000)
})

window.addEventListener('scroll',()=>{
   
    const scrollY = window.scrollY 
    
      if(scrollY  > 200){
       setTimeout(()=>{
        imageContent.classList.add("enter_bg_content")
        imageSubContent.classList.add('enter_bg_Subcontent')
       },1000)
      }
})

