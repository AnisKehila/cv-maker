import React from 'react'

export default function EducationItem({from, to, schoolName, subject, degree, id, changeEduHandler, removeHandler}) {
    return (
        <div className='education-item' >
            <input type= 'text' value={from} name='from' placeholder = 'Year Of Start' id={id} onChange = {changeEduHandler} />
            <input type= 'text' value={to} name='to' placeholder = 'Year Of Graduation' id={id} onChange = {changeEduHandler} />
            <input type= 'text' value={schoolName} name='schoolName' placeholder = 'School Name' id={id} onChange = {changeEduHandler} />
            <input type= 'text' value={subject} name='subject' placeholder = 'Subject' id={id} onChange = {changeEduHandler} />
            <input type= 'text' value={degree} name='degree' placeholder = 'Degree' id={id} onChange = {changeEduHandler} />
            <input type= 'button' className='remove' value= 'Remove' name='education' id={id} onClick = {removeHandler}/>
        </div>  
    )
}
