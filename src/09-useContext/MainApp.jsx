import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage }  from './HomePage';
import { AboutPage }  from './AboutPage';
import { LoginPage }  from './LoginPage';


export const MainApp = () => {
  return (
    <>

        <h1>MainApp</h1>
        <hr />
        <Routes>
            <Route path="/" element={ <HomePage/> }></Route>
            <Route path="about" element={ <AboutPage/> }></Route>
            <Route path="login" element={ <LoginPage/> }></Route>

            <Route path="/*" element={ <Navigate to="/about" /> }> </Route>
        </Routes>
        
        <br />
        <br />
        <br />
    </>
  )
}
