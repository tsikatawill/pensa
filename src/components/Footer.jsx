import {
    FaEnvelope,
    FaFacebook,
    FaInstagramSquare,
    FaLocationArrow,
    FaPhoneAlt,
    FaTwitter
} from 'react-icons/fa'

export default function Footer() {
    let date = new Date()
    date = date.getFullYear()
    return (
        <footer className="py-10 md:py-20 bg-blue-900 text-white">
            <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                <div>
                    <h2 className="font-bold text-2xl uppercase mb-10">pensa-pu</h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto fugit odit
                        impedit dignissimos laudantium culpa sit saepe rem.
                    </p>
                    <div className="socials flex gap-2 mt-10">
                        <a href="https://www.facebook.com">
                            <FaFacebook size="30" />
                        </a>
                        <a
                            href="https://www.twitter.com"
                            className="bg-white rounded-full p-1 text-primary ">
                            <FaTwitter size="20" />
                        </a>
                        <a href="https://www.instagram.com">
                            <FaInstagramSquare size="30" />
                        </a>
                    </div>
                </div>
                <div className="quick-links">
                    <h2 className="text-xl font-bold mb-10">Quick Links</h2>
                    <div className="flex flex-col gap-5">
                        <a href="/#about">About Us</a>
                        <a href="/#officers">Departments</a>
                        <a href="/#officers">Gallery</a>
                        <a href="/#blog-posts">News / Events</a>
                    </div>
                </div>
                <div className="support">
                    <h2 className="text-xl font-bold mb-10">Support</h2>
                    <div className="flex flex-col gap-5">
                        <a href="/#contact">Help</a>
                        <a href="/#contact">FAQs</a>
                        <a href="/#contact">Privacy & Policy</a>
                    </div>
                </div>
                <div className="contact">
                    <h2 className="text-xl font-bold mb-10">Contact Us</h2>
                    <div className="flex flex-col gap-5">
                        <a
                            href="https://google.com/?q='Pensa-PU location in Ghana'"
                            className="flex items-center gap-2">
                            <FaLocationArrow /> P.O. Box KN 1739, Kaneshie Accra
                        </a>

                        <a href="mailto:info@pensa-pu.gh" className="flex items-center gap-2">
                            <FaEnvelope /> info@pensa-pu.gh
                        </a>

                        <a href="tel:+233785675789" className="flex items-center gap-2">
                            <FaPhoneAlt /> +233 785 675 789
                        </a>
                    </div>
                </div>

                <div className="sub-footer border-t-2 border-slate-400 col-span-full mt-10 pt-6 sm:flex sm:gap-0 justify-between">
                    <p className="rights mb-5 sm:mb-0">
                        &copy; {date} pensa-pu. All Rights Reserved
                    </p>
                    <p>Designed and Developed by PENSA DEV TEAM</p>
                </div>
            </div>
        </footer>
    )
}
