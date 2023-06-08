import React from "react";
import '../../../styles/teacher/grouping/Klasse.css'

function Klasse({students}) {

  const handleDragStart = (e, student) => {
    e.dataTransfer.setData("student", JSON.stringify({ name: student, img: students[student].img }));
  };

  return (
    <div className="klasse-container">
      {Object.keys(students).filter(student => !students[student].inGroup).map((student) => (
        <div
          draggable
          onDragStart={(e) => handleDragStart(e, student)}
          className="student-container"
        >
          <img src={students[student].img} alt={student} />
          <p>{student}</p>
        </div>
      ))}
    </div>
  );
}

export default Klasse;
