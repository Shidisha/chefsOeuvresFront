import data from '../data.json'
import DashbordMenu from './dashbord_menu'
import Logo from './logo'
import SearchBar from './searchbar'
import {useState, useEffect} from 'react'

const Header = () =>{

      //Gestion la fixation et defixation de la barre de navigation
      const [isNavbarFixed, setIsNavbarFixed] = useState(false)

      useEffect(() => {
            const handleScroll = () => {
              if (window.scrollY > 0) {
                setIsNavbarFixed(true);
              } else {
                setIsNavbarFixed(false);
              }
            };
        
            window.addEventListener('scroll', handleScroll);
        
            return () => {
              window.removeEventListener('scroll', handleScroll);
            };
          }, []);
    return(
            <nav className ={`${isNavbarFixed?' flex justify-between w-full items-center py-2 pl-16 pr-16 z-50 fixed top-0 bg-white shadow-md': 'flex justify-between items-center py-2 pl-16 pr-16 border-b-2'}`}>
                 <div className=' flex gap-20'>
                      <Logo/>
                      <SearchBar/>
                 </div>
                 <div className=' flex gap-10'>
                       <DashbordMenu/>
                 </div>
                 <div>
                       <a href="#"><img className=' w-8' src={data.nav[6].mode_icon} alt="dashboard" /></a>
                 </div>
            </nav>
             
    )
}

export default Header