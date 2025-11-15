import type {ProjectData} from "../types.ts";

export class Project {
  public readonly title: string;
  public readonly description: string;
  public readonly technologies: readonly string[];
  public readonly links: readonly ProjectLink[];

  constructor(
    title: string,
    description: string,
    technologies: readonly string[],
    links: readonly ProjectLink[]
  ) {
    this.title = title;
    this.description = description;
    this.technologies = technologies;
    this.links = links;
  }

  static fromData(data: ProjectData): Project {
    return new Project(
      data.title,
      data.description,
      data.technologies,
      data.links
    );
  }
}

interface ProjectLink {
  label: string;
  url: string;
}
