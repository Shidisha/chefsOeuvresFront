import Account from "./account"
import SideBarMenu from "./sidebar_menu"



const SideBar = () =>{
    
    return(
      <div className= "flex flex-col gap-44">
        <div className=" w-[200px] border-r-2 px-2 py-1">
            <SideBarMenu/>
        </div>
        <div className="">
            <Account/>
        </div>
       </div>
    )
}

export default SideBar