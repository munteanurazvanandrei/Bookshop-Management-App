import React from 'react'
import { Link } from 'react-router-dom'
// TODO: create subtotal states and return data from makeASale componennt
const Subtotal = () => {
    return (
        <>
            <div>Subtotal</div>

            {/* Should display the subtotal to the right bottom of the items table when rendered */}
            <div className='row'>
                <div className='col-md-8'></div>
                <div className='col-md-4'>
                    <div className='card card-body mt-3'>
                        <h4>Sub Total:
                            {/* Gets the total item price into the cart */}
                            <span className='float-end'>{totalCartPrice}</span>
                        </h4>
                        <h4>Grand Total
                            {/* Matches the subtotal if no discount or change is made */}
                            <span className='float-end'>{totalCartPrice}</span>
                        </h4>
                        <hr />
                        {/* TODO:change Link to NavLink */}
                        {/* Navigates to checkout page for a successfull sale */}
                        <Link to="/checkout" className='btn btn-primary'>checkout</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Subtotal 