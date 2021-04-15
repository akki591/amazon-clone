import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CheckoutProduct({id,title,image,rating,price,hideBtn}) {
    const [{basket},dispatch] = useStateValue();
    const removeFromBasket = () => {
        // rmeove the item from basket
        dispatch({
            type: "REMOVE_ITEM",
            id: id,
        })
        toast.error("Product Removed !",{
            position: "bottom-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            });
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
                {!hideBtn && (
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct
