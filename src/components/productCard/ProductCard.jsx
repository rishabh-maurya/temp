import React from 'react';
import './ProductCard.scss';
import { RiCoupon3Fill } from 'react-icons/ri';

const ProductCard = () => {
  return (
    <div className='productcard-container'>
      <div className="img-container">
        <img src="https://cdn.pixabay.com/photo/2017/09/21/13/32/girl-2771936__340.jpg" alt="" />
      </div>

      <div className="productcard-info">
        <h3>Orboot Earth</h3>
        <p>Interactive AR globe to explore wildlife, cultures, landmarks, inventions and maps!</p>
      </div>

      <div className="productcard-action">
        <h4><span className='mrp'>₹1749</span>₹1499</h4>
        {/* <p className='offer'><RiCoupon3Fill /> 14% off</p> */}
        <button>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductCard;