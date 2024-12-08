import React, {useState } from "react";
import UVU from "../assets/UVUMascotBlack-0019.png";
import { useNavigate } from "react-router-dom";


//login/signup page(s).
//Use client side routing for navigating between pages.
// if user click one of the checkboxs  and puts in the correct username/password it will send them to the correct page

const UVUlogin = (e) => {
  const [uvuId, setUvuId] = useState("");
  const [uvupassword, setUvupassword] = useState("");
  const navigate = useNavigate();




  const handleChange = (event) => {
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    setUvuId(numericValue);
  }
  
  
  const fetchLogin = async(e) => { 
    e.preventDefault()
      fetch(`http://localhost:3000/api/login/${uvuId}/${uvupassword}`)
      .then(response=> {
        if(!response.ok){
          throw new Error("network resposnse was not ok");
        }
        return response.json();
      })
      .then(data =>{
        console.log("reached")
        console.log ("data: ", data);
        navigate(`/${data.role}`,{state:{courses:data.courses}});
        e.preventDefault(); 
      }).catch(error => {
        // Handle errors
        console.error('Fetch error:', error);
      })
    }


      
        

  return (
    <div className="flex-1 ">
      <img src={UVU} alt="uvuLogo" />

      <div className="flex flex-col justify-center items-center p-4 ">
        <form>
          <div className="flex mb-2">
            <div className="text-2xl italic font-serif">UVU ID:</div>
            <div>
              <input
                className="flex-1 border border-black  bg-green-800 mx-2 rounded-lg"
                type="text"
                placeholder="12345678"
                maxLength={8}
                value={uvuId}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex mb-2">
            <div className=" text-2xl italic font-serif">UVU password:</div>
            <div>
              <input
                className="flex-1 border border-black  bg-green-800 mx-2 rounded-lg"
                
                type="text"
                placeholder="12345678"
                maxLength={8}
                value={uvupassword}
                onChange={(e) => {
                  setUvupassword(e.target.value);
                }}
              />
            </div>
          </div>

       

          <div className="flex flex-col justify-between items-center text-2xl italic font-serif m-4">
            <button 
            onClick={fetchLogin}
            className="mb-4 p-2 bg-black text-white text-2xl italic font-serif rounded-full w-28 hover:bg-green-950 active:bg-green-900 focus:outline-none focus:ring focus:ring-green-700">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UVUlogin;


