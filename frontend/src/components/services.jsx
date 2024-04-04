import { useState, useEffect } from "react";
import HeavyTowing from "../imgs/heavy-towing.png"
import MediumTowing from "../imgs/medium-towing.png"
import LightTowing from "../imgs/light-towing.png"
import TowingTruck from "../imgs/towing-truck-1.png"
import CarBattery from "../imgs/car-battery.png"
import CarFuel from "../imgs/car-fuel.png"
import Tyre from "../imgs/tyre.png"
import CarJack from "../imgs/car-jack.png"
import JumpStart from "../imgs/jump-start.png"
import LockOut from "../imgs/lock-out.png"
import WinchOut from "../imgs/winch-out.png"

const Services = () => {

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

    return (
        <div id="services">
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
                            backgroundColor: 'rgba(0, 0, 0, 0.8)', // Adjust the last value (alpha) to control darkness
                        }}
                    ></div>
                    
                </div>
                <div className={"mx-auto " + (isLargeScreen ? "w-[40%] p-8" : "w-[80%]")}>
                    <h1 className="text-center my-12 text-4xl" style={{fontFamily: 'Fjalla One, sans-serif', color: 'white'}}>We Provide the Best Service</h1>
                    <p className="text-center text-white mb-12 pb-12">Discover our comprehensive range of reliable towing and roadside assistance services designed to ensure your safety and convenience on the road.</p>
                </div>
            </div>
            <div style={{backgroundColor: 'rgb(22, 26, 29)'}}>
                <div className="w-full h-auto text-white">

                    <div className="container w-[80%] mx-auto">
                        <div className={"cards " + (isLargeScreen ? "row" : "col w-full")}>

                            <div className={"card " + (isLargeScreen ? "w-[33%]" : "w-full")} style={{backgroundColor: "rgb(102,7,8)", marginTop: "-5%"}}>
                                <div className="icon-container flex justify-center items-center">
                                <img src={HeavyTowing} className="w-[100px] m-5"></img>
                                </div>
                                <h3 className="text-2xl text-center" style={{fontFamily: 'Fjalla One, sans-serif'}}>Heavy Duty Towing</h3>
                                <p className="text-center mt-5">Our heavy-duty towing service specializes in the safe and efficient transport of large vehicles, such as trucks, buses, and RVs.</p>
                            </div>
                            <div className={"card " + (isLargeScreen ? "w-[33%]" : "w-full")} style={{backgroundColor: "rgb(102,7,8)", marginTop: isLargeScreen ? "-5%" : ""}}>
                                <div className="icon-container flex justify-center items-center">
                                <img src={MediumTowing} className="w-[100px] m-7"></img>
                                </div>
                                <h3 className="text-2xl text-center" style={{fontFamily: 'Fjalla One, sans-serif'}}>Medium Duty Towing</h3>
                                <p className="text-center mt-5">Our medium-duty towing service caters to vans, SUVs, and small trucks, offering reliable assistance for various roadside issues.</p>
                            </div>
                            <div className={"card " + (isLargeScreen ? "w-[33%]" : "w-full")} style={{backgroundColor: 'rgb(102,7,8)', marginTop: isLargeScreen ? "-5%" : ""}}>
                                <div className="icon-container flex justify-center items-center">
                                <img src={LightTowing} className="w-[100px] m-6"></img>
                                </div>
                                <h3 className="text-2xl text-white text-center" style={{fontFamily: 'Fjalla One, sans-serif'}}>Light Duty Towing</h3>
                                <p className="text-center text-white mt-5">Our light-duty towing service is tailored to cars, motorcycles, and other small vehicles. Whether its any problem, we are there to help you.</p>
                            </div>
                        </div>
                        
                    </div>

                </div>

                <div className="w-full h-auto text-white">

                    <div className="container w-[80%] mx-auto">
                        <div className={"cards " + (isLargeScreen ? "row" : "col w-full")}>

                            <div className={"card " + (isLargeScreen ? "w-[33%]" : "w-full")} style={{backgroundColor: "white"}}>
                                <div className="icon-container flex justify-center items-center">
                                    <img src={TowingTruck} className="w-[100px] m-5"></img>
                                </div>
                                <h3 className="text-2xl text-black text-center" style={{fontFamily: 'Fjalla One, sans-serif'}}>flatbed Towing Service</h3>
                                <p className="text-center text-black mt-5">Ensure safe transport for your vehicle, guaranteed by our expert team, providing peace of mind on the road.</p>
                            </div>
                            <div className={"card " + (isLargeScreen ? "w-[33%]" : "w-full")} style={{backgroundColor: "white"}}>
                                <div className="icon-container flex justify-center items-center">
                                    <img src={CarBattery} className="w-[100px] m-5"></img>
                                </div>
                                <h3 className="text-2xl text-black text-center" style={{fontFamily: 'Fjalla One, sans-serif'}}>Battery Replacement</h3>
                                <p className="text-center text-black mt-5">Get reliable battery replacements on the go, whenever you need them, ensuring you reach your destination without delay.</p>
                            </div>
                            <div className={"card " + (isLargeScreen ? "w-[33%]" : "w-full")} style={{backgroundColor: 'white'}}>
                                <div className="icon-container flex justify-center items-center">
                                    <img src={Tyre} className="w-[60px] m-5"></img>
                                </div>
                                <h3 className="text-2xl text-black text-center" style={{fontFamily: 'Fjalla One, sans-serif'}}>Tyre Change</h3>
                                <p className="text-center text-black mt-5">Quick tire changes to keep you on the move, with minimal downtime and efficient service to get you back on the road.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="w-full h-auto text-white">

                    <div className="container w-[80%] mx-auto">
                        <div className={"cards " + (isLargeScreen ? "row" : "col w-full")}>

                            <div className={"card " + (isLargeScreen ? "w-[33%]" : "w-full")} style={{backgroundColor: "white"}}>
                                <div className="icon-container flex justify-center items-center">
                                    <img src={JumpStart} className="w-[100px] m-5"></img>
                                </div>
                                <h3 className="text-2xl text-black text-center" style={{fontFamily: 'Fjalla One, sans-serif'}}>JumpStart</h3>
                                <p className="text-center text-black mt-5">Need a quick boost for your vehicle's battery? Our JumpStart service is here to help. We'll get you back on the road in no time.</p>
                            </div>
                            <div className={"card " + (isLargeScreen ? "w-[33%]" : "w-full")} style={{backgroundColor: "white"}}>
                                <div className="icon-container flex justify-center items-center">
                                    <img src={LockOut} className="w-[100px] m-5"></img>
                                </div>
                                <h3 className="text-2xl text-black text-center" style={{fontFamily: 'Fjalla One, sans-serif'}}>LockOut</h3>
                                <p className="text-center text-black mt-5">Locked out of your vehicle? Our LockOut service provides fast and reliable assistance to help you regain access to your car.</p>
                            </div>
                            <div className={"card " + (isLargeScreen ? "w-[33%]" : "w-full")} style={{backgroundColor: 'white'}}>
                                <div className="icon-container flex justify-center items-center">
                                    <img src={WinchOut} className="w-[100px] m-5 mb-10"></img>
                                </div>
                                <h3 className="text-2xl text-black text-center" style={{fontFamily: 'Fjalla One, sans-serif'}}>WinchOut</h3>
                                <p className="text-center text-black mt-5">Stuck in a tough spot? Our WinchOut service is here to rescue you. We'll safely tow your vehicle out of any difficult situation.</p>
                            </div>
                        </div>
                    </div>
                </div> 

                <div className="w-full h-auto text-white">

                    <div className="container w-[80%] mx-auto">
                        <div className={"cards " + (isLargeScreen ? "row" : "col w-full")}>

                            <div className={"card " + (isLargeScreen ? "w-[33%]" : "w-full")} style={{backgroundColor: "white", marginBottom: isLargeScreen ? "5%" : ""}}>
                                <div className="icon-container flex justify-center items-center">
                                    <img src={CarFuel} className="w-[100px] m-5"></img>
                                </div>
                                <h3 className="text-2xl text-black text-center" style={{fontFamily: 'Fjalla One, sans-serif'}}>Fuel Supply</h3>
                                <p className="text-center text-black mt-5">Emergency fuel delivery wherever you are stranded, ensuring you stay on track and reach your destination safely, no matter the circumstances.</p>
                            </div>
                            <div className={"card " + (isLargeScreen ? "w-[33%]" : "w-full")} style={{backgroundColor: "white", marginBottom: isLargeScreen ? "5%" : ""}}>
                                <div className="icon-container flex justify-center items-center">
                                    <img src={CarJack} className="w-[100px] m-5"></img>
                                </div>
                                <h3 className="text-2xl text-black text-center" style={{fontFamily: 'Fjalla One, sans-serif'}}>RoadSide Assistance</h3>
                                <p className="text-center text-black mt-5">Prompt help for any roadside emergencies, providing immediate support and assistance for your convenience when you need it most.</p>
                            </div>
                            <div className={"card " + (isLargeScreen ? "w-[33%]" : "w-full")} style={{backgroundColor: 'white', marginBottom: "5%"}}>
                                <div className="icon-container flex justify-center items-center">
                                    <img src={TowingTruck} className="w-[100px] m-5"></img>
                                </div>
                                <h3 className="text-2xl text-black text-center" style={{fontFamily: 'Fjalla One, sans-serif'}}>Accidents Towing</h3>
                                <p className="text-center text-black mt-5">Professional towing services after accidents, available 24/7 for your convenience, ensuring your vehicle is handled with care and transported safely.</p>
                            </div>
                        </div>
                    </div>
                </div>        

            </div>
        </div>
    );
}

export default Services;