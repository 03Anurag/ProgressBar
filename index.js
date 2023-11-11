const circle=document.querySelectorAll('.circle');
const prev=document.querySelector('.prev');
const next=document.querySelector('.next');

let bar=0;
let index=0;

next.addEventListener('click',()=>{
    bar=bar+33;
    index++;
    if(bar>99){
        bar=99;;
        index=3
    }
    const pgbar=document.querySelector('.progress');
    pgbar.style.width= bar + '%';

    const activecircle=circle[index];
    activecircle.classList.add('active');
    
});

prev.addEventListener('click',()=>{
    bar=bar-33;
    if(bar<33){
        bar=0;
        index=1;
    }

    const pgbar=document.querySelector('.progress');
    pgbar.style.width= bar + '%';

    const activecircle=circle[index];
    activecircle.classList.remove('active');
    index--;
})