import { useState } from "react";
import style from './searchBar.module.css'

export default function SearchBar({onSearch}) {

   const [id, setId] = useState('')

   const handleChange = (event) => {
      setId (event.target.value)
   }

   return (
      <div>
         <input type='search' placeholder="Search ID" onChange={handleChange} value={id} className={style.input}/>
         <button onClick={() => onSearch(id)} className={style.btn}>Search</button>
      </div>
   );
}
