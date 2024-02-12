export default function updateStudentGradeByCity(
  listStudents,
  city,
  newGrades
) {
  const ids = [];
  const grades = [];
  for (let i = 0; i < newGrades.length; i++) {
    ids.push(newGrades[i].studentId);
    grades.push(newGrades[i].grade);
  }
  return listStudents
    .filter((student) => student.location === city)
    .map((student) => {
      if (ids.includes(student.id)) {
        student.grade = grades[ids.indexOf(student.id)];
      } else {
        student.grade = "N/A";
      }
      return student;
    });
}
