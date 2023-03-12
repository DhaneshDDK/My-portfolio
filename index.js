let menuBtn = document.querySelector('.menu');
let menuBox = document.querySelector('.menuBox');
let overlay = document.querySelector('.overlay');
let over = document.querySelector('.over');

let cards = document.querySelectorAll('.card');
let mcards = document.querySelectorAll('.mcard');
let cardNumbers = document.querySelectorAll('.value');
let projectSectionHeight = document.querySelector('#project');

let modal1 = document.querySelector('.modal1');

function openModal1(){
    modal1.classList.add("active");
}

function closeModal1(){
    modal1.classList.remove("active");
}

let socialBtn = document.querySelector('.socialBtn');
let social = document.querySelector('.social');

socialBtn.addEventListener('click',()=>{
   social.style.width = 35 + 'em';
   over.classList.add("overlayactive")
});

over.addEventListener('click',()=>{
  over.classList.remove("overlayactive");
  social.style.width = 0 + '%';
  modal1.classList.remove("active");
});



// console.log(window.innerWidth)

(function() {
  window.onresize = displayWindowSize;
  window.onload = displayWindowSize;

  function displayWindowSize() {
  
    if(window.innerWidth > 768) projectSectionHeight.style.height = (cards.length)*600 + 140 + "px";
    else projectSectionHeight.style.height = (mcards.length)*90 + 140 + "px";
  };


})();


// console.log((cards.length)*600 + 140);

cards.forEach((card,idx)=>{
   if(idx&1){
    card.classList.add('right');
   }else{
     card.classList.add('left');
   }
   let val = (idx)*600;
   card.style.top = val + "px" ;
   cardNumbers[idx].innerText = (idx<=9) ? '0' + (idx+1) : idx+1;
});
mcards.forEach((card,idx)=>{
   if(idx&1){
    card.classList.add('right');
   }else{
     card.classList.add('left');
   }
   let val = (idx)*100;
   card.style.top = val + "px" ;
  //  cardNumbers[idx].innerText = (idx<=9) ? '0' + (idx+1) : idx+1;
});

menuBtn.addEventListener('click',()=>{
   openModal();
})

function openModal(){
    menuBox.classList.remove("disable");
    overlay.classList.add("overlayactive")
}

function closeModal(){
    menuBox.classList.add("disable");
    overlay.classList.remove("overlayactive")
}