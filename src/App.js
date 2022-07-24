import AboutSection from './components/AboutSection'
import BlogpostsSection from './components/BlogpostsSection'
import ContactSection from './components/ContactSection'
import DonateSection from './components/DonateSection'
import Footer from './components/Footer'
import Header from './components/Header'
import OfficersSection from './components/OfficersSection'

export default function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <AboutSection />
                <OfficersSection />
                <DonateSection />
                <BlogpostsSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    )
}
