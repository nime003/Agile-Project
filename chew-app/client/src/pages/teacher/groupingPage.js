import React, { useState } from "react";
import '../../styles/teacher/GroupingPage.css';

import Gruppe from "./components/Gruppe";
import Klasse from "./components/Klasse";

function GroupingPage() {
  const groupCount = 6; // The number of groups you want to create

  const [students, setStudents] = useState({
    Kari: { img: "/images/grouping/icons/icon1.png", inGroup: false },
    Ole: { img: "/images/grouping/icons/icon2.png", inGroup: false },
    Per: { img: "/images/grouping/icons/icon3.png", inGroup: false },
    Pål: { img: "/images/grouping/icons/icon4.png", inGroup: false },
    Nina: { img: "/images/grouping/icons/icon5.png", inGroup: false },
    Kjell: { img: "/images/grouping/icons/icon6.png", inGroup: false },
    Jon: { img: "/images/grouping/icons/icon1.png", inGroup: false },
    Rona: { img: "/images/grouping/icons/icon2.png", inGroup: false },
    Will: { img: "/images/grouping/icons/icon3.png", inGroup: false },
    Mona: { img: "/images/grouping/icons/icon4.png", inGroup: false },
    Siv: { img: "/images/grouping/icons/icon5.png", inGroup: false },
    Svein: { img: "/images/grouping/icons/icon6.png", inGroup: false },
    Inge: { img: "/images/grouping/icons/icon1.png", inGroup: false },
    Borge: { img: "/images/grouping/icons/icon2.png", inGroup: false },
    Klaus: { img: "/images/grouping/icons/icon3.png", inGroup: false },
    Erik: { img: "/images/grouping/icons/icon4.png", inGroup: false },
  });

  const addStudentToGroup = (student) => {
    setStudents((prevStudents) => ({
      ...prevStudents,
      [student]: { ...prevStudents[student], inGroup: true },
    }));
  };

  const removeStudentFromGroup = (student) => {
    setStudents((prevStudents) => ({
      ...prevStudents,
      [student]: { ...prevStudents[student], inGroup: false },
    }));
  };

  return (
    <div className="App">
      <div className="Hero">
        <h1>Klasser</h1>
        <div className="hero-utils">
          <input className="search" type="text" placeholder="Søk etter elev" />
          <div className="select-wrapper">
            <select>
              <option value="tåsen">Tåsen skole</option>
              <option value="børresen">Børresen skole</option>
              <option value="bøler">Bøler skole</option>
            </select>
            <select>
              <option value="6A">Klasse 6A</option>
              <option value="6B">Klasse 6B</option>
              <option value="6C">Klasse 6C</option>
              <option value="6D">Klasse 6D</option>
              <option value="6E">Klasse 6E</option>
            </select>
          </div>
        </div>
        <p>Klasse 6A</p>
        <Klasse students={students} />
      </div>
      <div className="section">
        <div className="grupperinger-wrapper">
          <h2>Grupperinger</h2>
          <div className="Grupperinger">
            {Array.from({ length: groupCount }, (_, i) => (
              <Gruppe
                key={i}
                name={`Gruppe ${i + 1}`}
                addStudentToGroup={addStudentToGroup}
                removeStudentFromGroup={removeStudentFromGroup}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="section">
        <div className="stats-wrapper">
          <h2>Klassens progresjon</h2>
          <img src="/images/grouping/stats.png" alt="progression" />
        </div>
      </div>
    </div>
  );
}

export default GroupingPage;
