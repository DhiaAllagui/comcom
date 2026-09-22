import React, { useState } from 'react';
import { agencyInfo } from '../data/agencyData';
import { MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useReveal } from '../hooks/useReveal';
import bg3 from '../images/bg3.webp';

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
  const [headerRef, headerVisible] = useReveal();
  const [leftRef, leftVisible] = useReveal();
  const [rightRef, rightVisible] = useReveal();

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
          particleCount: 50,
          spread: 55,
          origin: { y: 0.65 },
          colors: ['#E31A94', '#E843A7', '#F5F6F8']
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
    <section id="contact" className="relative py-28 bg-surface-base border-t border-border-subtle overflow-hidden">
      {/* ── Background Image (bg3) ── */}
      <img
        src={bg3}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-surface-base/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-void via-transparent to-void" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={headerRef} className={`reveal-blur ${headerVisible ? 'is-visible' : ''} text-center max-w-3xl mx-auto mb-20`}>
          <span className="eyebrow block mb-3">
            // 06 Group Coordination
          </span>
          <h2 className="font-display font-medium text-3xl sm:text-5xl lg:text-6xl text-ink-primary tracking-tight mb-6">
            Connect with Our Agencies
          </h2>
          <p className="text-ink-secondary text-sm sm:text-base leading-relaxed">
            To discuss your creative solutions, audiovisual productions, large-scale exhibitions, or advertising needs, please contact our specialized desks below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left: Department Desks */}
          <div ref={leftRef} className={`reveal ${leftVisible ? 'is-visible' : ''} lg:col-span-5 space-y-4`}>
            <div className="card-surface p-8 space-y-6">
              <div>
                <h3 className="font-display font-medium text-xl text-ink-primary mb-1">
                  Accredited Division Desks
                </h3>
                <p className="text-ink-tertiary text-xs font-mono">
                  Direct contact points across COMCOM Group departments
                </p>
              </div>

              <div className="space-y-3">
                {departmentContacts.map((dept, i) => (
                  <div key={i} className="p-4 rounded-sm border border-border-subtle space-y-1">
                    <div className="font-semibold text-xs uppercase tracking-wider text-ink-primary">
                      {dept.name}
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-ink-tertiary">
                      <a href={`mailto:${dept.email}`} className="text-accent-strong hover:text-ink-primary transition-colors">
                        {dept.email}
                      </a>
                      <span>·</span>
                      <a href={`tel:${dept.phone.replace(/\s+/g, '')}`} className="text-ink-secondary hover:text-ink-primary transition-colors">
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
                  className="w-full flex items-center justify-between p-4 rounded-sm border border-border-default hover:border-border-strong transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-accent-strong" />
                    <div>
                      <div className="text-[10px] uppercase font-mono tracking-wider text-ink-tertiary">Direct WhatsApp Line</div>
                      <div className="text-sm font-semibold text-ink-primary">+971 55 253 8556</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-accent-strong group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div ref={rightRef} className={`reveal ${rightVisible ? 'is-visible' : ''} lg:col-span-7`} style={{ transitionDelay: '120ms' }}>
            <div className="card-surface p-8 sm:p-10 shadow-lg">

              {submitted ? (
                <div className="py-12 text-center space-y-6">
                  <div className="w-16 h-16 mx-auto rounded-full border border-accent flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-accent-strong" />
                  </div>

                  <h3 className="font-display font-medium text-2xl sm:text-3xl text-ink-primary">
                    Inquiry Received by {formData.department}
                  </h3>

                  <p className="text-ink-secondary text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-ink-primary">{formData.name}</strong>. Your project parameters have been routed to the senior director of <span className="text-ink-primary font-semibold">{formData.department}</span>. We will follow up via <span className="text-ink-primary font-semibold">{formData.email}</span>.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/971552538556?text=${waPreFilledText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send Direct via WhatsApp</span>
                    </a>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-secondary w-full sm:w-auto"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  <div className="border-b border-border-subtle pb-4">
                    <h3 className="font-display font-medium text-xl text-ink-primary">
                      Direct Department Inquiry Form
                    </h3>
                    <p className="text-xs text-ink-tertiary font-mono mt-0.5">
                      Confidential brief submission to COMCOM Group headquarters
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-sm border border-red-500/40 text-red-300 text-xs font-mono" style={{ background: 'rgba(239,68,68,0.08)' }}>
                      {errorMsg}
                    </div>
                  )}

                  {/* Department Selector */}
                  <div className="space-y-1.5">
                    <label className="block font-mono text-xs uppercase tracking-wider text-ink-secondary">
                      Select Department / Division *
                    </label>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      className="field-input w-full"
                    >
                      {departmentContacts.map((dept) => (
                        <option key={dept.name} value={dept.name} className="bg-surface-elevated">
                          {dept.name} ({dept.email})
                        </option>
                      ))}
                      <option value="Central Influencers Agency (CIA)" className="bg-surface-elevated">
                        Central Influencers Agency (CIA) / Academies
                      </option>
                      <option value="Enterprise Training / Tourism / Trade" className="bg-surface-elevated">
                        Enterprise Training / Tourism / Trading
                      </option>
                    </select>
                  </div>

                  {/* 2-Column Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block font-mono text-xs uppercase tracking-wider text-ink-secondary">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Sultan Al Mansoor"
                        className="field-input w-full"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block font-mono text-xs uppercase tracking-wider text-ink-secondary">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="e.g. Prestige Group UAE"
                        className="field-input w-full"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block font-mono text-xs uppercase tracking-wider text-ink-secondary">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="sultan@example.com"
                        className="field-input w-full"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block font-mono text-xs uppercase tracking-wider text-ink-secondary">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+971 50 123 4567"
                        className="field-input w-full"
                      />
                    </div>
                  </div>

                  {/* Brief Message */}
                  <div className="space-y-1.5">
                    <label className="block font-mono text-xs uppercase tracking-wider text-ink-secondary">
                      Project Scope &amp; Collaboration Details
                    </label>
                    <textarea
                      name="brief"
                      rows="4"
                      value={formData.brief}
                      onChange={handleInputChange}
                      placeholder="Outline your project scope, target timeline, or collaboration requirements..."
                      className="field-input w-full resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center gap-3 uppercase tracking-widest"
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

                  <div className="text-center text-[11px] font-mono text-ink-tertiary">
                    Need immediate assistance? Connect directly on WhatsApp at{' '}
                    <a href={agencyInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-accent-strong font-semibold underline">
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
