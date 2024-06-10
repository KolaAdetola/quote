let btn = document.querySelector('#newquote');
let quote = document.querySelector('.quote');
let persons = document.querySelector('.person');

const quotes = [
    {
    quote:`"it does not matter how slowly you go as long as you don't stop"`,
    person:`conficius`
    },
    {
    quote:`"the journey of a thousand miles begins with a single step"`,
    person:`lao Tzu`
    },
    {
    quote:`"sometimes not getting what you want may be a mighty stroke of luck"`,
    person:`Dalai lama`
    },
    {
    quote:`"a word is enough for the wise. but it is never enough for the foolish"`,
    person:`austin ikpe king`
    },
    {
    quote:`"Be yourself; everyone else is already taken."`,
    person:`Oscar Wilde`
    },
    {
    quote:`"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."`,
    person:`Marilyn Monroe`
    },
    {
    quote:`"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."`,
    person:`Albert Einstein`
    },
    
]
btn.addEventListener('click', function () {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    persons.innerText = quotes[random].person;
})
