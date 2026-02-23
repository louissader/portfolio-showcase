import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Heart, Shield } from 'lucide-react'
import TextReveal from '../components/TextReveal'
import SectionReveal from '../components/SectionReveal'
import TeamCard from '../components/TeamCard'

const team = [
  {
    name: 'Louis Sader',
    title: 'Co-Founder',
    bio: 'Software developer with professional experience at startups and enterprise companies. Focused on building fast, reliable websites and booking platforms that help businesses grow.',
    skills: [],
    image: '/images/team/louis.jpg',
    linkedin: 'https://www.linkedin.com/in/louis-sader-a6a391287/',
    github: 'https://github.com/louissader',
  },
  {
    name: 'Logan Carter',
    title: 'Co-Founder',
    bio: 'Engineering student at CU Boulder (Class of 2027), Dean\'s List, Honors College. Combines engineering precision with creative web design. Brings meticulous attention to detail to every project.',
    skills: [],
    image: '/images/team/logan.jpg',
    linkedin: 'https://www.linkedin.com/in/logan-carter-35h/',
    github: 'https://github.com/Logan566C',
  },
]

const values = [
  { icon: Zap, title: 'Ship Fast', desc: 'From first conversation to live website in days, not months.' },
  { icon: Heart, title: 'Client-First', desc: 'We build for your customers and your business goals.' },
  { icon: Shield, title: 'Built to Last', desc: 'Websites that stay fast, secure, and reliable long after launch.' },
]

export default function About() {
  return (
    <main className="pt-20 md:pt-24 pb-16 md:pb-24">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 mb-8 md:mb-24">
        <SectionReveal>
          <TextReveal as="h1" className="text-3xl md:text-6xl font-extrabold mb-2 md:mb-4">
            Meet the Team
          </TextReveal>
          <p className="text-base md:text-xl text-text-muted max-w-2xl">
            Two builders who ship fast and care about the details.
          </p>
        </SectionReveal>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-6 mb-8 md:mb-24">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-8">
          {team.map((member, i) => (
            <SectionReveal key={i} delay={i * 0.1}>
              <TeamCard {...member} compact />
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 md:py-24 bg-dark-light">
        <div className="max-w-3xl mx-auto px-6">
          <SectionReveal>
            <h2 className="text-xl md:text-2xl font-bold text-text mb-4 md:mb-6">How We Started</h2>
            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-text-muted leading-relaxed">
              <p>
                We connected through a shared passion for building things that matter. Louis brings professional
                software development experience, and Logan brings creative design skills and engineering precision.
                Together, we saw an opportunity to help businesses get professional websites without the agency markup.
              </p>
              <p>
                What sets us apart? We're small enough to care deeply about every project but experienced enough
                to deliver professional results. The people you talk to are the people who build your site.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <TextReveal as="h2" className="text-2xl md:text-4xl font-extrabold text-center mb-8 md:mb-12">
              Our Approach
            </TextReveal>
          </SectionReveal>
          <div className="grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-8">
            {values.map((v, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <v.icon size={20} className="text-accent md:w-7 md:h-7" />
                  </div>
                  <h3 className="text-sm md:text-lg font-bold text-text mb-1 md:mb-2">{v.title}</h3>
                  <p className="text-xs md:text-sm text-text-muted leading-relaxed">{v.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-24 bg-dark-light">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionReveal>
            <h2 className="text-2xl md:text-4xl font-extrabold text-text mb-3 md:mb-4">Work With Us</h2>
            <p className="text-text-muted mb-6 md:mb-8 text-base md:text-lg">Let's build something great together.</p>
            <Link to="/contact" data-cursor="pointer" className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-full transition-colors">
              Get in Touch <ArrowRight size={18} />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </main>
  )
}
