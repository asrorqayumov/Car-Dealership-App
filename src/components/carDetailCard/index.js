import React from 'react';
import './style.css';
import defImg from '../../images/default_car.webp'


export const CarDetailCard = ({car:{price,imgUrl,marka,tonirovka,motor,year,color,distance,gearbook,description}}) => {
   const img = imgUrl?`${process.env.REACT_APP_BACKEND_URL}/${imgUrl}`:defImg;
  return (
    <div className='car_detail_card'>
         <div className="detail_card_header">
            <h3>Chevrolet malibu</h3>
            <p>{price} so'm dan</p>
         </div>
         <img src={img} className='detail_card_img' alt="" />
         <div className="detail_card_info">
            <b>Marka:</b> {marka.name}
         </div>
         <div className="detail_card_info">
            <b>Tanirovkasi:</b> {tonirovka}
         </div>
         <div className="detail_card_info">
            <b>Motor:</b> {motor}
         </div>
         <div className="detail_card_info">
            <b>Year:</b> {year}
         </div>
         <div className="detail_card_info">
            <b>Color:</b> {color}
         </div>
         <div className="detail_card_info">
            <b>Distance:</b> {distance}
         </div>
         <div className="detail_card_info">
            <b>Gearbook:</b>{gearbook}
         </div>
         <div className="detail_card_info">
            <b>Description:</b>{description}
         </div>
         <hr style={{marginBottom: "4px"}}/>
         <div className="detail_card_info last">
            <b>Umumiy xarajat:</b> {price}
         </div>
         
    </div>
  )
}
