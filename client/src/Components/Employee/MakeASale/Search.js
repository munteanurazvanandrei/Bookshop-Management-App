import React, { useState } from 'react'

const Search = ({items, setItems, allItems}) => {
    
    // initialize state for user input during search
    const [searchInput, setSearchInput] = useState("");

    // function to handle any change while user is searching
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(()=>e.target.value)
        setItems(()=>searchInput.length > 0 ? items.filter((item)=> item.name_or_title.toLowerCase().includes(searchInput.toLowerCase())) : allItems)
    }

    // checks if search input field recieves any character and filters to match name of entity entered

    return (
    <div style={{ position:"fixed" }}>
        {/* Returns search as an input type */}
        <input type="search" placeholder='Search here' onChange={handleChange} value={searchInput} />
    </div>
  )
}

export default Search;