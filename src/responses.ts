const responses: string[] = [
    'Nice champ',
    'Boys lads',
    'Jheez',
    'He’s malding',
    'Bet',
    'Imagine reloading',
    'Ok boomer',
    'Prrrrrr',
    'Bruh',
    'Lowe me',
    'It\'s blessed',
    'Don\'t lose',
    'They’re insecure!',
    'Time for my patented Gragas support',
    'I’m yamikaze',
    'Check out my new tech',
    'Can’t end on a loss',
    'Nice ability'
];

export function getRandomResponse(): string {
    return responses[Math.floor(Math.random() * responses.length)];
}
