import "./Menu.scss"

import PizzaCard from '../../components/PizzaCard/PizzaCard';
import { pizzas } from '../../data/pizzas';

const Menu = () => {
    return (
        <div className="menu">
            <h1 className="menu__title">Our Menu</h1>
            <div className="menu__grid">
                {pizzas.map((pizza) => (
                    <PizzaCard key={pizza.id} pizza={pizza} />
                ))}
            </div>
        </div>
    );
}

export default Menu;