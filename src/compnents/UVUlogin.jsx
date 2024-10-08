import React, {useState} from 'react'; 
import UVU from '../assets/UVUMascotBlack-0019.png';
import { useNavigate } from 'react-router-dom';

//login/signup page(s).
//Use client side routing for navigating between pages.
// if user click one of the checkboxs  and puts in the correct username/password it will send them to the correct page

const UVUlogin = () =>{ 
    
    const [uvuId,setUvuId] = useState('');
    const [uvupassword, setUvupassword]= useState('');
    const [uvuType, setType] = useState('Account type');
   const navigate = useNavigate();
   

    // use the database here
   

        
            
        // async function userLogin (e) {
        //     console.log("here")
        //     e.preventDefault();
        //     fetch(`/login/${uvuId}/${uvupassword}/${uvuType}`)
        //     .then((res)=> {return res.json()})
        //     .then((data) =>{ 
                
        //         console.log(data, "data");
    
        //         // if (uvuId === data.uvuId && uvupassword === data.password && uvuType === data.Type){
        //             //navigate('/UVUadmin')
        //             // e.preventDefault();
        //         // }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
        //     })
        // }
      

    // const handleLogin = () =>{
        
    //         navigate('/UVUadmin')
    //         navigate('/Teacher')
    //         navigate('/Student')
    // }

    return( 
        <div className='flex-1'>
            <img src={UVU} alt='uvuLogo'/>

            <div className='flex flex-col justify-center items-center p-4 '>
                <form>
                    <div className='flex mb-2'>
                        <div className='text-2xl italic font-serif'>
                        UVU ID: 
                        </div>
                        <div>
                            <input className='flex-1 border border-black  bg-green-800 mx-2 rounded-lg'
                             type='text' placeholder='12345678' maxLength={8} value={uvuId} onChange={e=> setUvuId(e.target.value)}/>
                        </div>
                    </div>
                   
                    <div className='flex mb-2'>
                        <div className=' text-2xl italic font-serif'>
                        UVU password: 
                        </div>
                        <div>
                            <input className='flex-1 border border-black  bg-green-800 mx-2 rounded-lg'
                             type='text' placeholder='12345678' maxLength={8} value={uvupassword} onChange={e=> {setUvupassword(e.target.value) }}/>
                        </div>
                    </div>

                    <div className='mb-2'>
                        <select className="bg-green-800 text-2xl italic font-serif mx-16 p-2 rounded-full " value= {uvuType} onChange={e=> setType(e.target.value)}>
                            <option>Account Type</option>
                            <option value={"Administator"}>Administator</option>
                            <option value={"Teacher"}>Teacher</option>
                            <option value={"TA"}>TA</option>
                            <option value={"Student"}>Student</option>
                        </select>
                    </div>

                    <div className='flex flex-col justify-between items-center text-2xl italic font-serif m-4'>
                        <button className='mb-4 p-2 bg-black text-white text-2xl italic font-serif rounded-full w-28 hover:bg-green-950 active:bg-green-900 focus:outline-none focus:ring focus:ring-green-700' >
                            Login
                        </button>
                        <button className='p-2 bg-black text-white text-2xl italic font-serif rounded-full w-28 hover:bg-green-950 active:bg-green-900 focus:outline-none focus:ring focus:ring-green-700'>
                            Sign up
                        </button>
                    </div>
                </form>
            </div>  
        </div>
    )
}
export default UVUlogin;

/*<div className='page details'>
                <form onSubmit={userLogin}>
                    <div className='logo max-w-screen-lg mx-auto pb-10'>
                        <img className='flex items-center' alt="Logo " src={UVU}/>
                    </div>
                        
                    <div>
                        <div className=' p-4 text-2xl italic font-serif' >
                            <label className=' p-7' ><b>UVU ID</b></label>
                            <input type='text' placeholder='12345678' maxLength={8} value={uvuId} onChange={e=> {setUvuId(e.target.value)}}/> 
                        </div>
                        <div >
                            <label className=' p-6 text-2xl italic font-serif'><b>Password</b></label>
                            <input type='text' placeholder='password'  maxLength={8} value={uvupassword} onChange={e=> {setUvupassword(e.target.value) }} />  
                        </div>
                        
                        <div className='px-32 py-8 '>
                            <select className="text-2xl italic font-serif mx-16" value= {uvuType} onChange={e=> {setType(e.target.value)}}>
                                <option>Account Type</option>
                                <option value={"Administator"}>Administator</option>
                                <option value={"Teacher"}>Teacher</option>
                                <option value={"TA"}>TA</option>
                                <option value={"Student"}>Student</option>
                            </select>
                        </div>
                        <div>
                            <button className='text-xl italic font-serif bg-[#06110d] text-[white] cursor-pointer ml-20 px-16 py-4 border-[none] hover:bg-green-950 active:bg-green-900 focus:outline-none focus:ring focus:ring-green-700 rounded-full'
                             type="submit">
                                Login
                            </button>
                            { <button className='text-xl italic font-serif bg-[#06110d] text-[white] cursor-pointer m-4 px-16 py-4 border-[none] hover:bg-green-950 active:bg-green-900 focus:outline-none focus:ring focus:ring-green-700 rounded-full'
                             type="submit">
                                Sign up
                            </button> }
                        </div>
                    </div>
                </form>
               
            </div>*/