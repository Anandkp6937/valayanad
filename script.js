const modelBar=document.getElementById('modelBar');
const modelBox=document.getElementById('modelBoxx');
const closeBtn=document.getElementById('closeBtnn');
const addres=document.getElementById('address');
const section7=document.getElementById('sec7');

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
//window load functions
