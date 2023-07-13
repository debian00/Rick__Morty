import React from "react";
import Card from "../Card/Card";
import Detail from "../Detail/Detail";
import styles from "./Cards.module.css"





export default function Cards({ characters, onClose }) {
  //Deconstructinge l  props para jalar sus propiedades.
  //Mapeamos las propiedades destructuradas de characters
  //Le pasamos al COMPONENTE Card las propiedades destructuradas y agregamos un key= id
  return (
    <div className={styles.wrap }>
      {characters.map(({ id, name, status, species, gender, origin, location, image }) => {
        return <Card key= {id}
                     id ={id}
                     name = {name} 
                     status ={status}
                     species = {species}
                     gender ={gender}
                     origin = {origin.name}
                     location={location.name}
                     image = {image}
                     onClose={onClose}
                     >  
        </Card>;
      })}
    </div>
  );
}
