import { highlights } from '@/data/home/highlights';
export function Highlights() {
  return (
    <div className="stats">
      {highlights.map((item) => (
        <article key={item.label}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </article>
      ))}
    </div>
  );
}
