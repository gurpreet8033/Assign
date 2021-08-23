import React, { useState } from 'react';
import JSONDATA from './MOCK_DATA.json';


const Search = () => {
    return (
        <SearchBox />
    )
}


const SearchBox = () => {
    const [searchTerm, setTerm] = useState('')
    return (
        <form action="/" method="get" className="gap-5 justify-content-center align-items-start  text-center" >
            <label htmlFor="top-bar m-5" className="">
                <h4 className="text-light"> Search</h4>
            </label>
            <button 
                className="btn btn-danger m-5" type="submit" >SEARCH</button>
            <input type="text" className=" m-5" id="top-bar" placeholder="Search words"
                name="sr" onChange={(event) => { setTerm(event.target.value) }} />

            
            {JSONDATA.filter((val)=>{
                if(searchTerm===""){ //if empty
                    return val
                } 
                else if(val.first_name.toLowerCase().startsWith(searchTerm.toLowerCase())){ // checking and then returning value that the word to be searched is included in val (), making it to lower case
                    return val                     
                }
                }).map((val, key) => { //iterating through
                return (
                    <div className="text-white user"  key={key}>
                        <p>
                            {val.first_name + ' ' + val.last_name}
                        </p>
                    </div>
                )
                
            })}


        </form>
    )
}
export default Search