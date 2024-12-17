import "./Home.scss"

import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <div className="home__hero">
                <div className="home__hero-overlay" />
                <div
                    className="home__hero-bg"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')"
                    }}
                />

                <div className="home__hero-content">
                    <div>
                        <h1 className="home__hero-title">Pizza Paradise</h1>
                        <p className="home__hero-text">
                            Experience authentic Italian pizza made with love and the finest ingredients.
                            From classic Margherita to gourmet combinations, every bite tells a story.
                        </p>
                        <Link to="/menu" className="home__hero-button">
                            View Menu
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="home__features">
                <div className="home__features-grid">
                    <div className="home__features-item">
                        <img
                            src="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                            alt="Fresh Ingredients"
                        />
                        <h3>Fresh Ingredients</h3>
                        <p>Only the finest, locally-sourced ingredients make it to our kitchen.</p>
                    </div>
                    <div className="home__features-item">
                        <img
                            src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                            alt="Wood Fired"
                        />
                        <h3>Wood Fired Oven</h3>
                        <p>Traditional wood-fired cooking for authentic Italian flavor.</p>
                    </div>
                    <div className="home__features-item">
                        <img
                            src="https://images.unsplash.com/photo-1516697073-419b2bd079db?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                            alt="Fast Delivery"
                        />
                        <h3>Fast Delivery</h3>
                        <p>Hot and fresh pizza delivered to your doorstep.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;