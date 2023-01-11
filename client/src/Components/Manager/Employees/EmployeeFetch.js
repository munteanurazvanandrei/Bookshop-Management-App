import React, { useState, useEffect } from "react";

export default function EmployeeFetch() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/employees")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEmployees(data);
      });
  }, []);

  return (
    <div className="employees">
        
           
               
                {employees.map( employee => <div>
                    <h4>{employee.avatar_url}</h4>
                    <h4>{employee.name}</h4>
                    <h4>{employee.sales}</h4>
                    
                    </div>)}
           
        </div>
		);
}
