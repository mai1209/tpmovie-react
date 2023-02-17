
import { Link, useHistory } from 'react-router-dom';

import React from 'react'
import NavCSS from "./Nav.module.css";

export default function NavLinks() {
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();

        let input = e.target.search.value;

        if(input.length >=3){
            history.push(`/results?parabra=${input}`);
            e.target.search.value='';
        }
    }




    return (
        <div>
            <div className={NavCSS.menuIcon}>

                <ul >
                    <li className={NavCSS.menuBtn}>
                        <Link className={NavCSS.menuBtn} to="/">Home</Link>
                    </li>
                </ul>
               
               
                <form className={NavCSS.form}>
                    <input className={NavCSS.inputSearch} type="search" placeholder="Search" aria-label="Search" />
                    <button onSubmit={e => handleSubmit(e)}  className={NavCSS.btnSearch} type="submit" name='search'>Search</button>
                </form>

            </div>

        </div>
    )
}
