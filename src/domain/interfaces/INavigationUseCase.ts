export interface INavigationUseCase {
  scrollToSection(sectionId: string): void;
  getCurrentSection(scrollPosition?: number): string;
}
