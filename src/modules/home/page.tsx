import Hero from './components/Hero';
import Whoarewe from './components/whoweare';
import Stats from './components/stats';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Whoarewe />
      <Stats />
    </div>
  );
}
