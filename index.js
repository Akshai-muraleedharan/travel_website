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
const footerEle = document.getElementById('footer_ele')

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
       <a href="./singlePage.html?id=${item.id}" class="card_body">
       <div >
       <img src=${item.image} alt=${item.name} loading="lazy" class="card_img"/>
       <h3 class="card_title">${item.name}</h3>
       </div>
       </a>
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


window.addEventListener('scroll',()=>{
   
    const scrollY = window.scrollY 
    
      if(scrollY  > 200){
      
        imageContent.classList.add("enter_bg_content")
        imageSubContent.classList.add('enter_bg_Subcontent')
      
      }
})

