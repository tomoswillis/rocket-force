function init() {

$(document).ready(function(){

var scoreone = 0

  var hotspots = $(".hotspot"); // this stores all <div> items with a class of "hotspot"

  // loop through each hotspot and give them an ID number so can identify them in our code
  $.each(hotspots, function(i,e)
  {
    e.hotspotID = i+1; // the first hotspot has an id of 1, the second 2, etc
  });

  var overlapThreshold = "50%";

  // go through all the draggable objects and store their starting positions
  // so can return to them when dragged off the hotspots

  var arrows = $(".arrowdrag"); // this stores all <div> items with a class of "box"

  $.each(arrows, function(i,e)
  {
    var position = $(e).offset();
    e.originalLeft = position.left - 0;
    e.originalTop = position.top + 0;
    e.dragID = i+1; // the first drag item has an id of 1, the second 2, etc
    e.hotspotIDCurrentlyOn = 0; // when start none of the dragged items are on hotspots
  });


  Draggable.create(".arrowdrag", {
    bounds:".gameStart",
    edgeResistance:0.65,
    type:"x,y",
    throwProps:true,
    onDragStart:function(e) {
      console.log("here")
    },



    // changes the colour of the hotspots whilst dragging to give feedback that a
    // dragged object is going to snap to it
    onDrag:function(e) {
      for(var i=0; i<hotspots.length;i++){
        if (this.hitTest(hotspots[i], overlapThreshold)) {
           $(hotspots[i]).addClass("showOver");
         } else {
           $(hotspots[i]).removeClass("showOver");
         }
      }
    },

    onDragEnd:function(e) {
      var snapMade = false;
      for(var i=0; i<hotspots.length;i++){
        if(this.hitTest(hotspots[i], overlapThreshold)){

          // only snap to an available hotspot, i.e.
          // one without a class of "occupied"
          if(!$(hotspots[i]).hasClass("occupied")){

            // get the position of the hotspot so can move
            // dragging item exactly on it when released
            var p = $(hotspots[i]).position();

            // add a class of occupied to hotspot to stop other items
            // being snapped to it
              $(hotspots[i]).addClass("occupied");

            // tween onto hotspot
              TweenLite.to(e.target.parentElement,0.1, {left:p.left, top:p.top, x:-15, y:0});

            // is a property called hotspotAttachedTo directly on the dragged item.
            // this stores the hotspot we have snapped to.  Allows us to free up
            // the hotspot if we drag it off it

            // before we update that property first checks that we haven't dragged
            // from one hotspot straight to another as this would balls it up
            if(e.target.parentElement.hotspotAttachedTo!==$(hotspots[i]) && e.target.parentElement.hotspotAttachedTo!==undefined){
              e.target.parentElement.hotspotAttachedTo.removeClass("occupied");
              e.target.parentElement.hotspotIDCurrentlyOn = 0;
            }

            // now store new hotspot in hotspotAttachedTo property
              e.target.parentElement.hotspotAttachedTo = $(hotspots[i]);
              e.target.parentElement.hotspotIDCurrentlyOn = i+1;
              console.log(e.target.parentElement.hotspotIDCurrentlyOn)
              snapMade = true;
          }

        }
      }

      // if the dragged item isn't over a hotspot send it back to its
      // start position
      if(!snapMade){
        // if snap is not made send it back
        if(e.target.parentElement.hotspotAttachedTo !== undefined){
          e.target.parentElement.hotspotAttachedTo.removeClass("occupied");
          e.target.parentElement.hotspotAttachedTo = undefined;
          e.target.parentElement.hotspotIDCurrentlyOn = 0;
        }
        TweenLite.to(e.target.parentElement,0.1, {x:0, y:0, top:e.target.parentElement.originalTop, left:e.target.parentElement.originalLeft});

        $('.success-message').addClass("opacity");
      } else {
        console.log("fdsfs" )
        // if a snap is made then see if the items are on the correct hotspots
        testIfComplete();

        scoreone++;

        console.log("score =" + scoreone)
      }
    }
  });

  function testIfComplete(){
    // checks to see if items are on the correct hotspots

    var totalCorrect = 0;
    $.each(arrows, function(i,e)
    {
      console.log(e.dragID,e.hotspotIDCurrentlyOn,e)
      if(e.dragID===e.hotspotIDCurrentlyOn){
        // if the dragged item is on a hotspot with a matching id number it is in the
        // correct place so add one to the total items we have correct
        totalCorrect++;
      }
    });
    console.log("total correct = " + totalCorrect)

    // if the total items correct is equal to the amount of draggable items we know
    // we must have completed the exercise.
    if(totalCorrect===arrows.length){
      if (scoreone <= 2) {
        threeStars()
        threeStarbadge()
  $("#lockone").addClass("displayNone")
      }else if (scoreone <= 4){
        twoStars()
        twoStarsbadge()
  $("#lockone").addClass("displayNone")
      }else{
        oneStars()
        oneStarsbadge()
  $("#lockone").addClass("displayNone")
      }

      setTimeout(function() {
      $('.success-message-DandD1').removeClass("displayNone");
      $('.success-message-DandD1').removeClass("opacity");
      console.log ("removeClass")
      finish.play();}, 1000);

      setTimeout(function() {
        $(".balencedBadge").addClass("badgeMove")
        $(".nextgame1").removeClass("opacity")
      }, 5000);


    } else {

      $('.success-message').addClass("opacity");
      console.log ("addClass");
    }


  }
  var finish = new Audio('sound/finish.mp3');

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

//&&&&&&&&&&&&&&&&&&&new&&&&&&&&&&&&&&&&&&&&



function threeStarbadge() {
   
      $('#goldStarB1-1').removeClass("opacity");
      $('#goldStarB1-1').addClass("smash");  
      

       
      $('#goldStarB1-2').removeClass("opacity");
      $('#goldStarB1-2').addClass("smash");  
      

        
      $('#goldStarB1-3').removeClass("opacity");
      $('#goldStarB1-3').addClass("smash");  
      

   
}

function twoStarsbadge() {
  
      $('#goldStarB1-1').removeClass("opacity");
      $('#goldStarB1-1').addClass("smash");

      
      $('#goldStarB1-2').removeClass("opacity");
      $('#goldStarB1-2').addClass("smash");
  

}

function oneStarsbadge() {
  
      $('#goldStarB1-1').removeClass("opacity");
      $('#goldStarB1-1').addClass("smash");



}




});
}



