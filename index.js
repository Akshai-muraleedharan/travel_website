const hamBtn = document.querySelector('.burger')
const header = document.querySelector('header')
const menuList = document.querySelector('.menu')
const mainHeading = document.querySelector('.content_heading')
const subHeading = document.querySelector('.sub_heading')
const bgImage = document.querySelector('.bg_image')
const mainBody =document.querySelector('body')
const imageContent = document.querySelector('.bg_content')
const imageSubContent = document.querySelector('.bg_subContent')
const outPutMainPage = document.querySelector('#outPut')


hamBtn.addEventListener('click',function (ev)  {

    this.classList.toggle('open')
    menuList.classList.toggle('open')
    header.classList.toggle('header_position')
    mainBody.classList.toggle('freeze')
      
})

// fetch data functions

function fetchData(data){
  let outPut = ''
  let slicedData = data.slice(0,4)

 

  slicedData.forEach((item) => {
       outPut += `
       <div class="card_body">
       <img src=${item.image} alt=${item.name} class="card_img"/>
       <h3 class="card_title">${item.name}</h3>
       </div>
       `
  })

  outPutMainPage.innerHTML = outPut
 
}


window.addEventListener('load',function(){
    mainHeading.classList.add('enter')
    fetchData(details)
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

