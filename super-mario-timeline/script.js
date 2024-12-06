$(window).on("load", function () {
	$(".timeline li").eq(0).addClass("active last");
});
$(window).on("scroll", function () {
	$(".timeline li").removeClass("active last");
	$(".timeline li").each(function () {
		if (
			$(this).offset().top <
			$(window).scrollTop() + $(window).height() / 2 + 25
		)
			$(this).addClass("active");
	});
	$(".timeline .active").last().addClass("last");
});