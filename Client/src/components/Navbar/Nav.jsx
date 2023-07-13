import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import { Link, NavLink } from "react-router-dom";
import styles from "../Navbar/Nav.module.css"

const Nav =({onSearch}) =>{
        return (
             <nav>
               <div>
                  
                 <button className={styles.buttonnav }>
                    <NavLink to ="/About">About</NavLink>
                 </button>
                 <button className={styles.buttonnav}>
                    <NavLink to ="/Home">Home</NavLink>
                 </button>
                 <button className={styles.buttonnav}>
                    <NavLink to ="/Favorites">Favorites</NavLink>
                 </button>
                 </div>
                 <div className={styles.searchContainer}>
                 <SearchBar className= {styles.SearchBar} onSearch={onSearch}/> 
                 </div>
            </nav>
        )
        
}

export default Nav;