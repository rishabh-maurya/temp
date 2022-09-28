import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import { TbFreeRights, TbTruckDelivery } from 'react-icons/tb';
import { VscWorkspaceTrusted } from 'react-icons/vsc';
import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa';
import { ImLinkedin2, ImYoutube } from 'react-icons/im';

const Footer = () => {

    const icons = [
        FaFacebookSquare,
        FaInstagram,
        ImLinkedin2,
        ImYoutube,
        FaTwitter
    ];

    return (
        <div className='footer'>

            <div className="help-info">
                <div>
                    <h1>Have any question? We're here to help 24x7</h1>
                    <Link to='/contact' className='btn'>Contact Us</Link>
                </div>
                <div className="supports-container">
                    <span><TbFreeRights className='supports-icon' /> Free shipping in India</span>
                    <span><VscWorkspaceTrusted className='supports-icon' /> Six months warranty</span>
                    <span><TbTruckDelivery className='supports-icon' /> Delivers in 3-5 days</span>
                </div>
            </div>

            <hr />

            <div className="footer-info">
                <div className="part1">
                    <h2>The HoloKitab Story</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit laborum dolore corrupti laudantium repellendus neque perspiciatis! Nihil alias exercitationem consequatur!</p>
                    <div className="subscribe">
                        <form>
                            <p>Get exclusive updates, offers and more!</p>
                            <input type="text" placeholder='myemail@gmail.com' />
                            <button>Subscribe</button>
                        </form>
                    </div>
                </div>

                <div className="part2">
                    <div className="menus">
                        <h5>Products</h5>
                        <Link to='/'>Orboot</Link>
                        <Link to='/'>Plugo</Link>
                        <Link to='/'>Tacto</Link>
                    </div>
                    <div className="menus">
                        <h5>Menus</h5>
                        <Link to='/'>Feature</Link>
                        <Link to='/pricing'>Pricing</Link>
                        <Link to='/blog'>Blog</Link>
                        <Link to='/help'>Help</Link>
                    </div>
                </div>

                <div className="part3">
                    <h5>Connect With Us</h5>
                    <div className="social-icons">
                        {
                            icons.map((Icon, index) =>
                                <a href="http://" target="_blank" rel="noopener noreferrer" key={index}>
                                    <Icon />
                                </a>
                            )
                        }
                    </div>
                </div>
            </div>

            <div className="bottom-container">
                <Link to='/'>&#169; holokitab.in</Link>
                <Link to='/'>Terms & Conditions</Link>
                <Link to='/'>Privacy Policy</Link>
            </div>
        </div>
    )
}

export default Footer;