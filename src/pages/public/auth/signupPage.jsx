
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import imgBg from "../../../assets/icons/maisonbg.jpg"
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import data from '../../../data.json'

const SignupPage = () =>{

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (formdata) => {
      try{
        const response = await axios.post("http://localhost:3000/register", formdata);
        console.log(response.data);
      } catch(error){
        console.error(error.message)
      }
  };
  const [selectType, setSelectType] = useState("selectType");
        const handleSelectChange = (event) =>{
              setSelectType(event.target.value);
        };
    return(
        <div className=' flex justify-center'>
          <img className=' flex absolute w-full h-full object-cover items-center content-center'  src={imgBg} alt="image background"/>
              <div className=' absolute border rounded-[20px] bg-slate-400 opacity-100 mt-16'>

                 <form className=' flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <div className=' flex flex-col w-max gap-2 content-center items-center'>
                        <img className='w-16 h-12 pt-4' src={data.nav[0].logo} alt="logo du site" />
                            <h3 className=' pt-2 pb-2 font-bold text-white text-xl'>Veillez vous inscrire</h3>
                                <div className=' flex flex-row justify-center gap-6'>
                                    <div className=' flex flex-col gap-2'>
                                          <input className='ml-8 p-2 rounded-full w-32' placeholder='Nom' {...register("userFirstName", { required: true })} />
                                          {errors.userFirstName && <span className=" text-red-800">Ce champ est requis.</span>}
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                      <input className='mr-8 p-2 rounded-full w-32' placeholder='Prénom' {...register("userSecondName", { required: true })} />
                                      {errors.userSecondName && <span className=" text-red-800">Ce champ est requis.</span>}
                                    </div>
                              </div>
                        <input className=' p-2 rounded-full w-72' placeholder='djokadimatshibangu@gmail.com' type="email" {...register("email", { required: true })} />
                          {errors.password && <span className=" text-red-800">Ce champ est requis.</span>}
                        <input className=' p-2 rounded-full w-72' placeholder='************' type="password" {...register("password", { required: true })} />
                          {errors.password && <span className=" text-red-800">Ce champ est requis.</span>}
                        <input className=' p-2 rounded-full w-72' placeholder='adresse physique' {...register("adress", { required: true })} />
                          {errors.password && <span className=" text-red-800">Ce champ est requis.</span>}

                        <div className=' flex flex-col gap-2'>
                            <select className="border rounded-full py-1 pl-4 pr-4 pb-1" value={selectType} onChange={handleSelectChange}>
                                  <option value="">Type de compte</option>
                                  <option value="option1">Utilisateur</option>
                                  <option value="option2">Agent immobilier</option>
                            </select>
                            <input className=' p-2 rounded-full w-72' placeholder='téléphone' {...register("phone", { required: true })} />
                        </div>

                          <button className=' border p-2 rounded-full w-72 bg-red-400 text-white font-extrabold ' type="submit">Valider</button>
                          <span className=' pb-2 text-white'>Vous avez un compte? <NavLink to="/loginPage" className=" text-red-500 underline">Connectez vous</NavLink></span>
                    </div>
                  </form>

              </div>
        </div>
    ) 
}

export default SignupPage