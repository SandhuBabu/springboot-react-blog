import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';

const Search = () => {
    const hideSearch = () => {
        document.querySelector('.nav-search').style
        .transform = "translateY(-6em)"
    }
    return (
        <form style={{transform: "translateY(-6em)"}} className="nav-search" >
            <input type="text" />
            <button className='search-form'><BsSearch /></button>
            <button className='cancel-form' onClick={(e) => {
                e.preventDefault();
                hideSearch();
            }}><AiOutlineClose /></button>
        </form>
    )
}

export default Search