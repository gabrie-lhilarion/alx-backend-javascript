function getStudentsByLocation(students, location) {
  if (students.length === 0) return [];
  if (location.trim() === '') return [];
  const studentAtLocation = students.filter((student) => student.location === location);
  return studentAtLocation;
}

export default getStudentsByLocation;
