import React from 'react'
import { FaAngleDoubleDown } from "react-icons/fa";

const Next = ({content}) => {
  return (
    <div className='flex text-gray-300 animate-bounce'>
        <p className='flex items-end'>{content} <FaAngleDoubleDown/></p>
    </div>
  )
}

export default Next
