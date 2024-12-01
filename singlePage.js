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
    <div class="grid_container">
    <div class="img_container">
             <img  src=${foundItem.image} loading="lazy" alt=${foundItem.name} />
                 <h2 class="tablet_destination">Destination : ${foundItem.name}</h2>
                    <p class="tablet_description"> ${foundItem.description}</p>
    </div>

    <div class="detail_container">
            <h2 class="mobile_destination">Destination : ${foundItem.name}</h2>
       
                 <p class="mobile_description"> ${foundItem.description}</p>

                 <h3 class="package_head">Package Details</h3>

             <div class="package_container"> 
                 <h3>${foundItem.tourPackage.days}days</h3>
                 <h3>₹${foundItem.tourPackage.priceInINR}</h3>
             </div>
       
                <h4 class="package_members"> Members : ${foundItem.tourPackage.members}</h4>

  

    <div class="hotel_container_mobile">
            <h2 class="hotel_Head">Your stay</h2>
                 <img class="hotel_image" src=${foundItem.tourPackage.image} loading="lazy" alt=${foundItem.tourPackage.hotel}/>
            <h3 class="hotel_name"> ${foundItem.tourPackage.hotel}</h3>
    </div>

    </div>

    </div>

    
 `
    
 outPutList.innerHTML = outPut



}






window.addEventListener('load',function(){

   
 fetchData(details)
})