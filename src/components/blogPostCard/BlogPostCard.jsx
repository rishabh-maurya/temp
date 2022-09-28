import React from 'react';
import './BlogPostCard.scss';
import { FaCalendar } from 'react-icons/fa';
import { RiQuillPenFill } from 'react-icons/ri';
import { IoLogoWhatsapp } from 'react-icons/io';
import { ImTwitter } from 'react-icons/im';
import { RiFacebookCircleFill } from 'react-icons/ri';

const BlogPostCard = ({ blogData }) => {
    return (
        <div className='blog-post-card-container'>
            <div className="card-img-container">
                <img
                    src={blogData.imgUrl}
                    alt="blog"
                />
            </div>

            <div className="card-body">
                <h5>{(blogData.title).substring(0, 60)}...</h5>
                <p>{(blogData.description).substring(0, 130)} ... <span>Read More</span></p>

                <div className="time-author">
                    <span><FaCalendar />{blogData.time}</span>
                    <span><RiQuillPenFill />{blogData.author}</span>
                </div>

                <div className="social-media">
                    <button><IoLogoWhatsapp className='social-media-icons' /></button>
                    <button><RiFacebookCircleFill className='social-media-icons' /></button>
                    <button><ImTwitter className='social-media-icons' /></button>
                </div>
            </div>
        </div>
    )
}

export default BlogPostCard;