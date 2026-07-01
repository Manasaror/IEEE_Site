export interface NavItem {
  /** Label shown in the navigation UI. */
  label: string;
  /** Internal route (e.g. "/projects") or external URL. */
  href: string;
  /** Marks the item as opening in a new tab. */
  external?: boolean;
}
