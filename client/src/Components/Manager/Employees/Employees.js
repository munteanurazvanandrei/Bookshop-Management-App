import React, { useState, useEffect} from "react";
import EmployeeCard from "./EmployeeCard";

export default function Employees() {
	//Render the employees  (employee-cards)
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
		<div className="employyees">
			<div className="row">
				{employees.map((employee) => (
					<EmployeeCard key={employee.id} employee={employee}  />
				))}
			</div>
		</div>
	);
}


