window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}
$(function() {
    var currentSection = 1;
    var previousScroll = 0;
    var moving = false;

    $(window).mousewheel(function(turn, delta) {
        if (moving == false) {
            moving = true;
            if (delta == 1) {
                currentSection--;
                console.log('Up');
            } else {
                currentSection++;
                console.log('down');
            }

            $('html, body').
                animate({
                    scrollTop: $('#section0' + currentSection).
                        offset().top
                }, 1000, 'linear');

            setTimeout(function(){ moving = false; }, 1000);

        }
        // all kinds of code

        return false;
    });
});