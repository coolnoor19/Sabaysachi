export const PROFILE = {
  name: 'Aarav Sharma',
  role: 'Journalist & Storyteller',
  email: 'hello@aaravsharma.com',
  city: 'New Delhi · London',
  bio: 'Eleven years filing dispatches from courtrooms, coalfields, parliaments and locker rooms. Long-form narrative meets investigative rigour.',
  about: [
    'I write the kind of reportage that takes months to earn — long-reads, investigations and field essays. My beat moves between politics, sports and culture, with one foot always in investigative work.',
    'Staff correspondent turned independent. My work appears in the publications I grew up reading. I believe a good question is more dangerous than a loud opinion.',
  ],
};

export const NAV = [
  { num: '01', label: 'Home', href: '#top' },
  { num: '02', label: 'About', href: '#about' },
  { num: '03', label: 'Work', href: '#work' },
  { num: '04', label: 'Awards', href: '#awards' },
  { num: '05', label: 'Contact', href: '#contact' },
];

export const STATS = [
  { v: 240, s: '+', l: 'Bylines published' },
  { v: 11, s: '', l: 'Years on the beat' },
  { v: 32, s: '', l: 'Countries reported from' },
  { v: 9, s: '', l: 'Major awards' },
];

export const ARTICLES = [
  {
    id: 1,
    category: 'Investigative',
    title: 'The Shadow Ledger: Inside a $400M Money-Laundering Web',
    publication: 'The Caravan',
    date: 'May 2025',
    readTime: '18 min',
    image: 'https://images.unsplash.com/photo-1528190240347-03ccaffd0674?w=1200&q=85',
  },
  {
    id: 2,
    category: 'Politics',
    title: 'When the Whip Cracks: How Floor-Crossing Reshaped a State',
    publication: 'The Wire',
    date: 'March 2025',
    readTime: '12 min',
    image: 'https://images.unsplash.com/photo-1613510574898-9c830e5192c5?w=1200&q=85',
  },
  {
    id: 3,
    category: 'Sports',
    title: 'The Final Over: A Bowler\u2019s Last Stand at Eden Gardens',
    publication: 'ESPNcricinfo',
    date: 'February 2025',
    readTime: '9 min',
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1200&q=85',
  },
  {
    id: 4,
    category: 'Culture',
    title: 'After the Festival: Who Owns a City\u2019s Music?',
    publication: 'Scroll',
    date: 'January 2025',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1586074299757-dc655f18518c?w=1200&q=85',
  },
  {
    id: 5,
    category: 'Investigative',
    title: 'Coal & Conscience: A Town Promised the Future',
    publication: 'The Guardian',
    date: 'November 2024',
    readTime: '21 min',
    image: 'https://images.unsplash.com/photo-1581059927910-07e25c7dab80?w=1200&q=85',
  },
];

export const AWARDS = [
  { year: '2025', title: 'Ramnath Goenka Award', category: 'Investigative Reporting' },
  { year: '2024', title: 'Red Ink Award', category: 'Journalist of the Year' },
  { year: '2024', title: 'ICFJ Knight Fellowship', category: 'Cross-Border Investigation' },
  { year: '2023', title: 'PII-ICRC Award', category: 'Humanitarian Reporting' },
  { year: '2022', title: 'Laadli Media Award', category: 'Gender Sensitivity' },
];

export const PUBLICATIONS = [
  'The Guardian', 'The Caravan', 'The Wire', 'Scroll', 'Reuters',
  'BBC', 'Al Jazeera', 'ESPNcricinfo', 'The Hindu', 'Frontline',
];

export const CATEGORIES = [
  { name: 'Investigative', count: 42 },
  { name: 'Politics', count: 68 },
  { name: 'Sports', count: 31 },
  { name: 'Culture & Arts', count: 27 },
  { name: 'Field Notes', count: 14 },
];

export const TAGS = ['Long-form', 'Reportage', 'Profiles', 'Essays', 'Field notes', 'Investigations', 'Interviews'];

export const SOCIALS = [
  { label: 'Twitter / X', handle: '@aaravsharma', href: '#' },
  { label: 'LinkedIn', handle: '/in/aaravsharma', href: '#' },
  { label: 'Instagram', handle: '@aarav.field', href: '#' },
  { label: 'Email', handle: 'hello@aaravsharma.com', href: 'mailto:hello@aaravsharma.com' },
];

export const MANIFESTO = [
  [{ t: '', type: 'p' }, { t: 'Communication', type: 'hi' }, { t: ' is the ', type: 'p' }, { t: 'bridge', type: 'hi' }, { t: ' between truth and the world.', type: 'p' }],
  [{ t: 'A ', type: 'p' }, { t: 'story', type: 'hi' }, { t: ' begins with a ', type: 'p' }, { t: 'question', type: 'hi' }, { t: ' \u2014 and a willing ', type: 'p' }, { t: 'listener', type: 'hi' }, { t: '.', type: 'p' }],
  [{ t: 'In journalism, ', type: 'p' }, { t: 'listening', type: 'hi' }, { t: ' is louder than ', type: 'p' }, { t: 'speaking', type: 'hi' }, { t: '.', type: 'p' }],
  [{ t: 'Words', type: 'hi' }, { t: ' travel further than ', type: 'p' }, { t: 'facts', type: 'hi' }, { t: ' \u2014 so write them carefully.', type: 'p' }],
  [{ t: 'Every dispatch is the ', type: 'p' }, { t: 'first draft of history', type: 'hi' }, { t: '.', type: 'p' }],
];
