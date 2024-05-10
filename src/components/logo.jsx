import { NavLink } from "react-router-dom"
import  data from "../data.json"

const Logo = () =>{
    return(
        <>
            <NavLink to="/"><img className=' w-18 h-10' src={data.nav[0].logo} alt="logo application" /></NavLink>
        </>
    )
}

export default Logo