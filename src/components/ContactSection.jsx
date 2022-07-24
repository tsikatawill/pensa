import ContactForm from './ContactForm'

export default function ContactSection() {
    return (
        <section className="contact spacey" id="contact">
            <div className="container grid grid-cols-1 md:grid-cols-2">
                <div>
                    <div className="head">
                        <h2>contact us</h2>
                        <p>What can we do to help?</p>
                    </div>
                    <ContactForm />
                </div>
                <div className="map"></div>
            </div>
        </section>
    )
}
