

function calculateTip(event){
  event.preventDefault();
  
  let bill = document.getElementById("bill");
  let servicequal = document.getElementById("servicequal");
  let numOfpeople = document.getElementById("people");
  
  
  if (bill.value == 0 || servicequal.value == 0 ) {
     alert("por vafor preencha os valores");
      return;
  }
  if(numOfpeople.value == "" || numOfpeople.value <= 1 ){
  numOfpeople.value = 1;
  document.getElementById('each').style.display ="none";
  }else{
     document.getElementById('each').style.display ="block"; 
  
  }
 // let total = (bill.value * servicequal.value) / numOfpeople.value;


  let total = ( parseInt( bill.value )+ (parseInt(bill.value) * parseInt(servicequal.value) ) / 100) / parseInt(numOfpeople.value);

   
    

  total = total.toFixed(2)
  document.getElementById('tip').innerHTML = total;
  document.getElementById('totaltip').style.display ="block";
  
  }
  document.getElementById('totaltip').style.display ="none";
  document.getElementById('each').style.display ="none";
  document.getElementById('tipsForm').addEventListener('submit'  ,calculateTip );
   
