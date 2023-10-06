import React, { forwardRef } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';

const NavSearch = forwardRef(({toggleSearchForm}, ref) => {
    return (
        <form ref={ref} className="hidden" >
            <input type="text" />
            <button className='search-form'><BsSearch /></button>
            <button className='cancel-form' onClick={(e) => {
                e.preventDefault();
                toggleSearchForm(ref);
            }}><AiOutlineClose /></button>
        </form>
    )
})

export default NavSearch