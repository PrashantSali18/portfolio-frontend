import { LINKS, SITE } from '@/utils/constants'
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'

/**
 * HOW TO ADD A SOCIAL LINK:
 * - Add a new object below
 * - Import the icon from react-icons/fi
 */
const socials = [
  {
    id: 'github',
    label: 'GitHub',
    value: 'PrashantSali18',
    href: LINKS.github,
    icon: FiGithub,
    color: '#fff',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'prashsali18',
    href: LINKS.linkedin,
    icon: FiLinkedin,
    color: '#0A66C2',
  },
  {
    id: 'email',
    label: 'Email',
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    icon: FiMail,
    color: '#7c5cfc',
  },
  {
    id: 'phone',
    label: 'Phone',
    value: SITE.phone,
    href: `tel:${SITE.phone}`,
    icon: FiPhone,
    color: '#22d3ee',
  },
]

export default socials
