import { useState } from "react";
import { Switch } from "@mui/material";

const SelectSwitch = () =>{
    const [checked, setChecked] = useState(false)
    const handleChange = () =>{
        setChecked((prev)=> !prev);
    };
    return(
        <div className=" flex gap-1">
            <Switch  checked = {checked}
                    onChange = {handleChange}
                    inputProps = {{'aria-label':'toggle switch'}}/>
            <span> afficher sur carte</span>
        </div>         
    )
}

export default SelectSwitch