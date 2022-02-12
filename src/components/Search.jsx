import React from 'react'

const Search = ({query, change, keyPress}) => {
  return (
    <input 
        type='text'
        className='search'
        placeholder='Search ...'
        data-testid='inp'
        value={ query }
        onChange={change}
        onKeyPress={keyPress}
    />
  )
}

export default Search;
