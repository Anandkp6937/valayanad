const modelBar=document.getElementById('modelBar');
const modelBox=document.getElementById('modelBoxx');
const closeBtn=document.getElementById('closeBtnn');
const addres=document.getElementById('address');
//function to scale view of address
function scaleDetails(){
addres.style.transform='scale(0.9)';
modelBox.style.visibility='hidden';    
modelBox.style.opacity='0';
 setTimeout(()=>{
     addres.style.transform='scale(1)';
 },1000);

}
//function to close modal bar
function closeModelBar(){
       modelBox.style.transform='translateX(70em)'
}
//event handlers
modelBar.addEventListener('click',()=>{
     modelBox.style.visibility='visible';    
     modelBox.style.opacity='1';
     modelBox.style.transform='translateY(0em)'

})
// modal bar closing function
closeBtn.addEventListener('click',()=>{
     closeModelBar();
})