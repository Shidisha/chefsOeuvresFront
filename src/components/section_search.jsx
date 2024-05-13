import ButtonSearch from "./button_search"
import SelectCity from "./select_city"
import SelectCommon from "./select_common"
import SelectSwitch from "./select_switch"
import SelectType from "./select_type"
import SelectTypeProrety from "./select_type_proprety"
import SelectPrice from "./selecte_price"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch"

const SectionSearch = () =>{
    return (
        <div className=" flex flex-col  gap-4">
            <div className=" flex justify-between">
                <div className=" relative"> 
                    <input className=' focus:outline-none flex w-[540px] h-10 gap-4 border rounded-tr-[20px] rounded-tl-[20px] rounded-br-[20px] rounded-bl-[20px] py-1 pl-10 pr-4 pb-1' type="text" placeholder="Rechercher des propriétés" />
                    <FontAwesomeIcon icon={faSearch} className="h-5 w-5 text-gray-400 absolute top-3 left-3" />
                </div>
                <SelectType/>
                <SelectSwitch/>
            </div>
            <div className=" flex gap-12">
                <SelectCity/>
                <SelectCommon/>
                <SelectTypeProrety/>
                <SelectPrice/>
                <ButtonSearch/>
            </div>
        </div>
    )
}

export default SectionSearch