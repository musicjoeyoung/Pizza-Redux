import "./Cart.scss"

import { ShoppingBag, Trash } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';

import CartItem from '../../components/CartItem/CartItem';
import { RootState } from '../../types';
import { clearCart } from '../../store/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);

    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const tax = subtotal * 0.1; // 10% tax
    const total = subtotal + tax;

    if (cartItems.length === 0) {
        return (
            <div className="cart">
                <div className="cart__empty">
                    <ShoppingBag className="cart__empty-icon" />
                    <h2 className="cart__empty-title">Your cart is empty</h2>
                    <p className="cart__empty-text">Add some delicious pizzas to get started!</p>
                </div>
            </div>
        );
    }

    return (
        <div className="cart">
            <div className="cart__header">
                <h1 className="cart__header-title">Shopping Cart</h1>
                <button
                    onClick={() => dispatch(clearCart())}
                    className="cart__header-clear"
                >
                    <Trash className="h-5 w-5 mr-1" />
                    Clear Cart
                </button>
            </div>

            <div className="cart__content">
                <div>
                    {cartItems.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </div>

                <div className="cart__summary">
                    <div className="cart__summary-row">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="cart__summary-row">
                        <span>Tax (10%)</span>
                        <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="cart__summary-row total">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                </div>

                <button className="cart__checkout">
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
}

export default Cart;