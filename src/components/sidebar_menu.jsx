import data from '../data.json'
import { NavLink } from 'react-router-dom'

const SideBarMenu = () =>{
    return (
            <div className=' flex flex-col gap-4 sticky top-1'>
                <div className=' flex items-center gap-[14px]'>
                    <NavLink to = "/"><img src= {data.sideBars[0].dashbord} alt="icon dashbord sidebar" /></NavLink>
                    <NavLink to = "/"><span>Acceuil</span></NavLink>
                </div>
                <div className=' flex items-center gap-[14px]'>
                    <NavLink to = "/explore"><img src= {data.sideBars[1].explore} alt="icon Explore sidebar" /></NavLink>
                    <NavLink to = "/explore"><span>Explore</span></NavLink>
                </div>
                <div className=' flex items-center gap-[14px]'>
                    <NavLink to = "/reservation"><img src= {data.sideBars[2].wallet} alt="icon Reservation sidebar" /></NavLink>
                    <NavLink to = "/reservation"><span>Mes réservations</span></NavLink>
                </div>
                <div className=' flex items-center gap-[14px]'>
                    <NavLink to = "/parametre"><img src= {data.sideBars[3].setting} alt="icon paramétre sidebar" /></NavLink>
                    <NavLink to = "/parametre"><span>Paramétre</span></NavLink>
                </div>
                <div className=' flex items-center gap-[14px]'>
                    <NavLink to = "/profil"><img src= {data.sideBars[4].compte} alt="icon compte sidebar" /></NavLink>
                    <NavLink to = "/profil"><span>Compte</span></NavLink>
                </div>
            </div>
            
    )
}

export default SideBarMenu