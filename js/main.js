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

	var lastRecord = getLastRecord();

	if(lastRecord === undefined){
		expList.push(obj);
		expHistory.innerHTML += "<li>"+currentExp+" - "+ formatDate(obj.date) +"</li>";
	}else{

		var timeLapsed = Date.now() - lastRecord.date;
		timeLapsed = timeLapsed / 1000;
	
		var expAcquired = currentExp - lastRecord.exp;

		expList.push(obj);
		expHistory.innerHTML += "<li>"+currentExp+" - "+ formatDate(obj.date) +
			"&nbsp; - <b>Exp:</b>"+expAcquired+"&nbsp; <b>in</b> "+ timeLapsed+"</li>";
	}
  console.log(expList);
}

function getLastRecord(){
	return expList[expList.length-1];
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


document.getElementById("current-exp")
    .addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
				calcExp();
    }
});
