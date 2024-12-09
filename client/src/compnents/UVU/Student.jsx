//Teacher can create a course, add a student, , see all their courses, and logs.
import React from "react";
import Profile from "../subComponents/Profile";
import Course from "../subComponents/Course";
import { useState } from "react";
import View from "../subComponents/View";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Student =() =>{
    const [showForm, setShowForm] = useState(false);
    
    const [showProfile, setShowProfile] = useState(true)
    const [showView, setShowView] = useState(false);
    const [showCourse, setShowCourse] = useState(false);

    const [searchId, setSearchId ]= useState("");
    const [userName, setUserName] = useState("");
    const [userRole, setUserRole] = useState("");
   
     const location = useLocation();
     const displayedCourses = location.state.courses.map((course) => {  
        return [ course.id, course.display];
     })
     
     console.log("new location: teach ", displayedCourses)
     
     const handleSearch = (event) => {
      const inputValue = event.target.value;
      const numericValue = inputValue.replace(/[^0-9]/g, ''); // Remove non-numeric characters
      setSearchId(numericValue);   
  }



   
  
    const fetchSearch = async(e) =>{
        e.preventDefault()
        if(searchId === '10111111'){
            new AbortController()
        }
        else{
            fetch(`http://localhost:3000/api/login/${searchId}`)
            .then(response=>{
                if(!response.ok){
                    console.log("wrong")
                }
                return response.json();
            }).then(data => {
                setUserName(data.name)
                setUserRole(data.role)

               
            })
        }
    }
    return(
          <div className=" w-full h-[80px] flex justify-between  px-4">
            <div className="absolute left-0 top-0 font-bold text-2xl italic font-serif p-5 "> 
                <h1>
                    Student
                </h1>
            </div>
            
            
            {/*list of Teacher, TA, Student*/}
            <div className="text-2xl italic font-serif ">
                {/*Teacher form that can do CRUD */}
               
                    <form className="font-thin text-xl italic font-serif w-96"> 
                        <div  className="flex justify-center place-items-center m-2">
                            <label className="px-4"><b> ID: </b></label>
                            <input type='text' placeholder='12345678' className="py" maxLength={8} value={searchId} onChange={handleSearch}/>
                            <button 
                                className="text-lg italic font-serif bg-[#06110d] text-[white] cursor-pointer ml-4 px-4 py-1 border-[none]
                             hover:bg-green-950 active:bg-green-900 focus:outline-none focus:ring focus:ring-green-700 rounded-full"
                             onClick={fetchSearch}
                             >   
                                 Search
                             </button>
                            
                        </div>

                         <div>
                            {showCourse && <Course setShowCourse={setShowCourse} setShowProfile={setShowProfile} displayedCourses = {displayedCourses} setSearchId={searchId}/> }
                             {showView && <View displayedCourses = {displayedCourses} setShowProfile={setShowProfile}setShowView={setShowView} setSearchId={searchId}/> }
                             {showProfile && <Profile setShowProfile={setShowProfile}  setShowCourse={setShowCourse}  setShowView ={setShowView} userName={userName}  userRole={userRole}/>}
                        </div> 
                        
                    </form>

                    <div className=" flex flex-col justify-center items-center mt-4">
                    
                  
                    </div>
                
            </div>

        </div>
    )
}

export default Student;