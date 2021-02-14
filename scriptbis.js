/*$(document).scroll(function() {
    console.log($(document).scrollTop());
})*/


$(document).ready(function(){

  $(window).on('scroll', function() {


    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_2400 = 3190;

    if(y_scroll_pos > scroll_pos_2400) {
      $(".st0").attr("class",'st0 st0active');
      $(".st2").attr("class",'st2 st2active');
      $(".st3").attr("class",'st3 st3active');
      $(".st4").attr("class",'st4 st4active');
      $(".st1").attr("class",'st1 st1active');
      $("#evanoui").css({"visibility":"visible"});
    }
    else {
      $("#evanoui").css({"visibility":"hidden"});
      $(".st0").attr("class",'st0');
      $(".st2").attr("class",'st2');
      $(".st3").attr("class",'st3');
      $(".st4").attr("class",'st4');
      $(".st1").attr("class",'st1');
    }
  });



  $(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_rana = 4250;

    if(y_scroll_pos > scroll_pos_rana) {
      $("#rana1").css({"display":"none"});
      $("#rana2").css({"display":"block"});
    }

    else {
      $("#rana2").css({"display":"none"});
      $("#rana1").css({"display":"block"});
    }

  });

  /*---------worker------------*/

    //variable for the 'stroke-dashoffset' unit
    var $dashOffset = $(".wowo").css("stroke-dashoffset");
    //on a scroll event - execute function
    $(window).scroll(function() {
      //calculate how far down the page the user is
      var $percentageComplete = (($(window).scrollTop() / ($("html").height() - $(window).height()+1700)) * 100);
      //convert dashoffset pixel value to interger
      var $newUnit = parseInt($dashOffset, 10);
      //get the value to be subtracted from the 'stroke-dashoffset'
      var $offsetUnit = $percentageComplete * (-($newUnit / 15));
      //set the new value of the dashoffset to create the drawing effect
      $(".wowo").css("stroke-dashoffset", $newUnit - $offsetUnit);
  });


        $(window).on('scroll', function() {
          var y_scroll_pos = window.pageYOffset;

          if(y_scroll_pos > 1242 && y_scroll_pos < 1816) {
            $(".wowo1").css({"visibility":"visible"});
          }

          else {
              $(".wowo1").css({"visibility":"hidden"});
          }

        });



        $(window).on('scroll', function() {
          var y_scroll_pos = window.pageYOffset;

          if(y_scroll_pos > 2240) {
            $("#worker").css({"visibility":"hidden"});
          }

          else if (y_scroll_pos < 800) {
              $("#worker").css({"visibility":"hidden"});
            }

          else {
              $("#worker").css({"visibility":"visible"});
          }

        });

        $(function() {
      		$(".logo").draggable();
      	});


})
