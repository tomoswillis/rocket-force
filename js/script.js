$(document).ready(function(){
// transition(".page-yourPageID2","fade");
// sideboxtut1()
	 // transition(".page-yourPageID3","push-right");
	// mountainAnimation()
// transition(".gameStart","fade");

// transition(".page-yourPageID4","fade");

// --------------------------- Sound -------------------------------------


var audio = new Audio('sound/btn.mp3');
var finish = new Audio('sound/finish.mp3');
var move = new Audio('sound/move.mp3');
var wrong = new Audio('sound/wrong.mp3');
var easterEgg = new Audio('sound/easterEgg.mp3');

var test = 1;

$("#sfxon").on("click" , () => {
	$("#sfxon").addClass("displayNone")
	test = 2
	soundcheck()
	console.log(test)
});

$("#sfxOff").on("click" , () => {
	$("#sfxon").removeClass("displayNone")
	test = 1
	soundcheck()
	console.log(test)
});

function soundcheck(){
if (test == 1) {
	$('.spaceman').click( () => easterEgg.play() ); 
	$('#ans1 , #ans3').click( () => wrong.play() ); 
	$('.launchButton , .btn , .takeoffButton , .badgeColour , .menuicon , .homeicon , .okBTN , .next , .back , .infoboxarrow , .nextgame1 , .ansbox , .ok-btn-inputcheck').click( () => audio.play() ); 

	}else if (test == 2) {
			$('.spaceman').click( () => easterEgg.pause() ); 
	$('#ans1 , #ans3').click( () => wrong.pause() ); 
	$('.launchButton , .btn , .takeoffButton , .badgeColour , .menuicon , .homeicon , .okBTN , .next , .back , .infoboxarrow , .nextgame1 , .ansbox , .ok-btn-inputcheck').click( () => audio.pause() ); 
	}
}

	// --------------------------- Intro Page -------------------------------------
	$('.launchButton').click(function(){
		$(".spacemanArm").removeClass( "man-arm" ).addClass( "man-arm-point" );

		$(".earth").addClass("drop");

		setTimeout( function(){
			transition(".page-menu","fade")
			$(".menuicon").removeClass("opacity")},25);
		
	});
$('.launchButton , .btn , .takeoffButton , .badgeColour , .menuicon , .homeicon , .okBTN , .next , .back , .infoboxarrow , .nextgame1 , .ansbox , .ok-btn-inputcheck').addClass("pointer")
	// --------------------------- Menu Page -------------------------------------
function mountainAnimation() {

		$(".rocketbody").addClass( "rocketbody" ).removeClass( "rocketbody-move" );
		$(".lp").removeClass("launchPad")
		$(".lr").removeClass("launchRocket")
		$(".fl").removeClass("floor")
		$(".mtn1 , .mtn2 , .mtn3 , .mtn4").removeClass("mtn")
	//^^^^^^^^^^^^^^^^Reset^^^^^^^^^^^^^^^^^^^^^^
		$(".rocketbody").removeClass( "rocketbody" ).addClass( "rocketbody-move" );
		

		setTimeout( function(){
			$(".lp").addClass("launchPad")
			$(".lr").addClass("launchRocket")
			$(".fl").addClass("floor")},5000);


		setTimeout( function(){
			$(".mtn1 , .mtn2 , .mtn3 , .mtn4").addClass("mtn")},500);


		// setTimeout( function(){
		// 	sideBoxMove()},7000);
}

function lock() {
	$(".Lockhinge").addClass("rotate")

	setTimeout(function() {
		$(".mainLock , .Lockhinge").addClass("opacity")
	}, 1000);
}



     $('.takeoffButton').click(function(){
		transition(".gameStart","fade");



		$(".rocketbody").removeClass( "rocketbody" ).addClass( "rocketbody-move" );
		

		setTimeout( function(){
			$(".lp").addClass("launchPad")
			$(".lr").addClass("launchRocket")
			$(".fl").addClass("floor")},5000);


		setTimeout( function(){
			$(".mtn1 , .mtn2 , .mtn3 , .mtn4").addClass("mtn")},500);


		setTimeout( function(){
			sideBoxMove()},7000);

		

	 });

	 $(".badgeColour").on("click" , () => {
	 	transition(".page-yourPageID4","fade");
	 })

	$('#balancedNext').click(function(){
		transition(".page-yourPageID2","fade");
		sideboxtut1()
	});

	$('.nextSlider').click(function(){
		transition(".page-yourPageID3","fade");
		mountainAnimation()
		$(".sideboxinfo").removeClass("opacity")
		$(".success-message-DandD1").addClass("displayNone")
	});

    // --------------------------- Other Pages -------------------------------------

    $('.p1-button').click(function(){
		transition(".page-yourPageID2","push-left");
	});

	$('.p2-button').click(function(){
		transition(".page-yourPageID3","push-right");
	});

	$('.p-menu-button').click(function(){
		transition(".page-menu","fade");
	});

	$('.p-menu-button').click(function(){
		transition(".page-yourPageID4","fade");
	});


//**********************Launch Page***********************
 $(".launch").on("click", () => {

	$(".spacemanArm").removeClass( "man-arm" ).addClass( "man-arm-point" );

 	$(".earth").addClass("drop");



	// 	//.children().addClass("displayNone")

});

		
	$(".atmosphere").removeClass("atmosphere").addClass("atmosphere2");


// --------------------------- Menu Button -------------------------------------

$(".menuicon").on("click" , () => {
	$("#menuLinetwo").toggleClass("opacity");
	$("#menuLinethree").toggleClass("menulinethreeMove1");
	$("#menuLineone").toggleClass("menulineoneMove1");
	$("#menuLinethree").toggleClass("menulinethree");
	$("#menuLineone").toggleClass("menulineone");
	$(".homeicon").toggleClass("homeiconmove");
	$(".calcicon").toggleClass("calciconmove");

})

$(".homeicon").on("click" , () => {
	transition(".page-menu","fade");
	$("#rocketbody").addClass( "rocketbody" ).removeClass( "rocketbody-move" );
	$("#menuLinetwo").toggleClass("opacity");
	$("#menuLinethree").toggleClass("menulinethreeMove1");
	$("#menuLineone").toggleClass("menulineoneMove1");
	$("#menuLinethree").toggleClass("menulinethree");
	$("#menuLineone").toggleClass("menulineone");
	$(".homeicon").toggleClass("homeiconmove");
	$(".calcicon").toggleClass("calciconmove");
	lock()

})

//******************SIDE BOX****************************************

	$(".infoboxarrow").on("click", (event) => {
		$(".arrow-right").toggleClass("arrow-left").addClass("arrow-right")
	}).on("click", event => {
		$(".sideboxclose").toggleClass("sidebox")
	}).on("click", event => {
		$(".pop-up").toggleClass("opacity")
	})


	function sideBoxMove() {
		$(".arrow-right").toggleClass("arrow-left").addClass("arrow-right")
		$(".sideboxclose").toggleClass("sidebox")
		$(".pop-up").toggleClass("opacity")
	}

		
//******************Name BOX*********************************
	
	$(".ok").on("click", () => {
		$(".ok").addClass("opacity");
		console.log("clicked")

		$(".blur").removeClass("blur");
		
		$(".nameForm").addClass("opacity");

	});
	


//******************Mass Game*********************************

function sideboxtut1() {
	setTimeout( function(){
			$("#massP1").addClass("displayNone")
			$("#massP2").removeClass("displayNone")
			$("#massBox").removeClass("opacity")
			$("#oneKg").removeClass("opacity")
			$(".earth").removeClass("drop")},9000);
	setTimeout( function(){
			$("#massArrowDown").removeClass("opacity")
			$("#massScale,#ninepoint,.earth").removeClass("opacity")

			},12500);
	

	setTimeout( function(){
			$("#massP2").addClass("displayNone")
			$("#ninepoint").addClass("opacity")
			$("#massArrowDown").addClass("opacity")
			$("#oneKg").addClass("displayNone")
			$("#massP3").removeClass("displayNone")
			$("#tenKg").removeClass("opacity")
			$(".infobox").css({"height":"370px", "transition":"all 1s ease-in-out",});},20000);
}			
	

$("#ans2").on("click" , () =>{
	$(this).unbind('mouseenter mouseleave');
	setTimeout( function(){
		$("#ans2").addClass("anscorrect")},550);

	setTimeout( function(){
		$(".correct-mass").removeClass("opacity")},1000);

	setTimeout( function(){
		$(".sideboxinfo").addClass("opacity")
		$(".mass-question1").addClass("opacity")
		$(".infobox").css({"height":"290px", "transition":"all 1.5s ease-in-out",})
		$(".mass-scale,.earth").addClass("opacity")
		$("#force-information").removeClass("opacity")
		$(".forceslider").removeClass("displayNone , opacity")
	},3000);

	setTimeout( function(){
		$(".pusher").removeClass("opacity")
		$(".weights").addClass("weights2")
		$(".mass-box").addClass("mass-box-2")
	},5000);
});

$("#ans1 , #ans3").on("click" , () =>{
	++badgetwo
	console.log("badgetwo" + badgetwo)
} )

//******************box bounce*********************************

$(".ansbox").on("click" , () => {
	$(event.currentTarget).addClass("click");

	setTimeout( function(){
		$(".ansbox").removeClass("click")},550);
});


//******************Badge One*********************************
var badgeone = 0


function threeStars() {
	 setTimeout(function() {
      $('#goldStar1').removeClass("opacity");
      $('#goldStar1').addClass("smash");  
      }, 1000);

       setTimeout(function() {
      $('#goldStar2').removeClass("opacity");
      $('#goldStar2').addClass("smash");  
      }, 1500);

        setTimeout(function() {
      $('#goldStar3').removeClass("opacity");
      $('#goldStar3').addClass("smash");  
      }, 2000);

    badgeone=3
}

function twoStars() {
	 setTimeout(function() {
      $('#goldStar1').removeClass("opacity");
      $('#goldStar1').addClass("smash");  
      }, 1000);

       setTimeout(function() {
      $('#goldStar2').removeClass("opacity");
      $('#goldStar2').addClass("smash");  
      }, 1500);
   badgeone=2

}

function oneStars() {
	 setTimeout(function() {
      $('#goldStar1').removeClass("opacity");
      $('#goldStar1').addClass("smash");  
      }, 1000);

 badgeone=1

}





});




// --------------------------- Transition Pages -------------------------------------

/* use by:  transition(".page-menu","fade");

   pass in id of page to show next.  Type can be either "push-left", "push-right"
   or "fade" depending on the type of animation you want to happen.
   Classes are added to incoming and outgoing page that adds a CSS animation
   which moves them into position.  Listener is added for when animation
   is over to tidy up and remove the "current" class from the old page

   This code modified from Sitepoint book "Build Mobile websites and apps
   for Smart Devices", Castledine, Eftos, Wheeler (2011) */

function transition(toPage, type){
	var toPage = $(toPage),
    	fromPage = $(".pages .current"); // store the page that is currently showing

    toPage
    .addClass("current " + type + " in")
    .one("msAnimationEnd animationend oAnimationEnd", function(){  // listens for when the animation has finished
      fromPage.removeClass("current " + type + " out" );
      toPage.removeClass(type + " in");
    });
  fromPage.addClass(type + " out ");

}





