import React from 'react'

export default function Langs({lang, lvl, id, removeLangHandler, handleLangChange}) {
    return (
        <div className='language'>
            <input type='text' id={id} name='lang' onChange={handleLangChange} placeholder='Language' value={lang}/>
            <input type='text' id={id} name='lvl' onChange={handleLangChange} placeholder='Language Level' value={lvl}/>
            <input type='button' id={id} className = 'remove' value='Remove' onClick={removeLangHandler}/>
        </div>
    )
}
