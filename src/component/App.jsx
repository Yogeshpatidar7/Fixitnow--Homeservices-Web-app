import React from 'react'
import { useState } from 'react'
import { createBrowserRouter, RouterProvider, BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import Navbar from './Navbar.jsx'
import Main from './Main.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Login from './login.jsx'
import Dashboard from './dashboard.jsx'
import Booking from './Booking.jsx'
import Schedule from './Schedule.jsx'
import Register from './Register.jsx'
import Login1 from './Login1.jsx'
import Footer from './Footer.jsx'
import Error from './Error.jsx'
import Logout from './Logout.jsx'
import AdminLayout from './layouts/Admin-Layout.jsx'
import AdminUsers from './Admin-Users.jsx'
import AdminContacts from './Admin-Contacts.jsx'
import AdminBookings from './Admin-bookings.jsx'
import AdminUpdate from './AdminUpdate.jsx'
import UserLayout from './layouts/User-layout.jsx'
import Myaccount from './userprofile/Myaccount.jsx'
import ProfileHome from './userprofile/ProfileHome.jsx'
import MyOrders from './userprofile/MyOrders.jsx'
import ServiceProviderLayout from './layouts/Serviceprovider-Layout.jsx'
import MyServices from './userprofile/MyServices.jsx'
import ServiceProviderList from './ServiceProviderList.jsx'


export default function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <><Navbar /> <Home />  <About />  <Main /> <Contact /> <Footer/></>
        },
        {
            path: "/About",
            element: <> <Navbar /> <About /> </>
        },
        {
            path: "/Home",
            element: <> <Navbar /> <Home /> <About />  <Main /> <Contact /> </>
        },
        {
            path: "/Contact",
            element: <> <Navbar /> <Contact /> </>
        },
        {
            path: "/Services",
            element: <> <Navbar /> <Main /> </>
        },
        {
            path: "/Login",
            element: <> <Navbar />  <Login/> </>
        },
        {
            path: "/Register",
            element: <><Navbar /> <Register /></>
        },
        {
            path: "/Dashboard",
            element: <> <Main/>  </>
        },
        {
            path: "/Booking",
            element: <><Navbar /> <Booking/></>,
            
        },
        {
            path: "/Servicebooking",
            element: <><Navbar /> <ServiceProviderList/></>,
            
        },
        {
            path: "/Schedule",
            element: <><Navbar/> <Schedule/> </>
        },
        {
            path: "/Logout",
            element: <><Logout /></>
        },

        {
            path: "*",
            element:<><Navbar/> <Error/></>
        },
        {
            path:"/admin",
            element: <> <Navbar/> <AdminLayout/></>,
            children: [
                {
                    path: "users",
                    element:<>  <AdminUsers /></>
                },
                {
                    path: "contacts",
                    element:<><AdminContacts /></>
                },
                {
                    path: "bookings",
                    element:<><AdminBookings /></>
                },
                {
                    path: "users/:id/edit",
                    element: <AdminUpdate/>
                },
                
            ],
        },
        {
            path:"/profile",
            element: <> <Navbar/> <UserLayout/></>,
            children: [
                {
                    path: "home",
                    element:<><ProfileHome/></>
                },
    
                {
                    path: "myaccount",
                    element:<>  <Myaccount/></>
                },
                {
                    path: "bookservice",
                    element:<>  <Main/></>
                },
                {
                    path: "orders",
                    element:<><MyOrders /></>
                },
                {
                    path: "password",
                    element:<><AdminBookings /></>
                },
                
                {
                    path: "users/:id/edit",
                    element: <AdminUpdate/>
                },
            ],
        },
        {
            path:"/profile/serviceprovider",
            element: <> <Navbar/> <ServiceProviderLayout /></>,
            children: [
                {
                    path: "home",
                    element:<><ProfileHome/></>
                },
                {
                    path: "myaccount",
                    element:<>  <Myaccount/></>
                },
                {
                    path: "myservices",
                    element:<><MyServices/></>
                },
                {
                    path: "password",
                    element:<><AdminBookings /></>
                },
                
                {
                    path: "users/:id/edit",
                    element: <AdminUpdate/>
                },
            ],
        }

    ]);

    return (
        <>

            <RouterProvider router={router} />
        </>
    )
}

