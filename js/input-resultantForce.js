$(document).ready(function(){

var wrong = new Audio('sound/wrong.mp3');



// ************************************Check One************************************
$("#inputCheck").on("click", () =>{
  resultantForceOne()

  $(".ok-btn-inputcheck").addClass("click")
  setTimeout(function() {
    $(".ok-btn-inputcheck").removeClass("click")
  }, 1000);
});

// ************************************Check Two************************************

$("#inputCheck2").on("click", () =>{
  resultantForceTwo()
  
  $(".ok-btn-inputcheck").addClass("click")  
  setTimeout(function() {
    $(".ok-btn-inputcheck").removeClass("click")
  }, 1000);
});

// ************************************Info Button************************************

$("#next-btn2").on("click", () =>{
  nextQuestion1()
  $("#next-btn2").addClass("displayNone")
  inputToggle()
});

// ************************************Test one************************************

function resultantForceOne() {
  var x, text;

  // Get the value of the input field with id="numb"
  x = document.getElementById("numb").value;

  // If x is Not a Number or less than one or greater than 10
  if (isNaN(x) || x != 28649193) {
    $("#numb").addClass("wrong")
    setTimeout(function() {
      $("#numb").removeClass("wrong")}, 600);
    ++badgetwo
    wrong.play()
    console.log("badgetwo" + badgetwo)
  
  } else {
 //   text = "Input Correct";
    $("#numb").addClass("correctNumb")
    nextQuestion1()
    inputToggle()
     $("#inputCheck2").removeClass("displayNone");
     $("#inputCheck").addClass("displayNone");
    setTimeout(function() { 
      $("#next-btn2").removeClass("displayNone")
      $("#numb").removeClass("correctNumb");}, 4000);
  }
}
// ************************************Test Two************************************
function resultantForceTwo() {
  var x, text;

  // Get the value of the input field with id="numb"
  x = document.getElementById("numb").value;

  // If x is Not a Number or less than one or greater than 10
  if (isNaN(x) || x != 4750807) {
    
    $("#numb").addClass("wrong")
    
    setTimeout(function() {
      $("#numb").removeClass("wrong")
    }, 600);

    ++badgetwo
    wrong.play()
    console.log("badgetwo" + badgetwo)
  
  } else {
    console.log("correct")
    $(".N-input").addClass("opacity")
    $("#numb").addClass("correctNumb")
    
    setTimeout(function() {
      $(".correctTextGame2").removeClass("opacity")
    }, 1000);
      
      $(".balencedBadge").removeClass("badgeMove")
      
      $(".nextgame1").addClass("opacity")
    setTimeout(function() {
      $(".success-message-DandD1").removeClass("displayNone , opacity")
      var finish = new Audio('sound/finish.mp3');}, 2000);

setTimeout(function() {
   if (badgetwo <= 1) {
      threeStars()
      console.log("second" + badgetwo)
      threeStarsB()
      $("#locktwo").addClass("displayNone")
    }else if (badgetwo <= 3) {
      twoStars()
      console.log("second" + badgetwo)
      twoStarsB()
      $("#locktwo").addClass("displayNone")
    } else if (badgetwo >3) {
      oneStars()
      console.log("second" + badgetwo)
      oneStarsB()
        $("#locktwo").addClass("displayNone")
    }
      
    
}, 2000);

 setTimeout(function() {
        $(".balencedBadge").addClass("badgeMove")

        $(".nextgame1").removeClass("opacity")
      }, 5000);

  }
}
// ************************************Box Info************************************
var newtonInformation = 0;



var gameoneData2 = 
  { information2: [ "Now it's time to do some calculations. If we want to get our rocket into space, we need to know the weight.","The current mass is: 2,923,387Kg. Work out the how many Newtons this is and enter the value into the box", "Well Done! We now need to know the resultant force at take off!","The engines produce 33,400,000N of thrust and the rocket weighs 28,649,193N"]};

// ************************************Functions************************************

function show() {
  $("#rocketmass").html(gameoneData2.information2[newtonInformation])
}
show()



function nextQuestion1() {
    newtonInformation++;
    show()
}

function inputToggle() {
  $(".N-input").toggleClass("opacity");
}

var badgetwo = 0

function threeStars() {
   setTimeout(function() {
      $('#goldStarG2-1').removeClass("opacity");
      $('#goldStarG2-1').addClass("smash");  
      }, 1000);

       setTimeout(function() {
      $('#goldStarG2-2').removeClass("opacity");
      $('#goldStarG2-2').addClass("smash");  
      }, 1500);

        setTimeout(function() {
      $('#goldStarG2-3').removeClass("opacity");
      $('#goldStarG2-3').addClass("smash");  
      }, 2000);
}

function twoStars() {
   setTimeout(function() {
      $('#goldStarG2-1').removeClass("opacity");
      $('#goldStarG2-1').addClass("smash");  
      }, 1000);

       setTimeout(function() {
      $('#goldStarG2-2').removeClass("opacity");
      $('#goldStarG2-2').addClass("smash");  
      }, 1500);

}

function oneStars() {
   setTimeout(function() {
      $('#goldStarG2-1').removeClass("opacity");
      $('#goldStarG2-1').addClass("smash");  
      }, 1000);

}
function threeStarsB() {
   
      $('#goldStarB2-1').removeClass("opacity");
      $('#goldStarB2-1').addClass("smash");  
     

       
      $('#goldStarB2-2').removeClass("opacity");
      $('#goldStarB2-2').addClass("smash");  
     

        
      $('#goldStarB2-3').removeClass("opacity");
      $('#goldStarB2-3').addClass("smash");  
     
}

function twoStarsB() {
   
      $('#goldStarB2-1').removeClass("opacity");
      $('#goldStarB2-1').addClass("smash");  
     

       
      $('#goldStarB2-2').removeClass("opacity");
      $('#goldStarB2-2').addClass("smash");  
     

}

function oneStarsB() {
   
      $('#goldStarB2-1').removeClass("opacity");
      $('#goldStarB2-1').addClass("smash");  
     

}

});