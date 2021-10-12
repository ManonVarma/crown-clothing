import React from 'react';

import { IconButton } from '@mui/material';

import './search-bar.style.css';

const SearchBar = ({ handleSubmit, setSearchedText }) => {
    const handleChange = (e) => {
        setSearchedText(e.target.value);
    }

    return (
        <div className="mainbox">
            <form id='search-bar-from' onSubmit={(e) => handleSubmit(e)}>
                <table className="container">
                    <tr>
                        <td>
                        <IconButton className='search-icon'>
                            <button type='submit' className='search-button'>
                                <i className="fas fa-search"></i>
                            </button>
                        </IconButton>
                        </td>
                        <td>
                            <input 
                                className="search-input"
                                onChange={(e) => handleChange(e)} 
                                type='text' 
                                placeholder='Search Apparels'  
                            />
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    )
}


export default SearchBar;
