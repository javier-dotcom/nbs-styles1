$(".e-list").slideUp(function() {
    $(".e-button").removeClass("open");
});

$(".e-button").on("click", function() {
    if ($(this).hasClass("open")) {
        $(".e-list").slideUp(function() {
            $(".e-button").removeClass("open");
        });
    } else {
        $(this).addClass("open");
        setTimeout(function() {
            $(".e-list").stop().slideDown();
        }, 200);
    }
});

/*slider*/