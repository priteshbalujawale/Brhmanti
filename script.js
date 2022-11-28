// animation on page first time scroll
function reveal() {
  var reveals = document.querySelectorAll(".section");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("transition-section");
    } //else {
    //   reveals[i].classList.remove("active-section");
    // }
  }
}
window.addEventListener("scroll", reveal);


// change parent baackground image according to parrent
const interval=setInterval(function(){
let slider_bg=document.querySelector('.carousel-item.active img').src;
document.querySelector('.slider-sec').setAttribute("style", `background-image:url(${slider_bg})`);
});






// let link_dist=document.querySelectorAll('.link_dist')
// for(let i=0; i<link_dist.length; i++){

//     link_dist[i].addEventListener('click' , function(){
//       const addClass=document.getElementById(`link_0${i}`).classList.add('show');
      
//       let dist_row=document.querySelectorAll('.dist-row');
//       for(let j=0; j<dist_row.length; j++){

//         if(dist_row[j].classList.contains('show') && dist_row[j] ===link_dist[i] ){
//           document.getElementById(`link_0${j}`).classList.remove('show');
//         }
//     }})
      
//       };
    
   
let link_dist=document.querySelectorAll('.link_dist')
for(let i=0; i<link_dist.length; i++){

    link_dist[i].addEventListener('click' , function(){
      
      let dist_row=document.querySelectorAll('.dist-row');
      for(let j=0; j<dist_row.length; j++){

        if(dist_row[j].classList.contains('show')){
          document.getElementById(`link_0${j}`).classList.remove('show');
          link_dist[j].classList.remove('active');
        }
        const addClass=document.getElementById(`link_0${i}`).classList.add('show');
    link_dist[i].classList.add('active');
      
    }})
      
      };


// Mobile Menu 
const mobileMenu=document.getElementById('mobile-menu');
const menu=document.getElementById('menu');
const closeBtn=document.getElementById('close-btn');
mobileMenu.addEventListener('click',function(){
  menu.classList.toggle('active');
  mobileMenu.classList.toggle('active');
})
closeBtn.addEventListener('click', function(){
  menu.classList.remove('active');
  mobileMenu.classList.toggle('active');
})
//flip on click in  obile view
// const flipBtn=document.querySelectorAll('.flip-btn');
// const closeFlipBtn=document.querySelectorAll('.close-flip-btn');
// const flipInner=document.querySelectorAll('.flip-inner')
// for(let i=0;i<flipBtn.length;i++){
//   flipBtn[i].addEventListener('click',function(){
//   flipInner[i].classList.toggle('flip');
//   })
//   closeFlipBtn.addEventListener('click',function(){
//     flipInner[i].classList.toggle('flip');
//   })
// }