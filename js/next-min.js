$(document).ready(function(){$("#next-btn").click(function(){nextQuestion()}),$("#back-btn").click(function(){backQuestion()})});var gameoneData=[{information:["<span class='rocketText'>Welcome to Rocket Force</span><br> <span id='name'></span>Here you will learn some of the physics needed to get into space! Your first task is to show balanced forces."]},{information:["Balanced forces mean that the current state <strong>isn't</strong> changing, in other words the rocket isn't moving. <br> <span class='rocketText'> Hint:</span> This also means they must be pushing against each other"]},{information:["Drag the arrows to the correct positions to show this."]},{information:[nexthide=function(){$(".arrowdrag").removeClass("opacity"),$(".hotspot").removeClass("opacity"),$("#next-btn").addClass("opacity")}]}],currentQuestion=1,totalQuestions=gameoneData.length;function showQuestion(){$("#information").html(gameoneData[currentQuestion-1].information[0])}function nextQuestion(){currentQuestion++,(information=0)?$("#back-btn").addClass("displayNone"):(information,$("#back-btn").removeClass("displayNone")),showQuestion(),init()}function backQuestion(){0!=--currentQuestion?$("#back-btn").removeClass("displayNone"):$("#back-btn").addClass("displayNone"),$(".arrowdrag").addClass("opacity"),$("#next-btn").removeClass("opacity")}