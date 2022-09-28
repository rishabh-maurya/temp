import React from 'react';
import './Contact.scss';
import contactImg from '../../assets/contactImg.png';
import { GrMail } from 'react-icons/gr';
import { MdPhoneIphone } from 'react-icons/md';
import { ImLocation } from 'react-icons/im';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='contact-container'>
            <div className="contact-img-form-container">
                <div className="contact-form">
                    <h1>Contact Us</h1>
                    <p>Bulk Order Enquiry</p>
                    <form>
                        <input type="text" name='name' placeholder='Enter your name' />
                        <input type="tel" name='phone' placeholder='Enter your phone number' />
                        <input type="email" name='email' placeholder='Enter your email address' />
                        <input type="text" name='organization' placeholder='Enter your organization name' />
                        <textarea name="message" placeholder='Message...'></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>

                <div className="map-conact-info">
                    {/* google map */}

                    <div className="contact-info">
                        <div className="contact-info-card">
                            <MdPhoneIphone />
                            <p>+91 8699646484</p>
                        </div>

                        <div className="contact-info-card">
                            <GrMail />
                            <p>info@holokitab.in</p>
                        </div>

                        <div className="contact-info-card">
                            <ImLocation />
                            <p>425/NSG Jalandhar, Punjab 144001</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;