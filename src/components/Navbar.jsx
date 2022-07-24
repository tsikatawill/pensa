import './Navbar.css'
import Logo from '../images/logo.png'

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="container flex justify-between py-5 items-center">
                <div className="Logo">
                    <img src={Logo} alt="logo" className="w-14 filter" />
                </div>

                <ul className="flex gap-5">
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
                <button className="btn btn-tertiary">donate</button>
            </div>
        </nav>
    )
}
