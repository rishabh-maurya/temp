import React from 'react';
import './SidebarBlogPostCard.scss';

const TrendingBlogPostCard = ({ cardData }) => {
    return (
        <div className='trending-blog-post-card-container'>
            <div className="img-container">
                <img
                    src={cardData.imgUrl}
                    alt="post thumbnail"
                />
            </div>

            <div className="card-info">
                <h5>{(cardData.title).substring(0, 24)} ...</h5>
                <p>{(cardData.description).substring(0, 55)} ... <span>Read More</span></p>
            </div>
        </div>
    )
}

export default TrendingBlogPostCard;