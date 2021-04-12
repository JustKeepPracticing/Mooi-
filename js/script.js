// timer start

var countDownDate = new Date("Dec 17, 2021 22:55:25").getTime();

var timer = setInterval(function () {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    var dayText = days > 1 ? "Days" : "Day";
    var hoursText = hours > 1 ? "Hours" : "Hour";
    var minutesText = minutes > 1 ? "Minutes" : "Minute";
    var secondsText = seconds > 1 ? "Seconds" : "Second";

    var daysContent = days >= 1 ? "<div><span>" + days + "</span><span>" + dayText + "</span></div>" : "";
    var hoursContent = hours >= 1 || days !== 0 ? "<div><span>" + hours + "</span><span>" + hoursText + "</span></div>" : "";
    var minutesContent = minutes >= 1 || hours !== 0 ?  "<div><span>" + minutes + "</span><span>" + minutesText + "</span></div>" : "";
    var secondsContent = "<div><span>" + seconds + "</span><span>" + secondsText + "</span></div>";

    var timerContent = '<div class="timer">' +
        daysContent +
        hoursContent +
        minutesContent +
        secondsContent +
        "</div>";
    document.getElementById("countdown").innerHTML = timerContent;

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);

// timer end

// sticky header start

function stickyHeader() {
    var header = $("#header");
    var sticky = 200;

    if (window.pageYOffset > sticky) {
        header.addClass("header--sticky");
    } else {
        header.removeClass("header--sticky");
    }
}

// sticky header ends

// smooth scrolling start

$(document).ready(function () {
    $(".smooth-scroll-element").on("click", function (e) {
        e.preventDefault();

        var target = $(this).attr("href");

        $("html, body").animate({scrollTop: $(target).offset().top - 60}, 1000, function () {});
    });

    // smooth scrolling end

    // menu wrapper and mobile menu show/hide start

    $('.menu a').click(function () {
        $('.home__nav-wrapper').toggleClass('checked');
        $('#hamburger-menu').prop('checked', false)
    });

    // menu wrapper and mobile menu show/hide end

    // mobile menu triggering start

    $("#hamburger-menu").on("change", function () {
        var homeNavWrapper = $(".home__nav-wrapper");
        if ($(this).is(":checked")) {
            homeNavWrapper.addClass("checked");
        } else {
            homeNavWrapper.removeClass("checked");
        }
    });

    // mobile menu triggering end

    // material style input forms start

    $(".contact__form--smart-label").on("blur", function () {
        var text = $(this).val();
        if (text === "") {
            $(this).removeClass("is-focused");
        } else {
            $(this).addClass("is-focused");
        }
    });

    // material style input forms end

    // active menu on scroll start

    $(window).scroll(function () {
        var scrollDistance = $(window).scrollTop();
        var smoothScrollElement = $('.home__nav-wrapper a.smooth-scroll-element');
        stickyHeader();
        $(".section").each(function (i) {
            if ($(this).position().top - 61 <= scrollDistance) {
                $(".home__nav-wrapper a.menu__item--active").removeClass("menu__item--active");
                if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                    smoothScrollElement.last().addClass('menu__item--active');
                } else {
                    smoothScrollElement.eq(i).addClass('menu__item--active');
                }
            }
        });
    }).scroll();
});

    // active menu on scroll end
