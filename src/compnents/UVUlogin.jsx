import React, { useState } from 'react'; 
import UVU from '../assets/UVUMascotBlack-0019.png';
import { useNavigate } from 'react-router-dom';

//login/signup page(s).
//Use client side routing for navigating between pages.
// if user click one of the checkboxs  and puts in the correct username/password it will send them to the correct page

const UVUlogin = () =>{ 
    
    const [uvuId,setUvuId] = useState('');
    const [uvupassword, setUvupassword]= useState('');
    const [uvuType, setUvuPassword] = useState('');
    const navigate = useNavigate();

//dummy object.
    const Admin ={
        id:"12345678",
        password:"87654321",
        type:"Administator"
    }

    const handleUvuInput = event =>{
        return setUvuId(event.target.value);
       
    }

    const handlePassword = event => {
        return setUvupassword(event.target.value);
        
    }
    
    const handleType = event =>{
        return setUvuPassword(event.target.value);
    }

    const authenticate = (e) =>{
        if ( uvuId === Admin.id && uvupassword === Admin.password && uvuType === Admin.type){
            handleLogin(e);
        }
        else{
            console.log("login failed");
            console.log('uvuID:', uvuId);
            console.log('password:', uvupassword);
            console.log('type:', uvuType);
            e.preventDefault()
        }

    }
     
    const handleLogin = () =>{
        
            navigate('/UVUadmin')
    }

    return( 
        <div className="container">
            <div className='page details'>
                <form onSubmit={authenticate}>
                    <div className='logo max-w-screen-lg mx-auto pb-10'>
                        <img className='flex items-center' alt="Logo " src={UVU}/>
                    </div>
                        
                    <div>
                        <div className=' p-4' >
                            <label className=' p-7' ><b>UVU ID</b></label>
                            <input type='text' placeholder='12345678' maxLength={8} value={uvuId} onChange={handleUvuInput}/> 
                        </div>
                        <div >
                            <label className=' p-6'><b>Password</b></label>
                            <input type='text' placeholder='password'  maxLength={8} value={uvupassword} onChange={handlePassword } />  
                        </div>
                        
                        <div className='px-32 py-8'>
                            <select onChange={handleType}>
                                <option>Account type</option>
                                <option value={"Administator"}>Administator</option>
                                <option value={"Teacher"}>Teacher</option>
                                <option value={"TA"}>TA</option>
                                <option value={"Student"}>Student</option>
                            </select>
                        </div>
                        <div>
                            <button className=' bg-[#06110d] text-[white] cursor-pointer w-full mx-0 my-2 px-5 py-3.5 border-[none] hover:bg-green-950 active:bg-green-900 focus:outline-none focus:ring focus:ring-green-700 rounded-full'
                             type="submit">
                                Login
                            </button>
                            
                        </div>
                    </div>
                </form>
               
            </div>
        </div>
    )
}
export default UVUlogin;