import React, { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { agencyInfo } from '../data/agencyData';
import { MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useReveal } from '../hooks/useReveal';
import { Wave } from './Wave';
import bg3 from '../images/bg3.webp';

const departmentContacts = [
  { name: "Group Headquarters", email: "contact@comcomgroupcompany.com", phone: "+971 4 567 8901" },
  { name: "COMCOM Studios (Audiovisual)", email: "contact@comcomgroupcompany.com", phone: "+971 4 567 8910" },
  { name: "COMCOM Events & Expo", email: "contact@comcomgroupcompany.com", phone: "+971 4 123 4567" },
  { name: "COMCOM Advertising & Media", email: "contact@comcomgroupcompany.com", phone: "+971 4 789 1234" },
];

export default function ContactSection() {
  const { t } = useTranslation();
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
      setErrorMsg(t('contact.requiredNotice'));
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      setErrorMsg(t('contact.invalidEmail'));
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
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-surface-base/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-void via-transparent to-void" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={headerRef} className={`reveal-blur ${headerVisible ? 'is-visible' : ''} text-center max-w-3xl mx-auto mb-20`}>
          <span className="eyebrow block mb-3">
            {t('contact.eyebrow')}
          </span>
          <h2 className="font-display font-medium text-3xl sm:text-5xl lg:text-6xl text-ink-primary tracking-tight mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-ink-secondary text-sm sm:text-base leading-relaxed">
            {t('contact.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left: Department Desks */}
          <div ref={leftRef} className={`reveal ${leftVisible ? 'is-visible' : ''} lg:col-span-5 space-y-4`}>
            <div className="card-surface p-8 space-y-6">
              <div>
                <h3 className="font-display font-medium text-xl text-ink-primary mb-1">
                  {t('contact.desksTitle')}
                </h3>
                <p className="text-ink-tertiary text-xs font-mono">
                  {t('contact.desksSubtitle')}
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
                      <div className="text-[10px] uppercase font-mono tracking-wider text-ink-tertiary">{t('contact.whatsappDirect')}</div>
                      <div className="text-sm font-semibold text-ink-primary">+971 55 253 8556</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-accent-strong group-hover:translate-x-1 transition-transform rtl-flip">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div ref={rightRef} className={`reveal ${rightVisible ? 'is-visible' : ''} lg:col-span-7`} style={{ transitionDelay: '120ms' }}>
            <div className="card-surface p-8 sm:p-10 shadow-lg">

              {submitted ? (
                <div role="status" className="py-12 text-center space-y-6">
                  <div className="w-16 h-16 mx-auto rounded-full border border-accent flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-accent-strong" />
                  </div>

                  <h3 className="font-display font-medium text-2xl sm:text-3xl text-ink-primary">
                    {t('contact.successTitle', { department: formData.department })}
                  </h3>

                  <p className="text-ink-secondary text-sm max-w-md mx-auto leading-relaxed">
                    <Trans
                      i18nKey="contact.successMessage"
                      values={{ name: formData.name, department: formData.department, email: formData.email }}
                      components={{
                        1: <strong className="text-ink-primary" />,
                        3: <span className="text-ink-primary font-semibold" />,
                        5: <span className="text-ink-primary font-semibold" />
                      }}
                    />
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/971552538556?text=${waPreFilledText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{t('contact.sendDirectWhatsApp')}</span>
                    </a>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-secondary w-full sm:w-auto"
                    >
                      {t('contact.submitAnother')}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  <div className="border-b border-border-subtle pb-4">
                    <h3 className="font-display font-medium text-xl text-ink-primary">
                      {t('contact.formTitle')}
                    </h3>
                    <p className="text-xs text-ink-tertiary font-mono mt-0.5">
                      {t('contact.formSubtitle')}
                    </p>
                  </div>

                  {errorMsg && (
                    <div role="alert" className="p-3 rounded-sm border border-red-500/40 text-red-300 text-xs font-mono" style={{ background: 'rgba(239,68,68,0.08)' }}>
                      {errorMsg}
                    </div>
                  )}

                  {/* Department Selector */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-department" className="block font-mono text-xs uppercase tracking-wider text-ink-secondary">
                      {t('contact.deptLabel')}
                    </label>
                    <select
                      id="contact-department"
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
                      <label htmlFor="contact-name" className="block font-mono text-xs uppercase tracking-wider text-ink-secondary">
                        {t('contact.nameLabel')}
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={t('contact.namePlaceholder')}
                        className="field-input w-full"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-company" className="block font-mono text-xs uppercase tracking-wider text-ink-secondary">
                        {t('contact.companyLabel')}
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        name="company"
                        autoComplete="organization"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder={t('contact.companyPlaceholder')}
                        className="field-input w-full"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="block font-mono text-xs uppercase tracking-wider text-ink-secondary">
                        {t('contact.emailLabel')}
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={t('contact.emailPlaceholder')}
                        className="field-input w-full"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-phone" className="block font-mono text-xs uppercase tracking-wider text-ink-secondary">
                        {t('contact.phoneLabel')}
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        required
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder={t('contact.phonePlaceholder')}
                        className="field-input w-full"
                      />
                    </div>
                  </div>

                  {/* Brief Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-brief" className="block font-mono text-xs uppercase tracking-wider text-ink-secondary">
                      {t('contact.briefLabel')}
                    </label>
                    <textarea
                      id="contact-brief"
                      name="brief"
                      rows="4"
                      value={formData.brief}
                      onChange={handleInputChange}
                      placeholder={t('contact.briefPlaceholder')}
                      className="field-input w-full resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center gap-3 uppercase tracking-widest font-mono text-xs !py-3.5"
                  >
                    {isSubmitting ? (
                      <>
                        <Wave className="h-4 text-[color:var(--text-on-accent)]" />
                        <span>{t('contact.submittingBtn')}</span>
                      </>
                    ) : (
                      <>
                        <span>{t('contact.submitBtn')}</span>
                        <Send className="w-4 h-4 rtl-flip" />
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
