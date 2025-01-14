import { HashRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar/Navbar";

import Home from "./components/Home/Home";

import Register from "./components/Login/Register";
import UserUpdateForm from "./components/UserProfile/EditProfile";
import UserList from "./components/UserList/UserList";

import CreateEvent from "./components/Event/CreateEvent";
import EventList from "./components/Event/EventList";
import UpdateEvent from "./components/Event/UpdateEvent";
import BookedEventsList from "./components/Event/BookedEventsList";

import "./App.css";

function App() {
  const [isLoggedIn, setLoggedIn] = useState("false");
  const [user, setUser] = useState();

  useEffect(() => {
    setInterval(() => {
      const loginStatus = localStorage.getItem("loginStatus");
      const user = localStorage.getItem("user");
      setLoggedIn(loginStatus);
      setUser(user);
    }, 5000);
  }, []);

  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Routes>
          {/* General paths */}
          <Route path="/" element={<Home />} />

          {/* User paths */}
          <Route path="/register" element={<Register />} />
          <Route path="/edit-profile" element={<UserUpdateForm />} />
          <Route path="/view-user" element={<UserList />} />

          {/* Event Paths */}
          <Route path="/create-event" element={<CreateEvent />} />

          <Route path="/view-event" element={<EventList />} />

          <Route path="/update-event" element={<UpdateEvent />} />

          <Route path="/booked-events" element={<BookedEventsList />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
