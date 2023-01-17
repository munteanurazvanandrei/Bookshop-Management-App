import { useNavigate } from 'react-router-dom'
export default function PosSidebar({
  employeeName,
  setItems,
  isSearching,
  setSearchInput,
}) {
  const nav = useNavigate()
  return (
    <>
      <div className="pos-sidebar">
        <h1>Sales</h1>
        <p>{employeeName}</p>
        <hr />
        <button
          className="input-btn"
          type="submit"
          onClick={() => nav('/sales_employee')}
        >
          Back to Dashboard
        </button>
        {isSearching ? (
          <button className="input-btn" type="submit" onClick={() => { setSearchInput('') }}>
            Back To Sale
          </button>
        ) : (
          <>
            <button className="input-btn" type="submit" 
            onClick={() =>setItems((prev) => prev.map((item) => ({...item,isCartItem: false,sell_qty: 1,  })))  } >
              Cancel
            </button>
            <button className="input-btn" type="submit">
              Complete
            </button>
          </>
        )}
      </div>
    </>
  )
}
