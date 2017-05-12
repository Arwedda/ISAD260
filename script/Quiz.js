/*Quiz JavaScript*/
var age = parseInt(getParameter('age', window.location.href));
var subject = parseInt(getParameter('subject', window.location.href));
var levels = ["Pre-School", "Primary", "Secondary", "College", "Degree", "Post-Graduate"];
var classes = ["Computing", "Mathematics", "English", "Biology", "Chemistry", "Physics", "Geography", "Law", "History"];
var noOfQuestions = 10;
var questions = new Array();
var answers = create2DArray(noOfQuestions);
var question = 0;
var locked = false;

function initialisePage(){
	setTitles();
	populateArrays();
	setQuestion(question);
}

function setTitles(){
	var newTitle;

	if (age == null || age < 1 || 6 < age){
		alert("Error - invalid age detected! Returning to Main Menu.");
		window.location = "MainMenu.htm";
	}
	else if (subject == null || subject < 1 || 9 < subject){
		alert("Error - invalid subject detected! Returning to Subject Menu.");
		window.location = "SubMenu.htm?age=" + age;
	}
	newTitle = levels[age-1] + " Level " + classes[subject-1];
	document.title = newTitle;
	Heading.innerHTML = "<h1>" + newTitle + "</h1>";
}

function setQuestion(questionNo){
	Question.innerHTML = "<h2>" + questions[questionNo] + "</h2>";
	for (var i = 0; i < 4; i++){
		document.getElementById("Ans" + (i + 1)).innerHTML = "<h3>" + answers[questionNo][i] + "</h3>";
	}
}

function populateArrays(){
	var noOfAnswers = 4;
	var answer;

	for (var j = 0; j < noOfQuestions; j++){
		questions.push(levels[age-1] + " " + classes[subject-1] + " Question " + (j + 1));
		for (var i = 0; i < noOfAnswers; i++){
			answer = levels[age-1] + " " + classes[subject-1] + " <br /> Question " + (j + 1) + " Answer " + (i + 1) + ".";
			answers[j][i] = answer;
		}
	}
}

function checkAnswer(chosenAnswer){
	if (locked == false){
		switch (chosenAnswer){
			case 1: 
				document.getElementById("feedback").src = "images/correct.png";
				break;
			default:
				document.getElementById("feedback").src = "images/incorrect.png";
				break;
		}
	} else {
		alert('Click "Next" for the next question');
	}
}

$(document).ready(function(){
  $("#next").hide();
		
	$("#Answer1").click(function(){
		if (locked == false){
			$("#next").show();
			$("#feedback").css("top", "15%");
			locked = true;
			alert("Correct!");
		}
	});
	
	$("#Answer2").click(function(){
		if (locked == false){
			$("#feedback").css("top", "0%");
			locked = false;
			alert("Incorrect! Please try again!");
		}
	});
	$("#Answer3").click(function(){
		if (locked == false){
			$("#feedback").css("top", "0%");
			locked = false;
			alert("Incorrect! Please try again!");
		}
	});
	$("#Answer4").click(function(){
		if (locked == false){
			$("#feedback").css("top", "0%");
			locked = false;
			alert("Incorrect! Please try again!");
		}
	});
	
	$("#next").click(function(){
		
	if (question < 9){
		question += 1;
		if (locked = true){
			locked = false;
			$("#next").hide();
			$("#feedback").removeAttr("src");
			$("#feedback").css("top", "15%"); 
		}
		setQuestion(question);
	} else {
		alert("You have completed the prototype questions for " + levels[age-1] + " level " + classes[subject-1] + ". Please click back to start again.");
	}
	});
});



function getParameter(name, url) {
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
	var	results = regex.exec(url);
	return results[2];
}

function redirectToDynamicURL(){
	window.location = createDynamicURL();
}
			
function createDynamicURL(){
	var URL = "SubMenu.htm?age=" + age;
	return URL;
}

function create2DArray(size) {
	var arr = [];

	for (var i = 0; i < size; i++) {
		arr[i] = [];
	}
	return arr;
}