import Hero from './Hero'
import Navbar from './Navbar'
import styles from './Header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <Navbar />
            <Hero />
        </header>
    )
}
