/**
 * Formats an ISO date string (e.g. "2026-03-14") into a human-readable
 * form (e.g. "March 14, 2026"). Falls back to the raw input if parsing
 * fails, so malformed data never crashes a build.
 */
export function formatDate(isoDate: string, locale = 'en-US'): string {
  const date = new Date(isoDate);

  if (Number.isNaN(date.getTime())) {
    return isoDate;
  }

  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
