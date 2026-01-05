
import React, { useState } from 'react';
import { Send, MapPin, Mail, Phone, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl md:text-6xl font-heading font-black mb-6">Let's Create <br/><span className="text-purple-500">Something Great.</span></h2>
              <p className="text-gray-400 text-lg">Have a vision? I have the tools to bring it to life. Reach out and let's start a conversation.</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:border-purple-500 transition-colors">
                  <Mail className="text-purple-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-bold uppercase tracking-widest">Email Me</div>
                  <div className="text-white font-medium">hello@arunregmi.com.np</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:border-purple-500 transition-colors">
                  <MapPin className="text-purple-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-bold uppercase tracking-widest">Location</div>
                  <div className="text-white font-medium">Kathmandu, Nepal</div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <div className="text-sm text-gray-500 font-bold uppercase tracking-widest mb-6">Follow My Journey</div>
              <div className="flex space-x-4">
                {[Github, Twitter, Linkedin, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 bg-white/5 hover:bg-purple-600 border border-white/10 rounded-xl flex items-center justify-center transition-all hover:-translate-y-1">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 to-blue-500/30 blur-2xl rounded-3xl opacity-20"></div>
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl">
              {submitted ? (
                <div className="text-center py-20 space-y-6">
                  <div className="w-20 h-20 bg-emerald-500/20 text-emerald-500 border border-emerald-500/50 rounded-full flex items-center justify-center mx-auto">
                    <Send size={40} />
                  </div>
                  <h3 className="text-3xl font-bold">Message Sent!</h3>
                  <p className="text-gray-400">Thanks for reaching out, Arun will get back to you shortly.</p>
                  <button onClick={() => setSubmitted(false)} className="text-purple-400 font-bold underline">Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="John Doe" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="john@example.com" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Message</label>
                    <textarea 
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Tell me about your project..." 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    ></textarea>
                  </div>
                  <button 
                    disabled={isSubmitting}
                    className="w-full py-5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl transition-all shadow-xl shadow-purple-600/20 flex items-center justify-center space-x-2 active:scale-95 disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    <Send size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
