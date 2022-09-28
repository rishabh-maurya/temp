import React from 'react';
import './Services.scss';
import { MdPhoneAndroid, MdAccessAlarms } from 'react-icons/md';
import { IoLogoUsd } from 'react-icons/io';
import { GrVmMaintenance } from 'react-icons/gr';
import { BsCheckCircleFill } from 'react-icons/bs';
import MagicianCard from '../../components/magicianCard/MagicianCard';


const Services = () => {

    const needsOfAR = [
        {
            title: 'Garrett Hawes',
            description: "It's a real game changer for augmented reality development. We used to have a dedicated team creating and supporting our AR books, but now it only takes about 10 minutes. MyWebAR does for augmented reality what Canva does for design!"
        },
        {
            title: 'Brook Jones',
            description: "In modern world it's really importantn to optimize the customer journey of your marketing campaign. MyWebAR allows us to give our users a rich AR experience without needing then to download an app. It all works in their browser."
        },
        {
            title: 'Evelyn Leon',
            description: "I've been looking for a simple AR creation tool to use in my classroom for a while now and with MyWebAR, I can finally say that I've found it! Students love working on the assignments featuring augemented reality, while AR visualizations make even the most complicated topics comprehensive."
        }
    ];

    const magicianCardData = [
        {
            icon: MdPhoneAndroid,
            title: 'Android/Ios App',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat iure tempore enim eosex ercitationem laborum. Fugit, optio saepe!Sequi, illo."
        },
        {
            icon: MdAccessAlarms,
            title: 'Regular Updates',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat iure tempore enim eosex ercitationem laborum. Fugit, optio saepe!Sequi, illo."
        },
        {
            icon: IoLogoUsd,
            title: 'Free Marketing Content',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat iure tempore enim eosex ercitationem laborum. Fugit, optio saepe!Sequi, illo."
        },
        {
            icon: GrVmMaintenance,
            title: 'Free Maintenance',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat iure tempore enim eosex ercitationem laborum. Fugit, optio saepe!Sequi, illo."
        },
    ];

    const whyChooseCartMagicianData = [
        {
            icon: BsCheckCircleFill,
            title: 'Easy to integrate and manage',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat iure tempore enim eosex ercitationem laborum. Fugit, optio saepe!Sequi, illo."
        },
        {
            icon: BsCheckCircleFill,
            title: 'Simple, cost-effective pricing',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat iure tempore enim eosex ercitationem laborum. Fugit, optio saepe!Sequi, illo."
        },
        {
            icon: BsCheckCircleFill,
            title: 'Expert support',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat iure tempore enim eosex ercitationem laborum. Fugit, optio saepe!Sequi, illo."
        },
    ];

    return (
        <div className='services-container'>

            {/* Services Home  */}
            <div className="services-home center">
                <div className="services-home-content-container">
                    <h1>
                        Augmented reality services for
                        <span className='change-text'></span>
                    </h1>
                </div>
                <div className="services-home-img-container">
                    <img
                        src="https://static.teamviewer.com/resources/2022/04/augmented-reality-product-hero-image.jpg"
                        alt=""
                    />
                </div>
            </div>

            {/* about-our-services */}
            <div className="about-our-services center">
                <p>CartMagician's powerful Web AR platform tools and exports supercharge 2D images and 3D models into
                    try-before-you-buy WebAR experience for e-Commerce product pages, online galleries and business
                    websites. Connect any platform, no app downloads, all in the browser.
                </p>

                <div className="btn-container">
                    <button className='btn btn-outline'>Explore our plans</button>
                </div>
            </div>

            {/* what's the need of AR */}
            <div className="need-of-ar">
                <h1>What's the need of AR?</h1>

                <div className="display-need-card center">
                    {needsOfAR.map((data, index) =>
                        <div className="need-card" key={index}>
                            <h5>{data.title}</h5>
                            <p>{data.description}
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* about augmented reality ================================= */}
            {/* augmented reality made for */}
            <div className="augmented-reality-made-for center">
                <div className="img-container">
                    <img
                        src="https://cdn.pixabay.com/photo/2016/11/21/13/51/woman-1845517__340.jpg"
                        alt=""
                    />
                </div>
                <div className="content-container">
                    <h3><span>Augmented Reality</span> made for Book Publishers</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Nisi, quidem laboriosam rem aliquam nobis
                        enim labore voluptatem officia dignissimos natus
                        unde consequatur quis eveniet repellendus, ea
                        numquam qui reiciendis harum?
                    </p>
                    <p className="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Praesentium veniam repellendus ex atque
                        nesciunt, tempora modi odit dicta quasi quas
                        quidem ipsam possimus voluptas reiciendis veritatis
                        nemo vel repudiandae consequatur!
                    </p>

                    <div className="btn-container center">
                        <button className='btn'>Learn how to create augmented reality</button>
                    </div>
                </div>
            </div>

            <div className="augmented-reality-made-for center">
                <div className="img-container">
                    <img
                        src="https://cdn.pixabay.com/photo/2015/01/08/18/24/children-593313__340.jpg"
                        alt=""
                    />
                </div>

                <div className="content-container">
                    <h3><span>Batch Processing</span> streamlines WebAR</h3>
                    <p>Simply drag and drop your 2D images and 3D model files ans
                        watch the magic happen!
                    </p>
                    <p className="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Praesentium veniam repellendus ex atque
                        nesciunt, tempora modi odit dicta quasi quas
                        quidem ipsam possimus voluptas reiciendis veritatis
                        nemo vel repudiandae consequatur!
                    </p>

                    <div className="btn-container center">
                        <button className='btn'>Get started with batch processing AR</button>
                    </div>
                </div>
            </div>

            <div className="augmented-reality-made-for center">
                <div className="img-container">
                    <img
                        src="https://cdn.pixabay.com/photo/2019/07/29/21/27/filming-4371566__340.jpg"
                        alt=""
                    />
                </div>
                <div className="content-container">
                    <h3><span>Augmented Reality</span> made for Book Publishers</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Nisi, quidem laboriosam rem aliquam nobis
                        enim labore voluptatem officia dignissimos natus
                        unde consequatur quis eveniet repellendus, ea
                        numquam qui reiciendis harum?
                    </p>
                    <p className="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Praesentium veniam repellendus ex atque
                        nesciunt, tempora modi odit dicta quasi quas
                        quidem ipsam possimus voluptas reiciendis veritatis
                        nemo vel repudiandae consequatur!
                    </p>

                    <div className="btn-container center">
                        <button className='btn'>Learn how to create augmented reality</button>
                    </div>
                </div>
            </div>
            {/* ========================================================= */}

            {/* cart magician */}
            <div className="cart-magician">
                <h1><span>CartMagician.</span></h1>
                <h1>One-easy-to-use platform.</h1>
                <h1>All the Augmented Reality tools you need.</h1>

                <div className="display-magician-card center">
                    {magicianCardData.map((data, index) =>
                        <MagicianCard cardData={data} key={index} />
                    )}
                </div>
            </div>

            {/* why choose cart magician */}
            <div className="why-choose-cart-magicain">
                <h1>Why choose <span>CartMagician.</span></h1>
                <p>Cartmagician supports your e-commerce products and augmented reality needs.</p>

                <div className="display-card center">
                    {whyChooseCartMagicianData.map((data, index) =>
                        <MagicianCard cardData={data} key={index} />
                    )}
                </div>

                <button className='btn'>Learn about CartMagician</button>
            </div>

            {/* see what cart magician do for you */}
            <div className="see-what-cart-magicain-do-for-you">
                <h1>See what CartMagician can do for you.</h1>
                <p>Start with a Free Plan.</p>

                <div className="btn-container center">
                    <button className='btn'>Try for free</button>
                    <button className='btn btn-outline'>Explore our plans</button>
                </div>
            </div>
        </div>
    )
}

export default Services;