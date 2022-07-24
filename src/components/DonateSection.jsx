import SectionBg from '../images/news2.jpg'

export default function DonateSection() {
    return (
        <section
            className="spacey donate text-white"
            id="donate"
            style={{
                background: `linear-gradient(rgba(1, 19, 53, 0.65), rgba(1, 19, 53, 0.65)), url(${SectionBg}) center center/cover no-repeat`
            }}>
            <div className="container text-center">
                <p className="text-xl md:text-3xl max-w-3xl mx-auto mb-10 font-bold">
                    &ldquo;Pray! And listen to God! You can do this alone. but find somebody to do
                    it with you.&rdquo;
                </p>
                <button className="btn btn-neutral">donate</button>
            </div>
        </section>
    )
}
