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

export const AdSlot: React.FC<AdSlotProps> = ({
  position,
  className = '',
  slotNumber,
  variant,
}) => {
  // If ads are globally disabled or client ID is empty, do not render empty placeholder boxes
  if (!adsConfig.enabled || !adsConfig.client || !adsConfig.client.trim()) {
    return null;
  }

  const isRail = position === 'rail-left' || position === 'rail-right' || variant === 'skyscraper';
  const isLeaderboard = position === 'slot4-footer' || position === 'slot1-header' || variant === 'leaderboard';

  return (
    <aside
      className={`my-8 flex flex-col items-center justify-center ${className}`}
      aria-label="Advertisement"
    >
      <div
        className={`adsense-slot w-full flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-gray-50/50 p-4 text-center select-none ${
          isRail
            ? 'w-full min-h-[500px] lg:min-h-[600px] h-[600px]'
            : isLeaderboard
            ? 'max-w-[728px] min-h-[90px] h-[90px]'
            : 'max-w-[336px] min-h-[280px] h-[280px]'
        }`}
        data-ad-slot-number={slotNumber}
      >
        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
          Advertisement
        </span>
      </div>
    </aside>
  );
};

