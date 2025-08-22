import React from 'react'
import '../styles/About.scss'

const About = () => {
  return (
<div className="about">
      <section className="intro">
        <h1>About Us 👨‍💻</h1>
        <p>
          We are a team of passionate developers and designers dedicated to
          building modern, responsive, and user-friendly applications.
        </p>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="member">👨 Ghulam Mustafa - Frontend Developer</div>
          <div className="member">👨 Ghulam Mustafa - UI/UX Designer</div>
          <div className="member">👨 Ghulam Mustafa - Backend Developer</div>
        </div>
      </section>
    </div>
  )
}

export default About
