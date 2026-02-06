import useSEO from '../hooks/useSEO'
import useReveal from '../hooks/useReveal'
import { Link } from 'react-router-dom'
import { DumbbellIcon, HeartbeatIcon, KettlebellIcon, TrainerIcon, GroupIcon, ArrowRightIcon } from '../components/Icons.jsx'

// Unsplash fitness images (free to use)
const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
  weights: 'https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=400&q=80',
  cardio: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=400&q=80',
  functional: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=400&q=80',
  personal: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80',
  group: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80',
  gym: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&q=80'
}

function ServiceCard({ title, desc, Icon, image }) {
  const { ref, revealed } = useReveal()
  return (
    <div ref={ref} className={`card fade-in ${revealed ? 'revealed' : ''}`}>
      {image && <img src={image} alt={title} className="card-img" loading="lazy" />}
      <h3>
        {Icon ? <Icon className="icon" /> : null}
        {title}
      </h3>
      <p>{desc}</p>
    </div>
  )
}

function Testimonial({ quote, name, avatar }) {
  const { ref, revealed } = useReveal({ threshold: 0.2 })
  return (
    <div ref={ref} className={`testimonial fade-in ${revealed ? 'revealed' : ''}`}>
      <p>{quote}</p>
      <div style={{display:'flex', alignItems:'center', gap:10, marginTop:8}}>
        {avatar && <img src={avatar} alt={name} style={{width:36, height:36, borderRadius:'50%', objectFit:'cover'}} />}
        <small>— {name}</small>
      </div>
    </div>
  )
}

export default function Home() {
  useSEO({
    title: 'AVR Fitness Club – Best Gym & Fitness Center Near You',
    description: 'Strength Training • Cardio • Personal Training • Group Workouts in a premium, modern gym environment.',
    keywords: 'gym near me, fitness center, personal training gym, group workouts, best gym for fitness, AVR Fitness Club'
  })

  const heroReveal = useReveal({ threshold: 0.1 })

  return (
    <div>
      <section className={`hero fade-in ${heroReveal.revealed ? 'revealed' : ''}`} ref={heroReveal.ref}>
        <div className="hero-content">
          <h1>AVR Fitness Club – Best Gym & Fitness Center Near You</h1>
          <p>Transform your body with Strength Training, Cardio, Personal Training, and Group Workouts in our premium, modern gym environment.</p>
          <div className="cta-row">
            <Link to="/contact" className="btn btn-primary" aria-label="Join AVR Fitness Club">
              Join Now <ArrowRightIcon />
            </Link>
            <Link to="/contact" className="btn btn-secondary" aria-label="Get Free Fitness Consultation">
              Free Consultation <ArrowRightIcon />
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img src={IMAGES.hero} alt="Modern gym equipment at AVR Fitness Club" loading="eager" />
        </div>
      </section>

      <section className="section">
        <h2>Our Services</h2>
        <div className="grid">
          <ServiceCard image={IMAGES.weights} Icon={DumbbellIcon} title="Weight Training" desc="Build strength and muscle with guided, progressive overload workouts in our modern gym." />
          <ServiceCard image={IMAGES.cardio} Icon={HeartbeatIcon} title="Cardio Training" desc="Boost stamina and heart health with treadmills, cycles, HIIT, and interval sessions." />
          <ServiceCard image={IMAGES.functional} Icon={KettlebellIcon} title="Functional Fitness" desc="Improve mobility, balance, and real-life strength with kettlebells, TRX, and circuits." />
          <ServiceCard image={IMAGES.personal} Icon={TrainerIcon} title="Personal Training" desc="1-on-1 professional coaching tailored to your goals: fat loss, strength, and conditioning." />
          <ServiceCard image={IMAGES.group} Icon={GroupIcon} title="Group Fitness Classes" desc="High-energy group workouts for motivation, accountability, and faster results." />
        </div>
      </section>

      <section className="section">
        <h2>Why Choose Us</h2>
        <div className="grid">
          <ServiceCard Icon={TrainerIcon} title="Certified Trainers" desc="Experienced, certified trainers focused on safe form and measurable progress." />
          <ServiceCard Icon={DumbbellIcon} title="Modern Gym Equipment" desc="Premium machines, free weights, and cardio equipment for all levels." />
          <ServiceCard Icon={HeartbeatIcon} title="Affordable Membership Plans" desc="Flexible plans that fit your lifestyle and budget." />
          <ServiceCard Icon={KettlebellIcon} title="Clean & Safe Environment" desc="Hygienic, well-maintained facility with strict safety standards." />
        </div>
      </section>

      <section className="section">
        <h2>Member Testimonials</h2>
        <div className="testimonials">
          <Testimonial 
            quote="I gained strength and confidence in just 8 weeks! The trainers really know what they're doing." 
            name="Priya S."
            avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80"
          />
          <Testimonial 
            quote="Trainers are professional and super motivating. Best gym I've ever joined!" 
            name="Arjun M."
            avatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
          />
          <Testimonial 
            quote="Clean gym, great equipment, and friendly staff. Highly recommended!" 
            name="Neha K."
            avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
          />
        </div>
      </section>

      <section className="section" style={{textAlign:'center'}}>
        <h2>Visit Our Gym</h2>
        <p style={{maxWidth:600, margin:'0 auto 20px', color:'var(--muted)'}}>
          AVR Fitness Club is a trusted gym offering professional fitness training, personal coaching,
          and modern gym facilities. We focus on building strength, improving stamina, and creating healthy habits
          through structured programs and expert guidance.
        </p>
        <img 
          src={IMAGES.gym} 
          alt="AVR Fitness Club gym interior" 
          style={{width:'100%', maxWidth:800, borderRadius:16, boxShadow:'0 8px 32px rgba(0,0,0,0.12)'}}
          loading="lazy"
        />
      </section>
    </div>
  )
}
