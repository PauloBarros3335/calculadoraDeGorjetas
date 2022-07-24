function calculateTip(event){
event.preventDefault();

let bill = document.getElementById("bill").Value;
let servicequal = document.getElementById("servicequal").Value;
let numOfpeople = document.getElementById("people").Value;


if (bill == 0 | servicequal == 0 ) {
   alert("por vafor preencha os valores");
    return;
}
if(numOfpeople == "" | numOfpeople <= 1 ){
numOfpeople = 1;
document.getElementById('each').style.display ="none";
}else{
   document.getElementById('each').style.display ="block"; 

}
let total = (bill * servicequal) / numOfpeople;
total = total.toFixed(2)
document.getElementById('tip').innerHTML = total;
document.getElementById('totaltip').style.display ="block";

}
document.getElementById('totaltip').style.display ="none";
document.getElementById('each').style.display ="none";
document.getElementById('tipsForm').addEventListener('submit'  ,calculateTip );
