import React from 'react'
export default function SideBar({img, email, pnum , address, langs}) {
    return (
        <div className='cv-side-bar'>
            <img src= {img} alt='User_image'/>
            <div className='content'>
                <h3 className='title'>Contact</h3>
                <div>
                    <h4>Phone</h4>
                    <p>{pnum}</p>
                </div>
                <div>
                    <h4>Email</h4>
                    <p>{email}</p>
                </div>
                <div>
                    <h4>Address</h4>
                    <p>{address}</p>
                </div>
                <h3 className='title'>Languages</h3>
                    {langs.map(lang => { return (
                        <div key={lang.lang}>
                            <h4>{lang.lang}</h4>
                            <p>{lang.lvl}</p>
                        </div>
                    )})}
            </div>
        </div>
    )
}
