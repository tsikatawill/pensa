import './Navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../images/logo.png'
import { useState } from 'react'

export default function Navbar() {
    const [showNavMenu, setShowNavMenu] = useState(false)

    return (
        <nav className="navbar">
            <div className="container flex justify-between py-5 items-center">
                <a href="/" className="Logo">
                    <img
                        src={Logo}
                        alt="logo"
                        className="w-14 hover:rotate-[360deg] duration-700 ease-in"
                    />
                </a>

                <ul
                    className={`flex flex-col md:flex-row bg-white md:bg-transparent text-black md:text-white fixed md:relative ${
                        showNavMenu ? 'left-0' : '-left-full md:left-0'
                    }  top-0 h-screen md:h-auto justify-around items-center gap-5 w-screen md:w-auto  z-50 duration-150 ease-in`}>
                    <div className="toggle absolute top-5 right-5 text-black z-50 ">
                        <FaTimes
                            className="border-2 border-black p-1 md:hidden rounded-sm cursor-pointer duration-200"
                            size="30"
                            onClick={() => setShowNavMenu(false)}
                        />
                    </div>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/#about">About Us</a>
                    </li>
                    <li>
                        <a href="/#about">Registration</a>
                    </li>
                    <li>
                        <a href="/#officers">Departments</a>
                    </li>
                    <li>
                        <a href="/#officers">Gallery</a>
                    </li>
                    <li>
                        <a href="/#blog-posts">News/Events</a>
                    </li>
                </ul>

                <div className="flex items-center gap-5">
                    <button className="btn btn-tertiary">donate</button>

                    <FaBars
                        className="border-2 p-1 md:hidden rounded-sm cursor-pointer"
                        size="30"
                        onClick={() => setShowNavMenu(true)}
                    />
                </div>
            </div>
        </nav>
    )
}
