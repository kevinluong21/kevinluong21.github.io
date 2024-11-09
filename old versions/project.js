//lenis scroll from https://github.com/studio-freight/lenis
const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

function vh(percent) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (percent * h) / 100;
  }
  
  function vw(percent) {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return (percent * w) / 100;
  }

$(window).on('scroll', function () {
    $(".intro").css("top", -$(window).scrollTop());
    $(".projects").css("top", ($(".intro").height() - $(window).scrollTop()));

    //scroll past intro div and before the end of the projects div
    if (parseInt($(".intro").css("top")) <= -($(".intro").height()) && $(window).scrollTop() < ($('.intro').height() + $('.list').width() - vh(100))) {
        $(".projects").css("left", -($(window).scrollTop() - $(".intro").height()));
        $(".projects").css("top", 0);
        $(".projects").css("position", "fixed");
    }
    //always default to the div at left 0
    else if (parseInt($(".intro").css("top")) > -($(".intro").height())) {
        $(".projects").css("left", 0);
    }
    //reached the end of the projects div
    else {
        $(".projects").css("top", 0);
        $(".projects").css("position", "fixed");
    }
});

$(window).on('resize', function() {
    $(".projects").css("top", $(".intro").height());
    $(".contact").css("top", $(".intro").height() + $('.list').width());

    var height = $('.intro').height() + $('.list').width() + $('.contact').height();
    $('body').attr('style', 'height: ' + height + 'px !important');
}).resize();