import React from 'react';

const Search = ({handleChange}) => {
    
    // initialize state for user input during search
  

    // checks if search input field recieves any character and filters to match name of entity entered

    return (
    <div className="search">
        {/* Returns search as an input type */}
        <input type="search" placeholder='Enter To Start Search' onChange={handleChange} />
    </div>
  )
}

export default Search;