// Portfolio Configuration
// Set 'enabled: true' to show a section, 'enabled: false' to hide it

// IMPORTANT: After copying this file to your project:
// 1. Remove the inline config from App.js (delete the const portfolioConfig = {...} block)
// 2. Add this import at top of App.js: import portfolioConfig from './portfolioConfig';

const portfolioConfig = {
  // Page visibility settings
  pages: {
    home: {
      enabled: true,
      showProfilePicture: true,
      showTipCard: true
    },
    about: {
      enabled: true,
      showProfilePicture: true,
      showSkillsComparison: true
    },
    experience: {
      enabled: true,
      showTimeline: true
    },
    education: {
      enabled: true,
      showTechnicalSkills: true
    },
    projects: {
      enabled: true,
      showPlaceholder: true // Show "more coming soon" card
    },
    posts: {
      enabled: true,
      devToUsername: 'recurpixel', // Your Dev.to username
      maxPosts: 3 // Number of posts to display
    },
    achievements: {
      enabled: true,
      showMilestones: true
    },
    books: {
      enabled: true, // Set to false to hide Books section
      showProgressBars: true
    },
    contact: {
      enabled: true,
      showSocialLinks: true
    }
  },

  // Feature toggles
  features: {
    darkMode: false, // Future feature
    animations: true,
    pageFlipAnimation: true,
    scrollIndicator: true,
    keyboardNavigation: true,
    mobileSwipeGesture: true
  },

  // Site metadata
  siteMetadata: {
    title: 'RecurPixel - Backend Developer Portfolio',
    description: 'Portfolio of Manu - Backend Developer specializing in .NET, ASP.NET Core, and cloud-native applications',
    author: 'Manu (RecurPixel)',
    keywords: 'backend developer, .NET, ASP.NET Core, C#, Entity Framework Core, Web API, portfolio, software engineer',
    siteUrl: 'https://recurpixel.github.io', // Update with your actual URL
    ogImage: '/assets/og-image.png' // Social media preview image
  },

  // Social links
  social: {
    github: 'https://github.com/RecurPixel',
    linkedin: 'https://linkedin.com/in/RecurPixel',
    email: 'recurpixel@gmail.com',
    devto: 'https://dev.to/recurpixel'
  },

  // Assets
  assets: {
    resumePdf: '/assets/resume.pdf', // Path to your resume
    profileImageMain: '/assets/profile-passport-pencil.png', // Home page image
    profileImageAbout: '/assets/profile-standing-side-pencil.png', // About page image
    favicon: '/assets/favicon.ico'
  }
};

export default portfolioConfig;