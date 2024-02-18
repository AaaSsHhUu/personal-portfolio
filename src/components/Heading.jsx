import React from 'react'

const Heading = ({heading}) => {
  return (
    <div className='flex justify-center w-full'>
      <h1 className='text-react font-roboto text-6xl my-14'>{heading}</h1>
    </div>
  )
}

export default Heading
