import React, { useEffect, useState } from "react";
import EmployeeCard from "./EmployeeCard";
import SearchBar from "./SearchBar";

function Employees() {
  //Render the employees  (employee-cards)
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const res = await fetch("http://localhost:3000/employees");
      const data = await res.json();
      setEmployees(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteEmployee = (empsId) => {
    const filterEmployees = employees.filter((emps) => emps.id !== empsId);

    setEmployees(filterEmployees);
  };

  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      const filteredEmployees = employees.filter((emps) => {
        if (emps.name.toLowerCase().match(searchTerm.toLowerCase())) {
          return true;
        } else {
          return false;
        }
      });
      setEmployees(filteredEmployees);
    } else {
      fetchEmployees();
    }
  };

  const deleteEmployee = async (empsId) => {
    console.log(empsId);
    try {
      const res = await fetch("http://localhost:3000/employees/" + empsId, {
        method: "DELETE",
      });
      handleDeleteEmployee(empsId);
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div className="employyees">
      <SearchBar handleSearch={handleSearch} />
      <div className="row">
        {employees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            deleteEmployee={deleteEmployee}
			handleDeleteEmployee={handleDeleteEmployee}
          />
        ))}
      </div>
    </div>
  );

}

export default Employees;
