$(function () {
    $('.popup button').on('click', function () {
        console.log($(this).parent());
        $(this).parent().hide();
    });

    $('#header button').on('click', function () {
        $('#header .gnb').toggleClass('on')
    })
});