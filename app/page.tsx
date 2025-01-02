import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <section className="hero py-20">
        <h1 className="text-4xl font-bold mb-4">
          Willkommen bei Bestofferten
        </h1>
        <p className="text-xl mb-8">
          Ihr zuverlässiger Partner für Umzug und mehr
        </p>
      </section>

      <section className="services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: 'Umzug',
            description: 'Professionelle Umzugsservices für Private und Firmen',
            href: '/dienstleistungen/umzug'
          },
          {
            title: 'Reinigung',
            description: 'Gründliche End- und Unterhaltsreinigung',
            href: '/dienstleistungen/reinigung'
          },
          {
            title: 'Räumung',
            description: 'Komplette Räumung von Wohnungen und Häusern',
            href: '/dienstleistungen/raeumung'
          },
          {
            title: 'Lagerung',
            description: 'Sichere Lagerung Ihrer Möbel und Gegenstände',
            href: '/dienstleistungen/lagerung'
          },
          {
            title: 'Klaviertransport',
            description: 'Fachgerechter Transport von Klavieren und Flügeln',
            href: '/dienstleistungen/klaviertransport'
          },
          {
            title: 'Möbellift mieten',
            description: 'Möbellift-Vermietung für effiziente Umzüge',
            href: '/dienstleistungen/moebellift'
          }
        ].map((service, index) => (
          <Link 
            key={index} 
            href={service.href}
            className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
            <p>{service.description}</p>
          </Link>
        ))}
      </section>
    </div>
  )
}
