import Five from '../images/five.jpg'
import Four from '../images/four.jpg'
import OfficerCard from './OfficerCard'
import One from '../images/one.jpg'
import Six from '../images/six.jpg'
import Three from '../images/three.jpg'
import Two from '../images/two.jpg'

export default function OfficersSection() {
    return (
        <section className="officers spacey" id="officers">
            <div className="container">
                <div className="head flex flex-col items-center justify-center">
                    <h2>Our officers</h2>
                    <p>Meet our wonderful LCC</p>
                </div>
                <div className="body flex gap-5 overflow-auto py-10">
                    <OfficerCard
                        event="Breakthrough all-night event held on Campus"
                        image={One}
                        date="25th Jyly, 2022"
                    />
                    <OfficerCard
                        event="Breakthrough all-night event held on Campus"
                        image={Two}
                        date="25th Jyly, 2022"
                    />
                    <OfficerCard
                        event="Breakthrough all-night event held on Campus"
                        image={Three}
                        date="25th Jyly, 2022"
                    />
                    <OfficerCard
                        event="A wonderful photoshoot session on school grounds"
                        image={Four}
                        date="25th Jyly, 2022"
                    />
                    <OfficerCard
                        event="A wonderful photoshoot session on school grounds"
                        image={Five}
                        date="25th Jyly, 2022"
                    />
                    <OfficerCard
                        event="A wonderful photoshoot session on school grounds"
                        image={Six}
                        date="25th Jyly, 2022"
                    />
                </div>
            </div>
        </section>
    )
}
