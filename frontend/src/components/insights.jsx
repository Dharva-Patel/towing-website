import { useState, useEffect } from "react";

const Insights = () => {

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


    return(
        <div id="insights">

            <div className="w-full h-auto text-white" style={{backgroundColor: 'rgb(102,7,8)'}}>

                <div className="container w-[80%] mx-auto py-12">
                    <div className={"cards " + (isLargeScreen ? "row" : "col")}>
                        <div className={"card " + (isLargeScreen ? "w-[60%]" : "")} style={{backgroundColor: "rgb(102,7,8)", text: "white", marginRight: "10px"}}>
                            <h2 style={{fontFamily: 'Fjalla One, sans-serif' }} className="font-bold mt-7 text-4xl text-center">
                                Trust Your Tow to Us
                            </h2>
                            <p className="mt-5 text-center">At Rescue Towing, we understand the urgency of vehicle breakdowns. Trust our experienced team to provide reliable towing services.</p>
                        </div>
                        <div className="card" style={{backgroundColor: "rgb(22, 26, 29)", text: "white"}}>
                            <div className="icon-container flex justify-center items-center">
                                <i className="bi bi-clock-history text-4xl p-5"></i>
                            </div>
                            <h3 className="text-2xl text-center" style={{fontFamily: 'Fjalla One, sans-serif'}}>24/7 Towing Service</h3>
                            <p className="text-center mt-5">Our towing services are available round the clock, 24/7.</p>
                        </div>
                        <div className="card" style={{backgroundColor: "white"}}>
                            <div className="icon-container flex justify-center items-center">
                                <i className="bi bi-shield-check text-4xl p-5 text-black"></i>
                            </div>
                            <h3 className="text-2xl text-black text-center" style={{fontFamily: 'Fjalla One, sans-serif'}}>Satisfaction Guaranteed</h3>
                            <p className="text-center text-black mt-5">Your satisfaction is Guaranteed by our team of experts.</p>
                        </div>
                        <div className="card" style={{backgroundColor: "white"}}>
                            <div className="icon-container flex justify-center items-center">
                                <i className="bi bi-person-check text-4xl p-5 text-black"></i>
                            </div>
                            <h3 className="text-2xl text-black text-center" style={{fontFamily: 'Fjalla One, sans-serif'}}>Professional</h3>
                            <p className="text-center text-black mt-5">Our Professional team ensures to deliver great services</p>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
}

export default Insights;