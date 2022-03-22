const menuBtn=document.querySelector('.toggle');
let menuOpen=false;
menuBtn.addEventListener('click' ,()=>{
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen=true;
    }else{
        menuBtn.classList.remove('open');
        menuOpen=false;
    }
});

const imgBtn=document.querySelector('#toggle-img');
const textEffect=document.querySelector('.content-description');
let imgOpen =false;
imgBtn.addEventListener('click',()=>{
    if(!imgOpen){
        imgBtn.classList.add('open');
        textEffect.classList.add('open');
        imgOpen=true;
    }else{
        imgBtn.classList.remove('open');
        textEffect.classList.remove('open');
        imgOpen=false;
    }
});