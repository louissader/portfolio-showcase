import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Shield, Clock, DollarSign } from 'lucide-react'
import TextReveal from '../components/TextReveal'
import SectionReveal from '../components/SectionReveal'

const guarantees = [
  { icon: DollarSign, title: 'Lowest Price Guarantee', desc: 'We guarantee you\'ll pay less than what you\'re currently paying — or less than any competing quote.' },
  { icon: Clock, title: 'Lightning Fast Delivery', desc: 'Most websites go live in 3 days. You get a professional site, fast.' },
  { icon: Shield, title: '1 Year Free Support', desc: 'A full year of free support and updates included with every project.' },
]

const included = [
  'Custom design tailored to your brand',
  'Works perfectly on phone, tablet, and desktop',
  'Fast-loading pages that rank well on Google',
  'Contact forms and lead capture',
  'Online booking and payments (if needed)',
  '1 full year of free support and updates',
  'You own everything — no lock-in',
  'No hidden fees or recurring charges',
]

export default function Services() {
  return (
    <main className="pt-20 md:pt-24 pb-16 md:pb-24">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 mb-10 md:mb-24 text-center">
        <SectionReveal>
          <TextReveal as="h1" className="text-3xl md:text-6xl font-extrabold mb-4 md:mb-6">
            Simple Pricing, No Surprises
          </TextReveal>
          <p className="text-base md:text-xl text-text-muted max-w-2xl mx-auto mb-6 md:mb-8">
            We guarantee you'll pay less than what you're currently paying — or less than any other quote you've received.
          </p>
          <Link
            to="/contact"
            data-cursor="pointer"
            className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-full transition-colors text-base md:text-lg"
          >
            Get Your Free Quote <ArrowRight size={18} />
          </Link>
        </SectionReveal>
      </section>

      {/* Guarantees */}
      <section className="py-10 md:py-24 bg-dark-light">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-8 md:mb-16">
              Our Promise to You
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-3 gap-3 md:grid-cols-3 md:gap-8">
            {guarantees.map((g, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-2 md:mb-4">
                    <g.icon size={20} className="text-accent md:w-7 md:h-7" />
                  </div>
                  <h3 className="text-xs md:text-lg font-bold text-text mb-1 md:mb-2">{g.title}</h3>
                  <p className="text-[10px] md:text-sm text-text-muted leading-relaxed">{g.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-10 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <SectionReveal>
            <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-6 md:mb-12">
              What's Included
            </h2>
          </SectionReveal>
          <div className="space-y-2 md:space-y-4">
            {included.map((item, i) => (
              <SectionReveal key={i} delay={i * 0.05}>
                <div className="flex items-center gap-2 md:gap-3 p-2.5 md:p-4 rounded-xl border border-dark-border bg-dark-light">
                  <CheckCircle size={16} className="text-accent shrink-0 md:w-5 md:h-5" />
                  <span className="text-xs md:text-base text-text-muted">{item}</span>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-24 bg-dark-light">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionReveal>
            <h2 className="text-2xl md:text-4xl font-extrabold text-text mb-3 md:mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-sm md:text-lg text-text-muted mb-5 md:mb-8">
              No pressure, no commitments — just an honest conversation about what you need.
            </p>
            <Link to="/contact" data-cursor="pointer" className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-full transition-colors">
              Get a Free Quote <ArrowRight size={18} />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </main>
  )
}
