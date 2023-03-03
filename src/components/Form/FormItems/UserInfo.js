import React from 'react'
import Langs from './Langs'
export default function UserInfo({handleInfoChange, personalInfo, langClickHandler, handleLangChange, removeLangHandler}) {
    return (
        <div className='info'>
            <h3>Personal Information</h3>
            <input type='text' value={personalInfo.firstName} name='firstName' placeholder='First Name' onChange={handleInfoChange}/>
            <input type='text' value={personalInfo.lastName} name='lastName' placeholder='Last Name'  onChange={handleInfoChange}/>
            <input type='text' value={personalInfo.jobTitle} name='jobTitle' placeholder='Job Title' onChange={handleInfoChange}/>
            <input type='file' name='img' placeholder='Upload Your Personal Image' onChange={handleInfoChange}/>
            <input type='text' value={personalInfo.address} name='address' placeholder='Adress' onChange={handleInfoChange}/>
            <input type='text' value={personalInfo.pnum} name='pnum' placeholder='Phone Number' onChange={handleInfoChange}/>
            <input type='text' value={personalInfo.email} name='email' placeholder='Email' onChange={handleInfoChange}/>
            <textarea name='description' placeholder='Description (Write something about what you do)' onChange={handleInfoChange} value= {personalInfo.description} />
            {
                personalInfo.langs.map(lang => (
                    <Langs 
                        key={lang.id} 
                        lang = {lang.lang} 
                        lvl = {lang.lvl} 
                        id = {lang.id} 
                        handleLangChange = {handleLangChange} 
                        removeLangHandler = {removeLangHandler}
                    />
                ))
            }
            <input type='button' className = 'add' value='Add A Language' onClick={langClickHandler}/>
        </div>
    )
}
