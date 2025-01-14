import { useState, useEffect } from "react";
import {Link} from "react-router-dom";

import {BiSolidUserCircle} from "react-icons/bi";
import Logo from "../../assets/logo.jpg";

import "./Navbar.css";

export default function Navbar(props){
    const [user, setUser] = useState();

    useEffect(() => {
        setInterval(() => {
            const user = localStorage.getItem("user");
            setUser(user);
        }, 5000)
    }, [])
    
    const logout = () => {
        localStorage.setItem("loginStatus", false);
        return localStorage.removeItem("user");
    }

    if (user){
        return(
            <nav className="navbar navbar-expand-lg">
                <div className = "container-fluid box">
                <img className = "logo" src = {Logo}></img>
                <div className="menu">
                    <ul>
                    <li><Link to = "/">Home</Link></li>
                    <li><Link to = "/view-event">View Events</Link></li>
                    <li><Link to = "/create-event">Create Event</Link></li>
                    <li><Link to = "/view-user">View Users</Link></li>
                </ul>
                </div>
                <div className = "dropdown">
                    <button className = "dropbtn">
                        <BiSolidUserCircle className="usericon admin"/>
                        {user}
                    </button>
                    <div className = "dropdown-content admin">
                      <Link to = "/edit-profile">Edit Profile</Link>
                      <Link to = "/booked-events">Booked Events</Link>
                      <Link to = "/" onClick={logout}>Logout</Link>
                    </div>
                    
                </div>
            </div>
            </nav> 
        )
    }


    else{
        return(
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid box">
                <img className = "logo" src = {Logo}></img>
                <div className="menu">
                    <ul>
                    <li><Link to = "/">Home</Link></li>
                </ul>
                </div>
                </div>
            </nav> 
        )
    }

    
    
    
}