import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""
                />

                <div className="home__row">
                    <Product 
                    id="31212312"
                    title="TG Furniture Sheesham Wood Natural Finish Single Seater Sofa (78 x 76 x 64 cm)"
                    price={29.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/51pK5lfZbaL._SY450_.jpg"
                    rating={4}
                    />
                    <Product 
                    id="31214567"
                    title="Cadbury Silk Special Potli, 343g"
                    price={4.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/818hkjbb2CL._SX522_.jpg"
                    rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product 
                    id="84714567"
                    title="TIMEWEAR Commando Series Digital Sports Watch"
                    price={15.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/81qcmjX9TrL._UX342_.jpg"
                    rating={3}
                    />
                    <Product 
                    id="84867167"
                    title="New Apple iPhone 12 Pro Max (128GB) - Pacific Blue"
                    price={999.49}
                    image="https://images-na.ssl-images-amazon.com/images/I/71MHTD3uL4L._SX466_.jpg"
                    rating={4}
                    />
                    <Product 
                    id="84861367"
                    title="Amazon Brand - Myx Women's Cotton Short Kurti"
                    price={13.49}
                    image="https://images-na.ssl-images-amazon.com/images/I/81oZjAIymqL._UY550_.jpg"
                    rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product 
                    id="87722167"
                    title="Samsung 139 cm (55 inches) 4K Ultra HD Smart QLED TV QA55Q60TAKXXL (Black) (2020 Model)"
                    price={899.29}
                    image="https://images-na.ssl-images-amazon.com/images/I/81Qxjm42bOL._SX355_.jpg"
                    rating={3}
                    />
                </div>

            </div>
        </div>
    )
}

export default Home
