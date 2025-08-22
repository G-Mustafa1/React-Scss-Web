import React from 'react'
import '../styles/Contact.scss'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
    const navigate = useNavigate()
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission logic
        navigate('/')
    }
  return (
    <div className="contact">
      <h1>Contact Us 📩</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows={5} required></textarea>
        <button type="submit">Send Message ✉️</button>
      </form>
    </div>
  )
}

export default Contact
