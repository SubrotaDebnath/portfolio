import type {BlogPostData} from "../types.ts";

export class BlogPost {
  public readonly title: string;
  public readonly excerpt: string;
  public readonly date: string;
  public readonly category: string;
  public readonly tags: readonly string[];
  public readonly icon: string;
  public readonly url: string;
  public readonly featured: boolean;

  constructor(
    title: string,
    excerpt: string,
    date: string,
    category: string,
    tags: readonly string[],
    icon: string,
    url: string,
    featured: boolean = false
  ) {
    this.title = title;
    this.excerpt = excerpt;
    this.date = date;
    this.category = category;
    this.tags = tags;
    this.icon = icon;
    this.url = url;
    this.featured = featured;
  }

  static fromData(data: BlogPostData): BlogPost {
    return new BlogPost(
      data.title,
      data.excerpt,
      data.date,
      data.category,
      data.tags,
      data.icon,
      data.url,
      data.featured ?? false
    );
  }
}
