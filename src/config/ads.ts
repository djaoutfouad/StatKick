export interface AdSenseConfig {
  enabled: boolean;
  client: string;
  slots: {
    slot1Header: string;
    slot2MidContent: string;
    slot3PostCalculator: string;
    slot4Footer: string;
  };
}

export const adsConfig: AdSenseConfig = {
  enabled: true,
  client: import.meta.env.VITE_ADSENSE_CLIENT || '',
  slots: {
    slot1Header: '',
    slot2MidContent: '',
    slot3PostCalculator: '',
    slot4Footer: '',
  },
};
