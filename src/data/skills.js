/**
 * HOW TO ADD A SKILL:
 * - Find the right category below
 * - Add the skill name to the `items` array
 * - It renders automatically
 *
 * HOW TO ADD A NEW CATEGORY:
 * - Add a new object with { category, icon, color, items }
 */
const skills = [
  {
    category: "Frontend",
    icon: "⚛️",
    color: "cyan",
    items: [
      "React.js",
      "Redux Toolkit",
      "Vite",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Framer Motion",
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    color: "accent",
    items: [
      "Spring Boot 3.x",
      "Java 21",
      "Node.js",
      "Express.js",
      "Spring Security",
      "Maven",
      "REST API Design",
      "MVC Architecture",
    ],
  },
  {
    category: "Auth & Security",
    icon: "🔐",
    color: "violet",
    items: [
      "JWT",
      "OAuth 2.0",
      "Firebase Authentication",
      "Passport.js",
      "HMAC Verification",
      "Spring Security",
    ],
  },
  {
    category: "Databases",
    icon: "🗄️",
    color: "cyan",
    items: [
      "MongoDB Atlas",
      "MySQL",
      "PostgreSQL",
      "JPA / Hibernate",
      "Mongoose",
    ],
  },
  {
    category: "Integrations",
    icon: "🔌",
    color: "accent",
    items: [
      "Razorpay",
      "Cloudinary",
      "Socket.io",
      "Nodemailer",
      "Swagger / OpenAPI",
      "Firebase",
    ],
  },
  {
    category: "Tools",
    icon: "🛠️",
    color: "violet",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "Figma",
      "VS Code",
      "IntelliJ IDEA",
      "Agile / Scrum",
    ],
  },
];

export default skills;
