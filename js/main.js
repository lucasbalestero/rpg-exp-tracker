var currentExp;
var expHistory = document.getElementById("exp-history");
var expList = new Array();

function calcExp(){
  currentExp = document.getElementById("current-exp").value;
  addToList(currentExp);
  console.log(currentExp);
}

function addToList(currentExp){
  var obj = {exp:currentExp, date: Date.now()};
  expList.push(obj);
  expHistory.innerHTML += "<li>"+currentExp+" - "+ formatDate(obj.date) +"</li>";
  console.log(expList);
}


function formatDate(date){
	var m = new Date(date);
	var dateString = 
	m.getUTCFullYear() + "/" +
	("0" + (m.getUTCMonth()+1)).slice(-2) + "/" +
	("0" + m.getUTCDate()).slice(-2) + " " +
	("0" + m.getUTCHours()).slice(-2) + ":" +
	("0" + m.getUTCMinutes()).slice(-2) + ":" +
	("0" + m.getUTCSeconds()).slice(-2);
	return dateString;
}

