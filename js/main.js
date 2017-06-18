var currentExp;
var expHistory = document.getElementById("exp-history");

function calcExp(){
  currentExp = document.getElementById("current-exp").value;
  addToList(currentExp);
  console.log(currentExp);
}

function addToList(exp){
  expHistory.innerHTML += "<li>"+exp+"</exp>";
}
