import { useEffect, useState } from "react"


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username:'strider',
        email:'ignacio.toro.carvajal@gmail.com'
    })

    const { username, email } = formState;

    const onInputchange = ({ target }) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value,
        });

    }

    useEffect( () => {
        console.log('useeffect called')
    }, []);

    useEffect( () => {
        console.log('formState changed')
    }, [formState]);
    
    useEffect( () => {
        console.log('email changed')
    }, [email]);


    return (
        <>
        <br />
        <br />
        <br />
            <h1>Formulario Simple</h1>

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
            <hr />
        
        </>
    )
}
