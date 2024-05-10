import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";


const SearchBar = () =>{
    return(
        <>
             <input className='border rounded-tr-[20px] rounded-tl-[20px] rounded-br-[20px] rounded-bl-[20px] py-1 pl-4 pr-4 pb-1 bg-cover bg-center' 
             style={{backgroundImage: `url(${<FontAwesomeIcon icon={faSearch}/>})`}}  type="text" placeholder ="Rechercher des propriétés"/>
        </>
    )
}

export default SearchBar