export function formatTime(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMin = Math.floor(diffMs / 60000);

  if (diffMin < 1) return 'Agora mesmo';
  if (diffMin < 60) return `Há ${diffMin} min`;

  const diffH = Math.floor(diffMin / 60);
  if (diffH < 24) return `Há ${diffH} h`;

  const diffD = Math.floor(diffH / 24);
  return `Há ${diffD} dia${diffD > 1 ? 's' : ''}`;
}
