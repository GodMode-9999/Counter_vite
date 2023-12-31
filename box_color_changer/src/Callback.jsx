import React , { useState }from 'react'

function Callback( {getColor} ) {
    const [activeColor , setActiveColor] = useState('white') 

    const handleChange = (e) => {
        const { value } = e.target ;
        setActiveColor(value) ;
        getColor(value) 
    } ;

    return (
        <input
        type='text' 
        id='input'
        aria-label='input'
        onChange={handleChange}
        value={activeColor}
        />
    )
}

export default Callback
