const header = document.querySelector('header')
const hamBtn = document.querySelector('.burger')
const menuList = document.querySelector('.menu')
const mainBody =document.querySelector('body')
let outPutList = document.querySelector('#outPut')
const footerEle = document.getElementById('footer_ele')


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
     <a href="./singlePage.html?id=${item.id}" class="card_body">
     <div >
       <img src=${item.image} alt=${item.name} loading="lazy" class="card_img"/>
       <h3 class="card_title">${item.name}</h3>
       </div>
       </a>
    `
   })

   outPutList.innerHTML = outPut
  

}


let footerList = `
        
<footer>
<div>
<h2 class="footer_logo"> Travel Co.</h2>
   
     <nav style="display: flex; margin:20px 0px 20px 0px">
        <ul class="footer_content_list" style="display: flex; gap: 10px; justify-content: center; width: 100%;list-style:none;">
          <li ><a class="footer_content" href="./privacyPolicy.html">Privacy Policy</a></li>
          <li ><a class="footer_content" href="./termsAndService.html">Terms of Service</a></li>
          <li ><a class="footer_content" href="/contact">Contact</a></li>
          <li ><a class="footer_content" href="./sitemap.html">Site Map</a></li>
        </ul>
      </nav>
</div>

       <p style="color: #fff; text-align: center; font-size: 12px;">&copy; 2024 Your Company. All rights reserved.</p>
 </footer>
`

    setTimeout(()=>{
        
footerEle.innerHTML = footerList
    },1000)


window.addEventListener('load',function(){

   
    fetchData(details)
})
