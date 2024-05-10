import Logo from "./logo"
import youtIcon from '../assets/icons/LogosYoutubeIcon.svg'
import facebIcon from '../assets/icons/LogosFacebook.svg'
import whatsAppIcon from '../assets/icons/LogosWhatsappIcon.svg'
import EndFooter from "./end_footer"
import { useState, useEffect } from "react"

const Footer = () =>{
          //Gestion la fixation et defixation de la barre de navigation
          const [isFooterFixed, setIsFooterFixed] = useState(false)

          useEffect(() => {
                const handleScroll = () => {
                  if (window.scrollY > 0) {
                    setIsFooterFixed(true);
                  } else {
                    setIsFooterFixed(false);
                  }
                };
            
                window.addEventListener('scroll', handleScroll);
            
                return () => {
                  window.removeEventListener('scroll', handleScroll);
                };
              }, []);
    return(
        <div className="flex flex-col border border-t-2">
            <div  className={`${isFooterFixed? 'flex flex-row justify-between w-full h-32 pl-16 pr-16 pt-2 font-extralight lg top-2 z-50 bg-white shadow-md':'flex flex-row justify-between w-full h-32 pl-16 pr-16 mt-4 pt-4 font-extralight lg top-2 z-50 bg-white shadow-md'}`}>
            <div>
                <Logo/>
            </div>
            <div>
                <ul className=" text-start">
                    <li>Publier une propriété</li>
                    <li>Sinscrire</li>
                    <li>Devenir partenaire</li>
                </ul>
            </div>
            <div>
                <ul className=" text-start">
                    <li>Qui sommes-nous</li>
                    <li>Nos projet davenir</li>
                    <li>Contactez-nous</li>
                </ul>
            </div>
            <div>
                <ul className=" text-start">
                    <li>Conditions dutilisation</li>
                    <li>Protection de données</li>
                    <li>FAQs</li>
                </ul>
            </div>
            <div>
                <ul className=" flex flex-col gap-2">
                    <div>
                        <li>Nous suivre sur:</li>
                    </div>
                    <div className="flex gap-2">
                        <img className=" h-6 w-6" src={youtIcon} alt="icon youtub" />
                        <img className=" h-6 w-6" src={whatsAppIcon} alt="icon Whatsapp" />
                        <img className=" h-6 w-6" src={facebIcon} alt="icon facebook" />
                    </div>
                </ul>
            </div>
            </div>
            <div>
                <EndFooter/>
            </div>
        </div>
    )
}

export default Footer