var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Natosha", "F", "Suri");
var quote = "The most disastrous thing that you can ever learn is your first programming language.";
function smile(quote) {
    return "Did you know: " + "<i>" + quote + "</i>" + " " + "~Alan Kay";
}
var motivation = "So keep up the good work! Just keep swimming...";
function inspiration(motivation) {
    return motivation;
}
document.body.innerHTML = greeter(user) + "<br>" + "<br>" + smile(quote) + "<br>" + "<br>" + inspiration(motivation);
