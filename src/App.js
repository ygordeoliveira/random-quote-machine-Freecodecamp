import './App.css';
import React, { Component } from 'react';

class RandomQuoteMachine extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: [
        {
          text: "Life isn’t about getting and having, it’s about giving and being.",
          author: "Kevin Kruse",
        },
        {
          text: "Whatever the mind of man can conceive and believe, it can achieve.",
          author: "Napoleon Hill",
        },
        {
          text: "Strive not to be a success, but rather to be of value.",
          author: "Albert Einstein",
        },
        {
          text: "All that glitters is not gold.",
          author: "William Shakespeare",
        },
        {
          text: "Ask not what your country can do for you; ask what you can do for your country.",
          author: "John Kennedy",
        },
        {
          text: "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.",
          author: "Jesus",
        },
        {
          text: "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.",
          author: "Martin Luther King",
        },
        {
          text: "You must be the change you wish to see in the world.",
          author: "Mahatma Gandhi",
        },
      ],
      colors: [
        "#007bff", // Azul
        "#28a745", // Verde
        "#dc3545", // Vermelho
        "#ffc107", // Amarelo
        "#5F9EA0", // Azul escuro
        "#800080", // Roxo
        "#7FFF00"  // Verde Claro
      ],
      currentQuoteIndex: 0,
      currentColorIndex: 0,
    };
  }

  getRandomIndex(currentIndex, maxIndex) {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * maxIndex);
    } while (randomIndex === currentIndex);
    return randomIndex;
  }

  getNewQuote = () => {
    this.setState((prevState) => ({
      currentQuoteIndex: this.getRandomIndex(prevState.currentQuoteIndex, prevState.quotes.length),
      currentColorIndex: this.getRandomIndex(prevState.currentColorIndex, prevState.colors.length),
    }));
  };

  render() {
    const { quotes, colors, currentQuoteIndex, currentColorIndex } = this.state;
    const currentQuote = quotes[currentQuoteIndex];
    const currentColor = colors[currentColorIndex];

    return (
      <div className="container py-5 text-center" style={{ backgroundColor: "#fff", color: currentColor }}>
        <blockquote className="blockquote">
          <p id="quote-text">"{currentQuote.text}"</p>
          <footer className="blockquote-footer" style={{ color: currentColor }}>{currentQuote.author}</footer>
        </blockquote>

        <div className="d-flex justify-content-between">
          <div className="icons">
            <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%3Flang%3Dpt" className="button" id="tweet-quote" title="Tweet this quote!" target="_top">
              <i className="fa-brands fa-square-twitter"></i>
            </a>
            <a href="https://www.tumblr.com/login?language=en" className="button" id="tumblr-quote" title="Post this quote on tumblr!" target="_blank">
              <i className="fa-brands fa-square-tumblr"></i>
            </a>
          </div>
          <button className="btn bg-secondary text-white" onClick={this.getNewQuote}>
            New quote
          </button>
        </div>
      </div>
    );
  }
}

export default RandomQuoteMachine;
