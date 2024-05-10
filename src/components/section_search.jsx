import ButtonSearch from "./button_search"
import SelectCity from "./select_city"
import SelectCommon from "./select_common"
import SelectSwitch from "./select_switch"
import SelectType from "./select_type"
import SelectTypeProrety from "./select_type_proprety"
import SelectPrice from "./selecte_price"


const SectionSearch = () =>{
    return (
        <div className=" flex flex-col  gap-4">
            <div className=" flex justify-between">
                <input className=' flex w-[540px] gap-4 border rounded-tr-[20px] rounded-tl-[20px] rounded-br-[20px] rounded-bl-[20px] py-1 pl-4 pr-4 pb-1' type="text" placeholder="Rechercher des propriétés" />
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