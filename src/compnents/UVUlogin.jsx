import React, { useState } from 'react'; 
import UVU from '../assets/UVUMascotBlack-0019.png';
import { useNavigate } from 'react-router-dom';

//login/signup page(s).
//Use client side routing for navigating between pages.
// if user click one of the checkboxs  and puts in the correct username/password it will send them to the correct page

const UVUlogin = () =>{ //does for the functionality of the page.
    const [isLogin, setIsLogin] = useState(false);
    const [uvuId, setUvuId] = useState('');
    const [uvupassword, setUvupassword]= useState('');

    const handleUvuInput = event =>{
        setUvuId(event.target.value);
    }

    const handlePassword = event => {
        setUvupassword(event.target.value);
    }

  
    const handleLogin = () =>{
        // Perform authentication logic here
        const navigate = useNavigate();
        //if the username and password match go to the admin page 
        if( handleUvuInput !== "10611913" && handlePassword !== "21296Nav0!"){
            console.log("login failed")
            setIsLogin(false)
        }else{
            setIsLogin(true);
            navigate('/UVUadmin')
        }
       
    }

    return( 
        <div className="container">
            <div className='page details'>
                <form>
                    <div className='logo max-w-screen-lg mx-auto pb-10'>
                        <img className='flex items-center' alt="Logo " src={UVU}/>
                    </div>
                        
                    <div>
                        <div className=' p-4' >
                            <label className=' p-4' ><b>UVU ID</b></label>
                            <input type='text' placeholder='12345678' maxLength={8} value={uvuId}  onChange={handleUvuInput}/> 
                        </div>
                        <div >
                            <label className=' p-6'><b>Password</b></label>
                            <input type='password' placeholder='password' value={uvupassword} on onChange={handlePassword}/>  
                        </div>
                        
                        <div className=' py-8'>
                            <input className= 'mx-[15px]' type='checkbox' />
                            <label><b>Administator</b></label>
                            <input  className= 'mx-[15px]' type='checkbox'/>
                            <label><b>Teacher</b></label>
                            <input className= 'mx-[15px]' type='checkbox'/>
                            <label><b>TA</b></label>
                            <input className= 'mx-[15px]' type='checkbox'/>
                            <label><b>Student</b></label>
                        </div>
                        <div>
                            <button className=' bg-[#06110d] text-[white] cursor-pointer w-full mx-0 my-2 px-5 py-3.5 border-[none] hover:bg-green-950 active:bg-green-900 focus:outline-none focus:ring focus:ring-green-700 rounded-full'
                            onClick={handleLogin} value={isLogin}>
                                login
                            </button>
                        </div>
                    </div>
                </form>
               
            </div>
        </div>
    )
}
export default UVUlogin;