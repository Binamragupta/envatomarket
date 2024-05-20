import React from 'react'
import './CSS/Navbar.css'
// import img1 from './ASSETS/motionarteffect-img2.png'

export default function Navbar() {
  return (
    <>
        <div className='nav'>
            <div className='logo'>
                {/* <img src={img1} alt="" className='pic' /> */}
                <span className='en'>envato</span>
                <span className='ma'>market</span>
            </div>
            <div className='button'>
                <button className='but'>Buy Now</button>
            </div>
        </div>
    </>
  )
}
