const modelBar=document.getElementById('modelBar');
const modelBox=document.getElementById('modelBoxx');
const closeBtn=document.getElementById('closeBtnn');
const addres=document.getElementById('address');
const notificationBar=document.querySelector('.ulsavam-noti');
//function to scale view of address
function scaleDetails(){
addres.style.transform='scale(0.9)';  
 setTimeout(()=>{
     addres.style.transform='scale(1)';
 },1000);

}
//window load functions
document.addEventListener('DOMContentLoaded',()=>{
    setTimeout(()=>{
        notificationBar.style.transform='translateY(-15em)';
    },5000);
})