function getStudentIdsSum(students) {
  if (!Array.isArray(students)) return 0;
  if (students.length === 0) return [];
  const sumOfIds = students.reduce((initial, current) => initial + current.id, 0);
  return sumOfIds;
}

export default getStudentIdsSum;
