import React from 'react'

const ValidationError = (props) => {
    const {Prefix, field, errors} = props
  return (
      <div className='bg-white h-screen w-full flex flex-row justify-center items-center text-lg text-black'>
          <h2>{Prefix }</h2>  
          <h2>{field }</h2>  
          <h2>{errors }</h2>  
    </div>
  )
}

export default ValidationError