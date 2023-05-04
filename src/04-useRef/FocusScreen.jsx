import { useRef } from "react";

export const FocusScreen = () =>{

    const inputRef = useRef();

    const onClick = () =>{
        inputRef.current.select();
    }
    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <h1>Focus Screen</h1>
            <input ref= { inputRef } className="form-control" type="text" placeholder="Ingrese su nombre" />
            <button className="btn btn-primary mt-2" onClick={ onClick }>
                setFocus
            </button>
            <hr />
        </>
    )
}
