import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id='Contact' className='min-h-screen flex items-center justify-center py-20 relative overflow-hidden'>
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.1),transparent_50%)]"></div>
      </div>

      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        <div className="text-center mb-16">
          <h2 className='text-5xl md:text-6xl font-light mb-6 text-white tracking-tight'>
            Get In{' '}
            <span className='bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent'>
              Touch
            </span>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto mb-8"></div>
          <p className="text-slate-400 text-lg font-light max-w-2xl mx-auto">
            Ready to collaborate? Let's discuss your next project and bring your ideas to life.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          
          {/* Contact Info Panel */}
          <div className='group relative'>
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            
            <div className='relative p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg hover:border-slate-600 transition-all duration-300 h-full'>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-light text-slate-400 tracking-widest uppercase">
                  Contact Information
                </span>
                <span className="text-xs font-light px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Available
                </span>
              </div>
              
              <h3 className='text-2xl font-light mb-6 text-white group-hover:text-emerald-400 transition-colors duration-300'>
                Let's Connect
              </h3>

              <div className='space-y-6 mb-8'>
                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-slate-700/50 rounded-sm flex items-center justify-center border border-slate-600'>
                    <span className='text-emerald-400 text-lg'>📧</span>
                  </div>
                  <div>
                    <h4 className='font-light text-white mb-1'>Email</h4>
                    <p className='text-slate-300 text-sm'>mhamzafaisal2214@gmail.com </p>
                  </div>
                </div>
                
                {/* <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-slate-700/50 rounded-sm flex items-center justify-center border border-slate-600'>
                    <span className='text-emerald-400 text-lg'>📱</span>
                  </div>
                  <div>
                    <h4 className='font-light text-white mb-1'>Phone</h4>
                    <p className='text-slate-300 text-sm'>+92 303 2071397</p>
                  </div>
                </div> */}
                
                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-slate-700/50 rounded-sm flex items-center justify-center border border-slate-600'>
                    <span className='text-emerald-400 text-lg'>📍</span>
                  </div>
                  <div>
                    <h4 className='font-light text-white mb-1'>Location</h4>
                    <p className='text-slate-300 text-sm'>Islamabad, Pakistan</p>
                  </div>
                </div>
              </div>

              <div className='flex flex-wrap gap-2'>
                {[
                  { name: 'GitHub', link: 'https://github.com/hamzafaisalgit?tab=repositories' },
                  { name: 'LinkedIn', link: 'https://www.linkedin.com/in/muhammad-hamza-faisal-959b932a4/' },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-3 py-1 bg-slate-700/50 text-slate-300 rounded-sm text-xs font-light border border-slate-600 hover:border-slate-500 transition-colors duration-300'
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form Panel */}
          <div className='group relative'>
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            
            <div className='relative p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg hover:border-slate-600 transition-all duration-300 h-full'>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-light text-slate-400 tracking-widest uppercase">
                  Send Message
                </span>
                <span className="text-xs font-light px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Quick Response
                </span>
              </div>
              
              <h3 className='text-2xl font-light mb-6 text-white group-hover:text-emerald-400 transition-colors duration-300'>
                Start a Conversation
              </h3>

              <form onSubmit={handleSubmit} className='space-y-6'>
                <div>
                  <label htmlFor='name' className='block text-sm font-light text-slate-400 mb-2'>
                    Name
                  </label>
                  <input
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    type='text'
                    required
                    placeholder='Your name'
                    className='w-full p-3 bg-slate-700/50 border border-slate-600 rounded-sm text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/30 transition-all duration-300 font-light'
                  />
                </div>

                <div>
                  <label htmlFor='email' className='block text-sm font-light text-slate-400 mb-2'>
                    Email
                  </label>
                  <input
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    type='email'
                    required
                    placeholder='you@example.com'
                    className='w-full p-3 bg-slate-700/50 border border-slate-600 rounded-sm text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/30 transition-all duration-300 font-light'
                  />
                </div>

                <div>
                  <label htmlFor='message' className='block text-sm font-light text-slate-400 mb-2'>
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder='Tell me about your project...'
                    className='w-full p-3 bg-slate-700/50 border border-slate-600 rounded-sm text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/30 transition-all duration-300 resize-none font-light'
                  />
                </div>

                <button
                  type='submit'
                  className='group/btn relative bg-gradient-to-r from-emerald-500 to-cyan-500 text-white py-3 px-6 rounded-sm font-medium text-sm tracking-wide transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:scale-105 overflow-hidden w-full'
                >
                  <span className="relative z-10">SEND MESSAGE</span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;