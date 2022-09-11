import React from 'react'
import defImg from '../../images/default_car.webp'
import './style.css'

export const CarCard = ({categoryHandler,model:{_id,name,imgUrl}}) => {
  const img = imgUrl?`${process.env.REACT_APP_BACKEND_URL}/${imgUrl}`:defImg;
  return (
    <div className='car_card' onClick={()=>categoryHandler(_id,name)}>
         <img src={img} className='car_card_img' alt="card-img" />
         <h3>{name.toUpperCase()} </h3>
    </div>
  )
}
