import AboutHero from './components/Hero';
import AboutStats from './components/Stats';
import StrategicPlan from './components/StrategicPlan';
import EthicsValues from './components/EthicsValues';
import LeadershipStructure from './components/LeadershipStructure';
import Societies from './components/Societies';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-slate-200">
      <AboutHero />
      <AboutStats />
      <StrategicPlan />
      <EthicsValues />
      <LeadershipStructure />
      <Societies />
    </div>
  );
}
