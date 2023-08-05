import { useEffect, useState } from 'react';

export const useMount = (isOpen: boolean): { mounted: boolean } => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (isOpen && !mounted) {
      setMounted(true);
    } else if (!isOpen && mounted) {
      setTimeout(() => {
        setMounted(false);
      }, 500);
    }
  }, [isOpen]);

  return {
    mounted,
  };
};
