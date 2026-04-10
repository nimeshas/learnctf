import { useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  useEffect(() => {
    document.title = "CTFGuide | Home";
  }, []);

  return (
    <div className="page">
      <div className="hero" style={{ width: '600px', margin: '8px auto 28px' }}>
        <span className="tag">$ welcome</span>
        <h1 className="hero-title" style={{ fontSize: '76px', lineHeight: '78px', margin: '18px 0 10px' }}>
          CTFGuide
        </h1>
        <h2
          className="hero-text"
          style={{ fontSize: '38px', lineHeight: '46px', margin: '0 0 22px' }}
        >
          Beginner Learning Hub
        </h2>

        <span className="tag">
          CTFGuide is a simple learning app for beginners who want to practice
          CTF topics and read easy writeups.
        </span>
      </div>

      <div className="card-row">
        <div className="card" style={{ width: '360px', textAlign: 'center' }}>
          <div className="card-head">
            <h3 className="card-title">$ learn</h3>
          </div>
          <div className="card-body">
            <p>Read topic basics and small tool examples.</p>
            <Link to="/learn" className="btn">
              &gt; learn
            </Link>
          </div>
        </div>

        <div className="card" style={{ width: '360px', textAlign: 'center' }}>
          <div className="card-head">
            <h3 className="card-title">$ writeups</h3>
          </div>
          <div className="card-body">
            <p>Search beginner-friendly challenge solve notes.</p>
            <Link to="/writeups" className="btn">
              &gt; writeups
            </Link>
          </div>
        </div>

        <div className="card" style={{ width: '360px', textAlign: 'center' }}>
          <div className="card-head">
            <h3 className="card-title">$ upcoming</h3>
          </div>
          <div className="card-body">
            <p>See a short list of upcoming CTF events.</p>
            <Link to="/upcoming" className="btn">
              &gt; upcoming
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
