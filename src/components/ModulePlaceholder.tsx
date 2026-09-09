export function ModulePlaceholder({ name }: { name: string }) {
  return (
    <main className="placeholder" aria-label={`${name} module`}>
      <h1>{name}</h1>
      <p>Coming Soon</p>
    </main>
  );
}
