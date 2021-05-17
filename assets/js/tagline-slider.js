(function() {
    var $slider = $(".tagline-text");
    var $slides = $slider.find(".tagline-item");
    var slidesNum = $slides.length;
    var prevSlideID = null;
    var currentSlideID = 0;
    var isAnimating = false;

    function init() {
        TweenLite.set($slides, {
            top: "-150%"
        });
        gotoSlide(0, 0);
        play();
    }

    function gotoNextSlide() {
        var slideToGo = currentSlideID + 1;
        if (slideToGo >= slidesNum) {
            slideToGo = 0;
        }
        gotoSlide(slideToGo, 1, "next");
    }

    function gotoSlide(slideID, _time, _direction) {
        if (!isAnimating) {
            isAnimating = true;
            prevSlideID = currentSlideID;
            currentSlideID = slideID;
            var $prevSlide = $slides.eq(prevSlideID);
            var $currentSlide = $slides.eq(currentSlideID);
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
                    top: "-150%"
                });
                TweenLite.fromTo($currentSlide, time, {
                    top: "100%"
                }, {
                    top: "0"
                });
            }
            TweenLite.delayedCall(time, function() {
                isAnimating = false;
            });
        }
    }

    function play() {
        gotoNextSlide();
        TweenLite.delayedCall(4, play);
    }
    setTimeout(() => {
        init();
    }, 4000);
})()