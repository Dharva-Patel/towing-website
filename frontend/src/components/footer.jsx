import { useState, useEffect } from "react";
import Logo from "../imgs/logo.png"
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = (props) => {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

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

    const ButtonMailto = ({ mailto, label }) => {
        return (
            <Link
                to='#'
                onClick={(e) => {
                    window.location.href = mailto;
                    e.preventDefault();
                }}
            >
                {label}
            </Link>
        );
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
                    background: `url("https://lh3.googleusercontent.com/p/AF1QipPUlmfv2LabfdLztRCEXszdeOdRXBA4QAZDinHG=s0")`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    height: '100%',
                    zIndex: -1,
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    }}
                ></div>
            </div>
            <div className="w-full h-auto text-white">
                <div className="container w-[80%] mx-auto py-12">
                    <div className={"cards " + (isLargeScreen ? "row center" : "col")}>
                        <div className={"card " + (isLargeScreen ? "w-[60%]" : "w-full text-center")} style={{ backgroundColor: "transparent", text: "white", marginRight: "10px" }}>
                            <HashLink to="/#home" smooth>
                                <img src={Logo} className={"w-[75px] h-auto " + (isLargeScreen ? "" : "center")} />
                            </HashLink>
                            <p className="mt-5">Your trusted partner for swift and secure towing solutions, delivering peace of mind with every mile.</p>
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
                        <div className={"card " + (isLargeScreen ? "w-[30%] ml-[20%]" : "w-full")} style={{ backgroundColor: "transparent", text: "white" }}>
                            <h1 className="text-3xl text-center mb-5" style={{ fontFamily: 'Fjalla One, sans-serif' }}>Quick Links</h1>
                            <div className="text-center">
                                <HashLink to={(props.from == "index" ? "#home" : "/#home")} smooth><p className="mb-2">Home</p></HashLink>
                                <HashLink to={(props.from == "index" ? "#services" : "/#services")} smooth><p className="mb-2">Services</p></HashLink>
                                <HashLink to={(props.from == "index" ? "#about" : "/#about")} smooth><p className="mb-2">About Us</p></HashLink>
                                {
                                    props.from == "index" ?
                                        <HashLink to="/contact/#contact"><p className="mb-2">Contact Us</p></HashLink> :
                                        <HashLink to="#contact" smooth><p className="mb-2">Contact Us</p></HashLink>
                                }
                            </div>
                        </div>
                        <div className={"card " + (isLargeScreen ? "w-[40%] mt-5 ml-auto mr-[0%]" : "w-full mt-5")} style={{ backgroundColor: "transparent", text: "white"}}>
                            <h1 className="text-3xl text-center mb-5" style={{ fontFamily: 'Fjalla One, sans-serif' }}>Contact Details</h1>
                            <div className="text-center">
                                <a href="tel:+16672894433"><p className="mb-2"><i className="bi bi-telephone-fill text-xl mr-2"></i>+1 667-289-4433</p></a>
                                <a href="mailto:347646aaa@gmail.com"><p className="mb-2"><i className="bi bi-envelope text-xl mr-2"></i>347646aaa@gmail.com</p></a>
                                <a href="https://www.google.com/maps/place/Rescue+Towing+Service/@38.9486366,-76.7188657,17z/data=!3m1!4b1!4m6!3m5!1s0x6f75b048215144e7:0xc5dc49f88fcd29ad!8m2!3d38.9486325!4d-76.7162908!16s%2Fg%2F11rw9d0r4_?hl=en&entry=ttu"><p className="mb-2"><i className="bi bi-geo-alt text-xl mr-2"></i>Maryland, USA</p></a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Footer;
