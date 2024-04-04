import { useState, useEffect  } from 'react';
import Logo from "../imgs/logo.png";

const Intro = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const [openProfile, setOpenProfile] = useState(false);

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

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleMenuClose = () => {
        setIsMobileMenuOpen(false);
    };

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
        <div style={{ position: 'relative', overflow: 'hidden' }}>
            <div
                style={{
                    position: 'absolute',
                    backgroundAttachment: 'fixed',
                    marginTop: 0,
                    top: 0,
                    left: 0,
                    background: `url("https://wallpapercave.com/wp/wp2405396.jpg")`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    height: '100%',
                    zIndex: -1, // to ensure this div is behind other content
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
            <div className="w-[80%] h-auto ml-auto mr-auto text-white">
                <div className={"flex mt-[30px] w-full h-auto " + (!isLargeScreen ? "hidden" : "")}>
                    <a href="#"><i className="fi fi-brands-facebook text-[20px]"></i></a>
                    <a href="#"><i className="fi fi-brands-twitter text-[20px] ml-5"></i></a>
                    <a href="#"><i className="fi fi-brands-youtube text-[20px] ml-5"></i></a>
                    <div className="flex items-center gap-3 md:gap-5 ml-auto">
                        <i class="fi fi-rs-marker text-2xl"></i>
                        New York, USA
                        <i className="fi fi-sr-phone-call ml-10 text-2xl"></i>
                        + 564 5434 342
                    </div>
                </div>
                <hr className={"mt-[10px] border-white " +  (!isLargeScreen ? "hidden" : "")} />
                <div className="flex mt-[30px] w-full h-auto">
                    <img src={Logo} className="w-[90px] h-auto" style={{marginTop: "-20px"}}></img>
                    <div className={"flex items-center gap-3 md:gap-16 ml-auto " + (!isLargeScreen ? "hidden" : "")}>
                        <a href='#'>Home</a>
                        <a href='#'>About Us</a>
                        <a href='#'>Services</a>
                        <button style={{ border: '3px solid transparent', transition: 'border-color 0.3s ease' }} className="w-25 p-4 bg-white text-black" onMouseOver={buttonHover} onMouseOut={buttonNotHover}>
                            Contact Us
                        </button>
                    </div>
                </div>
                <div className={"mx-auto mt-40 " + (isLargeScreen ? "w-[50%]" : "w-[80%]")}>
                    <h1 style={{ fontFamily: 'Fjalla One, sans-serif' }} className="font-bold text-[50px] text-center">
                        Blazing Fast Towing is Your Solution
                    </h1>
                    <p className="text-center mt-5">
                    Looking for a quality light duty car towing or roadside assistance? Call us today! Rescue Towing Service is proud to offer 24 hour towing to Bowie and its surrounding areas!
                    </p>
                    <button style={{ border: '3px solid transparent', transition: 'border-color 0.3s ease' }} className="mx-auto center mt-5 mb-10 p-4 bg-white text-black" onMouseOver={buttonHover} onMouseOut={buttonNotHover}>
                            Contact Us
                        </button>
                </div>
            </div>
            {/* Hamburger Icon */}
            <div className={"absolute top-10 right-10 z-50 " + (isMobileMenuOpen ? "hidden " : " ") + (isLargeScreen ? "hidden" : "")}>
                <i class="fi fi-br-menu-burger text-3xl text-white" onClick={() => setOpenProfile((prev) => prev = !prev)}></i>
            </div>
            {/* Mobile Menu */}
            {/* Mobile Menu Overlay */}

            {!isLargeScreen && openProfile && (
                <div className='flex flex-col dropDownProfile'>
                    <ul className='flex flex-col gap-4'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li className='font-bold'>Contact Us</li>
                    </ul>
                </div>
            )}

        </div>
        
    );
};

export default Intro;