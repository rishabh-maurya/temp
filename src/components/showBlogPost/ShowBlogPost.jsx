import React from 'react';
import SidebarBlogPostCard from '../sidebarBlogPostCard/SidebarBlogPostCard';
import './ShowBlogPost.scss';
import { Link } from 'react-router-dom';

const ShowBlogPost = () => {


    const trendingBlogPosts = [
        {
            imgUrl: 'https://cdn.pixabay.com/photo/2015/10/31/21/47/family-1016311__340.jpg',
            title: 'How much screen time is healthy for my child?',
            description: "When we talk about healthy screen time, it's mostly referred to as timing, for how long is it ideal for a child towatch the scree"
        },
        {
            imgUrl: 'https://www.holokitab.in/img/parent.webp',
            title: 'AR is the innovative way of Learning',
            description: "When we talk about healthy screen time, it's mostly referred to as timing, for how long is it ideal for a child towatch the scree"
        },
        {
            imgUrl: 'https://cdn.pixabay.com/photo/2015/04/30/09/46/love-746678__340.jpg',
            title: 'How to treat your children?',
            description: "The best way to get respectful treatment from your child is to treat him respectfully,"
        },
    ];

    const latestBlogPosts = [
        {
            imgUrl: 'https://cdn.pixabay.com/photo/2015/10/31/21/47/family-1016311__340.jpg',
            title: 'How much screen time is healthy for my child?',
            description: "When we talk about healthy screen time, it's mostly referred to as timing, for how long is it ideal for a child towatch the scree"
        },
        {
            imgUrl: 'https://cdn.pixabay.com/photo/2015/04/30/09/46/love-746678__340.jpg',
            title: 'How to treat your children?',
            description: "The best way to get respectful treatment from your child is to treat him respectfully,"
        },
    ];

    return (
        <div className='show-blog-post-container'>
            <div className="blog-post">
                <div className="post-header-img">
                    <img
                        src="https://cdn.pixabay.com/photo/2015/10/31/21/47/family-1016311__340.jpg"
                        alt=""
                    />
                </div>
            </div>

            <div className="blog-sidebar">
                <div className="sidebar-blog-posts">
                    <h3>Trending Blog Posts</h3>
                    <div className="show-sidebar-blog-posts">
                        {
                            trendingBlogPosts.map((data, index) =>
                                <Link to='/' key={index}>
                                    <SidebarBlogPostCard cardData={data} />
                                </Link>
                            )
                        }
                    </div>
                </div>

                <div className="sidebar-blog-posts">
                    <h3>Latest Blog Posts</h3>
                    <div className="show-sidebar-blog-posts">
                        {
                            latestBlogPosts.map((data, index) =>
                                <Link to='/' key={index}>
                                    <SidebarBlogPostCard cardData={data} />
                                </Link>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowBlogPost;