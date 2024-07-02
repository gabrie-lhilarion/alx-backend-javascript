function getListStudentIds(students) {
  if (!Array.isArray(students)) return [];
  if (students.length === 0) return [];
  return students.map((student) => student.id);
}

export default getListStudentIds;
