$(document).ready(function() {
    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #otziv').fadeIn('slow');
    });
    $('.modal_close').on('click', function() {
        $('.overlay, #thanks, #otziv').fadeOut('slow'); 
    });
    $('.button').on('click', function() {
        $('.overlay, #otziv').fadeIn('slow');
    });
    
    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "../mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#otziv').fadeOut();
            $('overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });
});