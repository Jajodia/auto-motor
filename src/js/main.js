let stateVar = 0;
let stateStr = '';


function motorStatus() {


	if (event.target.value == "start" && stateVar == 0) {
		stateVar = 1;
		stateStr = "Running";
		document.getElementById('meter').className = "meter-start";
	}
	else if (event.target.value == "stop" && stateVar == 1) {
		stateVar = 0;
		stateStr = "Stopped";
		document.getElementById('meter').className = "meter-stop";
	}
	console.log(stateStr + " with state = " + stateVar);

}


