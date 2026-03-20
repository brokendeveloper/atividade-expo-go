export const darkTheme = {
  background: ['#0D0D0D', '#1A1A2E'] as string[],
  card: '#1C1C1E',
  text: '#FFFFFF',
  subtext: '#8E8E93',
  accent: '#0A84FF',
  switchTrack: '#34C759',
  border: '#2C2C2E',
};

export const lightTheme = {
  background: ['#F2F2F7', '#FFFFFF'] as string[],
  card: '#FFFFFF',
  text: '#000000',
  subtext: '#6C6C70',
  accent: '#007AFF',
  switchTrack: '#34C759',
  border: '#E5E5EA',
};

export type Theme = typeof darkTheme;
