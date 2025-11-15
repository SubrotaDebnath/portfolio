import React, {type ReactNode} from 'react';

// ===== TYPES & INTERFACES =====
export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface BlogPostData {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  tags: string[];
  icon: string;
  url: string;
  featured?: boolean;
}

export interface ProjectData {
  title: string;
  description: string;
  technologies: string[];
  links: ProjectLink[];
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface SocialLink {
  name: string;
  url: string;
}

export interface NotificationData {
  message: string;
  type: 'success' | 'error';
}

export interface SubmissionResult {
  success: boolean;
  errors?: string[];
  error?: string;
}

// Service interfaces
export interface INotificationService {
  showSuccess(message: string): void;

  showError(message: string): void;
}

export interface IDataService {
  getBlogPosts(): BlogPost[];

  getProjects(): Project[];

  getSkills(): string[];

  getSocialLinks(): SocialLink[];
}

export interface IContactUseCase {
  submitMessage(messageData: ContactFormData): Promise<SubmissionResult>;
}

export interface INavigationUseCase {
  scrollToSection(sectionId: string): void;

  getCurrentSection(scrollPosition?: number): string;
}

// Hook return types
// export interface UseIntersectionObserverReturn {
//   0: React.RefObject<HTMLDivElement | null>;
//   1: boolean;
// }

export type UseIntersectionObserverReturn = [React.RefObject<HTMLDivElement | null>, boolean];


export interface UseNavigationReturn {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

// Component prop types
export interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
  disabled?: boolean;
}

export interface FormFieldProps {
  label: string;
  type?: 'text' | 'email' | 'textarea';
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  rows?: number;
}

export interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export interface HeroProps {
  onNavigate: (section: string) => void;
}

export interface AboutProps {
  skills: string[];
}

export interface ProjectsProps {
  projects: Project[];
}

export interface ProjectCardProps {
  project: Project;
  index: number;
}

export interface BlogProps {
  posts: BlogPost[];
}

export interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export interface ContactProps {
  onSubmitMessage: (data: ContactFormData) => Promise<boolean>;
}

export interface ContactFormProps {
  onSubmit: (data: ContactFormData) => Promise<boolean>;
}

export interface FooterProps {
  socialLinks: SocialLink[];
}

export interface NotificationProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}


// Entities are not defined here, they are in their own files,
// but we need to import them to define some of the types above.
// Assuming these imports are handled in the refactored files
// or that the types are used with a `declare` statement.
// For this example, we will assume they are available in a global scope
// or imported, though the latter is more correct.

// Import necessary entities to define types
import {BlogPost} from './entities/BlogPost';
import {Project} from './entities/Project';
