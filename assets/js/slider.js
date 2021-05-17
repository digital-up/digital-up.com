(function () {
    var $container = $(".hotlink");
    var $slideItems = $container.find(".hotlink-item");
    var slideCount = $slideItems.length;
    var prevSlide = null;
    var currentSlide = 0;
    var animating = false;

    function init() {
        TweenLite.set($slideItems, {
            left: "-100%"
        });
        gotoSlide(0, 0);
        play();
    }

    function gotoNextSlide() {
        var slideToGo = currentSlide + 1;
        if (slideToGo >= slideCount) {
            slideToGo = 0;
        }
        gotoSlide(slideToGo, 0.5, "next");
    }

    function gotoSlide(slideID, _time, _direction) {
        if (!animating) {
            animating = true;
            prevSlide = currentSlide;
            currentSlide = slideID;
            var $prevSlide = $slideItems.eq(prevSlide);
            var $currentSlide = $slideItems.eq(currentSlide);
            var time = 1;
            if (_time !== null) {
                time = _time;
            }
            var direction = "next";
            if (_direction != null) {
                direction = _direction;
            }
            if (direction == "next") {
                TweenLite.to($prevSlide, time, {
                    left: "-100%"
                });
                TweenLite.fromTo($currentSlide, time, {
                    left: "100%"
                }, {
                    left: "0"
                });
            }
            TweenLite.delayedCall(time, function () {
                animating = false;
            });
        }
    }

    function play() {
        gotoNextSlide();
        TweenLite.delayedCall(4, play);
    }
    setTimeout(() => {
        init();
    }, 4500);
})()