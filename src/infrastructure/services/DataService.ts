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
        title: "YOUR CAMPUS — Campus Services Mobile Application",
        description: "Developed and published a cross-platform campus services mobile application used by thousands of students across multiple universities. Built 5+ integrated service modules including laundry booking, smart lockers, vending machines, e-commerce, loyalty rewards, and environmental impact tracking. Architected a scalable Clean Architecture using BLoC state management. Implemented real-time IoT communication with vending machines and lockers using MQTT and AWS IoT Core (SSL/TLS), alongside Firebase services for authentication, chat, push notifications (FCM/APNs), and analytics. Designed an offline-first data layer with local caching and secure storage, integrated multi-gateway payments with wallet and credit management.",
        technologies: ["Flutter", "Dart", "BLoC", "Firebase Suite", "MQTT", "AWS IoT Core", "REST APIs", "SQLite", "GetIt (DI)", "Secure Storage"],
        links: [
          {label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.mnt.your_campus"},
          {label: "App Store", url: "https://apps.apple.com/app/id6464159149"}
        ]
      },
      {
        title: "Fitmate — Cross-Platform Fitness Mobile Application",
        description: "Developed a cross-platform Flutter fitness application enabling gym discovery, class booking, subscriptions, and secure payments. Implemented secure authentication (OTP, Google, Facebook, Apple) with Firebase Auth and App Check, plus offline support, QR check-ins, deep linking, and secure local storage. Architected the app using modular clean architecture, Provider-based state management, and GetIt dependency injection. Integrated Stripe payments with subscriptions, free trials, Apple Pay, wallet/points system, and OneSignal push notifications. Optimized performance by reducing login time from ~14s to <2s via parallel API calls, caching, and optimized navigation; implemented location-based gym discovery with GPS and interactive maps (Mapbox).",
        technologies: ["Flutter", "Dart", "Firebase", "Stripe SDK", "Mapbox", "OneSignal", "Provider", "SQLite", "GetIt", "REST APIs"],
        links: [
          {label: "Play Store", url: "https://play.google.com/store/apps/details?id=au.fitmate.app"},
          {label: "App Store", url: "https://apps.apple.com/app/id6474177403"}
        ]
      },
      {
        title: "SST — School Supervision Tool (BRAC Education Program)",
        description: "Developed a native Android application for BRAC Education to digitize school supervision, attendance tracking, visit logs, environmental assessments, and performance reporting. Implemented a fragment-based modular architecture with a Material Design–compliant user interface, enabling real-time data visualization and seamless navigation across core modules including Attendance, Visits, Environment, and Assessments. Built a secure authentication flow with role-based profile management, optimized navigation using FragmentManager, and back stack handling for smooth performance.",
        technologies: ["Java", "Android SDK", "AndroidX", "Material Design", "Fragments", "ViewPager", "ConstraintLayout", "Gradle", "JUnit", "Espresso"],
        links: [
          {label: "Internal Use", url: ""}
        ]
      }
    ];

    return projectsData.map(data => Project.fromData(data));
  }

  getSkills(): string[] {
    return [
      // Languages
      'Dart', 'Java', 'Kotlin', 'Swift', 'Go', 'C/C++',
      // Mobile Frameworks
      'Flutter', 'Android SDK', 'Jetpack Components',
      // State Management
      'BLoC', 'Provider',
      // Architecture & Patterns
      'Clean Architecture', 'MVVM', 'MVP', 'Dependency Injection',
      // Backend & APIs
      'REST APIs', 'MQTT', 'Socket Communication', 'Firebase Services',
      // Databases & Storage
      'SQLite', 'Local Caching', 'Offline-First Design',
      // Cloud & IoT
      'AWS IoT', 'Firebase', 'Real-Time IoT Communication',
      // Testing & Quality
      'Unit Testing', 'Integration Testing', 'Performance Optimization',
      // Monitoring & Analytics
      'Firebase Analytics', 'Crash Reporting',
      // Mobile Security
      'Secure API Communication', 'Authentication Flows',
      // DevOps & Tools
      'Git', 'CI/CD', 'Play Store Deployment', 'App Store Deployment',
      // Collaboration
      'Agile/Scrum', 'Cross-Functional Teams', 'Remote Collaboration'
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
