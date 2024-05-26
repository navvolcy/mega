//. Add the ability for a student to add self to a course, either on the existing student page or a new page.
import React from "react";

const Student = () =>{


    return(
        <div>
        <title>Student Logs</title>
        <meta charSet="utf8" />
        <link rel="icon" href="https://cdn.sstatic.net/Sites/stackoverflow/Img/favicon.ico" />
        <link rel="stylesheet" href="style.css" />
        <form id="form1">
          <div id="upperHalf"> 
            <select aria-label="Select Course" id="course" name="course" data-cy="course_select">
              <option selected value id="empty">Choose Courses</option>
            </select><br />
            <div id="studentID" style={{display: 'none'}}>
              <label htmlFor="uvuId">UVU ID</label><br />
              <input type="text" id="uvuId" name="uvuId" data-cy="uvuId_input" placeholder={12345678} maxLength={8} onkeypress="return(event.charCode !=8 && event.charCode == 0 || (event.charCode >= 48 && event.charCode <= 57))" />
            </div>
          </div>
          <div id="lowerHalf">
            <h3 id="uvuIdDisplay" data-cy="uvuIdDisplay">
            </h3>
            <ul data-cy="logs" id="unOrdered">
              {/* TODO: Click anywhere on the log to toggle visibility of the log (text only, not the date) */}
            </ul>
            <label>New Log</label><br />
            <textarea style={{height: '75px'}} aria-label="add log textarea" data-cy="log_textarea" id="text" defaultValue={""} /><br />
            {/* TODO: Button should be disabled until the logs, if any, are displayed and there's text in the textarea */}
            <button type="submit" data-cy="add_log_btn" id="button">Add Log</button>
            {/* TODO: Button should AJAX PUT the textarea value to json-server which will store it */}
          </div>
        </form>
        {/* TODO: add appropriate comments you feel are necessary, if any, for the next coder to understand */}
      </div>
    );
  

    
}