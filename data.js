const data = [
  {
    id: '6425a14839082499067e4f77',
    title: 'Which Country is it?',
    question: 'In front of you is an image of a socket, but can you identify which country is it from?',
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
  {
    id: '642706ec4e6a7542aabd7793',
    title: 'Reverxor',
    question: 'You are given a python file ,a png image and a number ,you need to reverse this xor operation to get original image with the flag inside.',
    hint: 'Maybe try some reverse engineering for the XOR code…',
    points: 100,
  },
  {
    id: '64270b3e4e6a7542aabd7795',
    title: 'Python Input Validator',
    question: 'The program takes an input and returns the flag, can you guess the input?',
    hint: 'The program uses a conditional statement to check if the input is a number.',
    points: 100,
  },
  {
    id: '64270d7c4e6a7542aabd7797',
    title: 'File Formatting',
    question: ' There is a bin file which has the key but the formatting of file is such that even after the format conversion you need to convert the datas format too to read the file. Ans is a word',
    hint: 'text is written in ASCII',
    points: 100,
  },
  {
    id: '6427100d4e6a7542aabd7799',
    title: 'C Program Flag',
    question: 'This challenge gives a simple C program and expects you to find that flag. Running the file asks for a password, and if supplied the wrong answer, quits.',
    hint: 'Try using bintext',
    points: 100,
  },
  {
    id: '642713c34e6a7542aabd779b',
    title: 'Cryptography Decipher',
    question: 'You are investigating a group of hackers who are planning to execute a cyber attack on a company. Your team intercepted a message sent by the hackers, but its encrypted in caesar cipher. You need to decrypt the message to find out the details of the planned attack.',
    hint: '1) The message is encrypted using a simple substitution cipher where each letter of the original message is replaced by a different letter of the alphabet.  \n 2) The encryption key used for the message is a Caesar cipher with a shift of 1.\n 3) To solve the challenge, you will need to decrypt the message using the Caesar cipher with a shift of 1.',
    points: 100,
  },
  {
    id: '6427182a4e6a7542aabd779d',
    title: 'Image Analyzer',
    question: 'Participants will be given a pcap file, and they need to export the transferred file using wireshark ,which is an image then they need to identify the hidden flag by analyzing the image using steganographic decoder and then decode the base64 string.',
    hint: 'using wireshark open the pcap file do to File>Export objects>FTP-DATA then download the image and use stego then decode',
    points: 100,
  },
  {
    id: '64271aee4e6a7542aabd779f',
    title: 'Bit-Shifting',
    question: 'Find the flag in this Hex document using a hex editor!',
    hint: 'If you are having trouble with this bit, shift your focus.',
    points: 100,
  },
];

const startTime = new Date('February 29 2024 23:35').getTime();
const questionTime = 10;
const numberOfQuestions = 10;

export default data;
export { startTime, questionTime, numberOfQuestions };
