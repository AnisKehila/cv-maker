import React from 'react'
import CvHeader from './CvItems/CvHeader'
import Education from './CvItems/Education'
import Experience from './CvItems/Experience'
import SideBar from './CvItems/SideBar'
import Description from './CvItems/Description'

export default function Cv({cv}) {
    return (
        <div className='cv-container'>
            <SideBar
                img = {cv.personalInfo.img}
                email = {cv.personalInfo.email}
                pnum = {cv.personalInfo.pnum}
                address = {cv.personalInfo.address}
                langs = {cv.personalInfo.langs}
            />
            <div className='cv-content'>
                <CvHeader 
                    firstName = {cv.personalInfo.firstName}
                    lastName = {cv.personalInfo.lastName}
                    jobTitle = {cv.personalInfo.jobTitle}
                />
                <Description description={cv.personalInfo.description}/>
                <Experience />
                <Education />
            </div>
        </div>
    )
}
