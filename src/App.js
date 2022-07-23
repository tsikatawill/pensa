import Header from './components/Header'

export default function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <section className="about" id="about"></section>
                <section className="officers" id="officers"></section>
                <section className="donate" id="donate"></section>
                <section className="news" id="news"></section>
                <section className="contact" id="contact"></section>
            </main>
            <footer></footer>
        </div>
    )
}
