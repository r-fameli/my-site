import React from 'react';
import '../../css/SearchBar.css';

function SearchBar(props) {
    let searchItems = props.searchItems
    return (
        <input type="text" placeholder="Search" className="SearchBar"/>
    )
}

export default SearchBar;