import ContactForm from './ContactForm'

export default function ContactSection() {
    return (
        <section className="contact spacey" id="contact">
            <div className="container grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                <div>
                    <div className="head">
                        <h2>contact us</h2>
                        <p>What can we do to help?</p>
                    </div>
                    <ContactForm />
                </div>
                <div className="map h-[30rem]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.597323833828!2d-0.2762953515404934!3d5.626308295901302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf98c25ce18e1d%3A0xa488794859304f7!2sPentecost%20University!5e0!3m2!1sen!2sgh!4v1658745265782!5m2!1sen!2sgh"
                        className="rounded-lg w-full h-full"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>
    )
}
