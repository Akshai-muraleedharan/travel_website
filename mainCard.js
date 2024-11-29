const header = document.querySelector('header')
const hamBtn = document.querySelector('.burger')
const menuList = document.querySelector('.menu')
const mainBody =document.querySelector('body')
let outPutList = document.querySelector('#outPut')

hamBtn.addEventListener('click',function ()  {

    this.classList.toggle('open')
    menuList.classList.toggle('open')
    header.classList.toggle('header_position')
    mainBody.classList.toggle('freeze')
      
})

function fetchData(data){
    let outPut = ''
   let slicedData = data.slice(5,data.length)

   slicedData.forEach((item)=>{
    
    outPut += `
     <div class="card_body">
       <img src=${item.image} alt=${item.name} loading="lazy" class="card_img"/>
       <h3 class="card_title">${item.name}</h3>
       </div>
    `
   })

   outPutList.innerHTML = outPut
  

}


window.addEventListener('load',function(){

   
    fetchData(details)
})
