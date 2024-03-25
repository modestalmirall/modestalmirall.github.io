jQuery(function(){
	$('#menu li').hover(
        function () {
            $(this).find('ul').fadeIn('fast');
        },
        function () {
            $(this).find('ul').fadeOut('slow');
        }
    );
});
