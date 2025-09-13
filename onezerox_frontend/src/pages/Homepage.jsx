import React, { useEffect, useState, useRef } from 'react'
import './homepage.css'
import NaviBar from '../component/NaviBar'
import Footer from '../component/Footer'
import bgVideo from '../videos/background.mp4';
import Service from '../component/Service';
import Tec from '../component/Tec';
import Teamm from '../component/Teamm';
import { Link} from 'react-router-dom';

const messages = [
  "Our Goal is <br/>Customer Satisfaction",
  "Innovating <br/>Digital Solutions",
  "Empowering <br/>Your Business",
  "Building the <br/>Future Together"
]


function Homepage() {
  const [current, setCurrent] = useState(0)
  const [fade, setFade] = useState(true);
  const videoRef = useRef(null);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  // Text animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent(prev => (prev + 1) % messages.length);
        setFade(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Scroll-controlled video effect
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateVideoTime = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.min(scrollTop / documentHeight, 1);
      
      // Update video time based on scroll position
      if (video.duration) {
        video.currentTime = scrollPercent * video.duration;
      }
      
      lastScrollY.current = scrollTop;
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(updateVideoTime);
        ticking.current = true;
      }
    };

    // Wait for video metadata to load
    const onLoadedMetadata = () => {
      video.pause(); // Ensure video is paused for scroll control
      updateVideoTime(); // Set initial position
    };

    video.addEventListener('loadedmetadata', onLoadedMetadata);
    window.addEventListener('scroll', onScroll, { passive: true });

    // Initial setup
    if (video.readyState >= 1) {
      onLoadedMetadata();
    }

    return () => {
      video.removeEventListener('loadedmetadata', onLoadedMetadata);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <NaviBar/>
      <main className='mainhome'>
        <video
          ref={videoRef}
          className="bg-video"
          src={bgVideo}
          muted
          playsInline
          preload="auto"
          style={{ willChange: 'transform' }}
        />
        <div className='para'>
          <h1
            className={`animated-heading ${fade ? 'fade-in' : 'fade-out'}`}
            dangerouslySetInnerHTML={{ __html: messages[current] }}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>

          <Link to='/contact'>
          <button style={{
            backgroundColor:'rgb(0, 255, 30)',
            padding:'10px 40px',
            borderRadius:'30px',
            textAlign:'center',
            color:'white',
            marginBottom:'20px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: '500',
            transition: 'transform 0.2s ease'
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          className='cbotn'
          >
            Contact
          </button>
          </Link>
        </div>
      </main>
      <Service/>
      <Tec/>
      <Teamm/>
      <Footer/>
    </>
  )
}

export default Homepage