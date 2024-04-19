import React from 'react';
//login/signup page(s).
const UVUlogin = () =>{ //doe for the functionaality of the page.
    
    return( 
        <div className="container">
            <div className="login-form">
                <form>
                    <div className="img-container">
                        <img className="uvu-logo" alt="Logged "></img>
                        
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
                        
                        <button>login</button>
                    </div>

                </form>
            </div>
        </div>
    )
}
export default UVUlogin;