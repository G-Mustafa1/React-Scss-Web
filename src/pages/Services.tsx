import React from 'react'
import '../styles/Services.scss'

const Services = () => {
  return (
    <div className="services">
      <h1>Our Services 🛠</h1>
      <div className="service-list">
        <div className="service-card">
          <h2>🌐 Web Development</h2>
          <p>We build modern and scalable web applications.</p>
        </div>
        <div className="service-card">
          <h2>📱 Mobile Apps</h2>
          <p>Beautiful mobile-first designs for all devices.</p>
        </div>
        <div className="service-card">
          <h2>🎨 UI/UX Design</h2>
          <p>Creative designs to boost user engagement.</p>
        </div>
      </div>
    </div>
  )
}

export default Services
