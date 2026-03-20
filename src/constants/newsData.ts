import { NewsItem } from '../types/news';

export const youtubeNewsData: NewsItem[] = [
  {
    id: '1',
    icon: '🎬',
    title: 'Novo Upload: "Reunião de Resultados Q1"',
    description: 'Vídeo publicado e exibindo no Painel do Lobby. 1.2k views em 10 min.',
    timestamp: 'Há 5 min',
    category: 'video',
  },
  {
    id: '2',
    icon: '🔴',
    title: 'AO VIVO: Treinamento Corporativo',
    description: 'Live em andamento no Canal Interno. 84 espectadores assistindo agora.',
    timestamp: 'Agora',
    category: 'channel',
  },
  {
    id: '3',
    icon: '📈',
    title: 'Em Alta: "Integração de Novos Talentos"',
    description: '50 mil views em 2h. Exibindo em destaque no Painel B e C.',
    timestamp: 'Há 20 min',
    category: 'trending',
  },
  {
    id: '4',
    icon: '📊',
    title: 'Analytics: Pico de Audiência Detectado',
    description: 'Engajamento 3x acima da média. Dashboard atualizado nos Elevadores A e B.',
    timestamp: 'Há 1 h',
    category: 'analytics',
  },
  {
    id: '5',
    icon: '📅',
    title: 'Playlist Semanal Sincronizada',
    description: 'Grade de conteúdo da semana aprovada e distribuída para todos os painéis.',
    timestamp: 'Há 2 h',
    category: 'schedule',
  },
];
