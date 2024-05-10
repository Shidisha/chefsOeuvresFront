import { NavLink } from "react-router-dom"

const CategoryMenu = () =>{
    return(
        <div className=" pb-2">
            <ul className=" flex flex-row gap-8 font-semibold">
                <NavLink to="/all_proprety"><li>Tout</li></NavLink>
                <NavLink to="/popular_proprety"><li>Populaires</li></NavLink>
                <NavLink to="/recommended_proprety"><li>Récommandées</li></NavLink>
                <NavLink to="/neard_you"><li>Près de chez vous</li></NavLink>
            </ul>
        </div>
    )
}

export default CategoryMenu