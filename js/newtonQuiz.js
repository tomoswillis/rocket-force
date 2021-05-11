/**
 * Multichoice quiz example.  Ant Pearson (2014) for LMU IMD module
 * This example keeps a score and shows correct answers along with
 * question feedback.  
 *
 * In the interests in you learning to code and me not doing all your
 * interactive for you I have removed the function that handles
 * the end of the quiz.  You will have to perform a check in the
 * nextQuestion function to see if there are any more questions
 * left.  If there are not you should run (and write) a function
 * that handles the end of the quiz
 * 
 * Questions obtained from BBC GCSE Science quiz
 * http://www.bbc.co.uk/news/magazine-23765435 (accessed March 2014)
 */

$(document).ready(function(){
	$('#answer1').click(function(){
		$(this).addClass("selected");
		setTimeout(function() {
		    checkAnswer(1);
		},1000);
	});
	$('#answer2').click(function(){
		$(this).addClass("selected")
		setTimeout(function() {
		    checkAnswer(2);
		},1000);
	});
	$('#answer3').click(function(){
		$(this).addClass("selected")
		setTimeout(function() {
		    checkAnswer(3);
		},1000);
	});

	$('#next-btn').click(function(){
		nextQuestion();
	});
	nextQuestion();

});


// set up variables here

var quizData = [
		{question:"How many N would a box with a mass of 10Kg weigh ? ",
		 answers:["100N","98N","9.80N"],
		 correctAnswer:1,
		 feedback:"Well Done, We'll be taking off in to time!"
		},
];


var currentQuestion = 0;
var totalQuestions = quizData.length;
var score = 0;

function showQuestion(){
	$("#question").html(quizData[currentQuestion-1].question);
	$("#answer1").html(quizData[currentQuestion-1].answers[0]);
	$("#answer2").html(quizData[currentQuestion-1].answers[1]);
	$("#answer3").html(quizData[currentQuestion-1].answers[2]);
	$("#feedback").html(quizData[currentQuestion-1].feedback);
}

function nextQuestion(){
	.answers++;

	// ** You should add something that checks to see if are any more 
	// ** questions left here
	
	showQuestion();
	
	// hide feedback and next button
	
	$("#feedback").addClass("hidden");
	// remove all incorrect, correct classes on answer buttons
	$('.answer-box').removeClass("correct incorrect");
}

function checkAnswer(selectedAnswer){
	var theCorrectAnswer = quizData[currentQuestion-1].correctAnswer;
	// remove the grey selected class
	$('.answer-box').removeClass("selected");

	// turn the boxes red or green depending on if they are the correct answer
	$( ".answer-box" ).each(function( index ) {
	  if((index+1)==theCorrectAnswer){
	  	$( this ).addClass("correct");
	  } else {
	  	$( this ).addClass("incorrect");
	  }
	});

	if(selectedAnswer==theCorrectAnswer){
		// got it correct
		score += 10;
		$(".score").html(score);
	} else {
		// got it wrong so do nothing
	}
	// show feedback and next button
	$("#next-btn").removeClass("hidden");
	$("#feedback").removeClass("hidden");
}


