import React, { useState } from 'react';
import { Search, User, Menu, X, Star, Clock, Calendar, Play, ChevronLeft, ChevronRight } from 'lucide-react';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = ["Movies", "TV Series", "Editor's Pick", "Interviews", "User Reviews"];

  return (
    <div className="relative w-full h-screen h-svh bg-black text-white overflow-hidden flex flex-col select-none">
      {/* Background Video */}
      <video
        className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_094145_4a271a6c-3869-4f1c-8aa7-aeb0cb227994.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Bottom Blur Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[1] backdrop-blur-xl bottom-blur-mask" />

      {/* Navbar (z-index 50, relative positioned) */}
      <nav className="relative z-50 flex items-center justify-between w-full px-4 sm:px-6 md:px-12 py-4 md:py-6 bg-transparent">
        {/* Left: Text Logo */}
        <div 
          className="animate-blur-fade-up flex items-center h-8 md:h-10 text-lg md:text-xl font-bold tracking-[0.25em] text-white"
          style={{ animationDelay: '0ms' }}
          id="navbar-logo"
        >
          CINEMATIC
        </div>

        {/* Center: Desktop links (hidden below lg) */}
        <div className="hidden lg:flex items-center gap-8" id="navbar-links">
          {navLinks.map((link, idx) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace("'", "").replace(" ", "-")}`}
              className="animate-blur-fade-up text-sm text-white hover:text-gray-300 transition-colors font-medium"
              style={{ animationDelay: `${100 + idx * 50}ms` }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-4" id="navbar-actions">
          {/* Search button (visible on sm and up) */}
          <button
            className="hidden sm:flex animate-blur-fade-up rounded-full liquid-glass items-center gap-2 px-4 md:px-6 py-2 text-sm text-white hover:bg-white/5 transition-all"
            style={{ animationDelay: '350ms' }}
            id="search-btn-desktop"
          >
            <Search size={18} />
            <span>Search</span>
          </button>

          {/* Profile button (visible on sm and up) */}
          <button
            className="hidden sm:flex animate-blur-fade-up w-10 h-10 rounded-full liquid-glass items-center justify-center text-white hover:bg-white/5 transition-all"
            style={{ animationDelay: '400ms' }}
            aria-label="User profile"
            id="profile-btn-desktop"
          >
            <User size={18} />
          </button>

          {/* Hamburger menu button (visible only below lg) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden animate-blur-fade-up w-10 h-10 rounded-full liquid-glass flex items-center justify-center text-white focus:outline-none relative transition-all"
            style={{ animationDelay: '350ms' }}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            id="mobile-menu-toggle"
          >
            <span className={`absolute transition-all duration-500 ease-out flex items-center justify-center ${isOpen ? 'rotate-180 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'}`}>
              <Menu size={18} />
            </span>
            <span className={`absolute transition-all duration-500 ease-out flex items-center justify-center ${isOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-180 opacity-0 scale-50'}`}>
              <X size={18} />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu (below lg breakpoint) */}
      <div 
        className={`absolute left-0 right-0 top-[72px] z-40 bg-gray-900/95 backdrop-blur-lg border-t border-b border-gray-800 shadow-2xl px-6 py-6 flex flex-col gap-3 transition-all duration-500 ease-out ${
          isOpen 
            ? 'translate-y-0 opacity-100 pointer-events-auto' 
            : '-translate-y-4 opacity-0 pointer-events-none'
        }`}
        id="mobile-menu"
      >
        <div className="flex flex-col gap-1">
          {navLinks.map((link, idx) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace("'", "").replace(" ", "-")}`}
              onClick={() => setIsOpen(false)}
              className={`py-3 px-3 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300 transform ${
                isOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
              }`}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Search & Profile inside mobile menu (visible below sm) */}
        <div 
          className={`sm:hidden border-t border-gray-800 mt-2 pt-4 flex flex-col gap-3 transform transition-all duration-300 ${
            isOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
          }`}
          style={{ transitionDelay: `${navLinks.length * 50}ms` }}
          id="mobile-menu-extras"
        >
          <button 
            onClick={() => setIsOpen(false)}
            className="w-full rounded-full liquid-glass flex items-center justify-center gap-2 py-3 px-4 text-sm font-medium text-white hover:bg-white/5"
            id="search-btn-mobile"
          >
            <Search size={18} />
            <span>Search</span>
          </button>
          <button 
            onClick={() => setIsOpen(false)}
            className="w-full rounded-full liquid-glass flex items-center justify-center gap-2 py-3 px-4 text-sm font-medium text-white hover:bg-white/5"
            id="profile-btn-mobile"
          >
            <User size={18} />
            <span>Profile</span>
          </button>
        </div>
      </div>

      {/* Hero Content (bottom of viewport, z-index 10) */}
      <div className="relative z-10 flex-1 flex flex-col justify-end px-4 sm:px-6 md:px-12 pb-8 md:pb-16 pointer-events-none">
        <div className="flex flex-col md:flex-row items-end gap-8 w-full">
          {/* Left Side */}
          <div className="flex-1 w-full text-left pointer-events-auto">
            {/* Metadata Row */}
            <div 
              className="animate-blur-fade-up flex flex-wrap items-center gap-3 sm:gap-6 mb-6 md:mb-8 text-xs sm:text-sm text-white/90"
              style={{ animationDelay: '300ms' }}
              id="hero-metadata"
            >
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-white fill-white" />
                <span className="font-semibold text-white">8.7/10 IMDB</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-white/30 hidden sm:block" />
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Clock size={16} className="text-white/75" />
                <span>132 min</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-white/30 hidden sm:block" />
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Calendar size={16} className="text-white/75" />
                <span>April, 2025</span>
              </div>
            </div>

            {/* Title */}
            <h1 
              className="animate-blur-fade-up text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal mb-4 md:mb-6 text-white leading-[1.1]"
              style={{ 
                letterSpacing: '-0.04em',
                animationDelay: '400ms'
              }}
              id="hero-title"
            >
              Step Through. <br className="hidden sm:inline" />Work Smarter.
            </h1>

            {/* Description */}
            <p 
              className="animate-blur-fade-up text-base sm:text-lg md:text-xl text-gray-400 mb-6 md:mb-12 max-w-2xl font-light leading-relaxed"
              style={{ animationDelay: '500ms' }}
              id="hero-description"
            >
              A voyage through forgotten realms, where past and future intertwine.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4" id="hero-ctas">
              <button 
                className="animate-blur-fade-up bg-white text-black hover:bg-gray-200 transition-colors rounded-full font-medium px-6 sm:px-8 py-2.5 sm:py-3 flex items-center justify-center gap-2 text-sm sm:text-base shadow-lg"
                style={{ animationDelay: '600ms' }}
                id="watch-now-btn"
              >
                <Play size={18} className="fill-black text-black" />
                <span>Watch Now</span>
              </button>
              <button 
                className="animate-blur-fade-up rounded-full font-medium liquid-glass px-6 sm:px-8 py-2.5 sm:py-3 text-white hover:bg-white/5 transition-all text-sm sm:text-base"
                style={{ animationDelay: '700ms' }}
                id="learn-more-btn"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side - Navigation Arrows */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-start md:justify-end pointer-events-auto" id="hero-nav-arrows">
            <button 
              className="animate-blur-fade-up rounded-full liquid-glass px-4 sm:px-6 py-2.5 sm:py-3 text-white hover:bg-white/5 transition-all flex items-center justify-center"
              style={{ animationDelay: '800ms' }}
              aria-label="Previous movie"
              id="prev-btn"
            >
              <ChevronLeft size={20} />
              <span className="sr-only">Previous</span>
            </button>
            <button 
              className="animate-blur-fade-up rounded-full liquid-glass px-4 sm:px-6 py-2.5 sm:py-3 text-white hover:bg-white/5 transition-all flex items-center justify-center"
              style={{ animationDelay: '900ms' }}
              aria-label="Next movie"
              id="next-btn"
            >
              <ChevronRight size={20} />
              <span className="sr-only">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
