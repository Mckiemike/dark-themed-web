$(function () {

    $('.checkbox').change(function () {
        var $that = $(this);

        if ($that.is(':checked')) {

            $("nav, section, header, footer").css("background-color", "#000");
            $("nav, header, section, footer").css("color", "#B0B0B6");
            $("article, a").css("background-color", "#203038");
            $("body").css("background-color", "#304048");

        } else {
            $("nav, section, header, footer").css("background-color", "");
            $("nav, header, section, footer").css("color", "");
            $("article, a").css("background-color", "");
            $("body").css("background-color", "");
        }
    });

});