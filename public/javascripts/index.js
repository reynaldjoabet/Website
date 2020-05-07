const navSlide=()=>{
    const burger= document.querySelector('.burger');
    const navigation= document.querySelector('.navigation-menu');
    const navigationMenu=document.querySelectorAll('.navigation-menu li');
    
burger.addEventListener('click',()=>{
    // Toggle navigation
navigation.classList.toggle('navigation-active');

// Animate navigation links
// making use of the index, to help in animate each link/display each link and to also calculate the delay between the elements
// have an intial delay of 1.2 seconds
navigationMenu.forEach((link,index)=>{
    if(link.style.animation){
        link.style.animation=''
    }
    else
    {
        link.style.animation=`navigationMenuFade 0.5s ease forwards ${index/7 +1}s`; 
    }
    
     });

     // burger Animation
    burger.classList.toggle('toggle');


});



}

  
    navSlide();
