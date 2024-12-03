//. Add the ability for a student to add self to a course, either on the existing student page or a new page.
import React from "react";
import Button from "../subComponents/Button";


const Student = () =>{


    return(
      <div>
        <div className=" w-full h-[80px] flex justify-between  px-4"></div>
        <div className="absolute left-0 top-0 font-bold text-2xl italic font-serif p-5 "> 
          <h1>
              Student
          </h1>
        </div>
        <div>
          <form>
          <select name="course" id="course">
            <option selected value={""} id="empty">Choose Course</option>
          </select>
          
          <div>
            <h3 id="uvuDisplay">

            </h3>
            <ul id="unOrdered">

            </ul>
            <label>New Log</label><br/>
            <textarea id="text"></textarea><br/>
            <Button name={"Add Log"}/>
          </div>

          
          </form>
        </div>     
      </div>
    );
  

    
}

export default Student;