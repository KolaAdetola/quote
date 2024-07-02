let btn = document.querySelector('#newquote');
let quote = document.querySelector('.quote');
let persons = document.querySelector('.person');

const quotes = [
    {
        quote:`it does not matter how slowly you go as long as you don't stop`,
        person:`conficius`
    },
    {
        quote:`the journey of a thousand miles begins with a single step`,
        person:`lao Tzu`
    },
    {
        quote:`sometimes not getting what you want may be a mighty stroke of luck`,
        person:`Dalai lama`
    },
    {
        quote:`a word is enough for the wise. but it is never enough for the foolish`,
        person:`austin ikpe king`
    },
    {
        quote:`Be yourself; everyone else is already taken.`,
        person:`Oscar Wilde`
    },
    {
        quote:`I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.`,
        person:`Marilyn Monroe`
    },
    {
        quote:`Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.`,
        person:`Albert Einstein`
    },
    {
        quote: "In our society, letting others find out that you're a nice person is a very risky move. It's extremely likely that someone would take advantage of that.",
        person: "Hitagi Senjougahara"
    },
    {
        quote: "To know sorrow is not terrifying. What is terrifying is to know you can't go back to happiness you could have.",
        person: "Matsumoto Rangiku"
    },
    {
        quote: "When you have to deal with a beast, you have to treat him as a beast.",
        person: "Sebastian Michaelis"
    },
    {
        quote: "If you don’t share someone’s pain, you can never understand them.",
        person: "Nagato"
    },
    {
        quote: "People's lives don't end when they die. It ends when they lose faith.",
        person: "Itachi Uchiha"
    },
    {
        quote: "If you don’t take risks, you can’t create a future!",
        person: "Monkey D. Luffy"
    },
    {
        quote: "Power comes in response to a need, not a desire. You have to create that need.",
        person: "Goku"
    },
    {
        quote: `It's not the face that makes someone a monster; it's the choices they make with their lives.`,
        person: "Naruto Uzumaki"
    },
    {
        quote: `Many of life’s failures are people who did not realize how close they were to success when they gave up.`,
        person:`Thomas A. Edison`,
    },
    {
        quote: `You only live once, but if you do it right, once is enough.`,
        person:`Mae West`,
    },
    {
        quote: `Get busy living or get busy dying.`,
        person:` Stephen King`,
    },
    {
        quote: `Money and success don’t change people; they merely amplify what is already there.`,
        person:`Will Smith`,
    },
    {
        quote: `Not how long, but how well you have lived is the main thing.`,
        person:`Seneca`,
    },
    {
        quote: "The only limit to our realization of tomorrow is our doubts of today.",
        person: "Franklin D. Roosevelt"
    },
    {
        quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        person: "Martin Luther King Jr."
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        person: "John Lennon"
    },
    {
        quote: "The purpose of our lives is to be happy.",
        person: "Dalai Lama"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        person: "Winston Churchill"
    },
    {
        quote: "It is our choices that show what we truly are, far more than our abilities.",
        person: "J.K. Rowling"
    },
    {
        quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
        person: "Buddha"
    },
    {
        quote: "The best way to predict the future is to invent it.",
        person: "Alan Kay"
    },
    {
        quote: "You must be the change you wish to see in the world.",
        person: "Mahatma Gandhi"
    },
    {
        quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        person: "Ralph Waldo Emerson"
    },
    {
        quote: "I have not failed. I've just found 10,000 ways that won't work.",
        person: "Thomas Edison"
    },
    {
        quote: "The only way to do great work is to love what you do.",
        person: "Steve Jobs"
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        person: "Nelson Mandela"
    },
    {
        quote: "The only thing we have to fear is fear itself.",
        person: "Franklin D. Roosevelt"
    },
    {
        quote: "Imagination is more important than knowledge.",
        person: "Albert Einstein"
    },
    {
        quote:`in this life everything is based on reps`,
        person:`martins danladi`
    }
]
btn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    
    quote.textContent = quotes[random].quote;
    persons.textContent = quotes[random].person;
})
