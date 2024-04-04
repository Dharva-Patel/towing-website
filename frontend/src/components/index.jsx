import About from './about';
import Insights from './insights';
import Services from './services';
import Footer from './footer';
import { useState, useEffect  } from 'react';
import Logo from "../imgs/logo.png";
import { BrowserRouter, Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";

const Index = () => {

    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const [openProfile, setOpenProfile] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        "https://lh3.googleusercontent.com/p/AF1QipMqSxVMGPq3M3dE3NX_cKF3WZt_ngu0-UruBprk=s0",
        "https://lh3.googleusercontent.com/p/AF1QipOuv2J64e_-QVvOEtXdvNXljOPgxFKSCxCPsD6d=s0",
        "https://lh3.googleusercontent.com/p/AF1QipNNB54y6m3mPjRcplGJ3ro61BHhf4Ah4fw8Q_sS=s0",
        "https://lh3.googleusercontent.com/p/AF1QipMk8lLGMAPRnTZrtZmNSk4sKO0_Tngb3N7PmY8X=s0",
        "https://lh3.googleusercontent.com/p/AF1QipNkukko3Yj9_aJ4VVCXATgZTDb0OU5M2MSCmIa9=s0",
        "https://lh3.googleusercontent.com/p/AF1QipNpBsvT7NDoJysidEm-Rts3ZEW8udYKyII9_mF4=s0",
        "https://lh3.googleusercontent.com/p/AF1QipP75uNUbxhXSj45nhXF-CUvQCTM8fXybacgKSOH=s0",
        "https://lh3.googleusercontent.com/p/AF1QipM-HpB5OUOtBFa3rrc9VWXXETgWFHVPhuVQHfhj=s0",
        "https://lh3.googleusercontent.com/p/AF1QipNao8GUkLTrP3Rby6hcXzFPDgs-SgEQ6qIymVtN=s0",
        "https://lh3.googleusercontent.com/p/AF1QipN3x42zkeQ4FukyNJJJeWrimPO1YCu-vOTqx7-x=s0"
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3500);

        return () => clearInterval(intervalId);
    }, [images.length]);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 850);
        };

        // Set initial screen size
        setIsLargeScreen(window.innerWidth > 850);

        // Add event listener to handle resize
        window.addEventListener('resize', handleResize);

        // Remove event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const buttonHover = (e) => {
        e.target.style.color = 'white';
        e.target.style.backgroundColor = 'transparent';
        e.target.style.borderColor = 'white';
    };

    const buttonNotHover = (e) => {
        e.target.style.backgroundColor = 'white';
        e.target.style.color = 'black';
    };

    return (
            <div>
                <div style={{ position: 'relative', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }} id="home">
                {images.map((image, index) => (
                    <div
                        key={index}
                        style={{
                            position: 'absolute',
                            backgroundAttachment: 'fixed',
                            marginTop: 0,
                            top: 0,
                            left: 0,
                            background: `url("${image}")`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            width: '100%',
                            height: '100%',
                            opacity: index === currentImageIndex ? 1 : 0,
                            zIndex: index === currentImageIndex ? 0 : -1, // ensure the current image is on top
                            transition: 'opacity 1s ease', // smooth transition effect
                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'rgba(0, 0, 0, 0.7)', // Adjust the last value (alpha) to control darkness
                            }}
                        ></div>
                    </div>
                ))}
                    <div className="w-[80%] h-auto ml-auto mr-auto text-white" style={{ zIndex: 1 }}>
                        <div className={"flex mt-[30px] w-full h-auto " + (!isLargeScreen ? "hidden" : "")}>
                            <a href="#"><i className="bi bi-facebook text-[20px] ml-5"></i></a>
                            <a href="#"><i className="bi bi-twitter text-[20px] ml-5"></i></a>
                            <a href="#"><i className="bi bi-youtube text-[20px] ml-5"></i></a>
                            <div className="flex items-center gap-3 ml-auto">
                                <i className="bi bi-geo-alt text-2xl"></i>
                                <a href="https://www.google.com/maps/place/Rescue+Towing+Service/@38.9486366,-76.7188657,17z/data=!3m1!4b1!4m6!3m5!1s0x6f75b048215144e7:0xc5dc49f88fcd29ad!8m2!3d38.9486325!4d-76.7162908!16s%2Fg%2F11rw9d0r4_?hl=en&entry=ttu" className='mr-3'> Maryland, USA </a>
                                <i className="bi bi-telephone-fill text-xl"></i><a href="tel:+16672894433">+1 667-289-4433</a>
                            </div>
                        </div>
                        <hr className={"mt-[10px] border-white " +  (!isLargeScreen ? "hidden" : "")} />
                        <div className="flex mt-[30px] w-full h-auto">
                            <HashLink to="#home"><img src={Logo} className="w-[90px] h-auto" style={{marginTop: "-20px"}}></img></HashLink>
                            <div className={"flex items-center gap-3 md:gap-16 ml-auto " + (!isLargeScreen ? "hidden" : "")}>
                                <HashLink to="#home" smooth>Home</HashLink>
                                <HashLink to="#about" smooth>About Us</HashLink>
                                <HashLink to="#services" smooth>Services</HashLink>
                                <Link to="/contact">
                                    <button style={{ border: '3px solid transparent', transition: 'border-color 0.3s ease' }} className="w-25 p-4 bg-white text-black" onMouseOver={buttonHover} onMouseOut={buttonNotHover}>
                                        Contact Us
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className={"mx-auto mt-40 " + (isLargeScreen ? "w-[50%]" : "w-[80%]")}>
                            <h1 style={{ fontFamily: 'Fjalla One, sans-serif' }} className="font-bold text-[50px] text-center">
                                Blazing Fast Towing is Your Solution
                            </h1>
                            <p className="text-center mt-5">
                            Looking for a quality light duty car towing or roadside assistance? Call us today! Rescue Towing Service is proud to offer 24 hour towing to <span className='font-bold'>Bowie</span> and its surrounding areas!
                            </p>
                            <Link to="/contact">
                                <button style={{ border: '3px solid transparent', transition: 'border-color 0.3s ease' }} className="mx-auto center mt-5 mb-10 p-4 bg-white text-black" onMouseOver={buttonHover} onMouseOut={buttonNotHover}>
                                    Contact Us
                                </button>
                            </Link>
                        </div>
                    </div>
                    {/* Hamburger Icon */}
                    <div className={"absolute top-10 right-10 z-50 " + (isLargeScreen ? "hidden" : "")}>
                        <i className="fi fi-br-menu-burger text-3xl text-white" onClick={() => setOpenProfile((prev) => prev = !prev)}></i>
                    </div>
                    {/* Mobile Menu */}
                    {/* Mobile Menu Overlay */}

                    {!isLargeScreen && openProfile && (
                        <div className='flex flex-col dropDownProfile' style={{zIndex:2}}>
                            <ul className='flex flex-col gap-4'>
                                <HashLink to="/" smooth onClick={() => {setOpenProfile(!openProfile)}}>Home</HashLink>
                                <HashLink to="#about" smooth onClick={() => {setOpenProfile(!openProfile)}}>About Us</HashLink>
                                <HashLink to="#services" smooth onClick={() => {setOpenProfile(!openProfile)}}>Services</HashLink>
                                <HashLink to="/contact" className="font-bold" onClick={() => {setOpenProfile(!openProfile)}}>Contact Us</HashLink>
                            </ul>
                        </div>
                    )}
                </div>
                <Insights />
                <Services />
                <About />
                <Footer from="index" />
            </div>
        );
    }

export default Index;