import { NavLink, useNavigate } from 'react-router-dom'
import './styling/sale.css'
import { useState } from 'react'
import Search from './Search'
import Subtotal from './Subtotal'

const items = [{ name: "progressive english", publisher: "macmillan", qty: 1, price: 10.00 }, { name: "progressive english", publisher: "macmillan", qty: 1, price: 10.00 }, { name: "progressive english", publisher: "macmillan", qty: 1, price: 10.00 }]

const Row = (props) => {
    const { name, publisher, qty, price } = props
    return (
        <tr>
            <td>{name}</td>
            <td>{publisher}</td>
            <td>{qty}</td>
            <td>{price}</td>
        </tr>
    )
}

const Table = (props) => {
    const { data } = props
    console.log(data)
    return (
        <table>
            <tbody>
                {data.map((row, index) =>
                    <Row key={`key-${index}`} name={row.name} publisher={row.publisher} qty={row.qty} price={row.price} />
                )}
            </tbody>
        </table>
    )
}

export default function MakeASale({ employeeName }) {
    // point of sale navigation pane
    console.log("constructor()")
    // Redirects user to set-page e.g. home, login
    const nav = useNavigate()

    // Sample data
    // eslint-disable-next-line
    const [rows, setRows] = useState(items) 
    return (
        <div className="point-of-sale">
            <div className="pos-sidebar">
                <h3>Make a Sale</h3>
                <img src='/svgs/employees.svg' alt='employee' />
                <p>{employeeName}</p>
                <hr />
                <NavLink to="/dashboard">
                    <button className='input-btn' type="submit">
                        Back to Dashboard
                    </button>
                </NavLink>
                <NavLink to="/cancel">
                    <button className='input-btn' type="submit">
                        Cancel
                    </button>
                </NavLink>
                <NavLink to="/complete">
                    <button className='input-btn' type="submit">
                        Complete
                    </button>
                </NavLink>
                {/* Footer */}
                <div className='bottom'>
                    <hr />
                    <div onClick={/*Logout and navigate to landing page */ () => { nav("/") }}>
                        <img src='/svgs/logout.svg' alt="logout" />
                        <span>Logout</span>
                    </div>
                </div>
            </div>
            <div className='product-table'>
                <Search />
                <Table data={rows} />
                <Subtotal />
            </div>

        </div>
    )
}