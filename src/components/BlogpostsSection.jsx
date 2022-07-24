import { FaArrowRight } from 'react-icons/fa'
import News1 from '../images/news1.jpg'
import News2 from '../images/news2.jpg'
import News3 from '../images/six.jpg'
import PostCard from './PostCard'
import SectionBg from '../images/church-doodle.jpg'

export default function BlogpostsSection() {
    return (
        <section
            className="spacey blog-posts"
            style={{
                background: `linear-gradient(rgba(255,255,255,0.75), rgba(255,255,255,0.75)), url(${SectionBg}) center center/cover no-repeat`
            }}>
            <div className="container">
                <div className="head flex flex-col items-center justify-center">
                    <h2>Our blog</h2>
                    <p>Catch up with our Latest News</p>
                </div>

                <div className="body">
                    <div className="flex justify-end">
                        <button className="cta btn text-sm text-primary flex items-center gap-2 my-8">
                            <span>see more</span>
                            <FaArrowRight />
                        </button>
                    </div>
                    <div className="post-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                        <PostCard
                            image={News1}
                            title="What happened at Glory Night?"
                            post="Sipisicing elit. Aut facere beatae, reprehenderit deserunt ipsum illo amet voluptates maxime nemo quae accusamus fugit enim, fugiat hic voluptatum earum vel eos non!sfdf sdf"
                        />
                        <PostCard
                            image={News2}
                            title='All the testimonies from "Night with the King"'
                            post="Asperiores voluptatum a tenetur optio temporibus voluptates alias accusamus vel commodi fugit."
                        />
                        <PostCard
                            image={News3}
                            title="Outdoor Photoshoot"
                            post="
                            Consectetur adipisicing elit. Quos itaque ipsa corrupti corporis, voluptate
                            labore! Dignissimos, est? Quia assumenda explicabo facilis sunt culpa ea
                            quisquam omnis nemo iste laboriosam. Unde? Consectetur adipisicing elit.
                            Quos itaque ipsa corrupti corporis, voluptate labore! Dignissimos, est? Quia
                            assumenda explicabo facilis sunt culpa ea quisquam omnis nemo iste
                            laboriosam. Unde?
                            "
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
