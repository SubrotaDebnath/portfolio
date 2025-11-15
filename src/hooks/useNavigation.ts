import {useState, useEffect, useMemo} from 'react';
import {NavigationUseCase} from '../usecases/NavigationUseCase';
import type {UseNavigationReturn} from "../domain/types";

export const useNavigation = (): UseNavigationReturn => {
  const [activeSection, setActiveSection] = useState<string>('');
  const navigationUseCase = useMemo(() => new NavigationUseCase(), []);

  const scrollToSection = (sectionId: string): void => {
    navigationUseCase.scrollToSection(sectionId);
    setActiveSection(sectionId);
  };

  useEffect(() => {
    const handleScroll = (): void => {
      const currentSection = navigationUseCase.getCurrentSection();
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navigationUseCase]);

  return {activeSection, scrollToSection};
};
