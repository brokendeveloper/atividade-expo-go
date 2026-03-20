import { NewsItem } from '../types/news';

export const youtubeNewsData: NewsItem[] = [
  {
    id: '1',
    icon: '🎬',
    title: 'Upload: "Tour pelo Escritório #12"',
    description: 'Novo vídeo publicado no Canal Corporativo. Exibindo no Painel 3.',
    timestamp: 'Há 5 min',
    category: 'video',
  },
  {
    id: '2',
    icon: '📊',
    title: 'Analytics: 10k Views Hoje',
    description: 'Dashboard de visualizações atualizado nos Elevadores A e B.',
    timestamp: 'Há 15 min',
    category: 'analytics',
  },
  {
    id: '3',
    icon: '🔔',
    title: 'Shorts em Alta: "Dicas de RH"',
    description: 'Vídeo short trending exibido no Painel Principal.',
    timestamp: 'Há 30 min',
    category: 'trending',
  },
  {
    id: '4',
    icon: '📅',
    title: 'Playlist Semanal Sincronizada',
    description: 'Agenda de vídeos da semana atualizada no Painel D.',
    timestamp: 'Há 1 h',
    category: 'schedule',
  },
  {
    id: '5',
    icon: '📡',
    title: 'Live: Reunião Geral ao Vivo',
    description: 'Stream ao vivo sendo exibido no Painel do Lobby.',
    timestamp: 'Há 2 h',
    category: 'channel',
  },
];
