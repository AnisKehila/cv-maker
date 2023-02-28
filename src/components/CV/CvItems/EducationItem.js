import React from 'react'

export default function EducationItem({from = '2017', to = '2020', schoolName = 'University Mhamed Bougerra, Boumerdes', subject = 'Computer Science', degree = 'Licence'}) {
    return (
        <li className='education-item'>
            <div className='from-to'>{`${from} - ${to}`}</div>
            <div className='content'>
                <div className='position'>{schoolName}</div>
                <div className='subject'>{subject}</div>
                <div className='degree'>{degree}</div>
            </div>
        </li>
    )
}
