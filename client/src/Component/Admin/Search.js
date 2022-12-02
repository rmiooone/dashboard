import React, {useState, useEffect} from 'react';
import '../../Assets/Search.css'
export function Search () {

    const [datas, setDatas] = useState([]);

    return (
        <>
        <div className='searchBar'>
            <input 
            type="text"
            name="search"
            id="searchBar"
            placeholder='Search'
            />
        </div>
        <div className='search_results'>
            <div className='search_result'></div>
        </div>
        </>
    )
}