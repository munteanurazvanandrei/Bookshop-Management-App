import { NavLink, useNavigate } from 'react-router-dom'
import '../../dist/sale.css'

export default function MakeASale({ employeeName }) {
    // point of sale navigation pane

    // Redirects user to set-page e.g. home, login
    const nav = useNavigate()
    return (
        <div className='point-of-sale'>
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
        </div>
    )
}