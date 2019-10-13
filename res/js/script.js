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

    // Save course fields and add to table
    $('#save-course').click(function () {
        let title = $('#title').val();
        let semester = $('#semester').val();
        let grade = $('#grade').val();
        // got some help from here: https://stackoverflow.com/questions/1149958/jquery-count-number-of-rows-in-a-table
        let number = $('#courses > tbody tr').length + 1;
        $('#courses > tbody:last-child')
            .append($('<tr>'))
            // adding variable to string, got help from: https://stackoverflow.com/questions/3304014/how-to-interpolate-variables-in-strings-in-javascript-without-concatenation/50337497
                .append($(`<td>${number}</td>`))
                .append($(`<td>${title}</td>`))
                .append($(`<td>${semester}</td>`))
                .append($(`<td>${grade}</td>`));
    })

});

