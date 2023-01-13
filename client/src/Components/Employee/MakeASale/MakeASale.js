import { NavLink, useNavigate } from 'react-router-dom'
import './styling/sale.css'
import './styling/search.css'
import { useEffect, useState } from 'react'
import Search from './Search'
import Subtotal from './Subtotal'
import Pagination from './Pagination'

export default function MakeASale() {
    // point of sale navigation pane
    console.log("constructor()")
    // Redirects user to set-page e.g. home, login
    const nav = useNavigate()

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true);
    const [searchInput, setSearchInput] = useState("");
    const filteredItems = searchInput.length > 0 ? items.filter((item) => item.name_or_title.toLowerCase().includes(searchInput.toLowerCase())) : items;

    // function to handle any change while user is searching
    const handleChange = (e) => {
        // e.preventDefault();
        setSearchInput(() => e.target.value)
    }

    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(3);

    // Get current products for pagination
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredItems.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );

    // Change Pagination Pages
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        fetch(`/items`)
            .then((r) => r.json())
            .then(items => { setItems(items); setLoading(false); })
            .catch(() => {
                alert('There was an error while retrieving the data')
            })
    }, [])

    // Initialize cart state
    const [totalCartPrice, setTotalCartPrice] = useState(0)

    const [] = useState()
    
    const handleIncrement = (id) =>{
        setItems((prev)=>prev.map(item=> item.id === id ? {...item, qty: item.qty + 1} : item))
    }
    const handleDecrement = (id) =>{
        setItems((prev)=>prev.map(item=> item.id === id ? {...item, qty: item.qty - 1} : item))
    }
    
    const handleDelete = (id) =>{
        setItems((prev)=>prev.filter(item=>item.id !== id))
    }

    return (
        <div className="point-of-sale">
            <div className="pos-sidebar">
                <h3>Make a Sale</h3>
                <img src='/svgs/employees.svg' alt='employee' />
                {/* <p>{employeeName}</p> */}
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
                <Search handleChange={handleChange} />

                <div className="table-responsive">
                    <table className="table-bordered">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th className="text-center">Qty</th>
                                <th className="text-center">Unit Price</th>
                                {/* <th className="text-center">Total Price</th> */}
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentProducts.map((item, index) => {
                                // setTotalCartPrice(prev => prev + (item.price_per_item * item.qty))
                                return (
                                    <tr key={index}>
                                        <td>
                                            <img src={item.img_url} alt="message" height={100} />
                                        </td>
                                        <td>{item.name_or_title}</td>
                                        <td>{item.manufacturer_or_author}</td>
                                        <td>
                                            <div className='input-group'>
                                                {/* This perfoms the increment and decrement of item quantity before getting the total */}
                                                <button type='button' onClick={()=>handleIncrement(item.id)} className="input-group-text">+</button>
                                                <div className="form-control text-center">{item.qty}</div>
                                                <button type='button' onClick={()=>handleDecrement(item.id)} className="input-group-text">-</button>
                                            </div>
                                        </td>
                                        <td>{item.price_per_item}</td>
                                        {/* <td className='text-center'>{totalCartPrice}</td> */}
                                        <td>
                                            {/* When the button is clicked, the deleteItem function is triggered */}
                                            <button type='button' onClick={()=> handleDelete(item.id)} className="btn btn-danger btn-sm">Remove</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                        <Pagination
                            productsPerPage={productsPerPage}
                            filteredItems={filteredItems}
                            paginate={paginate}
                            currentPage={currentPage} />
                    </table>
                    <Subtotal totalCartPrice={items.reduce((total, item) => total + (item.price_per_item * item.qty), 0)} />
                </div>

            </div>
        </div>
    )
}