// var slideItem = document.querySelectorAll(".slider-item");
// var slideLeft = document.querySelector(".slider-left");
// var sliderRight = document.querySelector(".slider-right");

// var current = 0;

// function reset(){
//     for(var i = 0; i < slideItem.length; i++){
//         slideItem[i].style.display = 'none';
//     }
// }
// function startSlide(){
//     reset();
//     slideItem[0].style.display="block";
// }
// startSlide();
// function leftSlide(){
//     reset();
//     slideItem[current-1].style.display = "block";
//     current--;
// }
// function rightSlide(){
//     reset();
//     slideItem[current+1].style.display = "block";
//     current++;
// }
// slideLeft.addEventListener('click',function(){
//     if(current===0){
//         current=slideItem.length;
//     }
//     slideLeft();
// })
// sliderRight.addEventListener('click',function(){
//     if(current===slideItem.length-1){
//         current= -1;
//     }
//    rightSlide();
// })


var slideItem = document.querySelectorAll(".slider-item");
var slideLeft = document.querySelector(".slide-left");
var slideRight = document.querySelector(".slide-right");
var current = 0;

function reset(){
    for(var i=0; i < slideItem.length; i++){
        slideItem[i].style.display = "none";
    }
}
function startSlide(){
    reset();
    slideItem[0].style.display = "block";
}
startSlide();
setInterval(function(){
    reset();
    if(current === slideItem.length -1){
                current = -1;
            }
    current ++;
    slideItem[current].style.display = "block";
},700)
function leftSlide(){
    reset();
    slideItem[current - 1].style.display = "block";
    current --;

}
function rightSlide(){
    reset();
    slideItem[current + 1].style.display = "block";
    current++;
}
slideLeft.addEventListener("click",function(){
    if(current === 0){
        current = slideItem.length;
    }
    leftSlide();
})
slideRight.addEventListener("click",function(){
    rightSlide();
    if(current === slideItem.length -1){
        current = -1;
    }
})
