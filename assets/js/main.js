$(document).ready(function () {
    // Accordion Load
    setTimeout(function () {
        $('.accordion .accordionColumn').each(function () {
            if ($(this).hasClass('open')) {
                var accordionHeight = $(this).find('.desc').innerHeight();
                var accordionTitle = $(this).find('.title').innerHeight();
                var accordionHeightTotal = accordionHeight + accordionTitle;
                $(this).css('height', accordionHeightTotal);
            } else {
                $(this).css('height', $(this).find('.title').innerHeight(), 'px');
            }
        });
    }, 100);
    // Accordion Load

    // Accordion Click
    $('.accordion .title').click(function (e) {
        var accordionHeight = $(this).siblings('.desc').innerHeight();
        var accordionTitle = $(this).innerHeight();
        var accordionHeightTotal = accordionHeight + accordionTitle;
        if ($(this).parent('.accordionColumn').hasClass('open')) {
            $(this).parent('.accordion .accordionColumn').css('height', accordionTitle, 'px');
            $(this).parent('.accordionColumn').removeClass('open');
        } else {
            $('.accordion .accordionColumn').removeClass('open');
            $('.accordion .accordionColumn').each(function () {
                $(this).css('height', $(this).find('.title').innerHeight() + 'px');
            });
            $(this).parent('.accordionColumn').addClass('open');
            $(this).parents('.accordion .accordionColumn').css('height', accordionHeightTotal);
        }
    });
     // Accordion Click
});