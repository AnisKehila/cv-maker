import React from 'react'

export default function ExperienceItem({from, to, companyName, jobPosition, id, changeExpHandler, removeHandler}) {
    return (
        <div className='experience-item' >
            <input type= 'text' value={from} name='from' placeholder = 'Year Of Start' id={id} onChange = {changeExpHandler} />
            <input type= 'text' value={to} name='to' placeholder = 'Year Of Quit' id={id} onChange = {changeExpHandler} />
            <input type= 'text' value={companyName} name='companyName' placeholder = 'Company Name' id={id} onChange = {changeExpHandler} />
            <input type= 'text' value={jobPosition} name='jobPosition' placeholder = 'Job Position' id={id} onChange = {changeExpHandler} />
            <input type= 'button' className='remove' value= 'Remove' name='experience' id={id} onClick = {removeHandler}/>
        </div>
    )
}
