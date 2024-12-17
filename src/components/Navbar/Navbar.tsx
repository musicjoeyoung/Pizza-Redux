import "./Navbar.scss"

import { Phone, Pizza, ShoppingCart } from 'lucide-react';

import { Link } from 'react-router-dom';
import { RootState } from '../../types';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <nav className="navbar">
            <div className="navbar__container">
                <Link to="/" className="navbar__logo">
                    <Pizza className="h-8 w-8" />
                    <span>Pizza Paradise</span>
                </Link>

                <div className="navbar__nav">
                    <Link to="/menu" className="navbar__link">
                        <span>Menu</span>
                    </Link>
                    <Link to="/contact" className="navbar__link">
                        <Phone className="h-5 w-5" />
                        <span>Contact</span>
                    </Link>
                    <Link to="/cart" className="navbar__link">
                        <div className="navbar__cart-icon">
                            <ShoppingCart className="h-5 w-5" />
                            {itemCount > 0 && (
                                <span className="navbar__cart-count">{itemCount}</span>
                            )}
                        </div>
                        <span>Cart</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;