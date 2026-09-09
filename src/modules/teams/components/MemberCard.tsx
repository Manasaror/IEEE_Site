import type { TeamMember } from '@/data/teams/members';
export function MemberCard({ member }: { member: TeamMember }) {
  return (
    <article className="card">
      <h3>{member.name}</h3>
      <p className="accent">{member.role}</p>
      <p>{member.department}</p>
    </article>
  );
}
