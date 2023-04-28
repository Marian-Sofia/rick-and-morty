import { NavLink } from "react-router-dom";
import style from './Card.module.css'
import { addFav, removeFav } from "../../redux/actions";
import { connect } from 'react-redux';
import { useState, useEffect } from "react";


function Card({ id, name, status, species, gender, image, onClose, addFav, removeFav, myFavorites }) {

   const [ isFav, setIsFav ] = useState(false)


   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFav(id);
      }
      else {
         setIsFav(true);
         addFav({id, name, species, gender, image, onClose})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.div}>
         <div className={style.background} >

         <button className={style.corazon} onClick={handleFavorite}>{isFav ? '❤️' : '🤍' }</button>
         <button className={style.btn} onClick={() => onClose(id)}>X</button>
         

        <div className={style.fondo}>
         <NavLink className={style.name} to={`/detail/${id}`} >
            <h3 className={style.cardName}>{name}</h3>
         </NavLink>
        </div>

         <h2 className={style.id} >ID: {id}</h2>
         <h2 className={style.gender}>GENDER: {gender}</h2>
         <h2 className={style.status}>STATUS: {status}</h2>
         <img className={style.image}src={image} alt='' />

         </div>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) }
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);