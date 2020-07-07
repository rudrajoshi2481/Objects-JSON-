import React,{createContext, useState} from 'react'

export const SearchContext = createContext()

export const SearchContextProvider = (props) => {

    const [data,setData] = useState('')

    return(
        <SearchContext.Provider value={[data,setData]}>
            {props.children}
        </SearchContext.Provider>
    )
}