import React from 'react'; 
import UVU from '../assets/UVUMascotBlack-0019.png'
//login/signup page(s).
//Use client side routing for navigating between pages.
// if user click one of the checkboxs  and puts in the correct username/password it will send them to the correct page
const UVUlogin = () =>{ //doe for the functionaality of the page.
    
    return( 
        <div className="container">
            <div className='page details'>
                <form>
                    <div className='logo max-w-screen-lg mx-auto pb-10'>
                        <img className='flex items-center' alt="Logo " src={UVU}/>
                    </div>
                        
                    <div>
                        <div className=' p-4' >
                            <label className=' p-4' ><b>Username</b></label>
                            <input/> 
                        </div>
                        <div >
                            <label className=' p-6'><b>Password</b></label>
                            <input/>  
                        </div>
                        <div>
                            <button className=' bg-[#06110d] text-[white] cursor-pointer w-full mx-0 my-2 px-5 py-3.5 border-[none]'>login</button>
                        </div>
                        <div>
                            <input className= 'mx-[15px]' type='checkbox' />
                            <label><b>Administator</b></label>
                            <input  className= 'mx-[15px]' type='checkbox'/>
                            <label><b>Teacher</b></label>
                            <input className= 'mx-[15px]' type='checkbox'/>
                            <label><b>TA</b></label>
                            <input className= 'mx-[15px]' type='checkbox'/>
                            <label><b>Student</b></label>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}
export default UVUlogin;