import { LINKS } from '@/utils/constants'

/**
 * HOW TO ADD A NEW PROJECT:
 * 1. Copy one of the objects below
 * 2. Fill in all fields
 * 3. Set type: 'personal' | 'work'
 * 4. Set liveUrl / githubUrl to null if not available
 * 5. Save — it appears on the site automatically
 */
const projects = [
  {
    id: 1,
    name: 'DevConnect',
    tagline: 'Developer Collaboration Platform',
    description:
      'A full-stack developer social platform with 40+ REST API endpoints, Swagger documentation, and a complete auth system supporting JWT sessions and Google/GitHub OAuth 2.0 via Passport.js. Real-time notifications, media uploads, and transactional email flows.',
    type: 'personal',           // 'personal' | 'work'
    status: 'live',             // 'live' | 'in-progress' | 'private'
    tags: ['React', 'Node.js', 'MongoDB', 'Redux Toolkit', 'OAuth 2.0', 'Socket.io'],
    highlights: ['40+ REST APIs', 'OAuth 2.0', 'Real-time Socket.io', 'Swagger Docs'],
    liveUrl: LINKS.devconnect,
    githubUrl: LINKS.github,
    featured: true,
  },
  {
    id: 2,
    name: 'WorkLog Enterprise',
    tagline: 'Engineering Team Work Tracker',
    description:
      'A Spring Boot 3.x + React work-log system with a five-tier role hierarchy (Engineer → Tech Lead → Manager → Director → Admin) enforced via Spring Security. Firebase Authentication with a custom FirebaseTokenFilter for stateless JWT validation. JPA/Hibernate with MySQL.',
    type: 'personal',
    status: 'in-progress',
    tags: ['Spring Boot', 'Java 21', 'Spring Security', 'Firebase', 'MySQL', 'React'],
    highlights: ['5-Tier RBAC', 'Firebase JWT', 'Spring Security', 'JPA/Hibernate'],
    liveUrl: null,
    githubUrl: LINKS.github,
    featured: true,
  },
  {
    id: 3,
    name: 'CapSure',
    tagline: 'Maharashtra College Admission Platform',
    description:
      'Internal product at Leapot Technologies. A percentile-based eligibility engine processing 25,000+ historical CAP round cutoff records. Monetised via Razorpay with HMAC signature verification. Full admin panel, lead CRM, and counsellor booking system.',
    type: 'work',
    status: 'live',
    tags: ['React', 'Node.js', 'MongoDB', 'Razorpay', 'Express.js'],
    highlights: ['25,000+ Records', 'Razorpay HMAC', 'Lead CRM', 'Admin Panel'],
    liveUrl: null,
    githubUrl: null,
    featured: true,
  },
  {
    id: 4,
    name: 'E.V.A.',
    tagline: 'Voice-Activated AI Assistant',
    description:
      'A browser-based AI assistant with Web Speech API voice recognition, text-to-speech output, and AI-generated responses via LLM integration. Scalable Express backend handling parallel calls to news, Wikipedia, and AI APIs with response normalization.',
    type: 'personal',
    status: 'live',
    tags: ['React', 'Node.js', 'Web Speech API', 'REST APIs', 'MongoDB'],
    highlights: ['Voice Recognition', 'Text-to-Speech', 'LLM Integration', 'Multi-API'],
    liveUrl: null,
    githubUrl: LINKS.github,
    featured: false,
  },
]

export default projects
