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
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About Us</a>
                    </li>
                    <li>
                        <a href="#">Registration</a>
                    </li>
                    <li>
                        <a href="#">Departments</a>
                    </li>
                    <li>
                        <a href="#">Gallery</a>
                    </li>
                    <li>
                        <a href="#">News/Events</a>
                    </li>
                </ul>
                <button className="btn btn-tertiary">donate</button>
            </div>
        </nav>
    )
}
