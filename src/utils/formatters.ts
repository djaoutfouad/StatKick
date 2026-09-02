export function formatPercent(value: number, decimals: number = 1): string {
  if (isNaN(value) || !isFinite(value)) return '0.0%';
  return `${value.toFixed(decimals)}%`;
}

export function formatNumber(value: number, decimals: number = 1): string {
  if (isNaN(value) || !isFinite(value)) return '0';
  return Number(value.toFixed(decimals)).toLocaleString();
}

export function formatCurrencyM(valueInMillions: number, symbol: string = '€'): string {
  if (isNaN(valueInMillions) || !isFinite(valueInMillions)) return `${symbol}0.0M`;
  if (valueInMillions >= 1000) {
    return `${symbol}${(valueInMillions / 1000).toFixed(2)}B`;
  }
  return `${symbol}${valueInMillions.toFixed(2)}M`;
}

export function formatCurrencyK(valueInThousands: number, symbol: string = '€'): string {
  if (isNaN(valueInThousands) || !isFinite(valueInThousands)) return `${symbol}0`;
  return `${symbol}${Math.round(valueInThousands).toLocaleString()}`;
}

export function formatCurrencyExact(value: number, symbol: string = '€'): string {
  if (isNaN(value) || !isFinite(value)) return `${symbol}0`;
  return `${symbol}${Math.round(value).toLocaleString()}`;
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function safeDivide(numerator: number, denominator: number, fallback: number = 0): number {
  if (!denominator || denominator === 0 || isNaN(denominator) || isNaN(numerator)) {
    return fallback;
  }
  const res = numerator / denominator;
  return isFinite(res) ? res : fallback;
}
