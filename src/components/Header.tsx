import { NavLink } from 'react-router-dom';
import { navigation } from '@/config/navigation';
import { siteConfig } from '@/config/site';

export function Header() {
  return (
    <header className="header">
      <nav className="container nav" aria-label="Primary navigation">
        <NavLink className="brand" to="/">
          {siteConfig.shortName}
        </NavLink>
        <div className="nav-links">
          {navigation.map((item) => (
            <NavLink key={item.to} to={item.to}>
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
