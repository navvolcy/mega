import React, { useEffect } from "react";
import { useState } from "react";



const View = ({displayedCourses, setShowView, setShowProfile, setSearchId}) => {

    const [selectedOption, setSelectedOption] = useState('');
    const [date, setDate] = useState("");
    const [text, setText] = useState("");
    
   

    
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        
   
    };

    const options = displayedCourses;
   
 

    const handleView = () =>{
        setShowProfile(true)
        setShowView(false);
    }
    
   

    useEffect(() => {
        if(selectedOption){
            console.log("course id: ", selectedOption)
            fetch(`http://localhost:3000/api/view/${setSearchId}/${selectedOption}`)
            .then(response=>{
                if(!response.ok){
                    throw new Error("network response for veiw logs NOT WORKING!")
                }
                 return response.json()
            }).then(data =>{ 
                setDate(data.date)
                setText(data.text)
                
            })
             
            
        }
    },[selectedOption]);

    

    
    return(
        <div>
            <div className="w-full max-w-sm bg-stone-500 border border-black rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-start px-2 pt-4">
                <button className="py-2 px-4 ms-2 text-sm italic font-medium text-gray-900 focus:outline-none
                 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4
                  focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600
                   dark:hover:text-white dark:hover:bg-gray-700"
                    onClick={handleView}>
                    back
                </button>
            </div>
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
            
            <ul id="unOrdered" className="m-8">
                <li>
                    
                    {date}
                    
                </li>
                <li>
                    <pre>
                        <p> {text}</p>
                    </pre>
                </li>
                
            </ul>
            

            </div>

        </div>
    )

}

export default View;