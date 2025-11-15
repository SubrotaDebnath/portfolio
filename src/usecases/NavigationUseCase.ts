import type {INavigationUseCase} from '../domain/interfaces/INavigationUseCase';

export class NavigationUseCase implements INavigationUseCase {
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  }

  getCurrentSection(scrollPosition: number = window.scrollY): string {
    const sections = ['about', 'projects', 'blog', 'contact'] as const;
    const offset = 100;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const {offsetTop, offsetHeight} = element;
        if (
          scrollPosition + offset >= offsetTop &&
          scrollPosition + offset < offsetTop + offsetHeight
        ) {
          return section;
        }
      }
    }
    return '';
  }
}
