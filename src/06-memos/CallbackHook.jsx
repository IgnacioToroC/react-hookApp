import { useState, useCallback, useEffect } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {

    const [counter,  setCounter] = useState(10);

    const incrementFather = useCallback(
      (value) => {
        setCounter( (c) => c + value  )
      },
      [],
    )
    

   

    // const incrementFather = () =>{
    //     setCounter( counter + 1 )
    // }

    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <h1>useCallback Hook: { counter }</h1>

            <ShowIncrement increment={ incrementFather } />


            <hr />
        </>
    )
}
