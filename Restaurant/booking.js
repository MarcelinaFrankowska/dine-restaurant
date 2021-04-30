
$(".slide").click(function() {
    $('html,body').animate({
        scrollTop: $(".section").offset().top},
        "smooth");
});



$(document).ready(function() {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;

        if (count===1){
             $input.val(count + " person");
            }
        else {
            $input.val(count + " people") 
        }
       
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1 + " people");
        $input.change();
        return false;
    });
});

