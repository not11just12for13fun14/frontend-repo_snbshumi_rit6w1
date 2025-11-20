import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import PackagesGrid from './components/PackagesGrid'
import Testimonials from './components/Testimonials'
import WhyUs from './components/WhyUs'
import Footer from './components/Footer'
import HeadMeta from './components/HeadMeta'

function App() {
  const keywords = [
    'محامي جرائم إلكترونية دبي',
    'محامي قضايا جنائية دبي',
    'محامي مؤثرين دبي',
    'crypto lawyer dubai',
    'legal consultant dubai',
  ]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Abdelhadi Jasim Al Hammadi – Advocates & Legal Consultants',
    areaServed: 'Dubai, UAE',
    image: '/og-image.jpg',
    description: 'المكتب القانوني للقضايا الحسّاسة والجرائم الإلكترونية في دبي. حماية قانونية متقدمة، سرعة في الاستجابة، وشفافية كاملة.',
    url: typeof window !== 'undefined' ? window.location.href : 'https://example.com',
    serviceType: [
      'Cybercrime Defense',
      'Criminal Defense',
      'Influencer Legal',
      'Contracts and Corporate',
      'Fraud and Asset Recovery'
    ],
    offers: {
      '@type': 'OfferCatalog',
      name: 'Luxury Legal Packages',
      itemListElement: [
        { '@type': 'Offer', name: 'Cyber Shield' },
        { '@type': 'Offer', name: 'Influencer Legal Kit' },
        { '@type': 'Offer', name: 'Fraud Guard' },
        { '@type': 'Offer', name: 'Criminal Defense Prime' },
        { '@type': 'Offer', name: 'Contracts Studio' },
        { '@type': 'Offer', name: 'Corporate Counsel' },
      ],
    },
  }

  return (
    <div className="bg-white text-neutral-900 min-h-screen">
      <HeadMeta
        title="Abdelhadi Jasim Al Hammadi – Advocates & Legal Consultants"
        description="المكتب القانوني للقضايا الحسّاسة والجرائم الإلكترونية في دبي. حماية قانونية متقدمة، سرعة في الاستجابة، وشفافية كاملة."
        keywords={keywords}
        schema={schema}
      />
      <NavBar />
      <main>
        <Hero />
        <About />
        <Services />
        <PackagesGrid />
        <Testimonials />
        <WhyUs />
      </main>
      <Footer />
    </div>
  )
}

export default App
