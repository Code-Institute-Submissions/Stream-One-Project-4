$(document).ready(function(){
    
    
// -------------------- Index --------------------
  
 
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
        $(".d").html("<p>Display Value</p>");
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
