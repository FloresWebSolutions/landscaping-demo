/**
 * ============================================================================
 *  BUSINESS CONFIG: the only file to edit for a new landscaping client site.
 * ============================================================================
 *  Every section, the meta tags and the schema.org JSON-LD are generated from
 *  the `business` object below.
 *
 *  ALL VALUES BELOW ARE SAMPLE DATA. "Alder & Stone Landscape Co." is a
 *  fictional company; the town, address, prices and service area are invented.
 *  555-01xx numbers are reserved for fiction. Keep `demoMode: true` until real
 *  client data is in place (it shows the sample banner and adds noindex).
 * ============================================================================
 */

export type DayKey = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';

/** 24-hour "HH:MM" strings. */
export interface TimeRange {
  open: string;
  close: string;
}

export interface Service {
  id: string;
  name: string;
  summary: string;
  /** Short list of what is included. */
  includes: string[];
  /** Display string, e.g. "From $450". */
  price: string;
}

export type SeasonKey = 'spring' | 'summer' | 'fall' | 'winter';

export interface Season {
  key: SeasonKey;
  name: string;
  /** Calendar months (1-12) used to highlight the current season. */
  months: number[];
  focus: string;
  tasks: string[];
}

export interface Photo {
  /** Path inside /public. */
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Plain caption shown under gallery photos. */
  caption?: string;
}

export interface ImageCredit {
  file: string;
  title: string;
  author: string;
  license: 'CC0 1.0' | 'Public domain' | 'CC BY 2.0' | 'CC BY 3.0' | 'CC BY 4.0';
  licenseUrl: string;
  sourceUrl: string;
}

export interface BusinessConfig {
  demoMode: boolean;
  name: string;
  /** Name without the "(Sample)" suffix, for headings and the wordmark. */
  shortName: string;
  tagline: string;
  description: string;
  siteUrl: string;

  phone: string;
  phoneE164: string;
  email: string;
  address: { street: string; city: string; region: string; postalCode: string; country: string };
  geo: { latitude: number; longitude: number };
  timezone: string;
  officeHours: Record<DayKey, TimeRange[]>;
  priceRange: string;
  currency: string;

  hero: { title: string; lede: string; image: Photo; points: string[] };
  services: Service[];
  servicePhotos: Photo[];
  seasons: Season[];
  serviceArea: { towns: string[]; radiusMiles: number; note: string };
  gallery: Photo[];
  quote: { title: string; lede: string; propertySizes: string[]; timelines: string[] };

  formspreeId: string;
  googleMaps: { embedUrl: string; query: string };
  colors: { primary: string; primaryContrast: string; ink: string; paper: string; surface: string; soft: string };
  imageCredits: ImageCredit[];
  ogImage: string;
  favicon: string;
}

export const FORMSPREE_PLACEHOLDER = 'YOUR_FORMSPREE_ID';

const P = '/images/photos';
const LIC = {
  cc0: 'https://creativecommons.org/publicdomain/zero/1.0/',
  pd: 'https://creativecommons.org/publicdomain/mark/1.0/',
  by2: 'https://creativecommons.org/licenses/by/2.0/',
  by3: 'https://creativecommons.org/licenses/by/3.0/',
  by4: 'https://creativecommons.org/licenses/by/4.0/',
};
const C = 'https://commons.wikimedia.org/wiki/File:';

export const business: BusinessConfig = {
  demoMode: true,

  name: 'Alder & Stone Landscape Co. (Sample)',
  shortName: 'Alder & Stone',
  tagline: 'Garden design, lawn care and stonework for Hollis Ridge and the surrounding valley.',
  description:
    'Alder & Stone is a fictional landscaping company used to demonstrate this website template. It designs and plants gardens, builds patios and walls, and looks after lawns and beds through all four seasons.',
  siteUrl: 'https://landscaping-demo.example.com',

  phone: '(555) 010-0147',
  phoneE164: '+15550100147',
  email: 'hello@example.com',
  address: { street: '418 Example Lane', city: 'Hollis Ridge', region: 'OR', postalCode: '97000', country: 'US' },
  geo: { latitude: 45.0, longitude: -122.9 }, // sample coordinates
  timezone: 'America/Los_Angeles',
  officeHours: {
    monday: [{ open: '07:00', close: '17:00' }],
    tuesday: [{ open: '07:00', close: '17:00' }],
    wednesday: [{ open: '07:00', close: '17:00' }],
    thursday: [{ open: '07:00', close: '17:00' }],
    friday: [{ open: '07:00', close: '17:00' }],
    saturday: [{ open: '08:00', close: '12:00' }],
    sunday: [],
  },
  priceRange: '$$',
  currency: 'USD',

  hero: {
    title: 'Gardens that look settled in by the first summer.',
    lede: 'We design, plant and build outdoor spaces for homes across the valley, then keep them healthy season after season with the same small crew.',
    image: {
      src: `${P}/hero-border.webp`,
      alt: 'A gravel path running between deep perennial borders in full summer flower',
      width: 2000,
      height: 1500,
    },
    points: ['Free on-site estimates', 'Written quotes within 3 business days', 'Year-round care plans'],
  },

  services: [
    {
      id: 'design',
      name: 'Garden design & planting',
      summary: 'A planting plan drawn for your soil, light and the time you want to spend in the garden, installed by our crew.',
      includes: ['Site visit and soil test', 'Scaled planting plan', 'Bed preparation and planting', 'First-season watering guide'],
      price: 'From $1,800',
    },
    {
      id: 'hardscape',
      name: 'Patios, paths & walls',
      summary: 'Flagstone, pavers and dry-laid stone built on a properly compacted base, so they stay level for decades.',
      includes: ['Excavation and drainage', 'Compacted gravel base', 'Stone or paver laying', 'Low retaining walls and steps'],
      price: 'From $4,500',
    },
    {
      id: 'lawn',
      name: 'Lawn care',
      summary: 'Weekly or fortnightly mowing, edging and feeding, with aeration and overseeding when the lawn needs it.',
      includes: ['Mowing and edging', 'Seasonal feeding', 'Core aeration', 'Overseeding and repair'],
      price: 'From $55 a visit',
    },
    {
      id: 'beds',
      name: 'Bed care & mulching',
      summary: 'Weeding, pruning, dividing and fresh mulch to keep established beds tidy and the soil in good heart.',
      includes: ['Weeding and deadheading', 'Shrub and perennial pruning', 'Dividing overgrown clumps', 'Bark or compost mulch'],
      price: 'From $240 a visit',
    },
    {
      id: 'edible',
      name: 'Raised beds & kitchen gardens',
      summary: 'Cedar raised beds filled with a blended growing mix, laid out for easy reach and drip watering.',
      includes: ['Untreated cedar beds', 'Growing mix delivered and filled', 'Gravel or bark paths', 'Optional drip irrigation'],
      price: 'From $950',
    },
    {
      id: 'irrigation',
      name: 'Irrigation & drainage',
      summary: 'Drip lines for beds, zoned sprinklers for lawns, and French drains where water sits after rain.',
      includes: ['System design and install', 'Spring start-up checks', 'Fall winterizing', 'French drains and dry wells'],
      price: 'From $650',
    },
  ],
  servicePhotos: [
    {
      src: `${P}/flagstone-patio.webp`,
      alt: 'Yellow-flowering groundcover spilling over the edge of a flagstone patio',
      width: 1400,
      height: 1050,
    },
    {
      src: `${P}/lawn-mowing.webp`,
      alt: 'A walk-behind mower cutting a lush green lawn on a sunny day',
      width: 1400,
      height: 931,
    },
  ],

  seasons: [
    {
      key: 'spring',
      name: 'Spring',
      months: [3, 4, 5],
      focus: 'Planting season and the first cut.',
      tasks: ['New beds and planting', 'Irrigation start-up', 'Lawn feed and overseeding', 'Fresh mulch on all beds'],
    },
    {
      key: 'summer',
      name: 'Summer',
      months: [6, 7, 8],
      focus: 'Steady care while the garden does the work.',
      tasks: ['Weekly mowing', 'Deadheading and weeding', 'Patio and path builds', 'Watering checks during heat'],
    },
    {
      key: 'fall',
      name: 'Fall',
      months: [9, 10, 11],
      focus: 'The best time to plant trees and fix the lawn.',
      tasks: ['Tree and shrub planting', 'Leaf cleanups', 'Core aeration', 'Irrigation winterizing'],
    },
    {
      key: 'winter',
      name: 'Winter',
      months: [12, 1, 2],
      focus: 'Structural work and next year’s plans.',
      tasks: ['Dormant pruning', 'Design consultations', 'Drainage repairs', 'Storm cleanup on call'],
    },
  ],

  serviceArea: {
    towns: ['Hollis Ridge', 'Cedar Hollow', 'Linden Falls', 'Marrow Creek', 'North Fairbank', 'Oakmere', 'Pell City Heights', 'Willet Valley'],
    radiusMiles: 25,
    note: 'Outside these towns? Call us. We take on design and hardscape projects further afield.',
  },

  gallery: [
    { src: `${P}/arley-border.webp`, alt: 'A wide lawn walk between two long herbaceous borders', width: 1400, height: 1050, caption: 'Double herbaceous border' },
    { src: `${P}/hydrangea-beds.webp`, alt: 'White hydrangeas planted in mulched beds under tall pines', width: 1400, height: 933, caption: 'Woodland shade planting' },
    { src: `${P}/front-yard-garden.webp`, alt: 'Mature trees shading a front lawn and garden on a quiet residential street', width: 1400, height: 933, caption: 'Front garden and tree care' },
    { src: `${P}/raised-beds.webp`, alt: 'Wooden raised vegetable beds beside a red garden shed', width: 1400, height: 1050, caption: 'Raised kitchen garden' },
    { src: `${P}/petworth-border.webp`, alt: 'A mixed border planted along the foot of an ivy-covered stone house', width: 1400, height: 1050, caption: 'Foundation border' },
    { src: `${P}/kale-beds.webp`, alt: 'Rows of kale and cabbage growing in raised beds', width: 1400, height: 932, caption: 'Edible beds in fall' },
    { src: `${P}/front-lawn.webp`, alt: 'A front lawn crossed by a paved path, with purple irises in the foreground', width: 1400, height: 1050, caption: 'Lawn and border renovation' },
  ],

  quote: {
    title: 'Request a quote',
    lede: 'Tell us a little about the property and what you have in mind. We will call to book a free on-site visit, usually within two business days.',
    propertySizes: ['Small (under 2,500 sq ft)', 'Medium (2,500 to 7,500 sq ft)', 'Large (7,500 sq ft to 1 acre)', 'Over 1 acre', 'Not sure'],
    timelines: ['As soon as possible', 'Within 1 to 3 months', 'Next season', 'Just planning for now'],
  },

  formspreeId: FORMSPREE_PLACEHOLDER,
  googleMaps: { embedUrl: '', query: '' },

  colors: {
    primary: '#2f6a3a',
    primaryContrast: '#fbfcf8',
    ink: '#18261d',
    paper: '#f3f5ee',
    surface: '#fbfcf8',
    soft: '#dfe8d6',
  },

  imageCredits: [
    { file: 'hero-border.webp', title: 'Herbaceous Border Hoveton Hall Gardens', author: 'Northmetpit', license: 'CC0 1.0', licenseUrl: LIC.cc0, sourceUrl: `${C}Herbaceous_Border_Hoveton_Hall_Gardens.JPG` },
    { file: 'arley-border.webp', title: 'Arley Hall, Herbaceous Border', author: 'PJMarriott', license: 'CC BY 3.0', licenseUrl: LIC.by3, sourceUrl: `${C}Arley_Hall_-_Herbaceous_Border_-_panoramio.jpg` },
    { file: 'flagstone-patio.webp', title: 'Potentilla nana around flagstone patio', author: 'Patrick Standish', license: 'CC BY 2.0', licenseUrl: LIC.by2, sourceUrl: `${C}Potentilla_nana_around_flagstone_patio_(19902497671).jpg` },
    { file: 'lawn-mowing.webp', title: 'Mowing a lush green lawn on a sunny day in a residential garden', author: 'Shixart1985', license: 'CC BY 2.0', licenseUrl: LIC.by2, sourceUrl: `${C}Mowing_a_lush_green_lawn_on_a_sunny_day_in_a_residential_garden.jpg` },
    { file: 'hydrangea-beds.webp', title: 'Birmingham Botanical Gardens, Birmingham, Alabama', author: 'Carol M. Highsmith (Library of Congress)', license: 'Public domain', licenseUrl: LIC.pd, sourceUrl: `${C}Birmingham_Botanical_Gardens,_Birmingham,_Alabama_LCCN2010639283.tif` },
    { file: 'front-yard-garden.webp', title: 'Front yard garden, Ann Arbor, Michigan', author: 'Dwight Burdette', license: 'CC BY 3.0', licenseUrl: LIC.by3, sourceUrl: `${C}Front_yard_garden,_1415_Packard_Street,_Ann_Arbor,_Michigan_-_panoramio.jpg` },
    { file: 'raised-beds.webp', title: 'Educational garden with raised beds and shed, Lafayette, Colorado', author: 'Mikepascoe', license: 'CC0 1.0', licenseUrl: LIC.cc0, sourceUrl: `${C}Peak_to_Peak_Charter_School_educational_garden_with_raised_beds_and_shed,_Lafayette,_Colorado,_USA_-_2025.jpg` },
    { file: 'petworth-border.webp', title: 'Herbaceous Border in Petworth Park', author: 'Leimenide', license: 'CC BY 2.0', licenseUrl: LIC.by2, sourceUrl: `${C}Herbaceous_Border_in_Petworth_Park.jpg` },
    { file: 'kale-beds.webp', title: 'Kale and Cabbage in Raised Garden Beds', author: 'Alabama Extension', license: 'CC0 1.0', licenseUrl: LIC.cc0, sourceUrl: `${C}Kale_and_Cabbage_in_Raised_Garden_Beds_(49200262267).jpg` },
    { file: 'front-lawn.webp', title: 'Front lawn', author: 'Sancho McCann', license: 'CC BY 2.0', licenseUrl: LIC.by2, sourceUrl: `${C}Front_lawn_(2695261310).jpg` },
  ],

  ogImage: '/images/og-image.jpg',
  favicon: '/favicon.svg',
};
