import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";


const SearchBar = () =>{
    return(
        <div className=" relative"> 
             <input className=' h-10 focus:outline-none flex border rounded-tr-[20px] rounded-tl-[20px] rounded-br-[20px] rounded-bl-[20px] py-1 pl-10 pr-4 pb-1 bg-cover bg-center' 
              type="text" placeholder ="Rechercher des propriétés"/>
             <FontAwesomeIcon icon={faSearch} className="h-5 w-5 text-gray-400 absolute top-3 left-3" />
        </div>
    )
}

export default SearchBar