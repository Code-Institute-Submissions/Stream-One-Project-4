
$(document).ready(function(){
    
    
// -------------------- Charlie --------------------

  let answerform = document.getElementById("myForm");
  $(".work").click(function() {
        let total = parseInt(answerform["answer1"].value) + parseInt(answerform["answer2"].value)
        + parseInt(answerform["answer3"].value) + parseInt(answerform["answer4"].value);
        
        function withinRange(question) {
          let letter = parseInt(answerform[question].value);
          if (letter < 0 || letter > 5 || letter === "") {
              console.log(letter)
              $("#error").modal();
              return false;
          } else {
              return letter;
          }
        }
        let w = withinRange("answer1");
        let x = withinRange("answer2");
        let y = withinRange("answer3");
        let z = withinRange("answer4");
        
        console.log(w)
        console.log(x)
        console.log(y)
        console.log(z)
        
        
        if (w != false && x != false && y != false && z != false && w > 0 && x > 0 && y > 0 && z > 0){
          if (total<= 4) {
              $("#myImage").attr("src", "images/Charlie10.jpg");
          } else if (total <= 8) { 
              $("#myImage").attr("src", "images/Charlie10.jpg");
          } else if (total <= 12){
              $("#myImage").attr("src", "images/Charlie15.jpg");
          } else if (total <= 19){
              $("#myImage").attr("src", "images/Charlie19.jpg"); 
          } else {
              $("#myImage").attr("src", "images/Charlie20.jpg");
          }
        
          $(".details").fadeIn(8000);
          $(".formDiv").remove();
        }
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


//  -------------------- Dee --------------------

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

$("#UserRegForm").on('submit', function(e) {
  console.log("Whatup")
  $("#validate").modal();
  e.preventDefault();
});



});