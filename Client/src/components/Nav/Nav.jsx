import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import style from './nav.module.css'

const Nav = (props) => {
 return (
   <nav className={style.nav}>

      <button className={style.btn}>
         <NavLink to={'/Home'} className={style.link}>Home</NavLink>
      </button>

      <button className={style.btn}>
         <NavLink to={'/About'} className={style.link}>About</NavLink>
      </button>

      <button className={style.btn} >
         <NavLink to={'/favorites'} className={style.link}>Favorites</NavLink>
      </button>

      <SearchBar onSearch={props.onSearch}/>

   </nav>
 )
}


export default Nav;