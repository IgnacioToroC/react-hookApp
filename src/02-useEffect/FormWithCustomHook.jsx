import { useEffect } from "react"
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {


    const { formState, onInputchange, onResetForm, username, email, password } = useForm({
        username:'',
        email:'',
        password:''
    })


    //const { username, email, password } = formState;
 
    return (
        <>
        <br />
        <br />
        <br />
            <h1>Formulario con custom hook</h1>

            <input 
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    name="username"
                    value={ username }
                    onChange={ onInputchange }
            />


            <input 
                    type="email"
                    className="form-control mt-2"
                    placeholder="ignacio.toro.carvajal@gmail.com"
                    name="email"
                    value={ email }
                    onChange={ onInputchange }
            />

            <input 
                    type="password"
                    className="form-control mt-2"
                    placeholder="password"
                    name="password"
                    value={ password }
                    onChange={ onInputchange }
            />

            <button onClick={ onResetForm } className="btn btn-primary"> Borrar </button>


            <hr />
        
        </>
    )
}
