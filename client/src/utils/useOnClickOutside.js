import { useEffect } from 'react';
import { supportsPassiveEvents } from 'detect-it';

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener(
      'mousedown',
      listener,
      supportsPassiveEvents ? { passive: true } : false
    );
    document.addEventListener(
      'touchstart',
      listener,
      supportsPassiveEvents ? { passive: true } : false
    );

    return () => {
      document.removeEventListener(
        'mousedown',
        listener,
        supportsPassiveEvents ? { passive: true } : false
      );
      document.removeEventListener(
        'touchstart',
        listener,
        supportsPassiveEvents ? { passive: true } : false
      );
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
