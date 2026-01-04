import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Award, BookOpen, Code, Calendar } from 'lucide-react';
import portfolioConfig from './portfolioConfig';
import portfolioData from './portfolioData'

const SketchPortfolio = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [devPosts, setDevPosts] = useState([]);
  const [hasMoreContent, setHasMoreContent] = useState(false);
  const containerRef = useRef(null);
  const pageContentRef = useRef(null);
  const scrollTimeout = useRef(null);

  // Fetch Dev.to posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://dev.to/api/articles?username=recurpixel');
        if (response.ok) {
          const data = await response.json();
          setDevPosts(data.slice(0, 3));
        }
      } catch (error) {
        console.error('Error fetching Dev.to posts:', error);
      }
    };
    fetchPosts();
  }, []);

  // Reset scroll position when page changes
  useEffect(() => {
    if (pageContentRef.current) {
      pageContentRef.current.scrollTop = 0;
      
      // Check if page has scrollable content
      const checkScrollable = () => {
        const el = pageContentRef.current;
        if (el) {
          const hasScroll = el.scrollHeight > el.clientHeight;
          setHasMoreContent(hasScroll);
        }
      };
      
      checkScrollable();
      // Recheck after a short delay to account for dynamic content
      setTimeout(checkScrollable, 100);
    }
    // Also reset window scroll
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Update scroll indicator when scrolling
  useEffect(() => {
    const handleScroll = () => {
      const el = pageContentRef.current;
      if (el) {
        const isAtBottom = el.scrollHeight - el.scrollTop - el.clientHeight <= 10;
        if (isAtBottom) {
          setHasMoreContent(false);
        } else {
          const hasScroll = el.scrollHeight > el.clientHeight;
          setHasMoreContent(hasScroll);
        }
      }
    };

    const el = pageContentRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll);
      return () => el.removeEventListener('scroll', handleScroll);
    }
  }, [currentPage]);

  const pages = [
    {
      id: 'home',
      title: 'Home',
      content: (
        <div className="grid md:grid-cols-2 gap-10 items-center min-h-full">
          <div className="order-2 md:order-1 space-y-6">
  <p className="text-xs text-gray-500 uppercase tracking-widest font-handwriting">{portfolioData.personal.greeting}</p>
  <h1 className="text-6xl md:text-7xl font-sketch text-gray-700 leading-none" style={{
    textShadow: '2px 2px 0px rgba(0,0,0,0.1)'
  }}>
    {portfolioData.personal.name}.
  </h1>
  
  {/* Hand-drawn underline */}
  <svg className="w-48 h-3" viewBox="0 0 200 12">
    <path d="M 5 8 Q 50 4, 100 6 T 195 8" 
          stroke="#6b7280" 
          strokeWidth="2" 
          fill="none" 
          strokeLinecap="round"
          opacity="0.6"/>
  </svg>

  <h2 className="text-xl md:text-2xl font-handwriting text-gray-600">
    {portfolioData.personal.tagline}
  </h2>
  
  <p className="max-w-2xl text-gray-600 leading-relaxed pt-4 font-handwriting text-sm">
    {portfolioData.personal.bio}
  </p>

  {/* Sketchy buttons */}
  <div className="flex items-center gap-6 pt-4">
    <div className="relative group">
      <div className="absolute inset-0 bg-gray-300 transform rotate-1 rounded-sm opacity-50"></div>
      <a 
        href={portfolioConfig.assets.resumePdf} 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative block px-6 py-2 bg-white border-2 border-gray-700 text-gray-700 rounded-sm hover:bg-gray-50 transition-colors font-handwriting text-sm"
      >
        View Resume
      </a>
    </div>
    
    <div className="flex gap-4">
      <a href={portfolioConfig.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition-transform hover:scale-110">
        <Github size={22} strokeWidth={1.5} />
      </a>
      <a href={portfolioConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition-transform hover:scale-110">
        <Linkedin size={22} strokeWidth={1.5} />
      </a>
      <a href={`mailto:${portfolioConfig.social.email}`} className="text-gray-600 hover:text-gray-800 transition-transform hover:scale-110">
        <Mail size={22} strokeWidth={1.5} />
      </a>
    </div>
  </div>
</div>

          {/* Profile picture with sketch effect */}
          <div className="order-1 md:order-2 flex justify-center items-start">
            <div className="space-y-4">
              <div className="relative">
                {/* Sketchy border effect */}
                <svg className="absolute -inset-2 w-full h-full" viewBox="0 0 300 300">
                  <circle cx="150" cy="150" r="145" fill="none" stroke="#9ca3af" strokeWidth="3" strokeDasharray="5,3" opacity="0.4"/>
                  <circle cx="150" cy="150" r="140" fill="none" stroke="#6b7280" strokeWidth="2" opacity="0.3"/>
                </svg>
                
                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gray-400" style={{
                  filter: 'grayscale(100%) contrast(1.1) brightness(1.1)',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.15)'
                }}>
                  <img 
                    src={portfolioConfig.assets.profileImageMain}
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Helpful hint */}
              <div className="hidden md:block relative p-3 bg-yellow-50 rounded-sm border-2 border-yellow-200 max-w-xs">
                <svg className="absolute -top-2 -left-2 w-4 h-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
                </svg>
                <p className="text-xs font-handwriting text-gray-700">
                  💡 <strong>Navigate:</strong> Click arrows, use ← → keys, or select from menu
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'about',
      title: 'About Me',
      content: (
        <div className="space-y-6">
          <div className="relative inline-block">
            <h2 className="text-3xl font-sketch text-gray-800 pb-2 mb-6">About Me</h2>
            <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 200 8">
              <path d="M 0 4 Q 50 2, 100 4 T 200 4" stroke="#9ca3af" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5"/>
            </svg>
          </div>
          
          <div className="space-y-4 text-gray-600 leading-relaxed font-handwriting text-sm">
            {/* Floating profile picture */}
            <div className="float-right ml-6 mb-4 w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden border-3 border-gray-400 shadow-lg hidden sm:block" style={{
              filter: 'grayscale(100%) contrast(1.1)',
              boxShadow: '4px 4px 0px rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.1)'
            }}>
              <img 
                src={portfolioConfig.assets.profileImageAbout}
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>

            {portfolioData.about.introduction.map((para, idx) => (
              <p key={idx}>
                {para.split('**').map((text, i) => 
                  i % 2 === 1 ? <strong key={i} className="text-gray-800">{text}</strong> : text
                )}
              </p>
            ))}
            
            {/* Sketchy box for goal */}
            <div className="relative mt-6 p-4 bg-gray-50 rounded-sm clear-right">
              <div className="absolute inset-0 border-2 border-gray-400 border-dashed rounded-sm transform rotate-0.5"></div>
              <p className="relative font-medium text-gray-700 text-sm">
                {portfolioData.about.goal}
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 mt-8">
            <div className="relative p-4 bg-white rounded-sm border-2 border-gray-300">
              <h3 className="text-base font-sketch text-gray-700 mb-3 flex items-center gap-2">
                <span className="w-2 h-6 bg-gray-600 rounded-sm"></span>
                Current Skills
              </h3>
              <ul className="space-y-2 text-xs text-gray-600 font-handwriting">
                {portfolioData.about.currentSkills.map((skill, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-gray-400 mt-0.5">→</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative p-4 bg-white rounded-sm border-2 border-gray-300 border-dashed">
              <h3 className="text-base font-sketch text-gray-700 mb-3 flex items-center gap-2">
                <span className="w-2 h-6 bg-gray-400 rounded-sm"></span>
                Learning
              </h3>
              <ul className="space-y-2 text-xs text-gray-600 font-handwriting">
                {portfolioData.about.learningSkills.map((skill, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-gray-400 mt-0.5">→</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'experience',
      title: 'Experience',
      content: (
        <div className="space-y-6">
          <div className="relative inline-block">
            <h2 className="text-3xl font-sketch text-gray-800 pb-2 mb-6">Experience</h2>
            <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 200 8">
              <path d="M 0 4 Q 50 2, 100 4 T 200 4" stroke="#9ca3af" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5"/>
            </svg>
          </div>
          
          {/* Hand-drawn timeline */}
          <div className="space-y-8 relative pl-8">
            <svg className="absolute left-3 top-0 bottom-0 w-1" style={{ height: '100%' }}>
              <line x1="2" y1="0" x2="2" y2="100%" stroke="#d1d5db" strokeWidth="2" strokeDasharray="5,5" opacity="0.6"/>
            </svg>

            {portfolioData.experience.map((job, idx) => (
              <div key={idx} className="relative">
                <svg className="absolute -left-[29px] top-1 w-4 h-4" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="5" fill="#4b5563" stroke="#374151" strokeWidth="2"/>
                </svg>
                
                <div className="bg-white p-4 rounded-sm border-2 border-gray-300 shadow-sm">
                  <p className="text-xs text-gray-500 mb-1 font-handwriting">{job.startDate} - {job.endDate} ({job.duration})</p>
                  <h3 className="text-lg font-sketch text-gray-800">{job.title}</h3>
                  <p className="text-gray-600 text-xs mb-2 font-handwriting">{job.company} | {job.location}</p>
                  <ul className="space-y-1 text-xs text-gray-600 mt-3 font-handwriting">
                    {job.responsibilities.map((resp, respIdx) => (
                      <li key={respIdx} className="flex items-start gap-2">
                        <span className="text-gray-400">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'education',
      title: 'Education',
      content: (
        <div className="space-y-6">
          <div className="relative inline-block">
            <h2 className="text-3xl font-sketch text-gray-800 pb-2 mb-6">Education</h2>
            <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 200 8">
              <path d="M 0 4 Q 50 2, 100 4 T 200 4" stroke="#9ca3af" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5"/>
            </svg>
          </div>
          
          <div className="space-y-6 relative pl-8">
            <svg className="absolute left-3 top-0 bottom-0 w-1" style={{ height: '100%' }}>
              <line x1="2" y1="0" x2="2" y2="100%" stroke="#d1d5db" strokeWidth="2" strokeDasharray="5,5" opacity="0.6"/>
            </svg>

            {portfolioData.education.map((edu, idx) => (
              <div key={idx} className="relative">
                <svg className="absolute -left-[29px] top-1 w-4 h-4" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="5" fill="#4b5563" stroke="#374151" strokeWidth="2"/>
                </svg>
                
                <div className="bg-white p-4 rounded-sm border-2 border-gray-300 shadow-sm">
                  <p className="text-xs text-gray-500 mb-1 font-handwriting">{edu.startDate} - {edu.endDate}</p>
                  <h3 className="text-xl font-sketch text-gray-800">{edu.degree}</h3>
                  <p className="text-gray-600 text-sm font-handwriting">{edu.institution}</p>
                  <div className="mt-3 inline-block px-3 py-1 bg-gray-100 rounded-sm border border-gray-300">
                    <p className="text-gray-700 font-handwriting text-sm">{edu.gradeType}: <span className="font-bold text-gray-800">{edu.grade}</span></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Technical Skills Box */}
          <div className="pt-8 mt-8 border-t-2 border-dashed border-gray-300">
            <h3 className="text-lg font-sketch text-gray-800 mb-4">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-600 font-handwriting">
              <div className="p-3 bg-gray-50 rounded-sm border border-gray-300">
                <p className="font-medium text-gray-700 mb-2 flex items-center gap-1">
                  <Code size={14} />
                  Backend
                </p>
                <p>{portfolioData.technicalSkills.backend}</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-sm border border-gray-300">
                <p className="font-medium text-gray-700 mb-2 flex items-center gap-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <path d="M3 9h18M9 21V9"/>
                  </svg>
                  Database
                </p>
                <p>{portfolioData.technicalSkills.database}</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-sm border border-gray-300">
                <p className="font-medium text-gray-700 mb-2 flex items-center gap-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                  </svg>
                  Tools
                </p>
                <p>{portfolioData.technicalSkills.tools}</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'projects',
      title: 'Projects',
      content: (
        <div className="space-y-6">
          <div className="relative inline-block">
            <h2 className="text-3xl font-sketch text-gray-800 pb-2 mb-6">Projects</h2>
            <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 200 8">
              <path d="M 0 4 Q 50 2, 100 4 T 200 4" stroke="#9ca3af" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5"/>
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioData.projects.map((project, idx) => (
              <div key={idx} className="relative bg-white rounded-sm border-2 border-gray-300 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center border-b-2 border-gray-300">
                  <Code size={40} className="text-gray-400" strokeWidth={1.5} />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-sketch text-gray-800 mb-2">{project.name}</h3>
                  <p className="text-xs text-gray-500 mb-3 font-handwriting">{project.technologies.join(' | ')}</p>
                  <p className="text-xs text-gray-600 mb-4 font-handwriting">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs">
                    {project.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className="px-2 py-1 bg-gray-100 rounded-sm border border-gray-300 font-handwriting">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <div className="relative bg-gray-50 rounded-sm border-2 border-dashed border-gray-300 p-4 flex flex-col items-center justify-center min-h-[280px] hover:bg-gray-100 transition-colors cursor-pointer">
              <svg className="w-12 h-12 text-gray-400 mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="16"/>
                <line x1="8" y1="12" x2="16" y2="12"/>
              </svg>
              <p className="text-gray-500 font-handwriting text-sm">More projects coming soon...</p>
            </div>
          </div>

          <p className="text-xs text-gray-500 text-center mt-6 font-handwriting italic">
            View all projects on <a href="https://github.com/RecurPixel" className="text-gray-700 underline hover:text-gray-900">GitHub</a>
          </p>
        </div>
      )
    },
    {
      id: 'posts',
      title: 'Posts',
      content: (
        <div className="space-y-6">
          <div className="relative inline-block">
            <h2 className="text-3xl font-sketch text-gray-800 pb-2 mb-6">Latest Posts</h2>
            <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 200 8">
              <path d="M 0 4 Q 50 2, 100 4 T 200 4" stroke="#9ca3af" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5"/>
            </svg>
          </div>

          <p className="text-xs text-gray-600 font-handwriting mb-6">
            Technical articles and thoughts from my <a href="https://dev.to/recurpixel" target="_blank" className="text-gray-700 underline hover:text-gray-900">Dev.to blog</a>
          </p>

          <div className="space-y-4">
            {devPosts.length > 0 ? (
              devPosts.map((post, index) => (
                <a 
                  key={index}
                  href={post.url} 
                  target="_blank"
                  className="block bg-white p-4 rounded-sm border-2 border-gray-300 hover:border-gray-400 hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-sm border border-gray-300 overflow-hidden">
                      {post.cover_image ? (
                        <img src={post.cover_image} alt={post.title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <BookOpen size={24} className="text-gray-400" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-sketch text-gray-800 mb-1 line-clamp-2">{post.title}</h3>
                      <p className="text-xs text-gray-500 font-handwriting mb-2">
                        {new Date(post.published_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </p>
                      <p className="text-xs text-gray-600 font-handwriting line-clamp-2">{post.description}</p>
                      <div className="flex items-center gap-2 mt-2 text-xs text-gray-500 font-handwriting">
                        <span>❤️ {post.public_reactions_count}</span>
                        <span>💬 {post.comments_count}</span>
                      </div>
                    </div>
                    <ExternalLink size={16} className="text-gray-400 flex-shrink-0 mt-1" />
                  </div>
                </a>
              ))
            ) : (
              <div className="text-center py-8">
                <BookOpen size={40} className="text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500 font-handwriting text-sm">Loading posts from Dev.to...</p>
              </div>
            )}
          </div>

          <div className="text-center pt-6">
            <a 
              href="https://dev.to/recurpixel" 
              target="_blank"
              className="inline-block px-4 py-2 bg-white border-2 border-gray-600 text-gray-700 rounded-sm hover:bg-gray-50 transition-colors font-handwriting text-xs"
            >
              Read More on Dev.to →
            </a>
          </div>
        </div>
      )
    },
    {
      id: 'achievements',
      title: 'Achievements',
      content: (
        <div className="space-y-6">
          <div className="relative inline-block">
            <h2 className="text-3xl font-sketch text-gray-800 pb-2 mb-6">Certifications & Achievements</h2>
            <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 250 8">
              <path d="M 0 4 Q 50 2, 100 4 T 250 4" stroke="#9ca3af" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5"/>
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {portfolioData.achievements.map((achievement, idx) => (
              <div key={idx} className="relative bg-white p-4 rounded-sm border-2 border-gray-300 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-yellow-50 rounded-full border-2 border-yellow-400 flex items-center justify-center">
                      <Award size={24} className="text-yellow-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-sketch text-gray-800 mb-1">{achievement.title}</h3>
                    <p className="text-xs text-gray-500 font-handwriting mb-2">{achievement.issuer} • {achievement.date}</p>
                    <p className="text-xs text-gray-600 font-handwriting">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="md:col-span-2 relative bg-gray-50 rounded-sm border-2 border-dashed border-gray-300 p-4 flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer">
              <Award size={20} className="text-gray-400 mr-2" />
              <p className="text-gray-500 font-handwriting text-xs">Add your certifications here...</p>
            </div>
          </div>

          <div className="pt-8 mt-8 border-t-2 border-dashed border-gray-300">
            <h3 className="text-lg font-sketch text-gray-800 mb-4">Professional Milestones</h3>
            <div className="space-y-3">
              {portfolioData.milestones.map((milestone, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-gray-600 text-xs">✓</span>
                  </div>
                  <div>
                    <p className="text-xs font-sketch text-gray-800">{milestone.title}</p>
                    {milestone.year && <p className="text-xs text-gray-500 font-handwriting">{milestone.year}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'books',
      title: 'Books',
      content: (
        <div className="space-y-6">
          <div className="relative inline-block">
            <h2 className="text-3xl font-sketch text-gray-800 pb-2 mb-6">My Books</h2>
            <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 200 8">
              <path d="M 0 4 Q 50 2, 100 4 T 200 4" stroke="#9ca3af" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5"/>
            </svg>
          </div>

          <p className="text-xs text-gray-600 font-handwriting mb-6">
            Technical books and guides I'm working on to share knowledge with the developer community.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Book Card - Coming Soon */}
            <div className="relative bg-white rounded-sm border-2 border-gray-300 shadow-sm overflow-hidden">
              <div className="absolute top-2 right-2 px-3 py-1 bg-yellow-100 border border-yellow-400 rounded-full text-xs font-handwriting text-yellow-800">
                Coming Soon
              </div>
              <div className="h-48 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center border-b-2 border-gray-300 relative">
                <BookOpen size={60} className="text-blue-300" strokeWidth={1.5} />
                <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]"></div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-sketch text-gray-800 mb-2">From PHP to .NET: A Developer's Journey</h3>
                <p className="text-xs text-gray-600 mb-3 font-handwriting">
                  A comprehensive guide for PHP developers transitioning to the .NET ecosystem, covering core concepts, best practices, and real-world examples.
                </p>
                <div className="flex items-center gap-2 text-xs">
                  <span className="px-2 py-1 bg-blue-50 rounded-sm border border-blue-300 font-handwriting">C#</span>
                  <span className="px-2 py-1 bg-blue-50 rounded-sm border border-blue-300 font-handwriting">.NET</span>
                  <span className="px-2 py-1 bg-blue-50 rounded-sm border border-blue-300 font-handwriting">Migration</span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between text-xs font-handwriting">
                    <span className="text-gray-500">Status:</span>
                    <span className="text-gray-700 font-medium">In Progress (30%)</span>
                  </div>
                  <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-400 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Book Card - Planned */}
            <div className="relative bg-white rounded-sm border-2 border-dashed border-gray-300 shadow-sm overflow-hidden opacity-75">
              <div className="absolute top-2 right-2 px-3 py-1 bg-gray-100 border border-gray-400 rounded-full text-xs font-handwriting text-gray-600">
                Planned
              </div>
              <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center border-b-2 border-gray-300 relative">
                <BookOpen size={60} className="text-gray-300" strokeWidth={1.5} />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-sketch text-gray-800 mb-2">API Design Patterns & Best Practices</h3>
                <p className="text-xs text-gray-600 mb-3 font-handwriting">
                  Lessons learned from building production REST APIs, covering authentication, versioning, error handling, and performance optimization.
                </p>
                <div className="flex items-center gap-2 text-xs">
                  <span className="px-2 py-1 bg-gray-100 rounded-sm border border-gray-300 font-handwriting">REST</span>
                  <span className="px-2 py-1 bg-gray-100 rounded-sm border border-gray-300 font-handwriting">API</span>
                  <span className="px-2 py-1 bg-gray-100 rounded-sm border border-gray-300 font-handwriting">Design</span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between text-xs font-handwriting">
                    <span className="text-gray-500">Status:</span>
                    <span className="text-gray-700 font-medium">Research Phase</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Placeholder for new book */}
            <div className="md:col-span-2 relative bg-gray-50 rounded-sm border-2 border-dashed border-gray-300 p-8 flex flex-col items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer">
              <svg className="w-16 h-16 text-gray-300 mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                <line x1="12" y1="9" x2="12" y2="15"/>
                <line x1="9" y1="12" x2="15" y2="12"/>
              </svg>
              <p className="text-gray-500 font-handwriting text-sm">Got an idea for a new book?</p>
              <p className="text-gray-400 font-handwriting text-xs mt-1">Add it here...</p>
            </div>
          </div>

          <div className="pt-6 text-center">
            <p className="text-xs text-gray-500 font-handwriting italic">
              Want to be notified when these books are published? Follow me on <a href="https://dev.to/recurpixel" className="text-gray-700 underline hover:text-gray-900">Dev.to</a>
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'contact',
      title: 'Contact',
      content: (
        <div className="space-y-6 flex flex-col justify-center min-h-full">
          <div className="relative inline-block">
            <h2 className="text-3xl font-sketch text-gray-800 pb-2 mb-6">Get In Touch</h2>
            <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 200 8">
              <path d="M 0 4 Q 50 2, 100 4 T 200 4" stroke="#9ca3af" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5"/>
            </svg>
          </div>

          <p className="text-sm text-gray-600 font-handwriting max-w-xl">
            {portfolioData.contact.message}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            {/* Email Card */}
            <a href={`mailto:${portfolioConfig.social.email}`} className="group relative bg-white p-4 rounded-sm border-2 border-gray-300 hover:border-gray-400 hover:shadow-md transition-all">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-gray-100 rounded-full border-2 border-gray-300 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                    <Mail size={20} className="text-gray-600" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xs font-sketch text-gray-500 mb-1">Email</h3>
                  <p className="text-sm font-handwriting text-gray-800 break-all">{portfolioConfig.social.email}</p>
                </div>
              </div>
            </a>

            {/* GitHub Card */}
            <a href={portfolioConfig.social.github} target="_blank" rel="noopener noreferrer" className="group relative bg-white p-4 rounded-sm border-2 border-gray-300 hover:border-gray-400 hover:shadow-md transition-all">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-gray-100 rounded-full border-2 border-gray-300 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                    <Github size={20} className="text-gray-600" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xs font-sketch text-gray-500 mb-1">GitHub</h3>
                  <p className="text-sm font-handwriting text-gray-800">@RecurPixel</p>
                </div>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a href={portfolioConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="group relative bg-white p-4 rounded-sm border-2 border-gray-300 hover:border-gray-400 hover:shadow-md transition-all">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-gray-100 rounded-full border-2 border-gray-300 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                    <Linkedin size={20} className="text-gray-600" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xs font-sketch text-gray-500 mb-1">LinkedIn</h3>
                  <p className="text-sm font-handwriting text-gray-800">RecurPixel</p>
                </div>
              </div>
            </a>

            {/* Dev.to Card */}
            <a href="https://dev.to/recurpixel" target="_blank" className="group relative bg-white p-4 rounded-sm border-2 border-gray-300 hover:border-gray-400 hover:shadow-md transition-all">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-gray-100 rounded-full border-2 border-gray-300 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                    <BookOpen size={20} className="text-gray-600" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xs font-sketch text-gray-500 mb-1">Dev.to Blog</h3>
                  <p className="text-sm font-handwriting text-gray-800">@recurpixel</p>
                </div>
              </div>
            </a>
          </div>

          {/* Hand-drawn note */}
          <div className="relative mt-8 p-4 bg-yellow-50 rounded-sm border-2 border-yellow-200">
            <svg className="absolute top-2 right-2 w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
              <path d="M2 17L12 22L22 17M2 12L12 17L22 12" opacity="0.5"/>
            </svg>
            <p className="text-xs font-handwriting text-gray-700 italic">
              "Best way to reach me is via email. I typically respond within 24 hours!"
            </p>
          </div>

          <div className="text-center pt-6">
            <p className="text-xs text-gray-500 font-handwriting">
              Thanks for checking out my portfolio! 🙌
            </p>
          </div>
        </div>
      )
    }
  ];

  // Filter pages based on visibility settings in portfolioConfig
  const visiblePages = pages.filter(page => {
    const pageConfig = portfolioConfig.pages[page.id];
    return pageConfig && pageConfig.enabled !== false;
  });

  // No scroll-based page flipping - users must click arrows, dots, or menu to navigate
  // This prevents any accidental page flips while reading

  // Keyboard navigation - arrow keys to flip pages
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isFlipping) return;

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        if (currentPage < visiblePages.length - 1) {
          navigateToPage(currentPage + 1);
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        if (currentPage > 0) {
          navigateToPage(currentPage - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, isFlipping, visiblePages.length]);

  // Touch handlers for mobile - swipe to flip pages
  const touchStart = useRef(null);
  
  const handleTouchStart = (e) => {
    // Only capture touches outside the page content area
    if (pageContentRef.current && pageContentRef.current.contains(e.target)) {
      return;
    }
    touchStart.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (!touchStart.current || isFlipping) return;

    const touchEnd = e.changedTouches[0].clientY;
    const diff = touchStart.current - touchEnd;

    // Swipe vertical on outer area to flip pages
    if (Math.abs(diff) > 80) {
      if (diff > 0 && currentPage < visiblePages.length - 1) {
        setIsFlipping(true);
        setTimeout(() => {
          setCurrentPage(prev => prev + 1);
          setIsFlipping(false);
        }, 600);
      } else if (diff < 0 && currentPage > 0) {
        setIsFlipping(true);
        setTimeout(() => {
          setCurrentPage(prev => prev - 1);
          setIsFlipping(false);
        }, 600);
      }
    }

    touchStart.current = null;
  };

  const navigateToPage = (index) => {
    if (index !== currentPage && !isFlipping) {
      setIsFlipping(true);
      setMenuOpen(false);
      setTimeout(() => {
        setCurrentPage(index);
        setIsFlipping(false);
      }, 600);
    }
  };

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-gray-50 flex flex-col overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='60' height='60' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`,
        fontFamily: '"Courier New", monospace'
      }}
    >
      {/* SVG Filters for sketch effect */}
     <svg width="0" height="0" style={{ position: 'absolute' }}>
  <defs>
    <filter id="sketch-filter">
      {/* Convert to grayscale */}
      <feColorMatrix
        type="matrix"
        values="0.33 0.33 0.33 0 0
                0.33 0.33 0.33 0 0
                0.33 0.33 0.33 0 0
                0    0    0    1 0"
      />
      
      {/* Brighten the image */}
      <feComponentTransfer>
        <feFuncR type="linear" slope="1.5" intercept="0.2"/>
        <feFuncG type="linear" slope="1.5" intercept="0.2"/>
        <feFuncB type="linear" slope="1.5" intercept="0.2"/>
      </feComponentTransfer>
      
      {/* Add sketch edges */}
      <feConvolveMatrix
        order="3"
        kernelMatrix="-1 -1 -1
                     -1  8 -1
                     -1 -1 -1"
        divisor="1"
        bias="0.5"
        preserveAlpha="true"
      />
    </filter>
  </defs>
</svg>

      {/* Custom Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&family=Shadows+Into+Light&display=swap');
        
        .font-sketch {
          font-family: 'Shadows Into Light', cursive;
          letter-spacing: 0.5px;
        }
        
        .font-handwriting {
          font-family: 'Patrick Hand', cursive;
        }

        /* Pencil-style underlines */
        .pencil-underline {
          position: relative;
        }
        .pencil-underline::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: repeating-linear-gradient(
            90deg,
            #9ca3af 0px,
            #9ca3af 5px,
            transparent 5px,
            transparent 8px
          );
          opacity: 0.5;
        }

        /* Custom scrollbar - more visible for page content */
        .overflow-y-auto::-webkit-scrollbar {
          width: 10px;
        }
        .overflow-y-auto::-webkit-scrollbar-track {
          background: #f3f4f6;
          border-radius: 5px;
          margin: 8px 0;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #9ca3af;
          border-radius: 5px;
          border: 2px solid #f3f4f6;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: #6b7280;
        }
        
        /* Firefox scrollbar */
        .overflow-y-auto {
          scrollbar-width: thin;
          scrollbar-color: #9ca3af #f3f4f6;
        }

        /* Arrow button pulse animation */
        @keyframes arrow-pulse {
          0%, 100% {
            transform: translateY(-50%) scale(1);
            opacity: 1;
          }
          50% {
            transform: translateY(-50%) scale(1.05);
            opacity: 0.8;
          }
        }
        
        .arrow-hint {
          animation: arrow-pulse 2s ease-in-out infinite;
        }
      `}</style>

      {/* Header with sketchy style */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b-2 border-gray-300" style={{
        boxShadow: '0 2px 0 rgba(0,0,0,0.05)'
      }}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
          <button 
            onClick={() => navigateToPage(0)}
            className="text-xl font-sketch text-gray-800 tracking-wider hover:text-gray-600 transition-colors"
          >
            Recur<span className="text-gray-600">Pixel</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {visiblePages.map((page, index) => (
              <button
                key={page.id}
                onClick={() => navigateToPage(index)}
                className={`transition-colors font-handwriting ${
                  currentPage === index 
                    ? 'text-gray-800 font-bold relative' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {page.title}
                {currentPage === index && (
                  <svg className="absolute -bottom-1 left-0 w-full h-1" viewBox="0 0 100 4">
                    <path d="M 0 2 Q 25 1, 50 2 T 100 2" stroke="#4b5563" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  </svg>
                )}
              </button>
            ))}
            <div className="relative group ml-2">
              <div className="absolute inset-0 bg-gray-200 transform rotate-1 rounded-sm opacity-50"></div>
              <a 
                href={portfolioConfig.assets.resumePdf} 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative block px-4 py-1 bg-white border-2 border-gray-600 text-gray-700 rounded-sm hover:bg-gray-50 transition-colors text-xs font-handwriting"
              >
                Resume
              </a>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700 hover:text-gray-900 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t-2 border-gray-300 py-4">
            {visiblePages.map((page, index) => (
              <button
                key={page.id}
                onClick={() => navigateToPage(index)}
                className={`block w-full text-left px-6 py-2 transition-colors font-handwriting ${
                  currentPage === index 
                    ? 'text-gray-800 font-bold bg-gray-100' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {page.title}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Main Content - Sketchbook Page */}
      <div className="flex-1 flex items-center justify-center p-4 pt-24">
        <div className="relative w-full max-w-4xl">
          
          {/* Left Arrow Button */}
          {currentPage > 0 && (
            <button
              onClick={() => navigateToPage(currentPage - 1)}
              className="fixed left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white border-2 border-gray-400 rounded-full shadow-lg hover:shadow-xl hover:border-gray-600 transition-all flex items-center justify-center group hidden md:flex"
              aria-label="Previous page"
            >
              <svg className="w-6 h-6 text-gray-600 group-hover:text-gray-800 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
          )}

          {/* Right Arrow Button */}
          {currentPage < visiblePages.length - 1 && (
            <button
              onClick={() => navigateToPage(currentPage + 1)}
              className={`fixed right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white border-2 border-gray-400 rounded-full shadow-lg hover:shadow-xl hover:border-gray-600 transition-all flex items-center justify-center group hidden md:flex ${currentPage === 0 ? 'arrow-hint' : ''}`}
              aria-label="Next page"
            >
              <svg className="w-6 h-6 text-gray-600 group-hover:text-gray-800 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          )}

          {/* Mobile Navigation Arrows (Bottom) */}
          <div className="md:hidden absolute bottom-20 left-0 right-0 flex justify-center gap-4 z-10">
            {currentPage > 0 && (
              <button
                onClick={() => navigateToPage(currentPage - 1)}
                className="w-10 h-10 bg-white border-2 border-gray-400 rounded-full shadow-lg active:scale-95 transition-transform flex items-center justify-center"
                aria-label="Previous page"
              >
                <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>
            )}
            {currentPage < visiblePages.length - 1 && (
              <button
                onClick={() => navigateToPage(currentPage + 1)}
                className="w-10 h-10 bg-white border-2 border-gray-400 rounded-full shadow-lg active:scale-95 transition-transform flex items-center justify-center"
                aria-label="Next page"
              >
                <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            )}
          </div>

          {/* Paper with sketchy edges */}
          <div 
            className="relative bg-white rounded-sm overflow-hidden"
            style={{
              boxShadow: '0 20px 60px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.05)',
              border: '2px solid #e5e7eb'
            }}
          >
            {/* Subtle paper texture */}
            <div 
              className="absolute inset-0 opacity-30 pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paper'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23paper)' opacity='0.04'/%3E%3C/svg%3E")`,
                backgroundSize: '100px 100px'
              }}
            />

            {/* Page flip animation */}
            <div 
              className={`relative transition-all duration-600 ${
                isFlipping ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}
              style={{
                transformStyle: 'preserve-3d',
                transform: isFlipping ? 'perspective(1200px) rotateY(-3deg)' : 'perspective(1200px) rotateY(0deg)'
              }}
            >
              <div 
                ref={pageContentRef}
                className="p-8 md:p-12 pb-16 min-h-[600px] max-h-[700px] overflow-y-auto overflow-x-hidden relative"
                style={{
                  scrollBehavior: 'smooth'
                }}
              >
                {visiblePages[currentPage]?.content}
                
                {/* Scroll indicator - shows when there's more content below */}
                {hasMoreContent && (
                  <div className="sticky bottom-0 left-0 right-0 h-12 pointer-events-none flex items-end justify-center">
                    <div className="bg-gradient-to-t from-white via-white/90 to-transparent w-full h-full absolute bottom-0"></div>
                    <svg className="w-5 h-5 text-gray-400 animate-bounce relative z-10 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                    </svg>
                  </div>
                )}
              </div>
            </div>

            {/* Page number - sketchy style */}
            <div className="absolute bottom-6 left-8 right-8 flex justify-between items-center text-gray-400 text-xs">
              <span className="italic font-handwriting">{visiblePages[currentPage]?.title}</span>
              <span className="font-handwriting">{currentPage + 1} / {visiblePages.length}</span>
            </div>

            {/* Hand-drawn spiral binding on left */}
            <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-around py-12">
              {[...Array(15)].map((_, i) => (
                <svg key={i} className="w-4 h-4 mx-auto" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="3" fill="none" stroke="#d1d5db" strokeWidth="1.5" opacity="0.6"/>
                </svg>
              ))}
            </div>
          </div>

          {/* Page indicators - sketchy dots */}
          <div className="flex justify-center gap-2 mt-6">
            {visiblePages.map((_, index) => (
              <button
                key={index}
                onClick={() => navigateToPage(index)}
                className={`transition-all ${
                  index === currentPage 
                    ? 'w-8 h-2.5 bg-gray-600 rounded-full' 
                    : 'w-2.5 h-2.5 bg-gray-300 rounded-full hover:bg-gray-400'
                }`}
                style={{
                  border: '1px solid rgba(0,0,0,0.1)'
                }}
              />
            ))}
          </div>

          <div className="text-center mt-4 text-gray-400 text-xs font-handwriting">
            {currentPage < visiblePages.length - 1 ? (
              <div className="flex items-center justify-center gap-3">
                <span>Arrow buttons • Keyboard (← →) • Menu</span>
              </div>
            ) : (
              'End of portfolio ✓'
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SketchPortfolio;