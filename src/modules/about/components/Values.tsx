import { aboutContent } from '@/data/about/content';
export function Values() {
  return (
    <ul className="list">
      {aboutContent.values.map((value) => (
        <li key={value}>{value}</li>
      ))}
    </ul>
  );
}
