import {useEffect} from 'react'
import { teamMembers } from '@/data/teams/members';
import { TeamHero } from './components/TeamHero';
import { TeamGrid } from './components/TeamGrid';
import { PreviousMember } from './components/previousmember';



export function TeamsPage() {

      useEffect(() => {
    document.title = "IEEE Gbpiet Teams ";
  }, []);

  const executiveMembers = teamMembers
    .filter((m) => m.committee === 'executive')
    .sort((a, b) => a.priority - b.priority);

  const studentMembers = teamMembers
    .filter((m) => m.committee === 'student')
    .sort((a, b) => a.priority - b.priority);

  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Pure Tailwind Fixed Background */}
      <div className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFw2UHWpcNez7LQ4HyeHa3Kn3pjZ0DwJKYBaBbLmH7ckUEnu2HT-xNkKM&s=10')]">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[2px]" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 pb-16">
        <TeamHero />
        <TeamGrid title="Executive Committee" members={executiveMembers} />
        <TeamGrid title="Student Committee" members={studentMembers} />

        {/* Previous Year Members Dropdown (Sabse Niche) */}
        <PreviousMember />
      </div>
    </div>
  );
}
