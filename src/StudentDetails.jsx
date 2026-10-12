function StudentDetails({ student }) {
  if (!student) {
    return null;
  }

  return (
    <div>
      <h2>Student Details</h2>

      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Roll Number:</strong> {student.rollNumber}</p>
      <p><strong>Department:</strong> {student.department}</p>
      <p><strong>Marks:</strong> {student.marks}</p>
    </div>
  );
}

export default StudentDetails;
