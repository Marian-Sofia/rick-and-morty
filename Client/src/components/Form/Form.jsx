import { useState } from "react"
import validation from "../../validation"
import style from './form.module.css'


const Form = (props) => {

    const [ userData, setUserData] = useState({
        email: '',
        password:''
    })

    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name] : event.target.value 
        })

        setErrors(validation({
            ...userData,
            [event.target.name] : event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.login(userData)
    }


    return(
        <div className={style.background}>
            <div className={style.div}>
                <form className={style.form} action="">
                    <img className={style.image} src="https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty.png" />
                    <label className={style.label} > Email: </label>
                    <input 
                        className={style.input}
                        type="email"
                        name="email" 
                        value={userData.email}
                        onChange={handleChange}
                        placeholder="example@gmail.com"
                        />
                    {errors.email && <p className={style.error} > {errors.email} </p> }


                    <label className={style.label} > Password:  </label>
                    <input 
                        className={style.input}                
                        type="password" 
                        name="password"
                        value={userData.password}
                        onChange={handleChange} 
                        placeholder="Password"
                        />
                    {errors.password && <p className={style.error} > {errors.password} </p> }


                    <button onClick={handleSubmit} className={style.button} > Submit </button>
                </form>
            </div>
        </div>
    )
}

export default Form