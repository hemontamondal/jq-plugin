
// js start
wow = new WOW({
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    })
wow.init();



wow1 = new WOW({
      boxClass:     'wow1',      // default
       animateClass: 'animated', // default
       offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
     })
wow1.init();


// jq start
$(document).ready(function(){

	$('.counter').counterUp({
        delay: 10,
        time: 2000
    });

    $('.box3h2').CountUpCircle({
        duration: 2000, // In ms, default: 5000
    });

})


