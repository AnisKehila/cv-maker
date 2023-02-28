import React from 'react'

export default function CvHeader({fname = 'Anis', lname = 'Kehila', title = 'Web Designer & Developer'}) {
    return (
        <div className='cv-header'>
            <div className='name'>{`${fname} ${lname}`}</div>
            <div className='job'>{title}</div>
        </div>
    )
}
