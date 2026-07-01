import { useEffect, useState } from 'react';

/**
 * useActivePath
 *
 * Client-side hook for React islands that need to know the current
 * pathname (e.g. a React-driven nav). Astro components should prefer
 * `Astro.url.pathname` directly — this hook exists for future islands
 * that can't access that at render time (client:only components).
 */
export function useActivePath(): string {
  const [path, setPath] = useState<string>('');

  useEffect(() => {
    setPath(window.location.pathname);
  }, []);

  return path;
}
