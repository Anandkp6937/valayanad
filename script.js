const modelBar=document.getElementById('modelBar');
const modelBox=document.getElementById('modelBoxx');
const closeBtn=document.getElementById('closeBtnn');
const addres=document.getElementById('address');
const section7=document.getElementById('sec7');
const themeBtn=document.querySelector('.theme-btn');
const body=document.querySelector('body');
const section8=document.querySelector('.section8');
const whatsapp=document.querySelector('.whatsapp');
const mailLink=document.querySelector('.link-color');
const secSub=document.querySelector('.secSub');
const heading=document.querySelector('.heading');

let flag=0;
//theme change callback
themeBtn.addEventListener('click',changeTheme)
//function to scale view of address
function scaleDetails(e){
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
    setTimeout(()=>{
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
    },500)
    addres.style.transform='scale(0.9)';   
    section7.style.transform='scale(0.9)'
    setTimeout(()=>{
        addres.style.transform='scale(1)'; 
        section7.style.transform='scale(1)'
   
 },1200);

}
// themechange function
function changeTheme(){
    if(flag===0){
        body.style.background='#000';
        body.style.color='#fff';
        section8.style.background='rgb(32, 16, 44)';
        whatsapp.style.color='yellow';
        mailLink.style.color='yellow';
        secSub.style.opacity='0.9';
        heading.style.color="#fff";
        themeBtn.style.background='#fff';
        themeBtn.style.color="#000"
        flag=1;
    }
    else{
        body.style.background='#fff';
        body.style.color='#000';
        section8.style.background='#000';
        whatsapp.style.color='green';
        mailLink.style.color='rgba(8, 8, 102, 0.5)';
        secSub.style.opacity='0.8';
        heading.style.color="rgb(50, 17, 80)";
        themeBtn.style.background='#000';
        themeBtn.style.color="#fff";
        flag=0;
    }
    
}
