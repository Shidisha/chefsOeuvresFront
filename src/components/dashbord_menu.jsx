import data from '../data.json'
import { NavLink, useLocation} from 'react-router-dom'


const DashbordMenu = () =>{
    const location = useLocation;
    return(
        <>   
              <NavLink exact to="/" className={`text-white py-2 px-4 ${location.pathname==="/"? ' bg-red-500 shadow-sm':''}`}><img className='w-8' src={data.nav[1].dashbord_icon} alt="dashboard" /></NavLink>
              <NavLink to ="/explore" className={`text-white py-2 px-4 ${location.pathname==="/"? ' bg-red-500 shadow-sm':''}`}><img className=' w-8' src={data.nav[2].export_icon} alt="dashboard" /></NavLink>
              <NavLink to ="/reservation" className={`text-white py-2 px-4 ${location.pathname==="/"? ' bg-red-500 shadow-sm':''}`}><img className=' w-8' src={data.nav[3].wallet_icon} alt="dashboard" /></NavLink>
              <NavLink to ="/parametre"className={`text-white py-2 px-4 ${location.pathname==="/"? ' bg-red-500 shadow-sm':''}`}><img className=' w-8' src={data.nav[4].setting_icon} alt="dashboard" /></NavLink>
              <NavLink to ="/profil"className={`text-white py-2 px-4 ${location.pathname==="/"? ' bg-red-500 shadow-sm':''}`}><img className=' w-8' src={data.nav[5].account_icon} alt="dashboard" /></NavLink>
        </>
    )
}

export default DashbordMenu