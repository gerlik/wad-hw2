class User {
    constructor(firstname, lastname, birthdate, faculty, gpa) {
        this._firstname = firstname;
        this._lastname = lastname;
        this._birthdate = birthdate;
        this._faculty = faculty;
        this._gpa = gpa;
    }

    get fullname(){
        return this._firstname + " " + this._lastname;
    }

    get birthdate(){
        return this._birthdate;
    }

    get faculty(){
        return this._faculty;
    }

    get gpa(){
        return this._gpa;
    }
}

class Course {
    constructor(title, semester, grade) {
        this._title = title;
        this._semester = semester;
        this._grade = grade;
    }

    get title(){
        return this._title;
    }

    get semester(){
        return this._semester;
    }

    get grade(){
        return this._grade;
    }
}


$(function () {

    $user = new User("John", "Doe", "11/10/1990", "Computer Science", 2.75);
    $courses = [
        new Course("Agile software development", 1, 82),
        new Course("System modelling", 1, 85),
        new Course("OOP", 2, 94),
        new Course("Estonian Language Level A2", 2, 65)
    ]

    $(".info ul").append("<li id='name'>" + $user.fullname + "</li>")
        .append("<li id='birthday'>" + $user.birthdate + "</li>")
        .append("<li id='faculty'>" + $user.faculty + "</li>");

    $("#gpa strong").text($user.gpa);

    $.each($courses, function(key, val){
        $title = $courses[key].title;
        $semester = $courses[key].semester;
        $grade = $courses[key].grade;
        $("#courses tbody").append("<tr>")
            .append("<td>" + $('#courses > tbody tr').length + "</td>")
            .append("<td>" + $title + "</td>")
            .append("<td>" + $semester + "</td>")
            .append("<td>" + $grade + "</td>");
    });


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
