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
    
]
btn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);

    quote.textContent = quotes[random].quote;
    persons.textContent = quotes[random].person;
})
