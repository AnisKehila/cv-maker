import React from 'react'

export default function ExperienceItem({from = 2020, to = 'present', companyName = 'Djezzy', jobPosition = 'Back-end web Developer'}) {
    return (
        <li className='experience-item'>
            <div className='from-to'>{`${from} - ${to}`}</div>
            <div className='content'>
                <div className='position'>{jobPosition}</div>
                <div className='company-name'>{companyName}</div>
            </div>
        </li>
    )
}
