import React, { useEffect, useState } from 'react';

const NavBar = ({ menu, setmenu }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menu]);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800' : 'bg-transparent'
    }`}>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex justify-between items-center h-20'>
          <a href="#Home" className='text-2xl font-light tracking-wider'>
            <span className='text-white'>HAMZA</span>
            <span className='text-emerald-400 ml-2'>FAISAL</span>
          </a>

          {/* Mobile menu button */}
          <button 
            className='md:hidden w-6 h-6 flex flex-col justify-center items-center space-y-1.5 z-50'
            onClick={() => setmenu(prev => !prev)}
          >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              menu ? 'rotate-45 translate-y-2' : ''
            }`} />
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              menu ? 'opacity-0' : ''
            }`} />
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              menu ? '-rotate-45 -translate-y-2' : ''
            }`} />
          </button>

          {/* Desktop menu */}
          <div className='hidden md:flex items-center space-x-12'>
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item}`} 
                className='text-slate-300 hover:text-white transition-colors duration-300 font-light tracking-wide relative group'
              >
                {item}
                <span className='absolute bottom-0 left-0 w-0 h-px bg-emerald-400 transition-all duration-300 group-hover:w-full' />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;