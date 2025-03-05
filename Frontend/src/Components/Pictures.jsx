import React from 'react'
import Pic1 from'../assets/Images/Dalle1.webp' 
import Pic2 from '../assets/Images/Dalle2.webp'

function Pictures() {
  return (
    <>
    <div className='flex gap-4 flex-'>
        <div className='W-[30%]'>
            <img src={Pic1} alt="Picture" />
        </div>

        <div className='W-[32%] h-[32%]'>
            <img src={Pic2} alt="Pictures" />

        </div>
    </div>
    </>
  )
}

export default Pictures