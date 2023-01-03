import "./EmployeeSales.css";


export default function EmployeeSales(){
    // Display all transactions
    // "Employee Sales" desktop on figma (distinction : under Manager)
    // Heading "Bookshop-name"
    // Table 
    // Table columns: 
    // Table rows > contain the sale details
    return(<div className="employee-sales">
        <h1>Bookshop manager</h1>

	<table>
		<tr>
		<th>Date</th>
		<th>employee</th>
		<th>Total</th>
		<th>Recieved</th>
		<th>Change</th>
		</tr>
		<tr>
		<td>dd/mm/yy hh:mm</td>
		<td>john Doe</td>
		<td>ksh 3500</td>
		<td>ksh 3500</td>
		<td>ksh 0</td>
		</tr>
		<tr>
		<td>dd/mm/yy hh:mm</td>
		<td>john Doe</td>
		<td>ksh 3500</td>
		<td>ksh 3500</td>
		<td>ksh 0</td>
		</tr>
		<tr>
		<td>dd/mm/yy hh:mm</td>
		<td>john Doe</td>
		<td>ksh 3500</td>
		<td>ksh 3500</td>
		<td>ksh 0</td>
		</tr>
		<tr>
		<td>dd/mm/yy hh:mm</td>
		<td>john Doe</td>
		<td>ksh 3500</td>
		<td>ksh 3500</td>
		<td>ksh 0</td>
		</tr>
		
	</table>



    </div>)
}