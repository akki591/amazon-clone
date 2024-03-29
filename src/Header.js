import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import { ToastContainer, toast } from 'react-toastify';

function Header() {
    const [{basket,user}] = useStateValue();
    // console.log(user);
    const handleAuth = () => {
        if(user) {
            auth.signOut();
        }
    }
    return (
        <div className="header">
            <ToastContainer />
            <Link to="/">
                <img className='header__logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
            </Link>

            <div className='header__search'>
                <input className="header__searchInput" type="text" />
                {/* Logo */}
                <SearchIcon className="header__searchIcon"/>
            </div>

            <div className="header__nav">
                <Link to={!user && '/login'}>
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello {user ? user.email:'Guest'}</span>
                        <span onClick={handleAuth} className="header__optionLineTwo">{user ? 'Sign Out':'Sign In'}</span>
                    </div>
                </Link>
                <Link to={'/orders'}>
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns </span>
                        <span className="header__optionLineTwo">& Order</span>
                    </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
