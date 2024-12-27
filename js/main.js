const navBar=document.querySelector(".navbar");
window.addEventListener("scroll",(e)=>{
  if(window.scrollY>0){
    navBar.classList.add("bg-nav");
  }
  else{
    navBar.classList.remove("bg-nav");
  }
})