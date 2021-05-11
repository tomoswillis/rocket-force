$(document).ready(function(){
var move = new Audio('sound/move.mp3');

$( function() {
  $( "#slider" ).slider({
    value:0,
    min: 0,
    max: 100,
    step: 25,
    slide: function( event, ui ) {
      $( "#amount" ).val( "$" + ui.value );

    }
  });


$( "#amount" ).val( "$" + $( "#slider" ).slider( "value" ) );

$("#slider").on("mouseup" , () => {
   var sliderValue = $('#slider').slider("value");
   $("#amount").html(sliderValue + "N");

      if (sliderValue == 25) {
        twentyfiveN()
        pistonone()
        twofive()
      
      }else if (sliderValue == 50) {
        fiftyN()
        pistonone()
        fivezero()
        

      }else if (sliderValue == 75) {
        seventyfiveN()
        pistonone()
        sevenfive()

      }else if (sliderValue == 100) {
        hundredN()
        pistontwo()
        hundy()
        $("#nextSlider").removeClass("opacity")

      }else{
        $("#force-information").html(forceData.info[0]);
        reset()
        zeroN()
        twofive()
      }

      console.log (sliderValue)
  })
});

var forceData = 
  {info:["Slide the slider to increase the force applied to the box","Adding 25N of force to a box that weighs 98N  will give a resultant force of 0 because the box is pushing back. Look how the arrows change.","Adding 50N of force to a box that weighs 98N  will give a resultant force of 0 because the box is pushing back. Look how the arrows change.","Adding 75N of force to a box that weighs 98N  will give a resultant force of 0 because the box is pushing back. Look how the arrows change.","Adding 100N of force to a box that weighs 98N  will give a resultant force of 2N because the box is being pushed with more force than it can apply.","Slide the slider to the right and see what happens"],
   resultentForce:["0N","2N to the right"],
   nOfForce:["25N","50N","75N","98N","0N"],
   pushBack:["25N","50N","75N","100N","0N"],
  
  };

$("#force-information").html(forceData.info[0]);


function zeroN(){
  $("#force-information").html(forceData.info[0]);
  $("#resultent").html(forceData.resultentForce[0]);
  $("#nOfForce").html(forceData.nOfForce[4]);
  $("#pushBack").html(forceData.pushBack[4]);

}

function twentyfiveN(){
  $("#force-information").html(forceData.info[1]);
  $("#resultent").html(forceData.resultentForce[0]);
  $("#nOfForce").html(forceData.nOfForce[0]);
  $("#pushBack").html(forceData.pushBack[0]);

}

function fiftyN(){
  $("#force-information").html(forceData.info[2]);
  $("#resultent").html(forceData.resultentForce[0]);
  $("#nOfForce").html(forceData.nOfForce[1]);
  $("#pushBack").html(forceData.pushBack[1]);

}
function seventyfiveN(){
  $("#force-information").html(forceData.info[3]);
  $("#resultent").html(forceData.resultentForce[0]);
  $("#nOfForce").html(forceData.nOfForce[2]);
  $("#pushBack").html(forceData.pushBack[2]);

}
function hundredN(){
  $("#force-information").html(forceData.info[4]);
  $("#resultent").html(forceData.resultentForce[1]);
  $("#nOfForce").html(forceData.nOfForce[3]);
  $("#pushBack").html(forceData.pushBack[3]);

}

//piston Position**********************

function pistontwo() {
  $(".piston").addClass("piston-two")
  $(".piston").removeClass("piston-one")
  $(".mass-box").addClass("mass-box-left")
  $("#resultent").addClass("resultent-left")
  $("#nOfForce").addClass("nOfForce-left")
  $("#pushBack").addClass("pushBack-left")
  $(".weights").addClass("weights-left")
  move.play()

}

function pistonone() {
  $(".piston").addClass("piston-one")
  $(".piston").removeClass("piston-two")
  $(".mass-box").removeClass("mass-box-left")
  $("#resultent").removeClass("resultent-left")
  $("#nOfForce").removeClass("nOfForce-left")
  $("#pushBack").removeClass("pushBack-left")
  $(".weights").removeClass("weights-left")
  move.play()
}

function reset(){
  $(".piston").addClass("piston-one")
  $(".piston").removeClass("piston-two")
  $(".mass-box").removeClass("mass-box-left")
  $("#resultent").removeClass("resultent-left")
  $("#nOfForce").removeClass("nOfForce-left")
  $("#pushBack").removeClass("pushBack-left")
  $(".weights").removeClass("weights-left")
  move.play()
  setTimeout(function() {
     $(".piston").removeClass("piston-one")
     move.play()
   }, 1400);

  zeroN()

}


//arrows**********************
function twofive() {
  $(".ab").removeClass("ab2");
  $(".ab").removeClass("ab3")
  $(".ab").removeClass("ab4")
  $(".arrow-pusher").removeClass("arrow-pusher2")
  $(".pushbackarrow").removeClass("pushbackarrow2")
}

function fivezero() {
  $(".ab").addClass("ab2");
  $(".ab").removeClass("ab3")
  $(".ab").removeClass("ab4")
  $(".arrow-pusher").removeClass("arrow-pusher2")
  $(".pushbackarrow").removeClass("pushbackarrow2")
}


function sevenfive() {
  $(".ab").removeClass("ab2");
  $(".ab").addClass("ab3")
  $(".ab").removeClass("ab4")
  $(".arrow-pusher").removeClass("arrow-pusher2")
  $(".pushbackarrow").removeClass("pushbackarrow2")
}

function hundy() {
  $(".ab").removeClass("ab2");
  $(".ab").removeClass("ab3")
  $(".ab").addClass("ab4")
  $(".arrow-pusher").addClass("arrow-pusher2")
  $(".pushbackarrow").addClass("pushbackarrow2")
}
console.log (forceData.info[0]);

});