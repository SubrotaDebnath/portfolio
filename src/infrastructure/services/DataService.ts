import {type IDataService} from '../../domain/interfaces/IDataService';
import {BlogPost} from '../../domain/entities/BlogPost';
import {Project} from '../../domain/entities/Project';
import type {SocialLink, BlogPostData, ProjectData} from '../../domain/types';

export class DataService implements IDataService {
  getBlogPosts(): BlogPost[] {
    const blogPostsData: BlogPostData[] = [
      {
        title: "Building Scalable Microservices with Docker and Kubernetes",
        excerpt: "Dive deep into the world of containerized applications and learn how to architect, deploy, and manage microservices at scale. We'll explore best practices, common pitfalls, and real-world examples from my experience building distributed systems.",
        date: "Dec 15, 2024",
        category: "Architecture",
        tags: ["Docker", "Kubernetes", "Microservices", "DevOps"],
        icon: "📝",
        url: "#",
        featured: true
      },
      {
        title: "Optimizing React Apps: From Bundle Size to Runtime Performance",
        excerpt: "Learn practical techniques to make your React applications lightning fast, including code splitting, lazy loading, and advanced optimization strategies.",
        date: "Dec 08, 2024",
        category: "Performance",
        tags: ["React", "Performance", "Webpack"],
        icon: "⚡",
        url: "#"
      },
      {
        title: "Web Security Fundamentals: Protecting Your Applications",
        excerpt: "A comprehensive guide to web security covering HTTPS, authentication, authorization, and common vulnerabilities like XSS and CSRF.",
        date: "Nov 30, 2024",
        category: "Security",
        tags: ["Security", "HTTPS", "Authentication"],
        icon: "🔒",
        url: "#"
      },
      {
        title: "GraphQL vs REST: Choosing the Right API Architecture",
        excerpt: "An in-depth comparison of GraphQL and REST APIs, exploring when to use each approach and how to implement them effectively.",
        date: "Nov 22, 2024",
        category: "Web APIs",
        tags: ["GraphQL", "REST", "API Design"],
        icon: "🌐",
        url: "#"
      },
      {
        title: "Async Python: Mastering Concurrency with asyncio",
        excerpt: "Unlock the power of asynchronous programming in Python. Learn how to write efficient concurrent code using asyncio and async/await.",
        date: "Nov 15, 2024",
        category: "Python",
        tags: ["Python", "Asyncio", "Concurrency"],
        icon: "🐍",
        url: "#"
      },
      {
        title: "My Developer Setup: Tools, Configs, and Workflows",
        excerpt: "A detailed look at my development environment, including my favorite tools, terminal setup, and productivity workflows.",
        date: "Nov 08, 2024",
        category: "Tools",
        tags: ["Tools", "Productivity", "Terminal"],
        icon: "🛠️",
        url: "#"
      }
    ];

    return blogPostsData.map(data => BlogPost.fromData(data));
  }

  getProjects(): Project[] {
    const projectsData: ProjectData[] = [
      {
        title: "DevFlow - Developer Workflow Manager",
        description: "A comprehensive project management tool designed specifically for development teams, featuring Git integration, automated deployments, and real-time collaboration.",
        technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
        links: [
          {label: "Live Demo", url: "#"},
          {label: "GitHub", url: "#"}
        ]
      },
      {
        title: "CloudSync API",
        description: "High-performance RESTful API for file synchronization across multiple cloud providers with end-to-end encryption and conflict resolution.",
        technologies: ["Python", "FastAPI", "Redis", "Kubernetes", "MongoDB"],
        links: [
          {label: "Documentation", url: "#"},
          {label: "GitHub", url: "#"}
        ]
      },
      {
        title: "Terminal Theme Engine",
        description: "Open-source terminal customization tool with 50+ themes including Gruvbox variants. Built with Rust for maximum performance and cross-platform compatibility.",
        technologies: ["Rust", "CLI", "Cross-platform", "Open Source"],
        links: [
          {label: "Install", url: "#"},
          {label: "GitHub", url: "#"}
        ]
      },
      {
        title: "Real-time Analytics Dashboard",
        description: "Interactive dashboard for monitoring application metrics with customizable widgets, real-time updates, and intelligent alerting system.",
        technologies: ["Vue.js", "TypeScript", "WebSockets", "D3.js", "InfluxDB"],
        links: [
          {label: "Live Demo", url: "#"},
          {label: "GitHub", url: "#"}
        ]
      }
    ];

    return projectsData.map(data => Project.fromData(data));
  }

  getSkills(): string[] {
    return [
      'Flutter', 'Dart', 'Jetpack Compose', 'Kotlin', 'Java', 'SwiftUI', 'Swift', 'MVVM', 'MVC', 'MVP',
      'Clean Architecture', 'BLoC', 'CI/CD'
    ];
  }

  getSocialLinks(): SocialLink[] {
    return [
      {name: 'GitHub', url: 'https://github.com/SubrotaDebnath'},
      {name: 'LinkedIn', url: 'https://www.linkedin.com/in/subrotadebnath/'},
      // {name: 'Twitter', url: '#'},
      {name: 'Email', url: 'mailto:developer.subrota@gmail.com'}
    ];
  }
}
