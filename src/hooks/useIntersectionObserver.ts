import {useState, useEffect, useRef} from 'react';
import type {UseIntersectionObserverReturn} from '../domain/types';

export const useIntersectionObserver = (options: IntersectionObserverInit = {}): UseIntersectionObserverReturn => {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options
    });

    const currentRef = targetRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.disconnect();
      }
    };
  }, [options]);

  return [targetRef, isIntersecting];
};
