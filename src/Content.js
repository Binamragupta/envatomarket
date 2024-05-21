import React from 'react'
import './CSS/Content.css'
import logo from './ASSETS/MotionArtEffect-logo.png'
import img1 from './ASSETS/motionarteffect-img2.png'
import img2 from './ASSETS/motionarteffect-img1.png'
import img3 from './ASSETS/motionarteffect-img3.png'
import star from './ASSETS/motionarteffect-img4.png'
import wand from './ASSETS/motionarteffect-img5.png'
import advi1 from './ASSETS/motionarteffect-img9.png'
import advi2 from './ASSETS/motionarteffect-img6.png'
import advi3 from './ASSETS/motionarteffect-img7.png'
import section from './ASSETS/motionarteffect-img11.png'
import pagei from './ASSETS/motionarteffect-img10.png'
import supportimg from './ASSETS/motionarteffect-img8.png'
import Review from './Review'
import ApplySec from './ApplySec'
import Advbox from './Advbox'

export default function Content() {
  return (
    <div className='container'>
        <div className='head'>
            <div><img src={logo} alt="" /></div>
            <div>
                <button className='purchase-button'>Purchase Now</button>
            </div>
        </div>
        <div className="content-text">
            <div className='text-area1'>
                <div className='color-text'>
                    Transform Your Website
                </div>
                <div className='text2 ma-4'>
                    With Motion Art Effect
                </div>
            </div>
            <div className='text-area2'>
                <div className='text11'>Attract Your Visitors Attention With Colorful</div>
                <div className='color-text'>Motion Art Effect</div>
                <div className='text3'>Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website.</div>
                <div className='tagline1'>Trusted by thousands of users around the world</div>
            </div>
        </div>
        <div className="reviews">
            <Review img={img1} star={star}/>
            <Review img={img2} star={star}/>
            <Review img={img3} star={star}/>
        </div>
        <div className="wand-section">
            <div className="wand-section-item1">
                <div className='wand-section-text1'>Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</div>
                <div className='wand-section-text2'>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</div>
                <div>
                    <button className='color-btn'>
                        <span className='color-btn-item'>
                            Purchase From Envanto
                        </span>
                        <span className='color-btn-item'>
                            &rarr;
                        </span>
                    </button>
                </div>
            </div>
            <div className="wand-section-item2">
                <img  className="wand-img" src={wand} alt="" />
            </div>

        </div>
        <div className='container1'>
        <div className="apply-text ">
             <div className='apply'>
             Apply On Any Section Or Enable For Whole Page
             </div>
        </div>
        </div>
        {/* div for section and page image make one single component */}
        <div className='container'>
            <div className='apply-img-area'>
            <ApplySec className="apply-img-area-item1" img={section} title="Apply On Section" con="Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website." />
            <ApplySec className="apply-img-area-item2" img={pagei} title="Apply On Page" con="Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation." />
            </div>
        </div>
        {/* supported by part */}
        <div className='support'>
            <div className="support-area">
                <div className="support-area-text1">Supported by All Popular Browsers</div>
                <div className="support-area-text2">Rest assured, Motion Art is designed to be compatible with all major web browsers.</div>
                <div><img src={supportimg} alt="" /></div>
            </div>
        </div>
        
        {/* text area about plugins */}
        <div className='plugin'>
        <div className='plugin-text'>
            <div className='plugin-text1'>An All-Round Plugin With Powerful Features</div>
            <div className='plugin-text2'>Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.</div>
        </div>
        </div>
        {/* advantage section use grid*/}
        <div className='advantage-section'>
            <Advbox className='advantage-section-item' img={advi1} head="Light Weight" title="Motion Art for Elementor is designed to be lightweight."/>
            <Advbox className='advantage-section-item' img={advi2} head="100% Responsive" title="Create a consistent visual experience across all devices."/>
            <Advbox className='advantage-section-item' img={advi3} head="User Friendly Interface" title="Ensure a smooth experience for both applicants and administrators."/>
        </div>
    </div>
  ) 
}
