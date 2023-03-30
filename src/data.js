const data = [
  {
    id: '6425a14839082499067e4f77',
    title: 'Which Country is it?',
    question: 'In front of you is an image of a socket, but can you identify which is it from?',
    hint: 'Maybe try opening Yandex, you might find something there',
    points: 100,
  },
  {
    id: '6425a1c039082499067e4f7a',
    title: 'Conceptual-Art',
    question: 'Find the object hidden in the autostereogram',
    hint: 'wctf{name of object in painting}',
    points: 100,
  },
  {
    id: '6425a1e439082499067e4f7c',
    title: 'We will rock you',
    question: 'Hey! Heres the code for your free tickets to the rock concert! I just cant remember what I made the password.',
    hint: 'the name heavily suggests a wordlist to try',
    points: 100,
  },
  {
    id: '6425a1ec39082499067e4f7e',
    title: 'Free Gift',
    question: 'Participants are given a base64 encoded string they need to decode it to get the flag.',
    hint: 'do base64 decoding',
    points: 100,
  },
  {
    id: '6425a2b239082499067e4f80',
    title: 'Vignere Cypher',
    question: 'Youve intercepted a message from a competitor, which appears to be encoded using a Vigenere cipher. However, you do not know the key. Can you crack the code and reveal the original message?',
    hint: 'In order to ascertain the specific keyword that pertains to our event, it is imperative that one possesses knowledge of the identity of the sponsoring entity.',
    points: 100,
  },
  {
    id: '6425a3f339082499067e4f82',
    title: 'Text Editor batch file',
    question: 'The flag is inside this Windows Batch file.',
    hint: 'Strings is faster than restarting your computer.',
    points: 100,
  },
  {
    id: '6425a3fa39082499067e4f84',
    title: 'PythonProtected',
    question: 'Heres a simple Python program. Whats the password?',
    hint: 'The flag is right before your eyes. Can you see it….?',
    points: 100,
  },
  {
    id: '6425a47d39082499067e4f86',
    title: 'Whack-a-Mole',
    question: 'In front of you is a web page, but there is more than meets the eye. Can you spot the flag in this mysterious webpage?',
    hint: 'Inspect the source code of the web page.Look for any JavaScript files used by the game',
    points: 100,
  },
];

const startTime = new Date('March 31 2023 00:46').getTime();
const questionTime = 1;
const numberOfQuestions = 8;

export default data;
export { startTime, questionTime, numberOfQuestions };
