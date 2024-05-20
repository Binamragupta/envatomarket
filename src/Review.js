import React from 'react'
import './CSS/Review.css'

export default function Review(props) {
  return (
    <>
    <div className='review-box'>
        <div className='review-box-item'>
            <img className='log' src={props.img} alt="" />
        </div>
        <div className='review-box-item'>
            <img src={props.star} alt="" />
            <div className="review-txt">4.5 Score, 9 Reviews</div>
        </div>
    </div>
    </>
  )
}
