/* eslint-disable @typescript-eslint/triple-slash-reference -- Astro's standard env.d.ts pattern */
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL: string;
  readonly PUBLIC_SOCIAL_INSTAGRAM: string;
  readonly PUBLIC_SOCIAL_LINKEDIN: string;
  readonly PUBLIC_SOCIAL_TWITTER: string;
  readonly PUBLIC_SOCIAL_GITHUB: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
