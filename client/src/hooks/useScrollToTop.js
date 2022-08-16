import { useRef } from 'react';

const useScrollToTop = () => {
  const ref = useRef();
  const { current } = ref;
  if (current) current.scrollIntoView({ alignToTop: true });
  return ref;
};

export default useScrollToTop;
