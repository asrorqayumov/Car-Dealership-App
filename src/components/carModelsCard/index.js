import React from 'react'
import { Link } from 'react-router-dom'
import defImg from '../../images/default_car.webp'

export const CarModelsCard = ({car:{price,marka,imgUrl,_id}}) => {
  const img = imgUrl?`${process.env.REACT_APP_BACKEND_URL}/${imgUrl}`:defImg;
  
  return (
    <div className='car_card'>
        <Link to={`/models/${_id}`}>
         <img src={img} className='car_card_img' alt="card-img" />
        </Link>
         <h3>{marka.name.toUpperCase()} </h3>
         <h4><b>Narxi:</b> {price}</h4>
    </div>
  )
}
