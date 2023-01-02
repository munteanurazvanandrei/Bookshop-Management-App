import { NavLink, useNavigate } from 'react-router-dom'
import './styling/sale.css'
import './styling/search.css'
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


export default function MakeASale({ employeeName, items }) {
    // point of sale navigation pane
    console.log("constructor()")
    // Redirects user to set-page e.g. home, login
    const nav = useNavigate()

    // Initialize cart state
    const [cart, setCart] = useState([])
    var totalCartPrice = 0

    // TODO: write decrement and increment functions for the cart


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
                {/* TODO: create table for the products */}

                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>{name}</th>
                                <th>{publisher}</th>
                                <th className="text-center">{qty}</th>
                                <th className="text-center">{price}</th>
                                <th className="text-center">Total Price</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, index) => {
                                totalCartPrice += item.price * item.qty
                                return (
                                    <tr key={index}>
                                        <td width="10%">
                                            <img src={"/path_to_image"} alt="message" />
                                        </td>
                                        <td>{item.name}</td>
                                        <td>{item.publisher}</td>
                                        <td>
                                            <div className='input-group'>
                                                <button type='button' onClick={() => handleDecrement(item.id)} className="input-group-text">-</button>
                                                <div className="form-control text-center">{item.qty}</div>
                                                <button type='button' onClick={() => handleIncrement(item.id)} className="input-group-text">+</button>
                                            </div>
                                        </td>
                                        <td>{item.name}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <Subtotal />
                </div>

            </div>
        </div>
    )
}