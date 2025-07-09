import React from 'react';

const MobileMenu = ({ menu, setmenu }) => {
  return (
    <div className={`fixed inset-0 bg-slate-900/98 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-500 ${
      menu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
    }`}>
      
      <div className="text-center space-y-8">
        {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
          <a 
            key={item}
            href={`#${item}`} 
            onClick={() => setmenu(false)} 
            className={`block text-3xl font-light tracking-wider text-white hover:text-emerald-400 transition-all duration-300 transform ${
              menu ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {item}
          </a>
        ))}
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
      </div>
    </div>
  );
};

export default MobileMenu;