// Requirement: React Props - this data is passed to TopicSidebar and LearnPage.
const topics = [
  {
    id: 1,
    name: 'Web Exploitation',
    description:
      'Web exploitation is about finding insecure inputs and broken logic in websites.',
    tools: ['Burp Suite', 'OWASP ZAP', 'curl'],
    example: "curl -i 'http://target.local/login'",
  },
  {
    id: 2,
    name: 'Cryptography',
    description:
      'Cryptography in CTF usually means decoding, weak key attacks, or broken custom ciphers.',
    tools: ['CyberChef', 'RsaCtfTool', 'Python'],
    example: 'python solve.py',
  },
  {
    id: 3,
    name: 'Forensics',
    description:
      'Forensics is about extracting clues from files, memory dumps, and metadata.',
    tools: ['Autopsy', 'Volatility', 'binwalk'],
    example: 'binwalk -e mystery.img',
  },
  {
    id: 4,
    name: 'OSINT',
    description:
      'OSINT uses open public data to find hidden links between people, places, and accounts.',
    tools: ['Sherlock', 'theHarvester', 'Google Dorking'],
    example: 'sherlock target_username',
  },
  {
    id: 5,
    name: 'Reverse Engineering',
    description:
      'Reverse engineering is reading compiled programs to understand what they do.',
    tools: ['Ghidra', 'IDA Free', 'strings'],
    example: 'strings challenge.bin',
  },
  {
    id: 6,
    name: 'Linux Basics',
    description:
      'Linux basics help with file navigation, permissions, and command line workflows.',
    tools: ['grep', 'find', 'chmod'],
    example: "find . -type f | grep 'flag'",
  },
]

export default topics
