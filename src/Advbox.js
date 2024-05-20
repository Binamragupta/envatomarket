import React from 'react'
import './CSS/Advbox.css'

export default function Advbox(prop) {
  return (
    <>
    <div className='adv'>
        <div >
            <img src={prop.img} alt="" />
        </div>
        <div className='adv-text'>
            <div className='adv-text1'>{prop.head}</div>
            <div className='adv-text2'>{prop.title}</div>
        </div>
    </div>
</>
  )
}
