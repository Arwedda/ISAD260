/*SubMenu JavaScript*/
var age = parseInt(getParameter('age', window.location.href));
var levels = ["Pre-School", "Primary", "Secondary", "College", "Degree", "Post-Graduate"];

function changeTitle(){
	if (age == null || age < 1 || 6 < age){
		alert("Error - invalid age detected! Returning to Main Menu.");
		window.location = "MainMenu.htm";
	}
	var newTitle = levels[age-1];
	document.title = newTitle;
}
			
function getParameter(name, url) {
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
	var	results = regex.exec(url);
	return results[2];
}

function redirectToDynamicURL(subject){
	window.location = createDynamicURL(subject);
}
			
function createDynamicURL(subject){
	var URL = "Quiz.htm?age=" + age + "&subject=" + subject;
	return URL;
}