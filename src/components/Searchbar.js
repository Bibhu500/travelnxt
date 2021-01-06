
import './Searchbar.css';
import React from 'react';


function Searchbar(props) {
  return (
   <div>
  
        <input onChange={props.searchKey} type="text" placeholder="Where to next.." name="search2" />
        
     
   </div>
  );
}

export default Searchbar;
