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
        title: "YourCampus — IoT-Enabled Smart Campus Platform",
        description: "Lead Mobile App Developer for a cross-platform Flutter app serving 70k+ users with 280+ ratings. Built smart services including laundry booking & machine control, contactless vending, e-commerce, and secure lockers. Implemented real-time IoT device communication and scalable mobile solutions supporting real-world operations.",
        technologies: ["Flutter", "Dart", "BLoC", "Clean Architecture", "MQTT", "REST APIs", "Firebase ML Kit", "AWS IoT", "CI/CD"],
        links: [
          {label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.getaid.yourcampus"},
          {label: "App Store", url: "https://apps.apple.com/us/app/yourcampus/id6449520997"}
        ]
      },
      {
        title: "School Supervision Tools (SST) — BRAC Education Program",
        description: "Developed a role-based school management system for BRAC's Education Program with multi-role support for Teachers, Managers, and Organizers. Features include messaging, attendance tracking, digital assessments, grading, and analytics. Reduced administrative workload by ~30% with improved UX and performance.",
        technologies: ["Android", "Java", "MVVM", "MVP", "SQLite", "WorkManager", "CameraX", "Push Notifications", "Socket Communication"],
        links: [
          {label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.onuitive.sst"}
        ]
      }
    ];

    return projectsData.map(data => Project.fromData(data));
  }

  getSkills(): string[] {
    return [
      'Flutter', 'Dart', 'Android SDK', 'Java', 'Kotlin', 'Swift', 'Jetpack Components',
      'BLoC', 'Provider', 'Clean Architecture', 'MVVM', 'MVP', 'Dependency Injection',
      'REST APIs', 'MQTT', 'Socket Communication', 'Firebase', 'AWS IoT', 'SQLite',
      'Unit Testing', 'Integration Testing', 'Git', 'CI/CD', 'Agile/Scrum'
    ];
  }

  getSocialLinks(): SocialLink[] {
    return [
      {name: 'GitHub', url: 'https://github.com/SubrotaDebnath'},
      {name: 'LinkedIn', url: 'https://www.linkedin.com/in/subrotadebnath/'},
      {name: 'Email', url: 'mailto:developer.subrota@gmail.com'}
    ];
  }
}
