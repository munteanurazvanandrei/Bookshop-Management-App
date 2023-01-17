import './EmployeeSales.css'
import React, { useState, useEffect } from 'react'

export default function EmployeeSales() {

  const [employeeSales, setemployeeSales] = useState()
  useEffect(() => {
    fetch('https://bma-server-production.up.railway.app/sales_transactions',{
      headers:{"Authorization":`Bearer ${localStorage.getItem("token")}`,
            "role":"manager"
    }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setemployeeSales(data)
      })
  }, [])

  // return <div>{employeeSales.map((sales)=>sales.employee_name)}</div>;
  return (
    <div className="employee-sales">
      <h1>Bookshop Manager</h1>

      <table>
        <thead>
        <tr>
          <th>Date</th>
          <th>Employee</th>
          <th>Total</th>
          <th>Recieved</th>
          <th>Change</th>
        </tr>
        </thead>
        <tbody>
          {employeeSales && employeeSales.map((sale,ind) => (
            <tr key={ind}>
              <td>{sale.created_at.replace("T"," - ").replace("Z","")}</td>
              <td>{sale.employee_name}</td>
              <td>{sale.amount}</td>
              <td>{sale.recieved}</td>
              <td>{sale.change}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
