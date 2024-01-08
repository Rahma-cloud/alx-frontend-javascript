export default function updateStudentGradeByCity(students, city, newGrades) {
  const filteredStudents = students.filter((student) => student.location === city);

  // Map over the filtered students and update their grades
  const updatedStudents = filteredStudents.map((student) => {
    const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);

    // If a matching grade is found, update the student's grade; otherwise, set it to 'N/A'
    if (matchingGrade) {
      return {
        ...student,
        grade: matchingGrade.grade,
      };
    }
    return {
      ...student,
      grade: 'N/A',
    };
  });

  return updatedStudents;
}
