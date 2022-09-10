import React from 'react'
import './style.css'

export const CarCard = ({categoryHandler,model:{_id,name,imgUrl}}) => {
  return (
    <div className='car_card' onClick={()=>categoryHandler(_id,name)}>
         <img src={`${process.env.REACT_APP_BACKEND_URL}/${imgUrl}`} className='car_card_img' alt="card-img" />
         <h3>{name.toUpperCase()} </h3>
    </div>
  )
}
