import { useState } from 'react'
import useSEO from '../hooks/useSEO'
import useReveal from '../hooks/useReveal'
import { PhoneIcon, InstagramIcon, WhatsAppIcon } from '../components/Icons.jsx'

export default function Contact() {
  useSEO({
    title: 'Contact Us – AVR Fitness Club | Gym Near You',
    description: 'Contact AVR Fitness Club for memberships, personal training, or a free fitness consultation. Premium gym in your area.',
    keywords: 'gym near me, contact gym, personal training, fitness consultation'
  })

  const { ref, revealed } = useReveal()
  const [form, setForm] = useState({ name: '', email: '', phone: '', goal: '', message: '' })
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState('')

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Full Name is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid Email is required'
    if (!/^[0-9]{10,}$/.test(form.phone)) e.phone = 'Valid Phone is required'
    if (!form.goal) e.goal = 'Please select a fitness goal'
    if (!form.message.trim()) e.message = 'Message is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const onSubmit = (ev) => {
    ev.preventDefault()
    if (!validate()) return
    // Simulate form submission success
    setSuccess('Thanks! Your query has been received. Our team will contact you soon.')
    setForm({ name: '', email: '', phone: '', goal: '', message: '' })
  }

  const update = (k) => (ev) => setForm({ ...form, [k]: ev.target.value })

  return (
    <section className={`section fade-in ${revealed ? 'revealed' : ''}`} ref={ref}>
      <h1 style={{marginBottom:4}}>Contact Us</h1>
      <p style={{color:'var(--muted)', marginTop:0, marginBottom:24}}>Have questions? Get a free fitness consultation today.</p>

      <div className="contact-grid">
        <form className="form" onSubmit={onSubmit} noValidate>
          <div className="field">
            <label htmlFor="name">Full Name</label>
            <input id="name" className="input" placeholder="Enter your full name" value={form.name} onChange={update('name')} required />
            {errors.name && <small className="error-text">{errors.name}</small>}
          </div>
          <div className="field">
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" className="input" placeholder="you@example.com" value={form.email} onChange={update('email')} required />
            {errors.email && <small className="error-text">{errors.email}</small>}
          </div>
          <div className="field">
            <label htmlFor="phone">Phone Number</label>
            <input id="phone" inputMode="numeric" className="input" placeholder="10-digit mobile number" value={form.phone} onChange={update('phone')} required />
            {errors.phone && <small className="error-text">{errors.phone}</small>}
          </div>
          <div className="field">
            <label htmlFor="goal">Fitness Goal</label>
            <select id="goal" className="select" value={form.goal} onChange={update('goal')} required>
              <option value="">Select a goal</option>
              <option>Fat Loss</option>
              <option>Muscle Gain</option>
              <option>General Fitness</option>
              <option>Strength & Conditioning</option>
            </select>
            {errors.goal && <small className="error-text">{errors.goal}</small>}
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" className="textarea" placeholder="Tell us about your fitness goals..." value={form.message} onChange={update('message')} required />
            {errors.message && <small className="error-text">{errors.message}</small>}
          </div>
          <div style={{marginTop:4}}>
            <button className="btn btn-primary" type="submit">Send Query</button>
          </div>
          {success && <div className="success" role="status">{success}</div>}
        </form>

        <div className="contact-info">
          <h2>Contact Details</h2>
          <div className="contact-details">
            <div className="contact-item">
              <strong>📍 Gym Address</strong>
              <span>Rahatani, Aakashganga Rd, Near cafe chocolicious Rambagh Colony, Pimple Saudagar, Pimpri-Chinchwad, Maharashtra 411017</span>
            </div>
            <div className="contact-item">
              <strong><PhoneIcon style={{width:16, height:16, verticalAlign:'middle', marginRight:6}} />Phone</strong>
              <a href="tel:+918149298040" >+91 8149298040</a>
            </div>
            <div className="contact-item">
              <strong>✉️ Email</strong>
              <a href="mailto:info@avrfitness.club">info@avrfitness.club</a>
            </div>
            <div className="contact-item">
              <strong>🕐 Working Hours</strong>
              <span>Mon-Sat: 6am-10pm<br/>Sun: 8am-6pm</span>
            </div>
          </div>

          <div className="social-contact">
            <a href="https://wa.me/+918149298040" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{display:'inline-flex', alignItems:'center', gap:8}}>
              <WhatsAppIcon style={{width:20, height:20}} /> WhatsApp Us
            </a>
            <a href="https://instagram.com/avrfitness" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{display:'inline-flex', alignItems:'center', gap:8}}>
              <InstagramIcon style={{width:20, height:20}} /> Follow on Instagram
            </a>
          </div>

          <div className="map-container">
            <h3>Find Us</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d446.42965705254886!2d73.78961086887004!3d18.599541183075836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e238a82aa5%3A0xe27824a98b38a72d!2sAVR%20Fitness%20Club!5e1!3m2!1sen!2sin!4v1770025779339!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{border:0, borderRadius:12}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AVR Fitness Club Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
