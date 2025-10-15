import { FaShieldAlt, FaBrain, FaLock, FaNetworkWired, FaDatabase, FaSearch } from 'react-icons/fa'

export const projectsData = [
  {
    title: 'PhishGuard Pro',
    description: 'AI-powered phishing detection system using machine learning to identify malicious URLs with 99% precision.',
    tech: ['Python', 'Scikit-learn', 'Flask', 'React'],
    github: 'https://github.com/LordHarshal',
    icon: <FaShieldAlt />,
  },
  {
    title: 'SecureBank Application',
    description: 'Secure banking application with cryptographic hash functions, data flow diagrams, and robust authentication.',
    tech: ['Python', 'PostgreSQL', 'Cryptography', 'JWT'],
    github: 'https://github.com/LordHarshal',
    icon: <FaLock />,
  },
  {
    title: 'Network Packet Analyzer',
    description: 'Real-time network traffic analysis tool for detecting suspicious activities and intrusion attempts.',
    tech: ['Python', 'Scapy', 'Wireshark', 'ML'],
    github: 'https://github.com/LordHarshal',
    icon: <FaNetworkWired />,
  },
  {
    title: 'Threat Intelligence Dashboard',
    description: 'Interactive dashboard for visualizing cybersecurity threats and vulnerabilities using data analytics.',
    tech: ['React', 'D3.js', 'Node.js', 'MongoDB'],
    github: 'https://github.com/LordHarshal',
    icon: <FaBrain />,
  },
  {
    title: 'Password Strength Analyzer',
    description: 'Advanced password strength checker with breach database lookup and entropy calculation.',
    tech: ['Python', 'React', 'APIs', 'Security'],
    github: 'https://github.com/LordHarshal',
    icon: <FaSearch />,
  },
  {
    title: 'Data Warehouse Mining System',
    description: 'Data warehousing solution with OLAP operations, ETL processes, and predictive analytics.',
    tech: ['Python', 'SQL', 'Apache Spark', 'Pandas'],
    github: 'https://github.com/LordHarshal',
    icon: <FaDatabase />,
  },
]
