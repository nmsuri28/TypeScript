class Student{
    fullName: string; 
    constructor(public firstName: string, public middleInitial: string, public lastName: string){
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person{
    firstName: string;
    lastName: string;
}

function greeter(person: Person){
    return"Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Natosha", "F", "Suri");

let quote = "The most disastrous thing that you can ever learn is your first programming language.";

function smile(quote){
    return "Did you know: " + "<i>"+quote+"</i>" + " " + "~Alan Kay";
}

let motivation ="So keep up the good work! Just keep swimming...";

function inspiration(motivation){
    return motivation;
}

document.body.innerHTML=greeter(user)+ "<br>" +"<br>" + smile(quote) + "<br>" +"<br>" +inspiration(motivation);