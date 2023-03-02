import React from 'react'

export default function UserInfo({handleInfoChange}) {
    return (
        <div className='info'>
            <h3>Personal Information</h3>
            <input type='text' id='firstName' placeholder='First Name' onChange={handleInfoChange}/>
            <input type='text' id='lastName' placeholder='Last Name'  onChange={handleInfoChange}/>
            <input type='text' id='jobTitle' placeholder='Job Title' onChange={handleInfoChange}/>
            <input type='file' id='img' placeholder='Upload Your Personal Image' onChange={handleInfoChange}/>
            <input type='text' id='address' placeholder='Adress' onChange={handleInfoChange}/>
            <input type='text' id='pnum' placeholder='Phone Number' onChange={handleInfoChange}/>
            <input type='text' id='email' placeholder='Email' onChange={handleInfoChange}/>
            <textarea id='description' placeholder='Description (Write something about what you do)' onChange={handleInfoChange}/>
        </div>
    )
}
