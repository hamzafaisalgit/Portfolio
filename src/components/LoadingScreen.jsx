import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 800);
          }, 300);
          return 100;
        }
        return prev + 1.2;
      });
    }, 25);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(16,185,129,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(6,182,212,0.15),transparent_50%)]"></div>
      </div>

      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] animate-pulse"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center">
          
          {/* Logo animation */}
          <div className="relative mb-16">
            <div className="text-7xl md:text-8xl font-light tracking-wider mb-6 animate-fade-in-up">
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent bg-size-200 animate-gradient">
                HAMZA
              </span>
            </div>
            
            {/* Animated underline */}
            <div className="relative">
              <div className="h-px w-64 bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto opacity-60"></div>
              <div className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto animate-pulse"></div>
            </div>
            
            {/* Subtitle */}
            <div className="mt-6 opacity-0 animate-fade-in-delayed">
              <p className="text-slate-400 text-sm font-light tracking-widest uppercase">
                Full Stack Developer
              </p>
            </div>
          </div>
          
          {/* Progress bar container */}
          <div className="relative mb-8 animate-fade-in-up-delayed">
            <div className="w-96 h-1 bg-slate-700/50 rounded-full overflow-hidden relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full blur-sm"></div>
              
              {/* Progress bar */}
              <div 
                className="relative h-full bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-300 ease-out rounded-full shadow-lg"
                style={{ width: `${progress}%` }}
              >
                {/* Animated shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full animate-shine"></div>
              </div>
            </div>
            
            {/* Progress percentage */}
            <div className="mt-4 text-emerald-400 text-sm font-light tracking-wide">
              {Math.round(progress)}%
            </div>
          </div>
          
          {/* Loading text */}
          <div className="animate-fade-in-delayed">
            <p className="text-slate-300 text-sm font-light tracking-wide mb-2">
              {progress < 30 ? 'Initializing...' : 
               progress < 60 ? 'Loading Assets...' : 
               progress < 90 ? 'Almost Ready...' : 
               'Welcome!'}
            </p>
            
            {/* Animated dots */}
            <div className="flex justify-center space-x-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-1 bg-emerald-400 rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;