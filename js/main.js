var currentExp;
var expHistory = document.getElementById("exp-history");
var expPerMin = document.getElementById("exp-per-min");
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
		expHistory.innerHTML += "<li class='list-group-item'>"+currentExp
			+" - "+ formatDate(obj.date) +"</li>";
	}else{

		var timeLapsed = Date.now() - lastRecord.date;
		timeLapsed = timeLapsed / 1000;
	
		var expAcquired = currentExp - lastRecord.exp;
		expAcquired = expAcquired.toFixed(3);

		expList.push(obj);
		expHistory.innerHTML += "<li class='list-group-item'>"+currentExp
			+" - "+ formatDate(obj.date)
			+	"&nbsp; - <b>Exp:</b>"+expAcquired+"&nbsp; <b>in</b> "+ timeLapsed+"</li>";
		
		checkExpPerMin();
	}
	
}

function checkExpPerMin(){
	var firstExp = expList[0];
	var lastExp = expList[expList.length - 1];
	
	var expDifference = lastExp.exp - firstExp.exp;
	var timeDifference = lastExp.date - firstExp.date;
	
	
	displayExpPerMin(expDifference, timeDifference);
}

function displayExpPerMin(exp, time){

	var timeDifferenceInMinutes = (time / 1000 / 60);
	var expFmt = exp / timeDifferenceInMinutes;
	expFmt = expFmt.toFixed(3);

	expPerMin.innerHTML = expFmt + "exp/min";
}

function getLastRecord(){
	return expList[expList.length-1];
}


function formatDate(date){
	var m = new Date(date);
	var dateString = 	m.getUTCFullYear() + "/" +
	("0" + (m.getUTCMonth()+1)).slice(-2) + "/" +
	("0" + m.getUTCDate()).slice(-2) + " " +
	("0" + m.getUTCHours()).slice(-2) + ":" +
	("0" + m.getUTCMinutes()).slice(-2) + ":" +
	("0" + m.getUTCSeconds()).slice(-2);
	return dateString;
}


//Call calExp() when Enter key is pressed
document.getElementById("current-exp")
    .addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
				calcExp();
    }
});
