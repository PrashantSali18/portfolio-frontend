/**
 * HOW TO ADD A NEW JOB:
 * - Add a new object to the array (newest job first)
 * - Set current: true only for your active role
 * - Add 3–5 bullet points in the `bullets` array
 */
const experience = [
  {
    id: 1,
    role: 'Frontend Developer',
    company: 'Leapot Technologies',
    location: 'Pune, Maharashtra',
    period: 'Jun 2025 – Present',
    current: true,
    type: 'Full-time',
    bullets: [
      "Designed and shipped the company's official production website using React and Tailwind CSS — now the primary digital platform driving client acquisition.",
      'Built CapSure — an internal college admission platform with a 25,000+ record eligibility engine and Razorpay payment integration.',
      'Led UI/UX delivery for a US-based client: managed design iterations, built high-fidelity Figma prototypes, and implemented pixel-perfect component libraries.',
      'Improved frontend performance and cross-browser compatibility through optimization audits and code reviews across multiple products.',
    ],
    skills: ['React.js', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Razorpay', 'Figma'],
  },
  {
    id: 2,
    role: 'Java Full Stack Trainee',
    company: 'QSpiders (TestYantra)',
    location: 'Pune, Maharashtra',
    period: 'Jan 2025 – Jun 2025',
    current: false,
    type: 'Trainee',
    bullets: [
      'Completed intensive full-stack training in Core Java, JDBC, Servlets, JSP, Spring Framework, SQL, HTML/CSS, JavaScript, and React.',
      'Delivered multiple project simulations applying Agile workflows, Git-based version control, and collaborative code reviews.',
      'Gained hands-on experience with OOP design patterns, MVC architecture, database design, and full SDLC cycles.',
    ],
    skills: ['Java', 'Spring Framework', 'SQL', 'JavaScript', 'React', 'Git'],
  },
]

export default experience
