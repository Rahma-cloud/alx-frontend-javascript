import { Subjects } from './subjects';

const cpp: Subjects.Cpp = new Subjects.Cpp();
export const cppSubject: Subjects.Cpp = cpp;

const java: Subjects.Java = new Subjects.Java();
export const javaSubject: Subjects.Java = java;

const react: Subjects.React = new Subjects.React();
export const reactSubject: Subjects.React = react;

const cTeacher: Subjects.Teacher = { firstName: 'John', lastName: 'Doe', experienceTeachingC: 10 };

// For Cpp Subject
cpp.setTeacher(cTeacher);
console.log('C++');
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// For Java Subject
java.setTeacher(cTeacher);
console.log('Java');
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// For React Subject
react.setTeacher(cTeacher);
console.log('React');
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
