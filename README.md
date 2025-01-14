# Full-Stack Event Management Platform

## Deployment

### Frontend:
- The frontend is deployed on **Netlify** (or **Vercel**) and can be accessed at:
  - **Frontend URL**: ([https://your-frontend-url.netlify.app](https://6785f5e21b22ab9b7b6f9610--vocal-sawine-c2e501.netlify.app/))

### Backend:
- The backend is deployed on **Render** (or **Railway.app**) and can be accessed at:
  - **Backend URL**: [https://your-backend-url.onrender.com](https://your-backend-url.onrender.com](https://event-management-system-backend-eyjc.onrender.com))

## Project Overview

This is a full-stack Event Management Platform that allows users to create, manage, and view events. The platform includes features such as user authentication, event creation, real-time attendee updates, and more. The app is designed to be mobile-friendly and responsive.

### Features:
#### Frontend:
- **User Authentication**: Users can register, log in to access limited features.
- **Event Creation**: Users can create events with a form that includes fields for event name, description, date/time, etc.
- **Real-Time Attendee List**: Displays the number of attendees for each event in real-time.
- **Responsive Design**: The platform is designed to work seamlessly on both desktop and mobile devices.

#### Backend:
- **Authentication API**: Implements JWT for secure user authentication.
- **Event Management API**: Provides CRUD operations for events with ownership restrictions.
- **Real-Time Updates**: Uses WebSockets for real-time updates on event attendance.
- **Database**: MongoDB Atlas is used for storing event and user data.

## Tech Stack

- **Frontend**: React.js, CSS, Axios
- **Backend**: Node.js, Express.js
- **Authentication**: JWT (JSON Web Tokens)
- **Database**: MongoDB Atlas (Free Plan)
- **Deployment**:
  - Frontend:  Netlify 
  - Backend: Render 

## Installation

### Prerequisites:
- Node.js
- npm (Node Package Manager)
- MongoDB Atlas (for the database)
- Netlify (for frontend deployment)
- Render (for backend deployment)

### Steps to Run Locally:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/event-management-platform.git
   cd event-management-platform
