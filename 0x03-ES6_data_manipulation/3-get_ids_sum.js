function getStudentIdsSum(students) {
  if (!Array.isArray(students)) return 0;
  const sumOfIds = students.reduce((initial, current) => initial + current.id, 0);
  return sumOfIds;
}

export default getStudentIdsSum;
