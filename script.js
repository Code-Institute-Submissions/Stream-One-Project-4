
$(document).ready(function(){
    
    
// -------------------- Charlie --------------------
  let answerform = document.getElementById("myForm");
  $(".work").click(function() {
      let total = parseInt(answerform["answer1"].value) + parseInt(answerform["answer2"].value)
         + parseInt(answerform["answer3"].value) + parseInt(answerform["answer4"].value);
         if (total<= 4) {
          alert("Hey! You got it right!");
          document.getElementById('myImage').src='images/Charlie4.jpg';
         } else if (total <= 8) { 
          
          
         } else if (total <= 12){
            document.getElementById('myImage').src='images/Charlie12.jpg';
         } else if (total <= 16){
            document.getElementById('myImage').src='images/Charlie16.jpg'; 
         } else {
            document.getElementById('myImage').src='images/Charlie20.jpg'; 
         }
    $(".whatCharlie").fadeIn(4000);
    $(".whatWeapon").fadeIn(8000);
    $(".tryAgain").fadeIn(12000);
    $(".formDiv").remove();
    });
  
    $('.tryAgain').click(function() {
    location.reload();
    });
 
//  -------------------- Dennis --------------------
 
    // $(".dennis").mouseenter(function() {
    // 	$(this).css("color", "red");
    // 	$(this).children("span").css("color", "red");
    // 	$(this).children("span").show();
    // });
 
    // $(".dennis").mouseleave(function() {
	   //$(this).siblings().fadeTo(500,1);
	   //$(this).css("color", "black");
	   //$(this > "span").css("color", "black");
	   //$("span").hide();
    // // });
    // $(".d").click(function() {
    //     $(".tL").html("<h2>Demonstrate Value</h2>");
    // //     (".tL").addClass('topRight');
    // //     // $(".top.left").addClass('show');
    // //     $(this).css("color", "red");
    // // 	$(this).children("span").css("color", "red");
    // // 	$(this).children("span").show();
    // // // 	$(".topLeft").fadeTo(3000,1)
    // });
    $(".tL").click(function() {
        $(".d").html("<p>Demonstrate Value</p>");
    });
    $(".tR").click(function() {
        $(".e").html("<p>Engage Physically</p>");
    });
     $(".mL").click(function() {
        $(".n1").html("<p>Nurture Dependence</p>");
    });
     $(".mR").click(function() {
        $(".n2").html("<p>Neglect Emotionally</p>");
    });
     $(".bL").click(function() {
        $(".i").html("<p>Inspire Hope</p>");
    });
     $(".bR").click(function() {
        $(".s").html("<p>Separate Entirely</p>");
        $(".header").fadeIn(2000);
        
    });
    
    
    

//  -------------------- Dee --------------------
// $('#myCarousel').carousel({
//   interval: 10000
// })



  $(".carousel .item").each(function(){
  let next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(":first");
  }
  next.children(":first-child").clone().appendTo($(this));
  
  if (next.next().length>0) {
    next.next().children(":first-child").clone().appendTo($(this));
  }
  else {
  	$(this).siblings(":first").children(":first-child").clone().appendTo($(this));
  }
});
 
});



