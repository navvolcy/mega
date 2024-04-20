import React from 'react'; 
import UVU from '../assets/UVUMascotBlack-0019.png'
//login/signup page(s).
//Use client side routing for navigating between pages.
// if user click one of the checkboxs it will send them to the 
const UVUlogin = () =>{ //doe for the functionaality of the page.
    
    return( 
        <div className="container">
            <div className="login-form">
                <form>
                    <div className="img-container">
                        <img className= 'h-screen flex items-center justify-center' alt="Logged " src={UVU}/>
                        
                    </div>
                    <div className="username_password_container">
                        <div>
                            <label><b>Username</b></label>
                            <input/> 
                        </div>
                        <div>
                            <label><b>Password</b></label>
                            <input/>  
                        </div>
                        <div>
                            <button className='w-3/5 h-10 justify-center block text-white text-[1em] font-[bold] transition-[0.2s] duration-[ease-in] cursor-pointer mt-5 mx-auto my-2.5 rounded-[5px] border-[none]'>login</button>
                        </div>
                        <div>
                            <input className= 'mx-[120px] my-2.5' type='checkbox' />
                            <label >Administator</label>
                            <input type='checkbox'/>
                            <label>Teacher</label>
                            <input type='checkbox'/>
                            <label>TA</label>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}
export default UVUlogin;