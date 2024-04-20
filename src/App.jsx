import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import {Container} from 'bootstrap';
// import icons8 from './assets/icons8-twitterx.svg';
import Icon from "./assets/Icon";
import { useState } from "react";

const quotes = [
  {
    quote: "If the wind will not serve, take to the oars.",
    author: "Latin Proverb",
    color: "#E7E247",
  },
  {
    quote: "Definiteness of purpose is the starting point of all achievement.",
    author: "W. Clement Stone",
    color: "#3D3B30",
  },
  {
    quote: "Either you run the day, or the day runs you.",
    author: "Jim Rohn",
    color: '#4D5061'
  },
  {
    quote:
      "It’s not the years in your life that count. It’s the life in your years.",
    author: "Abraham Lincoln",
    color: '#5C80BC'
  },
  {
    quote:
      "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
    author: "Michael Jordan",
    color: '#E9EDDE'
  },
  {
    quote: "Whatever the mind of man can conceive and believe, it can achieve.",
    author: "Napoleon Hill",
    color: '#6E0D25'
  },
  {
    quote:
      "Teach thy tongue to say, “I do not know,” and thous shalt progress.",
    author: "Maimonides",
    color: '#FFFFB3'
  },
];

function App() {
  const randomQuoteGenerator = () => quotes[Math.floor(Math.random() * quotes.length)] ;
  const [randomQuote, setRandomQuote] = useState(randomQuoteGenerator)
  const clickHandler = ( ) => {
    setRandomQuote(randomQuoteGenerator)
  }
  return (
    <>
      <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: "100vh", backgroundColor: randomQuote.color }}>
        <div
          className="d-flex flex-column justify-content-between align-items-center mh-50 text-center w-50 p-4"
          id="quote-box"
          style={{backgroundColor: "#FFFFFF"}}
          >
          <blockquote className="blockquote" style={{color: randomQuote.color}}>
          <p id="text" className="mb-0 fs-1">
            {randomQuote.quote}
          </p>
            </blockquote>
          <h3 id="author" style={{color: randomQuote.color}}>{randomQuote.author}</h3>
          <a target="_blank" id='tweet-quote' href="https://www.twitter.com/intent/tweet">
            <Icon color={randomQuote.color} />
          </a>
          <button style={{backgroundColor: randomQuote.color, color: '#FFFFFF'}} className="btn btn-lg w-25" id="new-quote" onClick={clickHandler}>Next Quote</button>
        </div>
      </div>
    </>
  );
}

export default App;
