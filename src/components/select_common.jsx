import { useState } from "react";

const SelectCommon = () => {
    const [selectOption, setSelectOption] = useState("");
    const handleSelectChange = (event) =>{
        setSelectOption(event.target.value);
    };
    return(
        <>
            <select className="border rounded-full py-1 pl-4 pr-4 pb-1" value={selectOption} onChange={handleSelectChange}>
                <option value="">Commune</option>
                <option value="option1">Barumbu</option>
                <option value="option2">Limete</option>
                <option value="option3">Ngamba</option>
                <option value="option3">Kinshasa</option>
                <option value="option3">Lingwala</option>
                <option value="option3">Matete</option>
                <option value="option3">Lemba</option>
                <option value="option3">Mont-ngafula</option>
                <option value="option3">Matete</option>
                <option value="option3">Gombe</option>
             </select>
        </>
    )
}

export default SelectCommon