import "./Contact.scss"

import { Clock, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <div className="contact">
            <h1 className="contact__title">Contact Us</h1>

            <div className="contact__grid">
                <div>
                    <div className="contact__info">
                        <h2 className="contact__info-title">Get in Touch</h2>
                        <div className="contact__info-list">
                            <div className="contact__info-item">
                                <Phone className="h-5 w-5" />
                                <span>(212) 123-4567</span>
                            </div>
                            <div className="contact__info-item">
                                <Mail className="h-5 w-5" />
                                <span>contact@pizzaparadise.com</span>
                            </div>
                            <div className="contact__info-item">
                                <MapPin className="h-5 w-5" />
                                <span>123 Main St., New York, NY, 100012</span>
                            </div>
                            <div className="contact__info-item">
                                <Clock className="h-5 w-5" />
                                <span>Mon-Sun: 11:00 AM - 10:00 PM</span>
                            </div>
                        </div>
                    </div>

                    <form className="contact__form">
                        <div className="contact__form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" />
                        </div>
                        <div className="contact__form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" />
                        </div>
                        <div className="contact__form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows={4}></textarea>
                        </div>
                        <button type="submit" className="contact__form-button">
                            Send Message
                        </button>
                    </form>
                </div>

                <div className="contact__map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596073366!2d-74.25987368715491!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1647043435129!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
export default Contact;