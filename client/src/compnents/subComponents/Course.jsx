import React from "react";
import { useState } from "react";
import axios from 'axios'

const Course =({setShowCourse, setShowProfile, displayedCourses, setSearchId})=>{
    //fetch for adding course and log that is linked to user id 

    const [selectedOption, setSelectedOption] = useState('');
    const [textAreaValue, setTextAreaValue] = useState('');

    const handleCourse = () =>{
        setShowProfile(true);
        setShowCourse(false);
    }

     const handleTextAreaChange = (event) => {
        setTextAreaValue(event.target.value);
      };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    
    const options = displayedCourses;
    



    const date = new Date()
    let currentDate = date.toLocaleString();
    const data ={
        uvuId : setSearchId,
        courseId: selectedOption,
        date: currentDate,
        text: textAreaValue
    }
    console.log(data)
    //fetch course and uvuid
    const addLog = (e) =>{
        e.preventDefault()  
        
       
        try{
            axios.post(`http://localhost:3000/api/logs/${setSearchId}`,data)
            .then((response)=> {
                console.log("new reponse", response)
            })
        }catch(error){
            console.error("Error:", error)
        }
        
    }


    

    return(
        <div>
            <div className="w-full max-w-sm bg-stone-500 border border-black rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex justify-start px-2 pt-4">
                    <button className="py-2 px-4 ms-2 text-sm italic font-medium text-gray-900 focus:outline-none
                     bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4
                      focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400
                       dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                       onClick={handleCourse}>
                    back
                    </button>
                    </div>
                    <div className=" flex flex-col justify-center items-center text-xl mb-2">
                        <div className=" flex flex-col justify-center items-center text-xl mb-2">
                            <select id="course" className=" border border-black m-2 rounded-full italic font-serif" 
                                type="text"
                                placeholder=" Course " 
                                maxLength={8}
                                onChange={handleOptionChange}>
                                <option value={""} id="options">Choose Courses</option>
                                    {options.map((option,index)=>(
                                    <option key={index} value={option[0]} >
                                        {option[1]}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div  className=" flex flex-col justify-center items-center text-xl mb-2">
                            <textarea className=" p-16 mb-2" value={textAreaValue} onChange={handleTextAreaChange}></textarea>
                    
                            <button className=" italic font-serif bg-[#06110d] text-[white] cursor-pointer ml-4 px-4 py-1 border-[none] hover:bg-green-950
                                    active:bg-green-900 focus:outline-none focus:ring
                                    focus:ring-green-700 rounded-full"
                                type="submit" onClick={addLog}>Add Log</button>
                        </div>
                        
                    </div>             
            </div>

        </div>
    );
}

export default Course;