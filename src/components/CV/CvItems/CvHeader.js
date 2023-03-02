import React from 'react'

export default function CvHeader({firstName, lastName, jobTitle}) {
    return (
        <div className='cv-header'>
            <div className='name'>{`${firstName} ${lastName}`}</div>
            <div className='job'>{jobTitle}</div>
        </div>
    )
}
