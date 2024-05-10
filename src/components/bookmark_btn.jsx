import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faBookmark } from "@fortawesome/free-solid-svg-icons/faBookmark";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";


const BookmarkButton = () =>{
    const [isBookMarked, setIsBookMarked] = useState (false)
    const handleBookMarkToggle =()=> {
        setIsBookMarked(!isBookMarked);
    };
    return(
        <button onClick={handleBookMarkToggle}>
            {isBookMarked? <FontAwesomeIcon icon={faBookmark}/>: <FontAwesomeIcon icon={faBookBookmark}/>}
        </button>
    )
}

export default BookmarkButton