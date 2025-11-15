import { BlogPost } from '../entities/BlogPost';
import { Project } from '../entities/Project';
import type {SocialLink} from '../types';

export interface IDataService {
  getBlogPosts(): BlogPost[];
  getProjects(): Project[];
  getSkills(): string[];
  getSocialLinks(): SocialLink[];
}
