import React from 'react';
import "./checkoutProduct.css"
import { useStateValue } from './stateProvider';

const CheckoutProduct = ({id, image, description, price, rating}) => {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    return (
        <div className="checkoutProduct">
            <img src={image} alt="" className="checkoutproduct_image"/>
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_description">{description}</p>
                <p className="checkoutProduct_price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                    {Array(rating).fill()
                    .map((_,i)=>(
                        <p>🌟</p>
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
            
        </div>

            
        
    );
};

export default CheckoutProduct;