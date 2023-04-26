import { useState } from "react"

export const useCounter = ( initialCounter = 11) => {
    const [counter, setCounter ] = useState( initialCounter );

    const increment= ( value ) => {
        setCounter( counter + value);
    };

    const decrement= ( value ) => {
        const valor = counter - value;

        if( valor < 0 ){
            setCounter( 0 );
        }else{
            setCounter( valor );
        };
    };

    const reset = () => {
        setCounter( initialCounter );
    }


    return {

        counter,
        increment,
        decrement,
        reset
    }
}