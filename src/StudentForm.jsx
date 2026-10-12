import { useState } from "react";

function StudentForm({ onSubmit }) {
  const [student, setStudent] = useState({
    name: "",
    rollNumber: "",
    department: "",
    marks: ""
  });

  function handleChange(e) {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(student);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Student Information</h2>

      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={student.name}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="rollNumber"
        placeholder="Enter Roll Number"
        value={student.rollNumber}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="department"
        placeholder="Enter Department"
        value={student.department}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="marks"
        placeholder="Enter Marks"
        value={student.marks}
        onChange={handleChange}
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default StudentForm;
