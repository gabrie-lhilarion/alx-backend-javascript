function getStudentsByLocation(students, location) {
  const studentAtLocation = students.filter((student) => student.location === location);
  return studentAtLocation;
}

export default getStudentsByLocation;
