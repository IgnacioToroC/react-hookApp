import { Hijo } from './Hijo'
import { memo, useCallback, useState } from 'react';

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    const incrementar = useCallback( 
        ( num ) => {
            setValor( (oldValue ) => oldValue + num )
        },
        []
    )


    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <h1>Padre</h1>
            <p> Total: { valor } </p>
            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
            }
            {/* <Hijo /> */}

            <hr />

        </div>
    )
}
