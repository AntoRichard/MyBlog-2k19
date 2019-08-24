window.onload = () => {
    var firebaseConfig = {
        apiKey: "AIzaSyDSWG7BoL2cMpi3Lxj9wks_vZzFBj1tlhg",
        authDomain: "antony-raj-richard-2151b.firebaseapp.com",
        databaseURL: "https://antony-raj-richard-2151b.firebaseio.com",
        projectId: "antony-raj-richard-2151b",
        storageBucket: "antony-raj-richard-2151b.appspot.com",
        messagingSenderId: "951350998876",
        appId: "1:951350998876:web:d1e0ed42ced1b505"
    };
    // Initialize Firebase
    var fire = firebase.initializeApp(firebaseConfig);

}


$(window).on('load', function() {
    $('.loader .inner').fadeOut(500, function() {
        $('.loader').fadeOut(750);
    });
});

$(document).ready(function() {
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false,
    });

    var typed = new Typed('.typed', {
        strings: [
            '&lt;PROGRAMMER/&gt;',
            'WEB DEVELOPER',
            'MACHINE LEARNING',
            'IOT',
        ],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false,
    });

    $('.owl-carousel').owlCarousel({
        loop: false,
        items: 4,
        nav: true,
        margin: 10,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2,
            },
            768: {
                items: 3,
            },
            938: {
                items: 4,
            },
        },
    });

    var skillsTopOffset = $('.skillsSection').offset().top;
    var statsTopOffset = $('.statsSection').offset().top;
    var countUpFinished = false;
    $(window).scroll(function() {
        if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                },
            });
        }

        if (!countUpFinished &&
            window.pageYOffset > statsTopOffset - $(window).height() + 200
        ) {
            $('.counter').each(function() {
                var element = $(this);
                var endVal = parseInt(element.text());

                element.countup(endVal);
            });
            countUpFinished = true;
        }
    });

    $('[data-fancybox]').fancybox();

    $('.items').isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false,
        },
    });

    $('#filters a').click(function() {
        $('#filters .current').removeClass('current');
        $(this).addClass('current');

        var selector = $(this).attr('data-filter');

        $('.items').isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false,
            },
        });

        return false;
    });

    $('#navigation li a').click(function(e) {
        e.preventDefault();

        var targetElement = $(this).attr('href');
        var targetPosition = $(targetElement).offset().top;
        $('html, body').animate({ scrollTop: targetPosition - 50 }, 'slow');
    });

    const nav = $('#navigation');
    const navTop = nav.offset().top;

    $(window).on('scroll', stickyNavigation);

    function stickyNavigation() {
        var body = $('body');

        if ($(window).scrollTop() >= navTop) {
            body.css('padding-top', nav.outerHeight() + 'px');
            body.addClass('fixedNav');
        } else {
            body.css('padding-top', 0);
            body.removeClass('fixedNav');
        }
    }
});

function upload() {

    const firstName = document.getElementById('inputName').value;
    const lastName = document.getElementById('inputLastname').value;
    const email = document.getElementById('inputEmail').value;
    const phone = document.getElementById('inputPhone').value;

    const userinfo = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
    };
    console.log(firebase.database());
}