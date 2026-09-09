import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <p className="eyebrow">IEEE Student Branch · GBPIET</p>
        <h1>Build. Learn. Lead.</h1>
        <p>
          We are a community of students turning curiosity into engineering projects, events, and
          meaningful impact.
        </p>
        <Link className="button" to="/activities">
          Explore activities
        </Link>
      </div>
    </section>
  );
}
