import type { Activity } from '@/data/activities/items';
export function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <article className="card">
      <img src={activity.image} alt="" />
      <p className="eyebrow">
        {activity.category} · {activity.date}
      </p>
      <h3>{activity.title}</h3>
      <p>{activity.description}</p>
    </article>
  );
}
