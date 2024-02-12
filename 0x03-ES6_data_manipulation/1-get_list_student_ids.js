export default function getListStudentIds(listStudents) {
  if (Array.isArray(listStudents) === false) {
    return [];
  }
  return listStudents.map((student) => student.id);
}
