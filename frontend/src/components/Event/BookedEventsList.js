import { useEffect, useState } from "react";
import Axios from "axios";

import EventCard from "./EventCard";

export default function BookedEventsList(){
    const [arr, setArr] = useState([])
    const user = localStorage.getItem("user");
    useEffect(() => {
        Axios.get("https://event-management-system-backend-eyjc.onrender.com/eventRoute/check-user/" + user)

        .then((res) => {
            if(res.status === 200){
                if(res.data != null){
                    setArr(res.data.bookedEvents);
                }
            }
            else
                Promise.reject();
        })
    })

    const BookedItems = () => {
        return arr.map((val, index) => {
            return <EventCard obj = {val} action = "view"/>
        })
    }

    return(
        <div>
            <div  className="cardContainer container-fluid">
                {BookedItems()}
            </div>
        </div>
    )
    
}
