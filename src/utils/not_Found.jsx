import { NavLink } from "react-router-dom"

const NotFound = () =>{
    return(
        <div>
        <h1 className="">Ouf il y a une erreur</h1>
        <p className=" items-center content-center">Veillez retourner sur la page accueil</p>
        <NavLink to = '/'><button className=" border rounded-full  pl-2 pr-2 pt-1 pb-1 bg-rose-400 text-white">Accueil</button></NavLink>
        </div>
    )
}

export default NotFound