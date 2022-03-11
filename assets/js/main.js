$(document).ready(function () {

    // Resize Page Refresh
    $(window).bind('resize', function (e) {
        if (window.RT) clearTimeout(window.RT);
        window.RT = setTimeout(function () {
            this.location.reload(false);
        }, 100);
    });
    // Resize Page Refresh

    // Accordion Load
    $(window).on("load", function () {
        $('.accordion .accordionItem').each(function () {
            if ($(this).hasClass('open')) {
                var descHeight = $(this).find('.desc').innerHeight();
                var titleHeight = $(this).find('.title').innerHeight();
                var totalHeight = descHeight + titleHeight;
                $(this).css('height', totalHeight);
            } else {
                $(this).css('height', $(this).find('.title').innerHeight(), 'px');
            }
        });
    })
    // Accordion Load

    // Accordion Click
    $('.accordion .title').click(function () {
        var descHeight = $(this).siblings('.desc').innerHeight();
        var titleHeight = $(this).innerHeight();
        var totalHeight = descHeight + titleHeight;
        if ($(this).parent('.accordionItem').hasClass('open')) {
            $(this).parent('.accordion .accordionItem').css('height', titleHeight, 'px');
            $(this).parent('.accordionItem').removeClass('open');
        } else {
            $('.accordion .accordionItem').removeClass('open');
            $('.accordion .accordionItem').each(function () {
                $(this).css('height', $(this).find('.title').innerHeight() + 'px');
            });
            $(this).parent('.accordionItem').addClass('open');
            $(this).parents('.accordion .accordionItem').css('height', totalHeight);
        }
    });
    // Accordion Click
});