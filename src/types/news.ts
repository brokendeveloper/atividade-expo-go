export interface NewsItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  timestamp: string;
  category: 'video' | 'analytics' | 'channel' | 'trending' | 'schedule';
}
