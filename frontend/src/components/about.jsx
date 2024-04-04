import React from "react";
import { useState, useEffect } from "react";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Logo from "../imgs/logo.png"

const About = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    const buttonStyle = {
        width: "30px",
        background: 'none',
        border: '0px',
        marginLeft: isLargeScreen ? '10%' : '5%',
        marginRight: isLargeScreen ? '10%' : '5%',
        marginTop: '-10%'
    };
    
    const properties = {
        prevArrow: <button style={{ ...buttonStyle }}> <i className="bi bi-caret-left-fill text-white text-3xl"></i> </button>,
        nextArrow: <button style={{ ...buttonStyle }}> <i className="bi bi-caret-right-fill text-white text-3xl"></i> </button>
    }

    const properties2 = {
        duration: 3000,
        transitionDuration: 500,
        infinite: true,
        arrows: true,
      }

      const fadeImages = [
        {
            url: "https://lh3.googleusercontent.com/p/AF1QipMSzjOgTJfKANB6m3l3XakK-w6B9MX_n5XHl6NK=s0",
            caption: 'Slide 0'
        },
        {
          url: "https://lh3.googleusercontent.com/p/AF1QipPGqGMwtWQCupNx5ElrpQ0UvsNwi-Tj_MFWwccb=s0",
          caption: 'Slide 1'
        },
        {
          url: "https://lh3.googleusercontent.com/p/AF1QipPnjJPV46fedQhBzBzWuEMnH0mlQB1f2iM1IjgF=s0",
          caption: 'Slide 2'
        },
        {
          url: "https://lh3.googleusercontent.com/p/AF1QipPrUIMCJIXs2miYNSCcAWw7xjEDp2mKxc_FNEj0=s0",
          caption: 'Slide 3'
        },
        {
            url: "https://lh3.googleusercontent.com/p/AF1QipNc-ZtAx4xIoOvrQFTW5tHZNI-chDuswmbuc4Ji=s0",
            caption: 'Slide 4'
        },
        {
            url: "https://lh3.googleusercontent.com/p/AF1QipNoy8quM-zH-aPgsQzd734Qw3n81tdGo0O4hiAz=s0",
            caption: 'Slide 5'
        },
        {
            url: "https://lh3.googleusercontent.com/p/AF1QipPgy-7qiwx6Tk4Cop4QnTInXEKaf5lklFjWBrtB=s0",
            caption: 'Slide 6'
        },
        {
            url: "https://lh3.googleusercontent.com/p/AF1QipNtbW3WReTJUO2vw1CO9hyCJEoGyyWgg73Jnbyd=s0",
            caption: 'Slide 7'
        },
        {
            url: "https://lh3.googleusercontent.com/p/AF1QipMqSxVMGPq3M3dE3NX_cKF3WZt_ngu0-UruBprk=s0",
            caption: 'Slide 8'
        },
        {
            url: "https://lh3.googleusercontent.com/p/AF1QipOuv2J64e_-QVvOEtXdvNXljOPgxFKSCxCPsD6d=s0",
            caption: 'Slide 9'
        },
        {
            url: "https://lh3.googleusercontent.com/p/AF1QipNNB54y6m3mPjRcplGJ3ro61BHhf4Ah4fw8Q_sS=s0",
            caption: 'Slide 10'
        },
        {
            url: "https://lh3.googleusercontent.com/p/AF1QipMk8lLGMAPRnTZrtZmNSk4sKO0_Tngb3N7PmY8X=s0",
            caption: 'Slide 11'
        },
        {
            url: "https://lh3.googleusercontent.com/p/AF1QipNkukko3Yj9_aJ4VVCXATgZTDb0OU5M2MSCmIa9=s0",
            caption: 'Slide 12'
        },
        {
            url: "https://lh3.googleusercontent.com/p/AF1QipPv_MRDxMnWtWPC9C11f6Oh0k-8eiKFNYwGjzHU=s0",
            caption: 'Slide 13'
        },
        {
            url: 'https://lh3.googleusercontent.com/p/AF1QipNpBsvT7NDoJysidEm-Rts3ZEW8udYKyII9_mF4=s0',
            caption: 'Slide 14'
        },
        {
            url: "https://lh3.googleusercontent.com/p/AF1QipNXKklpVVi0zm9_2YE_cn8hBHuDbG-FRfpLFHqL=s0",
            caption: 'Slide 15'
        },
        {
            url: "https://lh3.googleusercontent.com/p/AF1QipNao8GUkLTrP3Rby6hcXzFPDgs-SgEQ6qIymVtN=s0",
            caption: 'Slide 16'
        },
        {
            url: "https://lh3.googleusercontent.com/p/AF1QipN3x42zkeQ4FukyNJJJeWrimPO1YCu-vOTqx7-x=s0",
            caption: 'Slide 17'
        },
        {
            url: "https://lh3.googleusercontent.com/p/AF1QipMPd3Y5kG4HtXjW2s9cp1sYXLj1rXwUgqP0j7YJ=s0",
            caption: "Slide 18"
        }
      ];
      
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

    return (
        <div id="about">
            <div className="w-full h-auto text-white" style={{ backgroundColor: 'rgb(22, 26, 29)' }}>
                <div className="container mx-auto py-12 md-12">
                    <div className={"flex pb-5 cards " + (isLargeScreen ? "row" : "col items-center")}>
                        <div className={"card " + (isLargeScreen ? "w-[30%]" : "w-[60%]")} style={{ backgroundColor: "rgb(22, 26, 29)", text: "white", marginRight: "20px", marginLeft: "80px", marginTop: "10px"}}>
                            <div className={isLargeScreen ? "" : "mb-[80%]"} style={{ width: "100%", height: "100%", position: "relative"}}>
                                <img src={Logo} className="w-[80%] h-auto absolute top-0 left-0"></img>
                            </div>
                        </div>
                        <div className={"card " + (isLargeScreen ? "w-[50%]" : "w-[80%] mx-auto mt-12 pr-0")} style={{ backgroundColor: "rgb(22, 26, 29)", text: "white" }}>
                            <h3 className="text-4xl" style={{ fontFamily: 'Fjalla One, sans-serif' }}>Rescue Towing Service</h3>
                            <p className="pt-5">Rescue Towing Service has been providing reliable towing and roadside assistance solutions for years. Our team of professionals is dedicated to ensuring the safety and peace of mind of our customers.
                            </p>
                            <p className="pt-5">Our services include <span className="font-bold" style={{textDecoration: "underline",}}>Heavy, Medium, and Light-duty towing</span>, flatbed towing, battery replacement, tire change, fuel supply, roadside assistance, accidents towing, jumpstart, lockout and winchout.</p>
                            <p className="pt-5">We are committed to delivering efficient and timely services to our customers, ensuring they reach their destination without delay.</p>
                            <div className="flex mt-5">
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
                    </div>
                </div>
            </div>
            <div className="slide-container pb-0" style={{backgroundColor: 'rgb(22, 26, 29)'}}>
                <h1 className="text-[50px] text-white text-bold text-center p-12 pb-0" style={{fontFamily: 'Fjalla One, sans serif'}}>Glimpse of our work</h1>
                <Fade {...properties} {...properties2}>
                    {fadeImages.map((fadeImage, index) => (
                        <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80%'}}>
                            <img style={{ maxWidth: '80%', padding: '5%', }} src={fadeImage.url} alt={fadeImage.caption} />
                        </div>
                    ))}
                </Fade>
            </div>
        </div>
    );
}

export default About;
