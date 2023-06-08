import React, { useState } from "react";
import "../../../styles/teacher/grouping/Gruppe.css";

const Gruppe = ({ name, addStudentToGroup, removeStudentFromGroup }) => {
  const [group, setGroup] = useState([]);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    const student = JSON.parse(e.dataTransfer.getData("student"));
    setGroup((oldGroup) => [...oldGroup, student]);
    addStudentToGroup(student.name);
  };

  const handleClick = (studentName) => {
    setGroup((oldGroup) => oldGroup.filter(student => student.name !== studentName));
    removeStudentFromGroup(studentName);
  };


  return (
    <div className="gruppe-wrapper">
      <h3>{name}</h3>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="gruppe-container"
      >
        {group.map((student) => (
          <div
            className="student-element"
            onClick={() => handleClick(student.name)}
          >
            <img
              src={student.img}
              alt={student.name}
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            />
            <p>{student.name}</p>
            <div className="remove-message">Fjern</div>
          </div>
        ))}
      </div>
      <button className={'button'}>Gi gruppe matrett</button>
    </div>
  );
};

export default Gruppe;
