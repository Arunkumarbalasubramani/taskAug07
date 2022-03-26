
// 1. https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md- Part 1 Assignment
class Movie {
    constructor(title,studio,rating = 'PG13'){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
        this.gePG = function(rating){
            if(rating ==='PG13'){
                console.log(  `title is :${this.title} Which is from ${studio}`)
            }
        }
        
    }
}
let mov1= new Movie('Casino Royale','Eon Productions','PG13');
let mov2 = new Movie('Daredevil','Marvel Studios', 'R');
let mov3 = new Movie('Toy Story', 'Pixar');
console.log(mov3);
  

// 2.Write a “person” class to hold all the details.

class Person{
    constructor(name, age, gender,phNo, emailId,address,){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.phNo= phNo;
        this.emailId= emailId;
        this.address = address;
    }
}
let person1= new Person('Arun Kumar','24','Male','123456789','arunkumar.vbs.b@gmail.com', 'XYZ Street, Chennai, 600001');
console.log(person1);