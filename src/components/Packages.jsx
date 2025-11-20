import NavBar from './NavBar'
import Footer from './Footer'
import HeadMeta from './HeadMeta'
import PackagesPage from './PackagesPage'

export default function Packages(){
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Legal Packages – Dubai',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Premium Bundles',
      itemListElement: [
        { '@type': 'Offer', name: 'Cyber Shield' },
        { '@type': 'Offer', name: 'Influencer Shield' },
        { '@type': 'Offer', name: 'Crypto Shield' },
        { '@type': 'Offer', name: 'Fraud Guard' },
        { '@type': 'Offer', name: 'Criminal Defense Prime' },
        { '@type': 'Offer', name: 'Contracts Studio' },
        { '@type': 'Offer', name: 'Corporate Counsel' },
        { '@type': 'Offer', name: 'Digital Crisis Room' },
      ],
    },
    url: typeof window !== 'undefined' ? window.location.href : 'https://example.com/packages',
  }

  return (
    <div className="bg-white text-neutral-900 min-h-screen">
      <HeadMeta
        title="الباقات – مكتب القضايا الحساسة والجرائم الإلكترونية في دبي"
        description="باقات قانونية متميزة تشمل حماية إلكترونية، المؤثرين، الاحتيال، الدفاع الجنائي، العقود، الشركات، الطوارئ الرقمية."
        keywords={[
          'محامي جرائم إلكترونية دبي',
          'محامي مؤثرين دبي',
          'crypto lawyer dubai',
        ]}
        schema={schema}
      />
      <NavBar />
      <PackagesPage />
      <Footer />
    </div>
  )
}
