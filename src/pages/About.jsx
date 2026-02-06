import useSEO from '../hooks/useSEO'
import useReveal from '../hooks/useReveal'
import { Link } from 'react-router-dom'
import { TrainerIcon, HeartbeatIcon, DumbbellIcon, ArrowRightIcon } from '../components/Icons.jsx'

const IMAGES = {
  team: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
  trainer1: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=300&q=80',
  trainer2: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=300&q=80',
  trainer3: 'https://images.unsplash.com/photo-1597347316205-36f6c451902a?w=300&q=80',
  facility: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80'
}

function ValueCard({ Icon, title, desc }) {
  const { ref, revealed } = useReveal()
  return (
    <div ref={ref} className={`card fade-in ${revealed ? 'revealed' : ''}`}>
      <h3><Icon className="icon" /> {title}</h3>
      <p>{desc}</p>
    </div>
  )
}

function TrainerCard({ name, role, image, specialties }) {
  const { ref, revealed } = useReveal()
  return (
    <div ref={ref} className={`card trainer-card fade-in ${revealed ? 'revealed' : ''}`} style={{textAlign:'center'}}>
      <img src={image} alt={name} className="trainer-img" loading="lazy" />
      <h3 style={{marginTop:12}}>{name}</h3>
      <p style={{color:'var(--accent-red)', fontWeight:600, fontSize:14, margin:'4px 0 8px'}}>{role}</p>
      <p style={{fontSize:14, color:'var(--muted)'}}>{specialties}</p>
    </div>
  )
}

export default function About() {
  useSEO({
    title: 'About Us - AVR Fitness Club | Best Fitness Center',
    description: 'Premium fitness center with professional gym trainers and affordable memberships focused on strength and healthy lifestyles.',
    keywords: 'best fitness center, professional gym trainers, affordable gym memberships'
  })

  const { ref, revealed } = useReveal()

  return (
    <div>
      <section className={`section fade-in ${revealed ? 'revealed' : ''}`} ref={ref}>
        <h1>About AVR Fitness Club</h1>
        <p style={{maxWidth:700, marginBottom:24}}>
          We are a premium, modern gym focused on helping members build strength, confidence, and healthy lifestyles.
          Our certified trainers deliver structured programs tailored to your goals, whether it is fat loss, muscle gain, or improved endurance.
        </p>
        <img 
          src={IMAGES.team} 
          alt="AVR Fitness Club team" 
          style={{width:'100%', maxWidth:800, borderRadius:16, boxShadow:'0 8px 32px rgba(0,0,0,0.12)', marginBottom:24}}
          loading="lazy"
        />
      </section>

      <section className="section">
        <h2>Our Mission</h2>
        <p style={{maxWidth:700}}>
          Empower every member to achieve sustainable fitness with safe training, personalized guidance, and consistent results.
          We believe fitness is a journey, not a destination - and we are here to walk that path with you.
        </p>
      </section>

      <section className="section">
        <h2>Our Values</h2>
        <div className="grid">
          <ValueCard Icon={TrainerIcon} title="Professional Coaching" desc="Expert trainers dedicated to your success with personalized attention and proven methods." />
          <ValueCard Icon={HeartbeatIcon} title="Member-First Culture" desc="Your goals are our priority. We listen, adapt, and support your unique fitness journey." />
          <ValueCard Icon={DumbbellIcon} title="Hygiene & Safety" desc="Clean, sanitized equipment and a safe training environment for peace of mind." />
        </div>
      </section>

      <section className="section">
        <h2>Meet Our Trainers</h2>
        <p style={{maxWidth:700, marginBottom:24}}>
          Our certified fitness professionals bring years of experience in strength and conditioning, mobility training, and functional fitness.
        </p>
        <div className="grid">
          <TrainerCard 
            name="Rahul Sharma" 
            role="Head Trainer" 
            image={IMAGES.trainer1}
            specialties="Strength & Conditioning, Powerlifting, Nutrition"
          />
          <TrainerCard 
            name="Priya Patel" 
            role="Fitness Coach" 
            image={IMAGES.trainer2}
            specialties="HIIT, Functional Training, Weight Loss"
          />
          <TrainerCard 
            name="Vikram Singh" 
            role="Personal Trainer" 
            image={IMAGES.trainer3}
            specialties="Bodybuilding, Mobility, Sports Performance"
          />
        </div>
      </section>

      <section className="section">
        <h2>Our Facility</h2>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:24, alignItems:'center'}}>
          <div>
            <p style={{marginBottom:16}}>
              State-of-the-art equipment, spacious workout areas, and a motivating atmosphere designed to bring out your best.
              From free weights to cardio machines, we have everything you need for a complete workout.
            </p>
            <ul style={{paddingLeft:20, color:'var(--muted)', lineHeight:2}}>
              <li>Premium free weights & machines</li>
              <li>Dedicated cardio zone</li>
              <li>Functional training area</li>
              <li>Clean changing rooms & showers</li>
              <li>Free parking available</li>
            </ul>
          </div>
          <img 
            src={IMAGES.facility} 
            alt="AVR Fitness Club gym facility" 
            style={{width:'100%', borderRadius:16, boxShadow:'0 8px 32px rgba(0,0,0,0.12)'}}
            loading="lazy"
          />
        </div>
      </section>

      <section className="section" style={{textAlign:'center'}}>
        <h2>Ready to Start Your Fitness Journey?</h2>
        <p style={{maxWidth:500, margin:'0 auto 20px', color:'var(--muted)'}}>
          Join AVR Fitness Club today and transform your body with expert guidance.
        </p>
        <Link to="/contact" className="btn btn-primary">
          Get Started <ArrowRightIcon />
        </Link>
      </section>
    </div>
  )
}
