import './ContactForm.css'
export default function ContactForm() {
    return (
        <form className="contact-form mt-10">
            <div className="fullname input-group">
                <label htmlFor="fullname">Full Name</label>
                <input type="text" placeholder="Eg: Davy Jones" required />
            </div>
            <div className="email input-group">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Eg: email@provider.com" required />
            </div>
            <div className="message input-group">
                <label htmlFor="message">Message</label>
                <textarea id="" cols="30" rows="10" />
            </div>
            <button className="btn btn-primary">submit</button>
        </form>
    )
}
