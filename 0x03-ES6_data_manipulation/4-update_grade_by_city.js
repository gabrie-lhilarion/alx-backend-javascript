const addGrade = (student, grades = []) => {
  let grade = 'N/A';

  if (!Array.isArray(grades) || grades.length === 0) {
    grade = 'N/A';
  } else {
    const score = grades.find((grade) => grade.studentId === student.id);

    grade = (score === undefined ? 'N/A' : score.grade);
  }

  return { ...student, grade };
};

function updateStudentGradeByCity(students, city, grades) {
  const studentsFromCity = students.filter((student) => student.location === city);
  const studentsWithGrades = studentsFromCity.map((student) => addGrade(student, grades));

  return studentsWithGrades;
}

export default updateStudentGradeByCity;
