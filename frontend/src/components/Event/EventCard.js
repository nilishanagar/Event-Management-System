import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Axios from "axios";
import "./Events.css";

function EventCard(props) {
    const navigate = useNavigate();

    // Extracting event details from props.obj
    const {
        _id = "",
        name = "Unknown Event",
        date = "",
        place = "Unknown Place",
        club = "Unknown Club",
        description = "No description available",
        slots = 0,
        startTime = "00:00",
        endTime = "00:00",
        registeredUsers = [],
    } = props.obj || {};

    // Defensive check for `date`
    const year = date ? date.slice(0, 4) : "0000";
    const month = date ? date.slice(5, 7) : "00";
    const day = date ? date.slice(8, 10) : "00";

    const user = localStorage.getItem("user"); // Get current user

    // Function to book event
    const Book = () => {
        Axios.get("http://localhost:4000/eventRoute/check-user/" + user)
            .then((res) => {
                if (res.status === 200) {
                    if (res.data != null) {
                        const check = res.data.bookedEvents.some((e) => e._id === props.obj._id);
                        if (check) {
                            alert("Event already registered");
                        } else if (slots === 0) {
                            alert("Slots Full! Cannot register");
                        } else {
                            // Data for user and event updates
                            const userData = res.data;
                            userData.bookedEvents = [
                                ...userData.bookedEvents,
                                { _id, name, date, place, club, description, startTime, endTime },
                            ];

                            const eventData = props.obj;
                            eventData.slots -= 1;
                            eventData.registeredUsers = [
                                ...eventData.registeredUsers,
                                {
                                    username: user,
                                    fullName: res.data.fullName,
                                    email: res.data.email,
                                    phone: res.data.phone,
                                },
                            ];

                            Axios.all([
                                Axios.put(
                                    "http://localhost:4000/eventRoute/update-user/" + res.data._id,
                                    userData
                                )
                                    .then((updateResponse) => {
                                        if (updateResponse.status === 200) alert("Event Booked");
                                        else Promise.reject();
                                    })
                                    .catch((updateError) => alert(updateError)),

                                Axios.put(
                                    "http://localhost:4000/eventRoute/update-event/" + _id,
                                    eventData
                                )
                                    .then((eventUpdateResponse) => {
                                        if (eventUpdateResponse.status === 200) {
                                            console.log("Slot count reduced");
                                        } else Promise.reject();
                                    })
                                    .catch((eventUpdateError) => alert(eventUpdateError)),
                            ]);
                        }
                    }
                } else Promise.reject();
            })
            .catch((err) => alert(err));
    };



    const [desc, setDescription] = useState(
        <Card.Text style={{ fontSize: "1.75vw", fontWeight: "bolder" }}>
            Date: {day}-{month}-{year}
            <br />
            Time: {startTime} to {endTime}
            <br />
            Place: {place}
            <br />
            Slots Left: {slots}
        </Card.Text>
    );

    const [actionButton, setActionButton] = useState();

    useEffect(() => {
        if (props.action === "book") {
            setActionButton(
                <button
                    className="cardButton"
                    style={{ backgroundColor: "greenyellow" }}
                    onClick={Book}
                >
                    Book Now!
                </button>
            );
        } else if (props.action === "view") {
            setActionButton();
        }

        if (user === "admin") {
            setActionButton(
                <div>
                    <button
                        className="cardButton"
                        style={{ backgroundColor: "#ff7200" }}
                        onClick={() => console.log("View Registered Users")}
                    >
                        Registered Users
                    </button>
                    <button
                        className="cardButton"
                        style={{ backgroundColor: "red" }}
                        onClick={() => console.log("Delete Event")}
                    >
                        Delete
                    </button>
                </div>
            );
        }
    }, [props.action, user]);

    return (
        <Card className="eventCard">
            <Card.Body>
                <Card.Title style={{ fontSize: "2vw", fontWeight: "bolder" }}>{name}</Card.Title>
                <Card.Subtitle style={{ fontSize: "1.3vw", fontWeight: "bold", fontStyle: "italic" }}>
                    {club}
                </Card.Subtitle>
                {desc}
                {actionButton}
            </Card.Body>
        </Card>
    );
}

export default EventCard;
