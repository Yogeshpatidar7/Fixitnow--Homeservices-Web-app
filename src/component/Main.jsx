import {React,   } from "react"
import { Link } from "react-router-dom"
import Booking from "./Booking"


function Main() {
    return (
        <>
        <div className="main-container service-container">
            <p id="heading">Our Services</p>
                <div className="grid text-center second-section" >
                    <div className="g-col-6 g-col-md-4">
                        <div className="card" style={{width: "18rem" }} >
                        <img src="./Assets/img/Carpenter2.jpg"  className="card-img-top" alt="logo"/>
                            <div className="card-body">
                                <h5 className="card-title">Carpenter</h5>
                                <p className="card-text">Construct, install, and repair a variety of residential, commercial, and fixtures</p>
                                <Link to="/Booking" state={{ service: "carpenter" }} className="btn" id="btn-primary">Book now</Link>
                            </div>
                        </div>
                    </div>

                    <div className="g-col-6 g-col-md-4">
                        <div className="card" style={{width: "18rem" }} >
                            <img src="./Assets/img/Plumber2.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Plumber</h5>
                                <p className="card-text"> Install and repair pipes and fixtures that carry water, gas, or other fluids in homes and businesses</p>
                                <Link to="/Booking" state={{ service: "plumber" }} className="btn" id="btn-primary">Book now</Link>
                            </div>
                        </div>
                    </div>

                    <div className="g-col-6 g-col-md-4">
                        <div className="card" style={{width: "18rem" }} >
                            <img src="./Assets/img/Painter2.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Painter</h5>
                                <p className="card-text">Apply paint, stain, and coatings to walls or ceilings</p>
                                <Link to="/Booking" state={{ service: "painter" }} className="btn" id="btn-primary">Book now</Link>
                            </div>
                        </div>
                    </div>

                    <div className="g-col-6 g-col-md-4">
                        <div className="card" style={{width: "18rem" }} >
                            <img src="./Assets/img/Electrician2.avif" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Electrician</h5>
                                <p className="card-text"> Installs, maintains, and repairs electrical systems in buildings and structures.</p>
                                <Link to="/Booking" state={{ service: "electrician" }} className="btn" id="btn-primary">Book now</Link>
                            </div>
                        </div>
                    </div>

                    <div className="g-col-6 g-col-md-4">
                        <div className="card" style={{width: "18rem" }} >
                            <img src="./Assets/img/Mechanic.2.webp" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Meachanic</h5>
                                <p className="card-text"> Fixes vehicles and replaces their parts for customers.</p>
                                <Link to='/Booking' state={{ service: "mechanic" }} className="btn" id="btn-primary">Book now</Link>
                            </div>
                        </div>
                    </div>

                    <div className="g-col-6 g-col-md-4">
                        <div className="card" style={{width: "18rem" }} >
                            <img src="./Assets/img/salon2.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Salon</h5>
                                <p className="card-text">A place where people have their hair cut or coloured, or have beauty treatments</p>
                                <Link to="/Booking" state={{ service: "salon" }} className="btn" id="btn-primary">Book now</Link>
                            </div>
                        </div>
                    </div>

                    <div className="g-col-6 g-col-md-4">
                        <div className="card" style={{width: "18rem" }} >
                            <img src="./Assets/img/AC2.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">AC & Appliances Repair</h5>
                                <p className="card-text">Repairing leaks,cleaning or replacing air filters, and ensuring proper airflow</p>
                                <Link to="/Booking" state={{ service: "acappliance" }} className="btn" id="btn-primary">Book now</Link>
                            </div>
                        </div>
                    </div>

                    <div className="g-col-6 g-col-md-4">
                        <div className="card" style={{width: "18rem" }} >
                            <img src="./Assets/img/CL.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Cleaning</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/Booking" state={{ service: "cleaning" }} className="btn" id="btn-primary">Book now</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Main