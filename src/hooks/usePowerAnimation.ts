import { useState, useCallback } from 'react';

export const usePowerAnimation = (onComplete: () => void) => {
  const [showAnimation, setShowAnimation] = useState(false);

  const triggerPower = useCallback(() => {
    setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false);
      onComplete();
    }, 2000);
  }, [onComplete]);

  return { showAnimation, triggerPower };
};