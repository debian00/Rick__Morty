import { useState, useEffect, useRef } from "react";
import styles from "./SearchBar.module.css"




export default function SearchBar({onSearch}) {//Destructuramos onSearch
   //Retornamos un div con el input tipo search y un botón al cual le pasaremos onSearch recibido por parametro y destructurado
      const [id, setId] = useState("");
      const inputRef = useRef(null);
      

      const handleChange =(event)=>{

            setId(event.target.value)
           
      }
      const handleAdd = () => {
         onSearch(id);
         setId("");
         setTimeout(() => {
           inputRef.current.focus();
         }, 0);
       };
       const handleKeyDown = (event) => {
         if (event.key === "Enter") {
           event.preventDefault();
           handleAdd();
         }
       };
     
      
   return (
      <div className={styles.div}>          
          <input  ref={inputRef}
        type="search"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={id} />
          <button  onClick={(handleAdd)}>Agregar</button> 

      </div>
   );
}
