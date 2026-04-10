const writeups = [
  {
    id: 1,
    title: 'Hidden Admin Panel',
    event: 'PicoCTF 2025',
    category: 'Web',
    difficulty: 'Easy',
    date: '2025-03-11',
    summary: 'Found an admin login page with directory brute force.',
    steps:
      'I started by checking common hidden paths. Then I found an admin route and saw a weak login form. I tested simple SQL payloads and got in. After login, the flag was in the dashboard notes.',
  },
  {
    id: 2,
    title: 'Shift Cipher Warmup',
    event: 'TryHackCTF 2025',
    category: 'Crypto',
    difficulty: 'Easy',
    date: '2025-04-02',
    summary: 'Classic Caesar cipher with a small clue in the prompt.',
    steps:
      'I saw the text looked like a shift cipher. I used CyberChef and tried all shifts quickly. One output read clear English and mentioned the flag format. I copied the decoded text and submitted the flag.',
  },
  {
    id: 3,
    title: 'Lost USB Image',
    event: 'HackDay Quals 2025',
    category: 'Forensics',
    difficulty: 'Medium',
    date: '2025-05-16',
    summary: 'Recovered deleted files from a disk image.',
    steps:
      'I opened the image with Autopsy and checked deleted files. A text file looked important but was partially damaged. I carved it out and cleaned the bad characters. The last line contained the full flag.',
  },
  {
    id: 4,
    title: 'Simple Buffer Smash',
    event: 'College CTF 2025',
    category: 'Pwn',
    difficulty: 'Medium',
    date: '2025-06-09',
    summary: 'Basic stack overflow in a 32-bit binary.',
    steps:
      'I ran the binary and saw it crashed with long input. Using cyclic patterns, I found the exact offset to control EIP. I replaced EIP with the win function address from Ghidra. Running the payload printed the flag.',
  },
  {
    id: 5,
    title: 'Cookie Misuse',
    event: 'Night Owl CTF 2025',
    category: 'Web',
    difficulty: 'Medium',
    date: '2025-07-20',
    summary: 'Session cookie was only base64 and not signed.',
    steps:
      'I logged in as a normal user and looked at cookies. The role value was just base64 encoded JSON. I changed role from user to admin and re-encoded it. Refreshing the page gave admin access and the flag.',
  },
  {
    id: 6,
    title: 'Bad RSA Setup',
    event: 'CryptoSprint 2025',
    category: 'Crypto',
    difficulty: 'Hard',
    date: '2025-08-14',
    summary: 'Weak RSA because two keys reused one prime.',
    steps:
      'I compared the public moduli from two challenge files. Taking gcd of them gave a shared prime immediately. Then I computed phi and the private key with a script. Decrypting the ciphertext revealed the flag text.',
  },
  {
    id: 7,
    title: 'Memory Dump Secrets',
    event: 'BlueTeam Mini CTF 2025',
    category: 'Forensics',
    difficulty: 'Hard',
    date: '2025-09-03',
    summary: 'Extracted credentials and flag from a RAM dump.',
    steps:
      'I used Volatility to list running processes and network connections. One suspicious process had command history in memory. I dumped its memory region and searched for flag strings. The flag was near saved API credentials.',
  },
  {
    id: 8,
    title: 'ret2libc Intro',
    event: 'Binary Bash 2025',
    category: 'Pwn',
    difficulty: 'Hard',
    date: '2025-10-01',
    summary: 'Used return-to-libc when NX blocked shellcode.',
    steps:
      'I confirmed NX was enabled, so injected shellcode would fail. I leaked a libc function address and computed libc base. Then I built a ROP chain calling system with /bin/sh. The shell gave me access to read the flag file.',
  },
]

export default writeups
