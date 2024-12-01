const header = document.querySelector('header')
const hamBtn = document.querySelector('.burger')
const menuList = document.querySelector('.menu')
const mainBody =document.querySelector('body')
const destinationName = document.getElementById('place_Name')
const outPutList = document.getElementById('outPutList')
hamBtn.addEventListener('click',function ()  {

    this.classList.toggle('open')
    menuList.classList.toggle('open')
    header.classList.toggle('header_position')
    mainBody.classList.toggle('freeze')
      
})

function fetchData(data) {

    const productUrl = new URLSearchParams(window.location.search)

    const productId = productUrl.get('id')
    const productIdNumber = parseInt(productId)
    let outPut = ''
const foundItem = data.find(item => item.id === productIdNumber );


console.log(foundItem)

destinationName.textContent = `Welcome to ${foundItem.country}`

    outPut += `
    <div class="img_container">
    <img  src=${foundItem.image} loading="lazy" alt=${foundItem.name} />
    </div>

    <div class="detail_container">
       <h2>Destination : ${foundItem.name}</h2>
       <p> ${foundItem.description}</p>

       <h3>Package Details</h3>
       
    </div>
 `
    
 outPutList.innerHTML = outPut



}






window.addEventListener('load',function(){

   
 fetchData(details)
})