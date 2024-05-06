import React, { useState } from 'react'; 
// npm install axios
import axios from 'axios'
import UVU from '../assets/UVUMascotBlack-0019.png'
import { NavLink } from 'react-router-dom'
//login/signup page(s).
//Use client side routing for navigating between pages.
// if user click one of the checkboxs  and puts in the correct username/password it will send them to the correct page

const UVUlogin = () =>{ //does for the functionality of the page.

    const [uvuId, setUvuId] = useState('')
    const [data, setData] = useState(undefined)

    const handleUvuId = (event) => { 
        console.log(event.target.value)
        setUvuId(event.target.value)
    }

    const handleLogin = async (event) => {
        event.preventDefault()
        const ditto = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
        setData(ditto)
        console.log(ditto)

        /*
         const authenticated = await axios.post('https://myapi//login', { 
            body: { 
                username: uvuId,
                password: password
                userType: userType
            }
         })
         
         (true or false) --> authenticated.data.isLoggedIn
         if(!authenticated.data.isLoggedIn) { 
            // show error to user showing maybe a toast (https://www.npmjs.com/package/react-toastify?activeTab=readme)
                "username or password is incorrect" 
         }
         // keep going --> navigate to new page
        
        */
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
                            <input type='text' placeholder='12345678' maxLength={8} onChange={handleUvuId} /> 
                        </div>
                        <div >
                            <label className=' p-6'><b>Password</b></label>
                            <input type='password' placeholder='password'/>  
                        </div>
                        
                        {/* 
                        use a drop down might be better
                        because you can't be all or multiply 
                        entities e.g ( I can't be a teacher and student)
                        */
                        }
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
                            onClick={handleLogin}>
                                login
                            </button>
                        </div>
                    </div>
                </form>
                {JSON.stringify(data)}
            </div>
        </div>
    )
}
export default UVUlogin;