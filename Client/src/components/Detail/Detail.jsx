import axios from "axios";
import {useParams} from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Detail.module.css"



const Detail = () =>{  
        const[character, setCharacter] = useState({})
        const {id} = useParams();

        
        
useEffect(() => {
   axios(`http://localhost:3001/rickandmorty/character/${id}`)
   .then(response =>response.data)
   .then((data)=> {
      if (data.name) {
         setCharacter(data);
      } else {
         window.alert('No hay personajes con ese ID');
      }
   });
   return setCharacter({});
}, [id]);

return(
               
    
         <div className={styles.containerdet}>
         <img  src={character?.image} alt={character?.name} />
         <div className={styles.containerdet2}>
                <h1>{character?.name}</h1>
                <h2>Specie: {character?.species}</h2>
                <h2>Gender: {character?.gender}</h2>
                <h2>Current Status: {character?.status}</h2>               
                <h2>Origin: {character?.origin?.name}</h2>
                
       </div>
         </div>
       


)




}
export default Detail;