import "./CartItem.scss"

import { Minus, Plus, Trash2 } from 'lucide-react';
import { removeFromCart, updateQuantity } from '../../store/cartSlice';

import { CartItem as CartItemType } from '../../types';
import { useDispatch } from 'react-redux';

interface CartItemProps {
    item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
    const dispatch = useDispatch();

    const handleQuantityChange = (newQuantity: number) => {
        if (newQuantity < 1) {
            dispatch(removeFromCart(item.id));
        } else {
            dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
        }
    };

    return (
        <div className="cart-item">
            <div className="cart-item__info">
                <h3 className="cart-item__name">{item.name}</h3>
                <p className="cart-item__price">${item.price.toFixed(2)} each</p>
            </div>

            <div className="cart-item__controls">
                <div className="cart-item__quantity">
                    <button
                        onClick={() => handleQuantityChange(item.quantity - 1)}
                        className="cart-item__quantity-button"
                    >
                        <Minus className="h-4 w-4" />
                    </button>
                    <span className="cart-item__quantity-value">{item.quantity}</span>
                    <button
                        onClick={() => handleQuantityChange(item.quantity + 1)}
                        className="cart-item__quantity-button"
                    >
                        <Plus className="h-4 w-4" />
                    </button>
                </div>

                <span className="cart-item__total">
                    ${(item.price * item.quantity).toFixed(2)}
                </span>

                <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="cart-item__remove"
                >
                    <Trash2 className="h-5 w-5" />
                </button>
            </div>
        </div>
    );
}

export default CartItem;