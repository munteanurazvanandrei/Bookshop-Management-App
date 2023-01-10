import React from "react";
import EmployeeCard from "./Employees/EmployeeCard";

function Employee({ employees, selectEmployee }) {
	
	return (
		<div className="ui four column grid">
			<div className="row">
				{employees.map((employee) => (
					<EmployeeCard key={employee.id} employee={employee} onSelectEmployee={selectEmployee} />
				))}
			</div>
		</div>
	);
}

export default Employee;




