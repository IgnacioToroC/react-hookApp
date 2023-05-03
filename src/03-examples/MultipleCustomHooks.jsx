import { useFetch, useCounter } from "../hooks/index";

import { LoadingQuote, Quote } from "./index";

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);
    
    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${ counter }`);

    const  { author, quote } = !!data && data[0];
    //console.log(data)

    // if( isLoading ){
    //     return(
    //         <>
    //             <br />
    //             <br />
    //             <br />
    //             <h1>Cargando...</h1> 
    //             <hr /> 
    //         </>
    //     )
    // }

    return (
        <>
            <br />
            <br />
            <br />
            <h1>Braking bad Quotes</h1>
            
           { 
                ( isLoading ) 
                ? <LoadingQuote />
                : <Quote author={ author } quote={ quote } />   
            }
           
           <button className="btn btn-primary" disabled= { isLoading } onClick={
            () => increment(1)
           }  >Next quote</button>

            <hr />
        </>
        
    )
}
