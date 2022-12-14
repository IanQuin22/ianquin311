let nav = document.getElementById("nav");
let menuicon = document.getElementById("menu-icon");

menuicon.onclick = function(){

    nav.classList.toggle("open")

    if(nav.classList.contains("open")){
        menuicon.innerHTML ="close";  
     }
     else{
         menuicon.innerHTML="menu";
     }

}