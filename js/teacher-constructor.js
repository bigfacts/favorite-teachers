'use strict';

var teacher_list = [];

var Teacher = function(teacher){
   this.image = teacher.image;
   this.name = teacher.name;
   this.subjects = teacher.subjects;
   this.stars = teacher.stars;
   this.teacher_id = teacher.teacher_id;

   
};

Teacher.prototype.toHtml = function(){
    var source = $('#teacher-template').text();
    var template = Handlebars.compile(source);
    return template(this);
};

Handlebars.registerHelper('star-icons', function(stars){
    stars = parseInt(stars);
    var result = '';
    switch(stars) {
        case 5: 
            result += '&#9733;';
        case 4:
            result += '&#9733;';
        case 3:
            result += '&#9733;';
        case 2:
            result += '&#9733;';
        default:
            result += '&#9733;';
    }
    switch(stars) {
        case 1:
            result += '&#9734;';
        case 2:
            result += '&#9734;';
        case 3:
            result += '&#9734;';
        case 4: 
            result += '&#9734;';
    }
    return result;
});

teachers.forEach(function(teacher){
    teacher_list.push(new Teacher(teacher));
});
teacher_list.forEach(function(teacher){
    $('#teacher-listings').append(teacher.toHtml());
});