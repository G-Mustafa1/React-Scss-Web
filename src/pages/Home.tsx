import "../styles/Home.scss"

const Home = () => {
    return (
        <div className="home">
            <section className="hero">
                <h1>Welcome to MyWebsite 🌐</h1>
                <p>
                    A modern, responsive website built with React, TypeScript, and SCSS.
                </p>
                <button>Get Started 🚀</button>
            </section>

            <section className="features">
                <h2>Our Key Features</h2>
                <div className="feature-list">
                    <div className="feature-card">🔥 Fast Performance</div>
                    <div className="feature-card">📱 Mobile Friendly</div>
                    <div className="feature-card">🎨 Beautiful UI</div>
                    <div className="feature-card">⚡ Optimized Code</div>
                </div>
            </section>

            <section className="extra">
                <h2>Why Choose Us?</h2>
                <p>
                    We provide top-quality services, fully responsive websites, and
                    modern designs with colorful and animated UI. Scroll more to explore
                    everything we offer.
                </p>
            </section>
        </div>
    )
}

export default Home
