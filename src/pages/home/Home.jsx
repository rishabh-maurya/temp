import React from 'react';
import './Home.scss';
import OurProducts from '../../components/ourProducts/OurProducts';
import SliderComponent from '../../components/slider/SliderComponent';
import researchImg from '../../assets/research.png';
import parentsImg from '../../assets/parents.png';
import schoolsImg from '../../assets/school.png';
import cubeImg from '../../assets/cube.png';
import globeImg from '../../assets/globe.png';
import bookImg from '../../assets/book.png';
import whyUsImg from '../../assets/whyUs.png';
import amazonImg from '../../assets/amazon.png';
import downloadTheAppImg from '../../assets/download_the_app.png';
import registerActivateBooksImg from '../../assets/register_activate_books.jpg';
import scanBookImg from '../../assets/scan_book.jpg';
import mobileImg from '../../assets/mobile.png';
import featuredImg1 from '../../assets/featuredImg1.png';
import featuredImg2 from '../../assets/featuredImg2.png';
import featuredImg3 from '../../assets/featuredImg3.png';
import featuredImg4 from '../../assets/featuredImg4.png';
import featuredImg5 from '../../assets/featuredImg5.png';
import featuredImg6 from '../../assets/featuredImg6.png';
import featuredImg7 from '../../assets/featuredImg7.png';
import appstoreImg from '../../assets/appstore-img.webp';
import playstoreImg from '../../assets/playstore-img.webp';
import speakerImg from '../../assets/speaker.png';
import AccordionComponent from '../../components/accordion/AccordionComponent';
import Slider from 'react-slick';
import { BsFillHeartFill } from 'react-icons/bs';
import { RiEmotionHappyLine } from 'react-icons/ri';
import { FaStar } from 'react-icons/fa';

const Home = () => {
  const proofCardData = [
    {
      img: researchImg,
      title: '5+ years of research'
    },
    {
      img: parentsImg,
      title: '2000+ Parents connected'
    },
    {
      img: schoolsImg,
      title: '200+ Schools connected'
    },
    {
      img: cubeImg,
      title: '4D learning experience'
    },
    {
      img: globeImg,
      title: 'Made in India Made for World'
    },
    {
      img: bookImg,
      title: 'Physical books'
    },
  ];

  const ecommercePlatforms = [
    amazonImg,
  ];

  const howItWorksInfo = [
    {
      img: downloadTheAppImg,
      title: 'Download the App',
      description: 'Get the free app from the Google Play Store to get started.'
    },
    {
      img: registerActivateBooksImg,
      title: 'Register and activate the boooks',
      description: 'Signup and activate the books by scanning the QR code.'
    },
    {
      img: scanBookImg,
      title: 'Scan and Enjoy',
      description: 'Open the book and select the same book scan and enjoy.'
    },
  ];

  const awards = [
    featuredImg1,
    featuredImg2,
    featuredImg3,
    featuredImg4,
    featuredImg5,
    featuredImg6,
    featuredImg7
  ];

  const videosUrl = [
    {
      url: 'https://www.youtube.com/embed/zyhfD9ZNemE',
      title: '3D Animated Smart Book Promo | HoloKitab 3D Augmented Reality Books | Shop Now'
    },
    {
      url: 'https://www.youtube.com/embed/PfcSNUJVJwE',
      title: 'How to Entertain Kids with learning in Lockdown? | HoloKitab 3D AR Book'
    },
    {
      url: 'https://www.youtube.com/embed/Tck4AQ-g8bo',
      title: 'HoloKitab 3D Alphabet Book for Kids | Smart way of Learning |  Smart ABC Book'
    },
    {
      url: 'https://www.youtube.com/embed/kNNQ8UQO4qA',
      title: 'HoloKitab 3D ABC Textbook'
    },
  ];

  const frequenlyAskedQues = [
    {
      que: 'How to use StartAR books?',
      ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      que: 'What is the minimum device specification required to run the StarAR app?',
      ans: '',
    },
    {
      que: 'How StartAR is different than other learning apps?',
      ans: '',
    },
    {
      que: 'What are the beneifits of Augmented Reality in education?',
      ans: '',
    },
    {
      que: 'What is Augmented Reality?',
      ans: '',
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
    ]
  };

  const ratings = [
    {
      title: 'Amazing coding game for kids',
      description: 'My daughter loves to play games and I thought to but this tacto coding as this is..',
      author: 'Angel',
      rate: 5
    },
    {
      title: 'Amazing coding game for kids',
      description: 'My daughter loves to play games and I thought to but this tacto coding as this is..',
      author: 'Angel',
      rate: 5
    },
    {
      title: 'Amazing coding game for kids',
      description: 'My daughter loves to play games and I thought to but this tacto coding as this is..',
      author: 'Angel',
      rate: 5
    },
    {
      title: 'Amazing coding game for kids',
      description: 'My daughter loves to play games and I thought to but this tacto coding as this is..',
      author: 'Angel',
      rate: 5
    },
    {
      title: 'Amazing coding game for kids',
      description: 'My daughter loves to play games and I thought to but this tacto coding as this is..',
      author: 'Angel',
      rate: 5
    },
    {
      title: 'Amazing coding game for kids',
      description: 'My daughter loves to play games and I thought to but this tacto coding as this is..',
      author: 'Angel',
      rate: 5
    },
  ];

  const displayStar = (numOfStar) => {
    let stars = [];
    for (let i = 0; i < numOfStar; i++) {
      stars.push(<span key={i}><FaStar /></span>)
    }
    return stars;
  }

  return (
    <div className='home'>
      <SliderComponent />

      <OurProducts />

      {/* ================================== also available at =========================================== */}
      <div className="ecommerce-platforms">
        <h3 >Also available at</h3>

        <div className="show-ecommerce-platforms">
          {
            ecommercePlatforms.map((imgUrl, index) => {
              return (
                <div className="img-container" key={index}>
                  <img
                    src={imgUrl}
                    alt="ecommerce platforms"
                  />
                </div>
              )
            })
          }
        </div>
      </div>

      {/* ================================== how it works =========================================== */}
      <div className="how-it-works">
        <h1>How it works?</h1>
        <p>Using StartAR app is as simple as 123.</p>

        <div className="show-cards">
          {
            howItWorksInfo.map((data, index) =>
              <div className="how-it-works-card" key={index}>
                <img
                  src={data.img}
                  alt={data.title}
                />
                <h5>{`${index + 1}. ${data.title}`}</h5>
                <p>{data.description}</p>
              </div>
            )
          }
        </div>
      </div>


      {/* ================================== why HoloKitab =========================================== */}
      <div className="why-holokitab">
        <div className="left-part">
          <img src={whyUsImg} alt="why-holokitab" />
        </div>

        <div className="right-part">
          <h1>Why HoloKitab?</h1>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis ducimus perferendis
            ea architecto, cupiditate rerum pariatur corporis veritatis! Illum, ipsum consequatur!
            Impedit natus pariatur, ipsa modi ab perspiciatis doloremque quae corrupti ducimus minus
            autem, excepturi enim error ea distinctio quis maiores numquam adipisci? Aut, nesciunt
            magnam mollitia quae deserunt impedit. Pariatur, iste! Quasi ab natus ea, laborum minima
            earum nulla perspiciatis dolorem ipsum provident sunt quam eveniet nostrum cupiditate
            labore odit, quibusdam.
          </p>

          <div className="show-proof">
            {
              proofCardData.map((cardData, index) => {
                return (
                  <div className="proof-card" key={index}>
                    <div className="img-container">
                      <img src={cardData.img} alt="idea" />
                    </div>
                    <h5>{cardData.title}</h5>
                  </div>)
              })
            }
          </div>

        </div>
      </div>

      {/* ================================== multi award winning toys =========================================== */}
      <div className="multi-award-winning">
        <h3>We featured in</h3>

        <div className="show-awards">
          {
            awards.map((imgUrl, index) =>
              <div className="awards-img-container" key={index}>
                <img
                  src={imgUrl}
                  alt="awards"
                />
              </div>
            )
          }
        </div>
      </div>

      {/* ================================== second banner img =========================================== */}
      <div className="second-banner-img-container"></div>

      {/* ================================== free helokitab app =========================================== */}
      <div className="free-holokitab-app">
        <div className="info-container">
          <h1>Free HoloKitab App</h1>
          <p>Once you purchase the HoloKitab Smartbooks, you’ll
            get a free lifetime access to the StartAR Smart
            Learning App. You just need to activate your books
            by one time registration and then, you can download
            it on any other smartphone. We are updating our
            digital content on a regular basis, that too for free.
            Download the free app and get started today.</p>

          <div className="show-app-platforms">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img
                src={playstoreImg}
                alt="google play store logo"
              />
            </a>

            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img
                src={appstoreImg}
                alt="app store logo"
              />
            </a>
          </div>
        </div>

        <div className="app-img-container">
          <img
            src={mobileImg}
            alt="mobile-app"
          />
        </div>
      </div>

      {/* ================================== third banner img =========================================== */}
      <div className="third-banner-img-container"></div>

      {/* ================================== video gallery =========================================== */}
      <div className="video-gallery">
        <h1>Video Gallery</h1>
        <div className="video-gallery-container">
          {
            videosUrl.map((video, index) =>
              <iframe
                key={index}
                src={video.url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            )
          }
        </div>
      </div>

      {/* ================================== parents ratings =========================================== */}
      <div className="parent-ratings-container">
        <h1>Kids, Parents & Teachers <BsFillHeartFill /> HoloKitab</h1>
        <Slider {...settings}>
          {
            ratings.map((data, index) =>
              <div key={index}>
                <div className="rating-card">
                  <div className="star-rating">
                    {displayStar(data.rate)}
                  </div>
                  <div className="rating-message">
                    <h5>{data.title}</h5>
                    <p>{data.description}</p>
                  </div>
                  <p className='name'><RiEmotionHappyLine /> {data.author}</p>
                </div>
              </div>
            )}
        </Slider>
      </div>

      {/* ================================== Frequently asked questions =========================================== */}
      <div className="frequently-asked-questions">
        <div className="heading-container">
          <h1>Frequently Asked <span>Questions!</span></h1>
          <p>We've covered all the curated questions. Please feel free to get
            in touch if you've got something else to be answered.</p>

          <div className="img-btn-cotainer">
            <img src={speakerImg} alt="speaker" />
            <button>Ask Question</button>
          </div>
        </div>

        <div className="bootstrap-accordion">
          <AccordionComponent faqs={frequenlyAskedQues} />
        </div>
      </div>

      {/* ================================== Instagram post section =========================================== */}

    </div>
  )
}

export default Home;