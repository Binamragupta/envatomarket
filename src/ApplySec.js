import React from 'react'
import './CSS/ApplySec.css'

export default function ApplySec(prop) {
  return (
   <>
        <div className='contain'>
            <div className='contain-text'>
                <div className='contain-text1'>{prop.title}</div>
                <div className='contain-text2'>{prop.con}</div>
            </div>
            <div>
                <img src={prop.img} alt="" />
            </div>
        </div>
   </>
  )
}
