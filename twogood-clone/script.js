function cookbookAnimation(){
var cookbook = document.querySelector("#cookbook")
var buybtn = document.querySelector("#buynow")
cookbook.addEventListener("mouseenter",function(){
    gsap.to(buybtn,{
        scale:1,
        opacity:1
    })
})
cookbook.addEventListener("mouseleave",function(){
    gsap.to(buybtn,{
        scale:0,
        opacity:0
    })
})
cookbook.addEventListener("mousemove",function(dets){
    gsap.to(buybtn,{
        left:dets.x-50,
        top:dets.y
        
    })
})
}
cookbookAnimation()

function loadingAnimationh1First(){
    gsap.from("#page1 .first",{
        y:130,
        opacity:0,
        delay: 0.1,
       duration: 0.3,
       stagger: 0.2 
    
    })
    
 }
 loadingAnimationh1First()

 function loadingAnimationh1Second(){
    gsap.from("#page1 .second",{
        y:130,
        opacity:0,
        delay: 0.3,
       duration: 0.3,
       stagger: 0.2 
    
    })
    
 }
 loadingAnimationh1Second()

 function loadingAnimation(){
    gsap.from("#page1 #cookbook",{
        y:130,
        opacity:0,
        delay: 0.5,
       duration: 0.3,
       stagger: 0.2 
    
    })
    
 }


 loadingAnimation()
