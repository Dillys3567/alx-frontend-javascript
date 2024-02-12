export default function getStudentIdsSum(listStudents) {
  return listStudents.reduce((acc, cur) => acc + cur.id, 0);
}
