import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const HomePage = () => {

    const { user } = useContext( UserContext );

    return (
      <>
          <br />
          <br />
          <br />
          <h1>HomePage <small>{ user?.name }</small> </h1>
          <hr />
          <pre>
            { JSON.stringify( user, null, 3 )}
          </pre>
      </>
    )
  }