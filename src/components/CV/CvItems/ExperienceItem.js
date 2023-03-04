import React from 'react'

export default function ExperienceItem({from, to, companyName, jobPosition, id}) {
    return (
        <li className='experience-item' id= {id}>
            <div className='from-to'>{`${from} - ${to}`}</div>
            <div className='content'>
                <div className='position'>{jobPosition}</div>
                <div className='company-name'>{companyName}</div>
            </div>
        </li>
    )
}
