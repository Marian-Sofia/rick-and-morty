import axios from "axios"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import style from './detail.module.css'


export default function Detail () {

    const [character, setCharacter] = useState({});

    const { id } = useParams();

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);


    return (
            <div className={style.div}>
                <h1 className={style.details}>{character.name ? character.name : ''}</h1>
                <h2 className={style.details}>{character.status ? `STATUS | ${character.status}` : '' }</h2>
                <h2 className={style.details}>{character.gender ? `GENDER | ${character.gender}` : '' }</h2>
                <h2 className={style.details}>{character.species ? `SPECIE | ${character.species}` : '' }</h2>
                <h2 className={style.details}>{character.origin ? `ORIGIN | ${character.origin.name}` : '' }</h2>
                <img src={character.image} className={style.img}/>
            </div>
    )
}