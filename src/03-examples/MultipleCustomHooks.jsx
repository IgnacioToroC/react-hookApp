import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = () => {

    const { data, isLoading, hasError } = useFetch('https://api.breakingbadquotes.xyz/v1/quotes/5');

console.log(data, isLoading, hasError)

    return (
        <>
            <br />
            <br />
            <br />
            <h1>Braking bad Quotes</h1>


            <hr />
        </>
        
    )
}
