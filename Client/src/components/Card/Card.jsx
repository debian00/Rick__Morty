import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Card.module.css";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";

function Card({
  id,
  name,
  species,
  gender,
  status,
  origin,
  image,
  addFav,
  removeFav,
  myFavorites,
}) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, name, species, gender, status, origin, image, });
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites, id]);

  return (
    <div className={styles.container}>
      {isFav ? (
        <button onClick={handleFavorite}>♥️</button>
      ) : (
        <button onClick={handleFavorite}>🤍 </button>
      )}
      <div className={styles.wrap}>
        <div >         
          <NavLink to={`/detail/${id}`}>
            <img src={image} alt={name} />
            <h3>{name}</h3>
          </NavLink>
          <h3>Specie: {species}</h3>
          <h3>Gender: {gender}</h3>
          <h3>Current Status: {status}</h3>          
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
