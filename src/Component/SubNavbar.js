import React from 'react'
import "./Subnavbar.css"
import { Link } from 'react-router-dom'
import AllCategory from './AllCategory'


const SubNavbar = () => {
    return (
        <div className=' subnav' style={{ boxShadow: "2px 2px 2px #a0acb84a", height: "60px" }}>
            <div className='container' >
                <ul className='d-flex list align-items-center ps-0'>
                    <li className="subnavlink d-flex ps-0 ms-0 align-items-center">
                        <div className="dropdown dropright">
                            <button className=' d-flex align-items-center' id="dropdownMenuButton" data-bs-toggle="dropdown" type="button" style={{ outline: "none", border: "none", backgroundColor: "white" }} >
                                <div className='btn navlink fs-5 ps-0' style={{ outline: "none", border: "none", fontWeight: "bold" }}>All Categories</div>
                                <i className='fas fa-angle-down mt-1   me-3' style={{ fontSize: "24px", cursor: "pointer" }}></i>
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{ overflow: "visible" }}>
                                <AllCategory/>
                            </div>
                        </div>
                    </li>


                    <li className="subnavlink">
                        <a className='navlink' href="#">Cars</a>
                    </li>
                    <li className="subnavlink">
                        <a className='navlink' href="#">Motorcycles</a>
                    </li>
                    <li className="subnavlink">
                        <a className="navlink" href="#">Mobile Phones</a>
                    </li>
                    <li className="subnavlink">
                        <a className="navlink" href="#">For Sale:Houses and Apartments</a>
                    </li>
                    <li className="subnavlink">
                        <a className="navlink" href="#">Scooters</a>
                    </li>
                    <li className="subnavlink">
                        <a className="navlink" href="#">Commercial & other Vehicles</a>
                    </li>
                    <li className="subnavlink">
                        <a className="navlink" href="#">For Rent:Houses and Apartments</a>
                    </li>
                </ul>
            </div>
        </div >
    )
}

export default SubNavbar
