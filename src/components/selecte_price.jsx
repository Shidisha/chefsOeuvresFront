import { useState } from "react";

const SelectPrice = () =>{
    const [selectOption, setSelectOption] = useState("");
    const handleSelectChange = (event) =>{
        setSelectOption(event.target.value);
    };
    return(
        <>
            <select className="border w-28 rounded-full py-1 pl-4 pr-4 pb-1" value={selectOption} onChange={handleSelectChange}>
                <option>Prix</option>
                <option value="option1">$50</option>
                <option value="option2">$60</option>
                <option value="option3">$80</option>
                <option value="option3">$100</option>
                <option value="option3">$150</option>
                <option value="option3">$200</option>
                <option value="option3">$250</option>
                <option value="option3">$300</option>
                <option value="option3">$500</option>
                <option value="option3">$1000</option>
                <option value="option3">$1500</option>
                <option value="option3">$2000</option>
                <option value="option3">$2500</option>
             </select>
        </>
    )
}

export default SelectPrice