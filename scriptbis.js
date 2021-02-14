/*$(document).scroll(function() {
    console.log($(document).scrollTop());
})*/


window.addEventListener("scroll", function() {
  let y_scroll_pos = window.pageYOffset;
  let scroll_pos_2400 = 3190;

    if(y_scroll_pos > scroll_pos_2400) {
        document.querySelector(".st0").classList.add('st0active');
        document.querySelector(".st2").classList.add('st2active');
        document.querySelector(".st3").classList.add('st3active');
        document.querySelector(".st4").classList.add('st4active');
        document.querySelector(".st1").classList.add('st1active');
        document.querySelector("#evanoui").style.visibility = "visible";
    }
    else {
        document.querySelector(".st0").classList.remove('st0active');
        document.querySelector(".st2").classList.remove('st2active');
        document.querySelector(".st3").classList.remove('st3active');
        document.querySelector(".st4").classList.remove('st4active');
        document.querySelector(".st1").classList.remove('st1active');
        document.querySelector("#evanoui").style.visibility = "hidden";
    }

    let scroll_pos_rana = 4250;

    if(y_scroll_pos > scroll_pos_rana) {
        document.querySelector("#rana1").style.display = "none";
        document.querySelector("#rana2").style.display = "block";
    } else {
        document.querySelector("#rana1").style.display = "block";
        document.querySelector("#rana2").style.display = "none";
    }


    /*---------worker------------*/

    //variable for the 'stroke-dashoffset' unit
    var dashOffset = document.querySelector(".wowo").style.strokeDashoffset;
    //on a scroll event - execute function

        //calculate how far down the page the user is
        var percentageComplete = ((window.scrollTop() / (document.querySelector("html").getBoundingClientRect().height - window.innerHeight + 1700)) * 100);
        //convert dashoffset pixel value to interger
        var newUnit = parseInt(dashOffset, 10);
        //get the value to be subtracted from the 'stroke-dashoffset'
        var offsetUnit = percentageComplete * (-(newUnit / 15));
        //set the new value of the dashoffset to create the drawing effect
        document.querySelector(".wowo").style.strokeDashoffset = newUnit - offsetUnit;


    if(y_scroll_pos > 1242 && y_scroll_pos < 1816) {
        document.querySelector(".wowo1").style.visibility = "visible"
    }

    else {
        document.querySelector(".wowo1").style.visibility = "hidden"
    }


    if(y_scroll_pos > 2240) {
        document.querySelector("#worker").style.visibility = "hidden"
    }

    else if (y_scroll_pos < 800) {
        document.querySelector("#worker").style.visibility = "hidden"
    }

    else {
        document.querySelector("#worker").style.visibility = "visible"
    }

})

