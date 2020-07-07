import React, { useState, useEffect, useContext } from 'react'
// import Axios from './axios'
import {SearchContext} from '../contextapi' 
import './Show.css'
function Show(props) {


    const [getData,setGotData] = useContext(SearchContext)

    const [items,setItems] = useState([])
    const [isLoading,setIsLoading] = useState(true)

    useEffect(() => {
        const fetchItems = async () => {
            const result = await fetch(`https://www.breakingbadapi.com/api/characters?name=${getData}`)
                                .then(res => res.json())
                                .then(res => {
                                    setItems(res)
                                    setIsLoading(false)
                                    console.log(res)
                                    
                                })
                                
                                // console.log(result);
        }

        fetchItems()
    },[getData])

    return (
        <div>
            <h1>Show</h1>
            {
                items.map(e => {
                    
                   return(<>
                    {
                         Object.entries(e).map((l,o) => {
                            console.log(0);

                            if(l[0] === "name"){
                            return(<><span>{l[1]}</span> <br /></>)
                                // return(<><span>{l[0]}:{l[1]} </span><br /></>)
                            }
                        })
                    }
                   </>)
                })
            }
        </div>
    )
}

export default Show
