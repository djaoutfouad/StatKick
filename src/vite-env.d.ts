/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ENABLE_ADS?: string;
  readonly VITE_ADSENSE_CLIENT?: string;
  readonly VITE_SITE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
