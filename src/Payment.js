import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios';
import { db } from './firebase';
import moment from 'moment';

function Payment({promise}) {
    const [{basket,user},dispatch] = useStateValue();
    const history = useHistory();
    // console.log(promise);
    const stripe = useStripe();
    const elements = useElements();

    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);


    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currencies subunits
                url: `payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket]);

    // console.log('client secret key >>',clientSecret);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        // const payload = await stripe.confirmCardPayment(clientSecret,{
        //     payment_method:{
        //         card: elements.getElement(CardElement)
        //     }
        // }).then(({ paymentIntent }) => {

            db.collection('users').doc(user?.uid).collection('orders').doc('pi_dsjjdshufbshd')
            .set({
                basket: basket,
                amount: getBasketTotal(basket) * 100,
                created: moment().format("MMMM Do YYYY, h:mma")
            })

            setSucceeded(true);
            setProcessing(false);
            setError(null);

            dispatch({
                type: 'EMPTY_BASKET'
            })

            history.replace('/orders');
        // });

    }

    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (
                        <Link to="/checkout">{basket?.length} items</Link>
                        )
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>143 React Lane</p>
                        <p>pachli gali.</p>
                    </div>
                </div>

                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            {/* if Error */}
                            {error && <div className="payment__error">{error}</div>}
                            <div className="payment__priceContainer">
                            <CurrencyFormat
                                renderText={(value) => (
                                    <h3>Order Total: {value}</h3>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                            />
                            <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>Processing...</p>:"Buy Now"}</span>
                            </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
