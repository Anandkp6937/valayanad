const modelBar=document.getElementById('modelBar');
const modelBox=document.getElementById('modelBoxx');
const closeBtn=document.getElementById('closeBtnn');
const addres=document.getElementById('address');
//function to scale view of address
function scaleDetails(){
addres.style.transform='scale(0.9)';  
 setTimeout(()=>{
     addres.style.transform='scale(1)';
 },1000);

}

