import './styling/sale.css'
import { useState, useEffect } from 'react'
import PosSidebar from './PosSidebar'
import SaleItems from './SaleItems'
import { useNavigate } from 'react-router-dom'

export default function MakeASale({ employeeName }) {
  const [items, setItems] = useState()
  const [loading, setLoading] = useState(true)
  const [searchInput, setSearchInput] = useState('')
  const [change, setChange] = useState(0);
  const nav = useNavigate();

  const filteredItems = items
    ? items.filter((item) =>
      item.name_or_title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    : null

  useEffect(() => {
    fetch(`https://bma-server-production.up.railway.app/items`, {
      headers: {
        role: 'manager',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((r) => r.json())
      .then((json) => {
        console.log(json)
        setItems(
          json.map((item) => ({ ...item, isCartItem: false, sell_qty: 1 }))
        )
        setLoading(false)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [2])

  function handleCalc(e) {
    const total = items && items.reduce((total, item) => item.isCartItem ? item.sell_qty * item.price_per_item + total : total, 0)
    setChange(isNaN(parseInt(e.target.value)) ? 0 : parseInt(e.target.value) - total)
  }

  return (
    <div className="point-of-sale">
      <PosSidebar setItems={setItems} items={items} isSearching={searchInput.length > 0} setSearchInput={setSearchInput} />
      <div className="sale-items-div">
        <div className='search-div'>
          <input
            className="search-in-all-items"
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          /><img src="/svgs/black-logout.svg" alt="logout" onClick={() => { localStorage.clear(); nav("/"); }} />
        </div>
        <SaleItems isNotSearching={searchInput.length === 0}
          items={items} setItems={setItems} filteredItems={filteredItems} />
        <div className='sale-calc-main'>
          <div className='flex-main'>
            <div className='total-h4s'>
              <h4>Total Qty sold</h4>
              <h4>Total amount</h4>
              <h4>Recieved</h4>
              <h4 className='change'>Change</h4>
            </div>
            <div className='total-text'>
              <h4>{items && items.reduce((total, item) => item.isCartItem ? item.sell_qty + total : total, 0).toLocaleString()}</h4>
              <h4>{items && items.reduce((total, item) => item.isCartItem ? item.sell_qty * item.price_per_item + total : total, 0).toLocaleString()}</h4>
              <input type="number" onChange={handleCalc} />
              <h4 className='change' style={change < 0 ? { color: "red" } : { color: "#0368FF" }}>{change.toLocaleString()}</h4>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  )
}
