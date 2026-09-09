import { siteConfig } from '@/config/site';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <strong>{siteConfig.name}</strong>
        <p>Building technology for humanity at GBPIET.</p>
        <small>© {new Date().getFullYear()} IEEE GBPIET Student Branch.</small>
      </div>
    </footer>
  );
}
