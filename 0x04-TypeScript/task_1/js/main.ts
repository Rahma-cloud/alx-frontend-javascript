interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; // Allow any other attribute
}
  
const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};

interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
    numberOfReports: 14,
}
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}
const printTeacher: printTeacherFunction = (firstName, lastName) => {
    const firstLetter = firstName.charAt(0);
    return `${firstLetter}. ${lastName}`;
};

const printedTeacher = printTeacher('John', 'Doe');
  console.log(printedTeacher);

interface StudentInterface {
    firstName: string;
    lastName: string;
}
  
interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}
  
class StudentClass implements StudentInterface, StudentClassInterface {
    readonly firstName: string;
    readonly lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework(): string {
      return 'Currently working';
    }
  
    displayName(): string {
      return this.firstName;
    }
}
  
const student1 = new StudentClass('John', 'Doe');
console.log(student1.workOnHomework());
console.log(student1.displayName()); 
  
  