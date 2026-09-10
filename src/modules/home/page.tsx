import Hero from './components/Hero';
import Whoarewe from './components/whoweare';
import Stats from './components/stats';
import Whowedo from './components/whatwedo';
import UpcomingEvents from './components/UpcomingEvents';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Whoarewe />
      <Stats />
      <Whowedo />
      <UpcomingEvents />
    </div>
  );
}
