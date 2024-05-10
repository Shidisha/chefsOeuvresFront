import { Outlet } from "react-router-dom"
import CategoryMenu from "./category_menu"

const SectionCategory = () =>{
    return (
        <div className=" pt-2">
            <CategoryMenu/>
            <Outlet/>
        </div>
    )
}

export default SectionCategory