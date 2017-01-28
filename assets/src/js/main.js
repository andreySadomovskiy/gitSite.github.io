jQuery(document).ready(function () {

    //scroll to sections
    $(document).ready(function () {

        var offtop = -200;

        $(".navbar-nav").on("click", "a", function (event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top + offtop;
            $('body,html').animate({scrollTop: top}, 900);
        });

        $('.hidden-menu').click(function () {
            $("header").addClass("white-header");
        });
    });

    //header
    $(function () {
        if ($('.navbar-collapse').hasClass('in')) {
            $("header").addClass("white-header");
        }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            $('header').addClass("sticky");
        }
        else {
            $('header').removeClass("sticky");
        }
    });

    $('.link-logo').click(function () {
        $('html, body').animate({scrollTop: '0px'}, 900);
        return false;
    });


    //animation
    function handleProductsPage() {

        var onMobile = false;

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            onMobile = true;
        }
    }

    $(document).ready(function () {
        var vp_height = $(window).height();
        $(document).on('scroll', function () {
            scroll_height = $(document).scrollTop();
            viewport_bottom = vp_height + scroll_height;
            var visible = $('.section').filter($filter_inview).addClass('active');
        });
    });

    function $filter_inview(i, el) {
        var el = $(el);
        return (el.offset().top > scroll_height && el.offset().top < viewport_bottom)
    }

});


//navigation hover effect
$(function () {

    var $el, leftPos, newWidth,
        $mainNav = $(".navbar-nav");

    $mainNav.append("<li id='magic-line'></li>");
    var $magicLine = $("#magic-line");

    $magicLine
        .width($(".current").width())
        .css("left", $(".current a").position().left)
        .data("origLeft", $magicLine.position().left)
        .data("origWidth", $magicLine.width());

    $(".navbar-nav li").hover(function () {
        $el = $(this);
        leftPos = $el.position().left;
        newWidth = $el.width();
        $magicLine.stop().animate({
            left: leftPos,
            width: newWidth
        });
    });
});

