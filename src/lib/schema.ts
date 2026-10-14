import { business } from '../config/business';
import { DAYS, absoluteUrl } from './utils';

/** schema.org HomeAndConstructionBusiness (a LocalBusiness subtype) built from the config. */
export function buildBusinessSchema() {
  const id = `${business.siteUrl}/#business`;
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': id,
    name: business.name,
    description: business.description,
    url: business.siteUrl,
    telephone: business.phoneE164,
    email: business.email,
    image: [absoluteUrl(business.ogImage), absoluteUrl(business.hero.image.src)],
    logo: absoluteUrl(business.favicon),
    priceRange: business.priceRange,
    currenciesAccepted: business.currency,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: business.geo.latitude, longitude: business.geo.longitude },
    areaServed: business.serviceArea.towns.map((t) => ({ '@type': 'City', name: `${t}, ${business.address.region}` })),
    openingHoursSpecification: DAYS.flatMap((d) =>
      business.officeHours[d.key].map((r) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: d.schema,
        opens: r.open,
        closes: r.close,
      })),
    ),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Landscaping services',
      itemListElement: business.services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.name, description: s.summary, provider: { '@id': id } },
      })),
    },
  };
}

/** Safe for embedding inside <script type="application/ld+json">. */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
