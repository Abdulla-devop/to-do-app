import { useState } from "react";

/* eslint-disable react/prop-types */
export default function ToDos({ studentdata, setFilterStudentdata }) {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);

    // Filter the student data based on the selected filter
    if (filter === 'All') {
      setFilterStudentdata(studentdata); // Show all students
    } else if (filter === 'Completed') {
      const filteredStudents = studentdata.filter((student) => student.Status == "Completed");
      setFilterStudentdata(filteredStudents); // Show completed students
    } else if (filter === 'Not Completed') {
      const filteredStudents = studentdata.filter((student) => student.Status == "Not Completed");
      setFilterStudentdata(filteredStudents); // Show not completed students
    }
  };

  return (
    <div className="filter">My Todos
    <details className="dropdown">
      <summary className="m-1 btn">{selectedFilter}</summary>
      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
        <li>
          <a onClick={() => handleFilterChange('All')}>All</a>
        </li>
        <li>
          <a onClick={() => handleFilterChange('Completed')}>Completed</a>
        </li>
        <li>
          <a onClick={() => handleFilterChange('Not Completed')}>Not Completed</a>
        </li>
      </ul>
    </details>
    </div>
  );

}