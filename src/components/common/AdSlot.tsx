import React from 'react';
import { adsConfig } from '../../config/ads';

export type AdSlotPosition =
  | 'rail-left'
  | 'rail-right'
  | 'slot1-header'
  | 'slot2-mid-content'
  | 'slot3-post-calculator'
  | 'slot4-footer';

interface AdSlotProps {
  position: AdSlotPosition;
  className?: string;
  slotNumber?: 1 | 2 | 3 | 4;
  variant?: 'skyscraper' | 'leaderboard' | 'rectangle';
}

export const AdSlot: React.FC<AdSlotProps> = () => {
  // Pre-approval AdSense compliance: unconditionally return null
  // Completely eliminates empty dashed boxes, blank spaces, and "Advertisement" text from the interface
  return null;
};

