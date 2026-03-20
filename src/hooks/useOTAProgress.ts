import { useState, useEffect } from 'react';

interface UseOTAProgressReturn {
  current: number;
  total: number;
  isUpdating: boolean;
}

const useOTAProgress = (): UseOTAProgressReturn => {
  const [current, setCurrent] = useState<number>(1);
  const total = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev >= total ? 1 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return { current, total, isUpdating: current < total };
};

export default useOTAProgress;
