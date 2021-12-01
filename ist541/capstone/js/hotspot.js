// JavaScript Document
$( function() {
   $("map area").click( function(){

      if ($(this).attr("id") == "audio") {
         $("#feedback").css("color","black");
         $("#feedback").html("Use this button to control the audio: click to pause and restart. After the audio has finished playing, you can also click here to restart it!");
      }

      if ($(this).attr("id") == "transcript") {
         $("#feedback").css("color","black");
         $("#feedback").html("Click this pink bubble to open a transcript of the audio for the slide!");
      }

      if ($(this).attr("id") == "toc") {
         $("#feedback").css("color","black");
         $("#feedback").html("Click here to open up the table of contents. You can use this to see and navigate to the slides marking each major section of the lesson.");
      } 
	   
	   if ($(this).attr("id") == "back") {
         $("#feedback").css("color","black");
         $("#feedback").html("This back button will take you to the previous slide in the lesson.");
      }
	   
	   if ($(this).attr("id") == "next") {
         $("#feedback").css("color","black");
         $("#feedback").html("This next button will take you to the next slide in the lesson.");
      }
	   
	   if ($(this).attr("id") == "current") {
         $("#feedback").css("color","black");
         $("#feedback").html("This number will tell you what slide number you are currently on.");
      }
	   
	   if ($(this).attr("id") == "total") {
         $("#feedback").css("color","black");
         $("#feedback").html("This number tells you the total number of slides in this lesson module.");
      }
	   
	   if ($(this).attr("id") == "previous") {
         $("#feedback").css("color","black");
         $("#feedback").html("This arrow also alows you to go back to the previous slide.");
      }
	   
	   if ($(this).attr("id") == "forward") {
         $("#feedback").css("color","black");
         $("#feedback").html("This arrow also allows you to move forward to the next slide.");
      }
	   
	   if ($(this).attr("id") == "navbar") {
         $("#feedback").css("color","black");
         $("#feedback").html("This navigation bar does a lot! First, each box represents one slide. If you hover over a box it will show you the name of the slide, and if you click the box you will be taken to that slide. Next, you can use these boxes to keep track of your progress because the blue boxes are the current and previous slides while the grey boxes are the slides you still need to visit. Finally, the shapes and icons in the boxes give you extra information about each slide. Circles mean that there is at least one question or knowledge check on that slide. The dash and star are always the final slide; this is where you will see a summary of the points you have earned throughout the lesson.");
      }
	   
	   if ($(this).attr("id") == "answer") {
         $("#feedback").css("color","black");
         $("#feedback").html("Some slides will include multiple choice questions like this one. Simply click to select the correct answer. Other question types may ask you to type in a box or drag words or images to specific locations on the screen.");
      }
	   
	   if ($(this).attr("id") == "check") {
         $("#feedback").css("color","black");
         $("#feedback").html("Click this button to check if your answer is correct! Most question types will either check your answer automatically or will provide a button like this one for you to check if you are right. Additionally, most items will allow you to restart or try again if you don't get the answer the first time.");
      }
	   
	   if ($(this).attr("id") == "fullscreen") {
         $("#feedback").css("color","black");
         $("#feedback").html("Click here to enter fullscreen mode. This is particularly helpful on smaller screens if part of the lesson is cut off at the bottom.");
      }

  $("#feedback").css("backgroundColor","aquamarine");
	   $("#feedback").css("font-weight","bold");
	   $("#feedback").css("width","858px");
	   $("#feedback").css("padding","20px");
	   $("#feedback").css("text-align","center");
	   $("#feedback").css("margin-left","30px");

   });
}); 