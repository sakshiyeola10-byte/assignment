import { useState } from "react";
import StudentForm from "./StudentForm";
import StudentDetails from "./StudentDetails";

function App() {
  const [student, setStudent] = useState(null);

  return (
    <div>
      <h1>Student Information Application</h1>
      <StudentForm onSubmit={setStudent} />
      <StudentDetails student={student} />
    </div>
  );
}

export default App;
