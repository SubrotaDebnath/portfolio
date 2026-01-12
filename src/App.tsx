import React, {useState, useMemo} from 'react';

import {type IDataService} from './domain/interfaces/IDataService';
import {type INotificationService} from './domain/interfaces/INotificationService';
import {type IContactUseCase} from './domain/interfaces/IContactUseCase';

import {DataService} from './infrastructure/services/DataService';
import {NotificationService} from './infrastructure/services/NotificationService';
import {ContactUseCase} from './usecases/ContactUseCase';

import Navigation from './components/shared/Navigation';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
// import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import Notification from './components/ui/Notification';

import {useNavigation} from './hooks/useNavigation';

import './App.css';
import type {ContactFormData, NotificationData} from "./domain/types.ts";

// Initialize data and services outside the component to avoid re-creation
const dataService: IDataService = new DataService();
// const blogPosts = dataService.getBlogPosts();
const projects = dataService.getProjects();
const skills = dataService.getSkills();
const socialLinks = dataService.getSocialLinks();

const App: React.FC = () => {
  const [notification, setNotification] = useState<NotificationData | null>(null);
  const {activeSection, scrollToSection} = useNavigation();

  // Memoize services to ensure they are not recreated on every render
  const notificationService: INotificationService = useMemo(
    () => new NotificationService(setNotification),
    []
  );
  const contactUseCase: IContactUseCase = useMemo(
    () => new ContactUseCase(notificationService),
    [notificationService]
  );

  const handleSubmitMessage = async (messageData: ContactFormData): Promise<boolean> => {
    const result = await contactUseCase.submitMessage(messageData);
    return result.success;
  };

  return (
    <div className="App">
      <Navigation
        activeSection={activeSection}
        onSectionChange={scrollToSection}
      />
      <Hero onNavigate={scrollToSection}/>
      <About skills={skills}/>
      <Projects projects={projects}/>
      {/* <Blog posts={blogPosts}/> */}
      <Contact onSubmitMessage={handleSubmitMessage}/>
      <Footer socialLinks={socialLinks}/>

      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </div>
  );
};

export default App;
