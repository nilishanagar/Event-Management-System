import { useState, useEffect } from "react";

import Login from "../Login/Login";
import './Home.css';

export default function Home(props){  
    // localStorage.clear();
    const [isLoggedIn, setLoggedIn] = useState("false");

    useEffect(() => {
        setInterval(() => {
            const loginStatus = localStorage.getItem("loginStatus");
            setLoggedIn(loginStatus);
        }, 5000)
        
    }, []);

    if (!isLoggedIn || isLoggedIn === "false"){
        return(
            <div className="content">
                <div>
                <h1>EventHub</h1>
                    <p className="tagline">
                        <em> ‘ Simplify ’ your Events </em>
                    </p>
                    <p className="about">
                    Discover the magic of EVENTHUB—your ultimate solution for seamless event management. Whether it's effortless sign-ups, smooth registrations, or organizing event schedules, our intuitive platform makes it all easy and efficient. Packed with powerful features, EVENTHUB takes care of the details, so you can focus on creating unforgettable experiences. Let’s turn your event vision into reality with simplicity and style!!!
                    </p>
                </div>
                
                <Login/>
            </div>
        )

    }

    else{
        return(
            <div className = "content">
                <div>
                <h1>EventHub</h1>
                    <p className="tagline">
                        <em> ‘ Simplify ’ your Events </em>
                    </p>
                    <p className="about">
                    Discover the magic of EVENTHUB—your ultimate solution for seamless event management. Whether it's effortless sign-ups, smooth registrations, or organizing event schedules, our intuitive platform makes it all easy and efficient. Packed with powerful features, EVENTHUB takes care of the details, so you can focus on creating unforgettable experiences. Let’s turn your event vision into reality with simplicity and style!!!
                    </p>
                </div>
            </div>
            
        )
    }
    
}