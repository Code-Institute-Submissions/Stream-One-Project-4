
$(document).ready(function(){
    
    
// -------------------- Charlie --------------------
  let answerform = document.getElementById("myForm");
  $(".work").click(function() {
        let total = parseInt(answerform["answer1"].value) + parseInt(answerform["answer2"].value)
        + parseInt(answerform["answer3"].value) + parseInt(answerform["answer4"].value);
        if (total<= 4) {
            
            // document.getElementById('myImage').src='images/Charlie5.jpg';
            $("#myImage").attr("src", "images/Charlie10.jpg");
        } else if (total <= 8) { 
            $("#myImage").attr("src", "images/Charlie10.jpg");
          
        } else if (total <= 12){
            $("#myImage").attr("src", "images/Charlie15.jpg");
        } else if (total <= 16){
            $("#myImage").attr("src", "images/Charlie19.jpg"); 
        } else {
            $("#myImage").attr("src", "images/Charlie20.jpg");
        }
    // $(".whatCharlie").fadeIn(4000);
    $(".whatWeapon").fadeIn(8000);
        
    $(".formDiv").remove();
    });
  
    $('.tryAgain').click(function() {
        location.reload();
    });
 
 
 
 
 
//  -------------------- Dennis --------------------

function typeWriter(text, n, a) {
  if (n < (text.length)) {
    $(a).html(text.substring(0, n+1));
    n++;
    setTimeout(function() {
      typeWriter(text, n, a)
    }, 150);
  }
  if (a == '.test')
    $(a).css('text-decoration', 'underline');
}

typeWriter("The D.E.N.N.I.S System", 0, '.test');

$('.start').click(function() {
  
  let text = $('.d').data('text');
  
  typeWriter(text, 0, '.d');
  
});  
$('.start2').click(function() {
  
  let text = $('.e').data('text');
  typeWriter(text, 0, '.e');
  
});
$('.start3').click(function() {
  
  let text = $('.n1').data('text');
  typeWriter(text, 0, '.n1');
  
});
$('.start4').click(function() {
  
  let text = $('.n2').data('text');
  typeWriter(text, 0, '.n2');
  
});
$('.start5').click(function() {
  
  let text = $('.i').data('text');
  typeWriter(text, 0, '.i');
  
});
$('.start6').click(function() {
  
  let text = $('.s').data('text');
  typeWriter(text, 0, '.s');
});







 
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
    // $(".tL").click(function() {
    //     $(".d").html("<p>Demonstrate Value</p>");
    //     $(this).children("button").css({"background-color": "#176905", "border-color": "#48A136"});
    // });
    // $(".tR").click(function() {
    //     $(".e").html("<p>Engage Physically</p>");
    //     $(this).children("button").css({"background-color": "#176905", "border-color": "#48A136"});
    // });
    //  $(".mL").click(function() {
    //     $(".n1").html("<p>Nurture Dependence</p>");
    //     $(this).children("button").css({"background-color": "#176905", "border-color": "#48A136"});
    // });
    //  $(".mR").click(function() {
    //     $(".n2").html("<p>Neglect Emotionally</p>");
    //     $(this).children("button").css({"background-color": "#176905", "border-color": "#48A136"});
    // });
    //  $(".bL").click(function() {
    //     $(".i").html("<p>Inspire Hope</p>");
    //     $(this).children("button").css({"background-color": "#176905", "border-color": "#48A136"});
    // });
    //  $(".bR").click(function() {
    //     $(".s").html("<p>Separate Entirely</p>");
    //     $(".header").fadeIn(2000);
    //     $(".dennisHeader").fadeIn(2000);
    //     $(".dennisPara").fadeIn(2000);
    //     $(this).children("button").css({"background-color": "#176905", "border-color": "#48A136"});
        
    // });
    
    
    

//  -------------------- Dee --------------------
// $('#myCarousel').carousel({
//   interval: 10000
// })



//   $(".carousel .item").each(function(){
//   let next = $(this).next();
//   if (!next.length) {
//     next = $(this).siblings(":first");
//   }
//   next.children(":first-child").clone().appendTo($(this));
  
//   if (next.next().length>0) {
//     next.next().children(":first-child").clone().appendTo($(this));
//   }
//   else {
//   	$(this).siblings(":first").children(":first-child").clone().appendTo($(this));
//   }
// });
 


 $('.multi-item-carousel .item').each(function(){
// check the screen width
let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
      // console.log(width);
      if (width > 960) { // do a conditional: if screen width greater than 960px for example
      //following code shows three images per slide
      //without it, its just one image per slide
         let next = $(this).next();
          if (!next.length) {
            next = $(this).siblings(':first');
          }
          next.children(':first-child').clone().appendTo($(this));

          if (next.next().length>0) {
            next.next().children(':first-child').clone().appendTo($(this));
          } else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
          } 
    }   
});

});