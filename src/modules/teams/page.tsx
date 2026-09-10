import { teamMembers } from '@/data/teams/members';
import { TeamHero } from './components/TeamHero';
import { TeamGrid } from './components/TeamGrid';

export function TeamsPage() {
  const executiveMembers = teamMembers
    .filter((m) => m.committee === 'executive')
    .sort((a, b) => a.priority - b.priority);

  const studentMembers = teamMembers
    .filter((m) => m.committee === 'student')
    .sort((a, b) => a.priority - b.priority);

  return (
    <div className="bg-black min-h-screen overflow-x-hidden">
      <TeamHero />
      <TeamGrid title="Executive Committee" members={executiveMembers} />
      <TeamGrid title="Student Committee" members={studentMembers} />
    </div>
  );
}
