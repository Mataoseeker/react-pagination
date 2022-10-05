import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  //set up our state
  const [currentPosition, setCurrentPosition] = useState(0);
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [listItems, setListItems] = useState([]);

  //set our initial state
  useEffect(() => {
    //list news items
    const newsItems = [
      {
        title: 'BBC News',
        url: 'https://www.bbc.com/news',
        description: 'Latest News from BBC',
      },
      {
        title: 'CNN News',
        url: 'https://www.cnn.com/',
        description: 'Latest News from CNN',
      },
      {
        title: 'Google News',
        url: 'https://www.google.com/',
        description: 'Latest News from Google',
      },
      {
        title: 'TechCrunch',
        url: 'https://www.techcrunch.com',
        description: 'Latest News from TechCrunch',
      },
      {
        title: 'The Verge',
        url: 'https://www.theverge.com/',
        description: 'Latest News from The Verge',
      },
    ];

    const item = newsItems[currentPosition];

    //set state...
    setListItems(newsItems);
    //set our state
    setNews(item);
    setLoading(false);
  }, [currentPosition]);

  //handle next button click
  const handleNext = (event) => {
    event.preventDefault();
    //update our state
    const length = listItems.length;
    const count = length - 1;
    if (currentPosition < count) {
      setCurrentPosition(currentPosition + 1);
    } else {
      currentPosition(0);
    }
  };

  //handle previous button click
  const handlePrevious = (event) => {
    event.preventDefault();
    //update our state

    if (currentPosition > 0) {
      setCurrentPosition((prev) => prev - 1);
    } else {
      setCurrentPosition(0);
    }
  };

  return (
    <section className="main-container">
      <section className="news">
        {loading ? (
          <div> loading </div>
        ) : (
          <div className="news-item">
            <h2>{news.title} </h2>
            <p> {news.description} </p>
            <a href={news.url}>{news.url} </a>
          </div>
        )}
      </section>
      <div className="paginate">
        <button className="prev" onClick={handlePrevious}>
          Previous
        </button>
        <button className="next" onClick={handleNext}>
          Next
        </button>
      </div>
    </section>
  );
}
