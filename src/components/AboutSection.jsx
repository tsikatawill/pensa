import Aboutbg from '../images/church-doodle.jpg'
import Couple from '../images/couple.jpg'

export default function AboutSection() {
    return (
        <section
            className="about spacey"
            id="about"
            style={{
                background: `linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url(${Aboutbg}) center center/cover no-repeat`
            }}>
            <div className="container flex flex-col md:flex-row gap-10 md:gap-20 items-center">
                <div className="image-wrapper flex-1 relative">
                    <img
                        src={Couple}
                        alt="couple.jpg"
                        className="h-[28rem] w-96 object-cover rounded-lg z-30 absolute"
                    />

                    <div className="shadow h-[28rem] w-96 bg-slate-300 rounded-lg z-20 translate-y-4 -translate-x-4 md:translate-y-8 md:-translate-x-8"></div>
                </div>

                <div className="text-wrapper flex-1">
                    <div className="head">
                        <h2>We are prensa - pu</h2>
                        <p>Want to know more about us?</p>
                    </div>

                    <div className="body">
                        <p className="text-sm">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas animi
                            doloremque quisquam error recusandae sed quasi deleniti minus non
                            ducimus neque, mollitia doloribus impedit nam qui? Blanditiis molestiae
                            Provident ullam, tempora sequi perspiciatis natus expedita ex officia
                            explicabo totam laudantium nam consequatur similique est unde molestias
                            minima? Dolores molestias id, optio rem voluptate perferendis doloribus
                        </p>

                        <button className="btn btn-primary mt-10">read more</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
