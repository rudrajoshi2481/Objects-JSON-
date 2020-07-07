import React, { useState, useContext } from 'react'
import './Search.css'
import {SearchContext} from '../contextapi'
function Search() {

    const [query,setQuery] = useState('')
    const [gotData,setGotData] = useContext(SearchContext)

    const onChange = (e) => {
        e.preventDefault()
        setQuery(e.target.value)
        setGotData(query)
        }

    return (
        <div>
            <h1>Search</h1>
    <p>{query}</p>
            <input className="input_character" value={query}  onChange={(e) => onChange(e)} placeholder={'Type Name of Character'}></input>
        </div>
    )
}

export default Search
