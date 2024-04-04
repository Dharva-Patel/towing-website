import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../imgs/logo.png"
import { HashLink } from "react-router-hash-link";
import { Toaster, toast } from "react-hot-toast";
import Footer from "./footer";
import 'react-phone-number-input/style.css'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import axios from 'axios';

const Contact = () => {

    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const [openProfile, setOpenProfile] = useState(false);
    const [PhoneNumber, setPhoneNumber] = useState();
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
        }, 7000);

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

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contactNumber: ''
    });
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!emailRegex.test(formData.email)) { 
            toast.error("Enter valid Email");
            return;
        }
        if(!isValidPhoneNumber(formData.contactNumber)) {
            toast.error("Enter valid Phone Number");
            return;
          }
        let loadingToast = toast.loading('Submitting the Form...');
        try {
            await axios.post( import.meta.env.VITE_SERVER_DOMAIN + "/submit", formData);
            toast.dismiss(loadingToast);
            toast.success('Form submitted successfully!');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                contactNumber: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error('An error occurred while submitting the form.');
        }
    };

    const handlePhoneNumber = (value) => {
        setPhoneNumber(value);
        setFormData({ ...formData, contactNumber: value });
    };

    return (
            <div>
                <div style={{ position: 'relative', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }} id="contact">
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
                    <div className="w-[80%] h-auto ml-auto mr-auto text-white" style={{zIndex: 1}}>
                        <div className={"flex mt-[30px] w-full h-auto " + (!isLargeScreen ? "hidden" : "")}>
                            <a href="#"><i className="bi bi-facebook text-[20px] ml-5"></i></a>
                            <a href="#"><i className="bi bi-twitter text-[20px] ml-5"></i></a>
                            <a href="#"><i className="bi bi-youtube text-[20px] ml-5"></i></a>
                            <div className="flex items-center gap-3 ml-auto">
                                <i className="bi bi-geo-alt text-2xl"></i>
                                <a href="https://www.google.com/maps/place/Rescue+Towing+Service/@38.9486366,-76.7188657,17z/data=!3m1!4b1!4m6!3m5!1s0x6f75b048215144e7:0xc5dc49f88fcd29ad!8m2!3d38.9486325!4d-76.7162908!16s%2Fg%2F11rw9d0r4_?hl=en&entry=ttu" className="mr-3"> Maryland, USA </a>
                                <i className="bi bi-telephone-fill text-xl"></i>
                                <a href="tel:+16672894433">+1 667-289-4433</a>
                            </div>
                        </div>
                        <hr className={"mt-[10px] border-white " +  (!isLargeScreen ? "hidden" : "")} />
                        <div className="flex mt-[30px] w-full h-auto">
                            <HashLink to="/"><img src={Logo} className="w-[90px] h-auto" style={{marginTop: "-20px"}}></img></HashLink>
                            <div className={"flex items-center gap-3 md:gap-16 ml-auto " + (!isLargeScreen ? "hidden" : "")}>
                                <HashLink to="/#home" smooth>Home</HashLink>
                                <HashLink to="/#about" smooth>About Us</HashLink>
                                <HashLink to="/#services" smooth>Services</HashLink>
                                <HashLink to="/contact">
                                    <button style={{ border: '3px solid transparent', transition: 'border-color 0.3s ease' }} className="w-25 p-4 bg-white text-black" onMouseOver={buttonHover} onMouseOut={buttonNotHover}>
                                        Contact Us
                                    </button>
                                </HashLink>
                            </div>
                        </div>
                        <div className={"mx-auto my-40 " + (isLargeScreen ? "w-[50%]" : "w-[80%]")}>
                            <h1 style={{ fontFamily: 'Fjalla One, sans-serif' }} className="font-bold text-[50px] text-center">
                                Contact Us
                            </h1>
                            <p className="text-center mt-5">
                            Looking for a quality light duty car towing or roadside assistance? Call us today! Rescue Towing Service is proud to offer 24 hour towing to Bowie and its surrounding areas!
                            </p>
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
                                <HashLink to="/#home" smooth onClick={() => {setOpenProfile(!openProfile)}}>Home</HashLink>
                                <HashLink to="/#about" smooth onClick={() => {setOpenProfile(!openProfile)}}>About Us</HashLink>
                                <HashLink to="/#services" smooth onClick={() => {setOpenProfile(!openProfile)}}>Services</HashLink>
                                <HashLink to="/contact" className="font-bold" onClick={() => {setOpenProfile(!openProfile)}}>Contact Us</HashLink>
                            </ul>
                        </div>
                    )}
                </div>

                <div>

                    <div className="w-full h-auto text-white" style={{backgroundColor: 'rgb(102,7,8)'}}>

                        <div className="container w-[80%] mx-auto py-12">
                            <div className={"cards " + (isLargeScreen ? "row" : "col")}>
                                <div className={"card " + (isLargeScreen ? "w-[60%]" : "")} style={{backgroundColor: "rgb(102,7,8)", text: "white", marginRight: "10px"}}>
                                    <h2 style={{fontFamily: 'Fjalla One, sans-serif' }} className="font-bold mt-7 text-4xl text-center">
                                        Get In Touch
                                    </h2>
                                    <p className="mt-5 text-center">Don't hesitate to reach out to us. We're here to assist you with all your towing needs.</p>
                                </div>
                                <div className="card" style={{backgroundColor: "rgb(22, 26, 29)", text: "white"}}>
                                    <div className="icon-container flex justify-center items-center">
                                        <i class="bi bi-telephone text-4xl p-5"></i>
                                    </div>
                                    <a href="tel:+16672894433"><h3 className="text-2xl text-center" style={{fontFamily: 'Fjalla One, sans-serif'}}>+1 667-289-4433</h3></a>
                                    <p className="text-center mt-5">Feel free to call us anytime. We are available to assist you.</p>
                                </div>
                                <div className="card" style={{backgroundColor: "white"}}>
                                    <div className="icon-container flex justify-center items-center">
                                        <i className="bi bi-envelope text-4xl p-5" style={{color: 'rgb(102,7,8)'}}></i>
                                    </div>
                                    <a href="mailto:347646aaa@gmail.com"><h3 className="text-2xl text-black text-center" style={{fontFamily: 'Fjalla One, sans-serif'}}>347646aaa@gmail.com</h3></a>
                                    <p className="text-center text-black mt-5">Any inquiries? Mail us and we'll get back to you shortly.</p>
                                </div>
                                <div className="card" style={{backgroundColor: "white"}}>
                                    <div className="icon-container flex justify-center items-center">
                                        <i className="bi bi-geo-alt text-4xl p-5" style={{color: 'rgb(102,7,8)'}}></i>
                                    </div>
                                    <a href="https://www.google.com/maps/place/Rescue+Towing+Service/@38.9486366,-76.7188657,17z/data=!3m1!4b1!4m6!3m5!1s0x6f75b048215144e7:0xc5dc49f88fcd29ad!8m2!3d38.9486325!4d-76.7162908!16s%2Fg%2F11rw9d0r4_?hl=en&entry=ttu"><h3 className="text-2xl text-black text-center" style={{fontFamily: 'Fjalla One, sans-serif'}}>Maryland, USA</h3></a>
                                    <p className="text-center text-black mt-5">Visit our location in Maryland, USA. Find the location below</p>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>

                <div className="w-full h-auto text-white" style={{ backgroundColor: 'rgb(22, 26, 29)' }}>
                    
                    <div className="container w-[80%] mx-auto py-12">

                        <div className={"cards " + (isLargeScreen ? "row" : "col")}>
                            
                            <div className={"card " + (isLargeScreen ? "w-[60%] mr-[50px] mt-[50px]" : "w-full text-center")} style={{backgroundColor: "transparent", text: "white"}}>
                                <h1 style={{ fontFamily: 'Fjalla One, sans-serif', marginTop: isLargeScreen ? '100px' : '0' }} className="font-bold text-[50px]">Connect With Us</h1>
                                <p className={"my-5 " + (isLargeScreen ? "w-[80%]" : "")}>Looking for a quality light duty car towing or roadside assistance? Call us today! Rescue Towing Service is proud to offer 24 hour towing to Bowie and its surrounding areas!
                                </p>
                                <p className={"my-5 " + (isLargeScreen ? "w-[80%]" : "")}>
                                    Fill Out the the Form In order to get a mail from us containing the all the information you need.
                                </p>
                                <div className={"flex mt-5 " + (isLargeScreen ? "" : "justify-center")}>
                                    <div className="flex w-12 h-12 justify-center items-center mr-2" style={{ backgroundColor: 'rgb(59, 89, 152)' }}>
                                        <a href="#"><i className="bi bi-facebook text-2xl text-center"></i></a>
                                    </div>
                                    <div className="flex w-12 h-12 justify-center items-center mr-2" style={{ backgroundColor: 'rgb(29, 161, 242)' }}>
                                        <a href="#"><i className="bi bi-twitter text-2xl text-center"></i></a>
                                    </div>
                                    <div className="flex w-12 h-12 justify-center items-center mr-2" style={{ backgroundColor: 'rgb(205, 32, 31)' }}>
                                        <a href="#"><i className="bi bi-youtube text-2xl text-center"></i></a>
                                    </div>
                                </div>
                            </div>

                                <Toaster /> 
                                <div class={"text-black contactForm " + (isLargeScreen ? "w-[40%]" : "w-full mt-10")}>
                                    <form method="POST" onSubmit={handleSubmit}>
                                        <h2>Send Message</h2>
                                        <div class="inputBox">
                                            <input htmlFor="firstName" type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required/>
                                            <span>First Name</span>
                                        </div>
                                        <div class="inputBox">
                                            <input htmlFor="lastName" type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                                            <span>Last Name</span>
                                        </div>
                                        <div class="inputBox">
                                            <input htmlFor="email" type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                                            <span>Email</span>
                                            <div class="text-danger" id="emailerror"></div>
                                        </div>
                                        <div class="inputBox">

                                            <PhoneInput htmlFor="contactNumber" id="contactNumber" name="contactNumber" value={formData.contactNumber} placeholder="Contact Number" onChange={handlePhoneNumber} defaultCountry="US" international required/>
                                            
                                        </div>
                                        <div class="inputBox">
                                            <input type="submit" name="" value="submit" />
                                        </div>
                                    </form>
                                </div>

                        </div>

                    </div>
                    <h1 className="text-[50px] font-bold my-3 text-center" style={{fontFamily: 'Fjalla One, sans-serif'}}>Found Us Here</h1>
                    <div className="py-5">
                        <div className={"mx-auto my-10 border-[10px] border-[rgb(102,7,8)] " + (isLargeScreen ? "w-[60%] h-[500px]" : "w-[80%] h-[400px]")}>
                            <iframe
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight="0"
                                marginWidth="0"
                                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=16503c%20Governor%20Bridge%20Rd%20Apt%20107,%20Bowie,%20MD%2020716,%20United%20States+(Rescue%20Towing%20Service)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                            </iframe>
                        </div>
                    </div>

                </div>

                

                <Footer from="contact"/>
            </div>
    );
}

export default Contact;