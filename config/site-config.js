/**
 * Site Configuration
 * Update these values with your personal information
 */

const SITE_CONFIG = {
  // Personal Information
  name: "Your Name",
  firstName: "Your", // Used in navigation
  title: "Your Professional Title",
  shortBio: "Brief description of what you do",
  
  // Contact
  email: {
    user: "yourname",
    domain: "example.com"
  },
  
  // Domain
  domain: "yourdomain.com",
  url: "https://yourdomain.com/",
  
  // Education (for structured data)
  education: [
    {
      name: "Your University",
      url: "https://university.edu"
    }
  ],
  
  // Social Links
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://www.linkedin.com/in/yourusername/",
    scholar: "https://scholar.google.com/citations?user=YOUR_ID",
    twitter: "", // Optional
    website: "" // Optional
  },
  
  // Typing Animation Words
  typingWords: [
    "awesome things.",
    "innovative solutions.",
    "meaningful impact."
  ],
  
  // Research Areas (for Venn Diagram - set to null to disable)
  researchAreas: {
    left: {
      title: "Research Area 1",
      subtitle: "Area One",
      description: "Description of your first research area and what you do in this field."
    },
    right: {
      title: "Research Area 2", 
      subtitle: "Area Two",
      description: "Description of your second research area and what you do in this field."
    },
    bottom: {
      title: "Research Area 3",
      subtitle: "Area Three",
      description: "Description of your third research area and what you do in this field."
    },
    center: {
      title: "Your Main Focus",
      description: "How these three areas combine in your work. Explain the intersection and your overall research vision."
    }
  },
  
  // Custom Colors (optional - will use defaults if not specified)
  colors: {
    primary: "#a51c30",
    secondary: "#002d72",
    tertiary: "#562f86"
  },
  
  // Profile Image
  profileImage: "assets/profile/profile-photo.jpg",
  
  // CV/Resume
  cvPath: "documents/Your_Name_CV.pdf",
  
  // Page Titles
  pageTitles: {
    home: "Your Name",
    news: "News & Updates • Your Name",
    projects: "Projects • Your Name"
  }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SITE_CONFIG;
}
