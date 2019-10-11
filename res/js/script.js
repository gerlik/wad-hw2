$(function () {

    // Tab switch
    $('.courses').click(function () {
        $(".profile").removeClass("active");
        $(".courses").addClass("active");
    });

    $('.profile').click(function () {
        $(".courses").removeClass("active");
        $(".profile").addClass("active");
    });

    // Add course toggle
    $('#add-course-button').click(function () {
        $('#add-course').toggle();
    });

    // Reset new course fields
    $('#cancel-course').click(function () {
        $('.input').val('');
        $('#add-course').toggle();
    })

});

