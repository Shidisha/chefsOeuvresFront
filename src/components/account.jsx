import { NavLink } from 'react-router-dom'
import data from '../data.json'

const Account = () =>{
    return(
        <div className=' flex flex-col gap-2 items-center'>
            <div className=' flex gap-2 items-center'>
                <div>
                    <NavLink to="/profil"><img className=' flex rounded-full w-12 h-12' src= {data.account[0].profil} alt="Photo profil"/></NavLink>
                </div>
                <div className=' flex flex-col'>
                    <div className=' flex flex-row'>
                        <span>{data.account[0].firstName}</span>
                        <span>{data.account[0].secondName}</span>
                    </div>
                    <div>
                        <p className=' font-extralight'>{data.account[0].typeAccount}</p>
                    </div>
                </div>
            </div>
            <NavLink to='/loginPage'><button className=' border rounded-full pl-6 pr-6 pt-1 pb-1'>Se déconnecter</button></NavLink>
        </div>
    )
}

export default Account