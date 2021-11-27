// JavaScript Document
$( function() {
   $("map area").click( function(){

      if ($(this).attr("id") == "tertiary") {
         $("#feedback").css("color","red");
         $("#feedback").html("No, tertiary consumers are predators that hunt and eat other consumers!");
      }
	   
	  if ($(this).attr("id") == "secondary") {
         $("#feedback").css("color","red");
         $("#feedback").html("No, secondary consumers are usually omnivores that eat other organisms below them on the food chain!");
      }

      if ($(this).attr("id") == "primary") {
         $("#feedback").css("color","red");
         $("#feedback").html("No, primary consumers are organisms that eat plants, algae, and other producers!");
      }

      if ($(this).attr("id") == "producer") {
         $("#feedback").css("color","green");
         $("#feedback").html("Correct! Primary producers are organisms that can do photosynthesis to convert sunlight into food!");
      }

  $("#feedback").css;

$('#myModal').modal("show");
   });
}); //end main jQuery function
