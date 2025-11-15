import { useState, useEffect, useRef } from 'react';

export const useTypingEffect = (texts: string[], speed: number = 100): string => {
  const [displayText, setDisplayText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentCharIndex, setCurrentCharIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const pauseTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentText = texts[currentIndex];

      if (isDeleting) {
        setDisplayText(prev => prev.slice(0, -1));
        setCurrentCharIndex(prev => prev - 1);

        if (currentCharIndex === 0) {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setDisplayText(currentText.slice(0, currentCharIndex + 1));
        setCurrentCharIndex(prev => prev + 1);

        if (currentCharIndex === currentText.length) {
          pauseTimeoutRef.current = setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => {
      clearTimeout(timeout);
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, [currentCharIndex, currentIndex, isDeleting, texts, speed]);

  return displayText;
};
