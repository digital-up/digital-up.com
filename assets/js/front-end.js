$(document).ready(function() {
    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal_close').on('click', function() {
        $('.overlay, #consultation, #thanks, #otzivi').fadeOut('slow'); 
    });
    $('.btn').on('click', function() {
        $('.overlay, #otzivi').fadeIn('slow');
    });
   

    $('#consultation form').validate({
        rules: {
            name: "required",
            phone: "required",
            email: {
                required: true,
                email: true
            }
        },
            messages: {
                name: "Пожалуйста, введите ваше имя",
                phone: "Пожалуйста, введите свой номер телефон",
                email: {
                  required: "Пожалуйста, введите свой email",
                  
                  email: "Неправильно введён адрес почты"
                }
        }
    });
    
    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "../mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #otzivi').fadeOut();
            $('overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });
});