import React from 'react'

export default function UserInfo({fname = 'Anis', lname = 'Kehila', title, pic, address, pnum, email, description}) {
    return (
        <>
        <div className='cv-header'>
            <div className='name'>{`${fname} ${lname}`}</div>
        </div>
        </>
    )
}
