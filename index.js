const plusIcons = document.querySelectorAll(".add");
    plusIcons.forEach((icon) => {
      icon.addEventListener("click", function () {
        const divContent = icon.parentNode.nextElementSibling;
        divContent.classList.toggle("visible");
      });
    });
 
 const cross=document.getElementById("cross")
 console.log(cross)  
 cross.addEventListener("click",()=>{
    history.back()
 })