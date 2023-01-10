import "./EmployeeSales.css";
import React, { useState, useEffect } from "react";

export default function EmployeeSales() {
  // Display all transactions
  // "Employee Sales" desktop on figma (distinction : under Manager)
  // Heading "Bookshop-name"
  // Table
  // Table columns:
  // Table rows > contain the sale details

  const [employeeSales, setemployeeSales] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/sales_transactions")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setemployeeSales(data);});
	}, []);

  // return <div>{employeeSales.map((sales)=>sales.employee_name)}</div>;
  return (
    <div className="employee-sales">
      <h1>Bookshop manager</h1>

       <table>
		<tr>
		<th>Date</th>
		<th>employee</th>
		<th>Total</th>
		<th>Recieved</th>
		<th>Change</th>
		</tr>
		{employeeSales.map(sale=><tr>
			<td>{sale.created_at}</td>
			<td>{sale.employee_name}</td>
			<td>{sale.amount}</td>
			<td>{sale.recieved}</td>
			<td>{sale.change}</td>
			</tr>)}
	</table>
	</div>
		);
}
