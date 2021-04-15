import React from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Product({id, title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue();
    //console.log('basket',basket);
    const addToBasket = () => {
        // dispatch item into data layer
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            }, 
        })
        toast.dark("Product Added in Basket!",{
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
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i)=> (
                        // console.log(i);
                        <p>⭐</p>
                    ))}
                </div>
            </div>
            <img src={image} />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
