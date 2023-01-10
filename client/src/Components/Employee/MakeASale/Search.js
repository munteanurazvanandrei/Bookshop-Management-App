import React from 'react'

const Search = ({handleChange}) => {
    
    // initialize state for user input during search
  

    // checks if search input field recieves any character and filters to match name of entity entered

    return (
    <div style={{ position:"fixed" }}>
        {/* Returns search as an input type */}
        <input type="search" placeholder='Search here' onChange={handleChange} />
    </div>
  )
}

export default Search;