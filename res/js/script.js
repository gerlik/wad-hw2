$(function () {

    // js function to reset add course fields
    function reset_fields(){
        $('.input').val('');
        $('#add-course').toggle();
    }

    // js function to calculate gpa
    function gpa(grades) {
        var total = 0;
        for (var i = 0; i < grades.length; i++) {
            let grade = grades[i];
            if (grade > 90) {
                total += 4;
            }
            else {
                if (grade > 80) {
                    total += 3;
                }
                else {
                    if (grade > 70) {
                        total += 2;
                    }
                    else {
                        if (grade > 60) {
                            total += 1;
                        }
                        else {
                            if (grade > 50) {
                                total += 0.5;
                            }
                        }
                    }
                }
            }
        }
        return (total / i).toFixed(2)
    }

    // js function to update gpa
    function update_gpa(gpa) {
        $('#gpa').children().text(gpa)
    }


    // js function to get all the grades
    function get_grades() {
        let grades = [];
        $('#courses td:nth-of-type(4)').each( function () {
            grades.push($(this).html());
        });
        return grades
    }

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
        reset_fields()
    });

    // Save course fields and add to table
    $('#save-course').click(function () {
        let title = $('#title').val();
        let semester = $('#semester').val();
        let grade = $('#grade').val();
        // got some help from here: https://stackoverflow.com/questions/1149958/jquery-count-number-of-rows-in-a-table
        let number = $('#courses > tbody tr').length + 1;
        $('#courses > tbody:last-child')
            .append($('<tr>')
            // adding variable to string, got help from: https://stackoverflow.com/questions/3304014/how-to-interpolate-variables-in-strings-in-javascript-without-concatenation/50337497
                .append(`<td>${number}</td>`)
                .append(`<td>${title}</td>`)
                .append(`<td>${semester}</td>`)
                .append(`<td>${grade}</td>`)
            );
        reset_fields();
        update_gpa(gpa(get_grades()));
    });

});

