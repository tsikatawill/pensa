import EventCard from './EventCard'
import { FaArrowRight } from 'react-icons/fa'
import styles from './Hero.module.css'

export default function Hero() {
    return (
        <div className="hero h-full relative">
            <div className="container flex flex-col items-center justify-center h-[400px] text-center gap-5">
                <h1
                    className={`${styles.headText} text-5xl md:text-6xl max-w-2xl leading-[3.5rem]`}>
                    All you need is Living Worship
                </h1>

                <div className="text-sm max-w-md ">
                    <p>
                        Pentecost celebrates the blossoming of the Holy Spirit on the disciples of
                        Jesus Christ and that is a lesson that goodness will always show the way, we
                        only need to keep the faith!
                    </p>

                    <p className="text-right w-full text-xs mt-2">
                        ― N.T. Wright, The Challenge of Easter
                    </p>
                </div>

                <div className="ctas space-x-4 mt-10">
                    <button className="btn btn-neutral text-sm inline-flex items-center gap-2">
                        join us now <FaArrowRight />
                    </button>
                    <button className="btn btn-tertiary text-sm">learn more</button>
                </div>

                <div className="absolute bottom-5 w-screen overflow-x-scroll py-5 scroll-smooth">
                    <EventCard
                        date={{ day: '23', month: 'Jul' }}
                        event="Youth Meeting"
                        location="Tesano, Accra"
                        time="4:00pm"
                    />
                </div>
            </div>
        </div>
    )
}
