import userImg from '../assets/user-profile-avatar.webp'
import { v4 as uuidv4 } from "uuid";
const cvData = {
    personalInfo : {
        firstName : 'Anis',
        lastName : 'Kehila',
        jobTitle : 'Web Designer & Developer',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        img : userImg,
        email : 'aniskehila22@gmail.com',
        pnum : '+213 781495820',
        address : '958 Street, Jijel, Algeria',
        langs : [
            {lang : 'English' ,lvl : 'Almost Fluant' ,id: uuidv4()},
            {lang : 'French' ,lvl : 'Good' ,id: uuidv4()},
            {lang : 'Arabic' ,lvl : 'Fluant' ,id: uuidv4()}
        ]
    },
    experience : [
        {from: '2016', to: '2018', companyName: 'Algerie Telecom', jobPosition : 'UI/UX Designer', key: uuidv4()},
        {from: '2018', to: '2020', companyName: 'Mobilis', jobPosition: 'Server Side Engineer', key: uuidv4()},
        {from: '2020', to: 'present', companyName: 'Djezzy', jobPosition: 'Back-end web developer', key: uuidv4()}
    ]
    
}
export default cvData