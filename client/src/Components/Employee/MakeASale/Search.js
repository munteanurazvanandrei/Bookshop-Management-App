import React, { useState } from 'react'

const Search = () => {
    
    // initialize state for user input during search
    const [searchInput, setSearchInput] = useState("");

    // function to handle any change while user is searching
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value)
    }

    // checks if search input field recieves any character and filters to match name of entity entered
    (searchInput.length > 0) ? items.filter((item)=> item.name.match(searchInput)) : null

    return (
    <div>
        {/* Returns search as an input type */}
        <input type="search" placeholder='Search here' onChange={handleChange} value={searchInput} />
    </div>
  )
}

export default Search;