const modelBar=document.getElementById('modelBar');
const modelBox=document.getElementById('modelBoxx');
const closeBtn=document.getElementById('closeBtnn');
const addres=document.getElementById('address');
//function
function scaleDetails(){
addres.style.transform='scale(0.9)';
 setTimeout(()=>{
     addres.style.transform='scale(1)';
     closeModelBar();
 },1000);

}
function closeModelBar(){
       modelBox.style.transform='translateX(70em)'
}
//event handlers
modelBar.addEventListener('click',()=>{
     modelBox.style.visibility='visible';    
     modelBox.style.opacity='1';
     modelBox.style.transform='translateY(0em)'

})
closeBtn.addEventListener('click',()=>{
     closeModelBar();
})