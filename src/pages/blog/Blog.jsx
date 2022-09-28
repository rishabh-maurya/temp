import React from 'react';
import './Blog.scss';
import BlogPostCard from '../../components/blogPostCard/BlogPostCard';
import SliderComponent from '../../components/slider/SliderComponent';
import { Link } from 'react-router-dom';
import blogBanner from '../../assets/blogBanner.png';

const Blog = () => {

    const blogData = [
        {
            id: 'new-era-of-learning',
            imgUrl: 'https://img.freepik.com/premium-vector/happy-family-living-room_1308-44327.jpg?w=996',
            title: 'How much screen time is healthy for my child? The new era of eLearning',
            description: "When we talk about healthy screen time, it's mostly referred to as timing, for how long is it ideal for a child towatch the screen (mobiles/TV/computer/tab..etc.).",
            time: 'July 30,2021',
            author: 'Dipanshu Bajaj',
        },
        {
            id: 'ar-innovative-way-of-learning',
            imgUrl: 'https://img.freepik.com/free-vector/happy-family-photo-frame-vacation_1308-55985.jpg?w=740&t=st=1663942290~exp=1663942890~hmac=68847ef57726ca0265a9dac485df6a34744a3ab9912a128f8834c8dbd87b58bc',
            title: 'AR is the innovative way of Learning',
            description: "When your child is studying, he/she tries to create an imaginary figure in the head based on what is being read. That's called visualization and it helps the brain t",
            time: 'July 30,2021',
            author: 'Dipanshu Bajaj',
        },
    ];

    return (
        <div className='blog-container'>
            {/* <SliderComponent /> */}
            <div className="banner-img-container">
                <img
                    // src="https://img.freepik.com/free-vector/gradient-halftone-technology-facebook-cover_23-2149022334.jpg?w=1380&t=st=1663935480~exp=1663936080~hmac=dc0789fa2643f1023e6feb27aa98efe7e877919cfb0753586a94da980d20b95d"
                    src={blogBanner}
                    alt="blog banner"
                />
            </div>

            <div className="blog-post-container">
                {
                    blogData.map((data, index) => <Link to={data.id} key={index}><BlogPostCard blogData={data} /></Link>)
                }
            </div>
        </div>
    )
}

export default Blog;