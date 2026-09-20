import React, { useState } from 'react';
import { agencyInfo } from '../data/agencyData';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

const departmentContacts = [
  { name: "Group Headquarters", email: "contact@comcomgroup.ae", phone: "+971 4 567 8901" },
  { name: "COMCOM Studios (Audiovisual)", email: "contact@comcomstudios.ae", phone: "+971 4 567 8910" },
  { name: "COMCOM Events & Expo", email: "contact@comcomexpo.ae", phone: "+971 4 123 4567" },
  { name: "COMCOM Advertising & Media", email: "contact@comcomadvertising.ae", phone: "+971 4 789 1234" },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    department: departmentContacts[0].name,
    brief: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg('Please complete all required fields: Name, Email, and Phone.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.65 },
          colors: ['#D926A9', '#00D2FF', '#FFFFFF']
        });
      } catch (err) {}
    }, 700);
  };

  const waPreFilledText = encodeURIComponent(
    `Hello COMCOM Group!\n\n` +
    `My name is ${formData.name || 'Prospective Client'}${formData.company ? ` from ${formData.company}` : ''}.\n` +
    `Department: ${formData.department}\n` +
    `Email: ${formData.email}\n` +
    `Phone: ${formData.phone}\n` +
    `Message: ${formData.brief || 'I would like to inquire about collaboration opportunities.'}`
  );

  return (
    <section id="contact" className="relative py-28 bg-[#0A0A0E] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-neon-magenta font-semibold block mb-3">
            Group Coordination
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight mb-6">
            Connect with Our Agencies
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            To discuss your creative solutions, audiovisual productions, large-scale exhibitions, or advertising needs, please contact our specialized desks below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Department Desks */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-8 rounded-3xl bg-[#111117] border border-white/[0.08] space-y-6">
              <div>
                <h3 className="font-heading font-bold text-xl text-white mb-1">
                  Accredited Division Desks
                </h3>
                <p className="text-slate-400 text-xs font-mono">
                  Direct contact points across COMCOM Group departments
                </p>
              </div>

              <div className="space-y-3">
                {departmentContacts.map((dept, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                    <div className="font-heading font-bold text-xs uppercase tracking-wider text-white">
                      {dept.name}
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                      <a href={`mailto:${dept.email}`} className="text-pink-300 hover:text-white transition-colors">
                        {dept.email}
                      </a>
                      <span>•</span>
                      <a href={`tel:${dept.phone.replace(/\s+/g, '')}`} className="text-slate-300 hover:text-white transition-colors">
                        {dept.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct WhatsApp Action */}
              <div className="pt-2">
                <a
                  href={agencyInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 hover:border-emerald-400 hover:bg-emerald-900/40 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-emerald-400" />
                    <div>
                      <div className="text-[10px] uppercase font-mono tracking-wider text-emerald-400">Direct WhatsApp Line</div>
                      <div className="text-sm font-bold text-white">+971 55 253 8556</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Clean Multi-Division Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#111117] border border-white/[0.08] shadow-2xl">
              
              {submitted ? (
                <div className="py-12 text-center space-y-6 animate-in fade-in duration-300">
                  <div className="w-16 h-16 mx-auto rounded-full bg-white/[0.06] border border-neon-magenta flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-neon-magenta" />
                  </div>

                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">
                    Inquiry Received by {formData.department}
                  </h3>

                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your project parameters have been routed to the senior director of <span className="text-white font-semibold">{formData.department}</span>. We will follow up via <span className="text-white font-semibold">{formData.email}</span>.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/971552538556?text=${waPreFilledText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send Direct via WhatsApp</span>
                    </a>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-slate-300 text-xs font-semibold uppercase tracking-wider"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="border-b border-white/[0.08] pb-4">
                    <h3 className="font-heading font-bold text-xl text-white">
                      Direct Department Inquiry Form
                    </h3>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">
                      Confidential brief submission to COMCOM Group headquarters
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-red-950/60 border border-red-500/40 text-red-200 text-xs font-mono">
                      {errorMsg}
                    </div>
                  )}

                  {/* Department Selector */}
                  <div className="space-y-1.5">
                    <label className="block font-mono text-xs uppercase tracking-wider text-slate-300">
                      Select Department / Division *
                    </label>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#08080A] border border-white/[0.1] focus:border-white text-sm text-white outline-none"
                    >
                      {departmentContacts.map((dept) => (
                        <option key={dept.name} value={dept.name} className="bg-[#08080A]">
                          {dept.name} ({dept.email})
                        </option>
                      ))}
                      <option value="Central Influencers Agency (CIA)" className="bg-[#08080A]">
                        Central Influencers Agency (CIA) / Academies
                      </option>
                      <option value="Enterprise Training / Tourism / Trade" className="bg-[#08080A]">
                        Enterprise Training / Tourism / Trading
                      </option>
                    </select>
                  </div>

                  {/* 2-Column Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block font-mono text-xs uppercase tracking-wider text-slate-300">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Sultan Al Mansoor"
                        className="w-full px-4 py-3 rounded-xl bg-[#08080A] border border-white/[0.1] focus:border-white text-sm text-white placeholder-slate-600 outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block font-mono text-xs uppercase tracking-wider text-slate-300">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="e.g. Prestige Group UAE"
                        className="w-full px-4 py-3 rounded-xl bg-[#08080A] border border-white/[0.1] focus:border-white text-sm text-white placeholder-slate-600 outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block font-mono text-xs uppercase tracking-wider text-slate-300">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="sultan@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#08080A] border border-white/[0.1] focus:border-white text-sm text-white placeholder-slate-600 outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block font-mono text-xs uppercase tracking-wider text-slate-300">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+971 50 123 4567"
                        className="w-full px-4 py-3 rounded-xl bg-[#08080A] border border-white/[0.1] focus:border-white text-sm text-white placeholder-slate-600 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Brief Message */}
                  <div className="space-y-1.5">
                    <label className="block font-mono text-xs uppercase tracking-wider text-slate-300">
                      Project Scope &amp; Collaboration Details
                    </label>
                    <textarea
                      name="brief"
                      rows="4"
                      value={formData.brief}
                      onChange={handleInputChange}
                      placeholder="Outline your project scope, target timeline, or collaboration requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-[#08080A] border border-white/[0.1] focus:border-white text-sm text-white placeholder-slate-600 outline-none resize-none transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full bg-white hover:bg-neon-magenta text-black hover:text-white font-heading font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-xl flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Routing Brief...</span>
                    ) : (
                      <>
                        <span>Submit Project Brief</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="text-center text-[11px] font-mono text-slate-400">
                    Need immediate assistance? Connect directly on WhatsApp at{' '}
                    <a href={agencyInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-bold underline">
                      +971 55 253 8556
                    </a>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
