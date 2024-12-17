import "./PizzaCard.scss"

import { Pizza } from '../../types';
import { Plus } from 'lucide-react';
import { addToCart } from '../../store/cartSlice';
import { useDispatch } from 'react-redux';

interface PizzaCardProps {
    pizza: Pizza;
}

const PizzaCard = ({ pizza }: PizzaCardProps) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart({
            id: pizza.id,
            name: pizza.name,
            price: pizza.price,
            quantity: 1
        }));
    };

    return (
        <div className="pizza-card">
            <img
                src={pizza.image}
                alt={pizza.name}
                className="pizza-card__image"
            />
            <div className="pizza-card__content">
                <div className="pizza-card__header">
                    <h3 className="pizza-card__title">{pizza.name}</h3>
                    <span className="pizza-card__price">${pizza.price}</span>
                </div>
                <p className="pizza-card__description">{pizza.description}</p>
                <div className="pizza-card__ingredients">
                    <h4 className="pizza-card__ingredients-title">Ingredients:</h4>
                    <div className="pizza-card__ingredients-list">
                        {pizza.ingredients.map((ingredient, index) => (
                            <span
                                key={index}
                                className="pizza-card__ingredients-item"
                            >
                                {ingredient}
                            </span>
                        ))}
                    </div>
                </div>
                <button
                    onClick={handleAddToCart}
                    className="pizza-card__button"
                >
                    <Plus className="h-5 w-5" />
                    <span>Add to Cart</span>
                </button>
            </div>
        </div>
    );
}

export default PizzaCard;