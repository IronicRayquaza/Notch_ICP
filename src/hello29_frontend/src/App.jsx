import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="minecraft-landing-page">
      <header className="header">
        <div className="logo">Minecraft</div>
        <nav className="nav">
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#trailers">Trailers</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#buy">Buy Now</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Craft Your Own World</h1>
          <p>Build, survive, and explore in the blocky world of Minecraft.</p>
          <button className="cta-button">Buy Now</button>
        </div>
      </section>

      <section id="features" className="features">
        <h2>Features</h2>
        <div className="feature-list">
          <div className="feature-item">
            <h3>Endless Building</h3>
            <p>Create anything you can imagine, from simple houses to complex redstone machines.</p>
          </div>
          <div className="feature-item">
            <h3>Survival Mode</h3>
            <p>Gather resources, fend off mobs, and build to survive the night.</p>
          </div>
          <div className="feature-item">
            <h3>Multiplayer Fun</h3>
            <p>Join friends or compete in minigames across multiplayer servers.</p>
          </div>
        </div>
      </section>

      <section id="trailers" className="trailers">
        <h2>Trailers</h2>
        <div className="trailer-video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/MmB9b5njVbA" title="Minecraft Official Trailer" frameBorder="0" allowFullScreen></iframe>
        </div>
      </section>

      <section id="reviews" className="reviews">
        <h2>Reviews</h2>
        <div className="review-item">
          <blockquote>"A game that never gets old, always offers something new."</blockquote>
          <cite>- GameSpot</cite>
        </div>
        <div className="review-item">
          <blockquote>"Infinite creativity and exploration in one package."</blockquote>
          <cite>- IGN</cite>
        </div>
        <div className="review-item">
          <blockquote>"A world where your imagination is the only limit."</blockquote>
          <cite>- PC Gamer</cite>
        </div>
      </section>

      <footer id="buy" className="footer">
        <h2>Buy Minecraft Now</h2>
        <p>Available on PC, Xbox, PlayStation, and mobile platforms.</p>
        <button className="cta-button">Purchase Minecraft</button>
      </footer>
    </div>
  );
};

export default App;

