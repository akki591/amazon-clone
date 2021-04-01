import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';

function CheckoutProduct({id,title,image,rating,price}) {
    const [{basket},dispatch] = useStateValue();
    const removeFromBasket = () => {
        // rmeove the item from basket
        dispatch({
            type: "REMOVE_ITEM",
            id: id,
        })
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i)=> (
                        // console.log(i);
                        <p>⭐</p>
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
