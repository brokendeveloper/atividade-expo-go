export const darkTheme = {
  background: ['#0F0F0F', '#212121'] as string[],
  card: '#212121',
  text: '#FFFFFF',
  subtext: '#AAAAAA',
  accent: '#FF0000',
  switchTrack: '#FF0000',
  border: '#3F3F3F',
};

export const lightTheme = {
  background: ['#FFFFFF', '#F9F9F9'] as string[],
  card: '#F2F2F2',
  text: '#0F0F0F',
  subtext: '#606060',
  accent: '#FF0000',
  switchTrack: '#FF0000',
  border: '#E5E5E5',
};

export type Theme = typeof darkTheme;
