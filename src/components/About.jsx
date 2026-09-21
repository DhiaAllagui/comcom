import React from 'react';
import { useReveal } from '../hooks/useReveal';

const pillars = [
  { num: '01', title: 'Innovation', desc: 'Leveraging cutting-edge technologies to captivate global audiences.' },
  { num: '02', title: 'Client Focus', desc: 'Customized, flexible solutions designed around unique project needs.' },
  { num: '03', title: 'Excellence', desc: 'Rigorous, transparent process delivering projects on time to highest standards.' },
];

export default function About() {
  const [leftRef, leftVisible] = useReveal();
  const [rightRef, rightVisible] = useReveal();

  return (
    <section id="about" className="relative py-28 bg-void border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column */}
          <div ref={leftRef} className={`reveal ${leftVisible ? 'is-visible' : ''} lg:col-span-7 space-y-6`}>
            <span className="eyebrow block">
              // 05 About COMCOM Group
            </span>

            <h2 className="font-display font-medium text-3xl sm:text-5xl text-ink-primary tracking-tight leading-tight">
              An International Creative Solutions Holding in the UAE.
            </h2>

            <p className="text-ink-secondary text-base sm:text-lg leading-relaxed">
              <strong className="text-ink-primary">COMCOM Group (Creative Solutions)</strong> is an international holding company based in the United Arab Emirates. With agencies accredited by the Free Zone, we provide leading expertise across advertising, media, training, events &amp; expos, tourism, and global trading.
            </p>

            <p className="text-ink-tertiary text-sm sm:text-base leading-relaxed">
              Our multidisciplinary team comprises film directors, editors, animators, cinematographers, marketing strategists, and event logistics experts. By operating specialized agencies in synergy, we deliver innovative solutions tailored to the diverse needs of global clients.
            </p>

            {/* Strategic Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {pillars.map((p) => (
                <div key={p.num} className="card-surface p-4 space-y-1">
                  <div className="font-display font-medium text-sm text-ink-primary flex items-center gap-1.5">
                    <span className="text-accent-strong font-mono">{p.num}</span>
                    <span>{p.title}</span>
                  </div>
                  <p className="text-xs text-ink-tertiary">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Insignia Card */}
          <div ref={rightRef} className={`reveal ${rightVisible ? 'is-visible' : ''} lg:col-span-5 space-y-6`} style={{ transitionDelay: '120ms' }}>
            <div className="card-surface p-8 shadow-lg flex flex-col items-center text-center relative overflow-hidden">

              {/* Official Brand Logo */}
              <div className="w-full h-28 rounded-sm bg-white shadow-sm flex items-center justify-center p-4 mb-6">
                <img
                  src="/comcom-logo-wordmark.png"
                  alt="COMCOM Group FZC LLC Official Brand Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="font-display font-medium text-xl text-ink-primary mb-1">
                COMCOM GROUP (CREATIVE SOLUTIONS)
              </div>

              <div className="eyebrow mb-3">
                UAE Free Zone Accredited Holding
              </div>

              <p className="text-xs text-ink-tertiary font-mono leading-relaxed mb-6">
                Registered in Dubai, United Arab Emirates, overseeing specialized subsidiaries: COMCOM Studios, COMCOM Events &amp; Expo, COMCOM Advertising &amp; Media, and proprietary venture academies.
              </p>

              {/* Brand Motion Link */}
              <div className="w-full pt-4 border-t border-border-subtle flex items-center justify-between text-xs font-mono">
                <span className="text-ink-tertiary">Motion Architecture</span>
                <a href="#brand-motion" className="text-accent-strong hover:text-ink-primary flex items-center gap-1 transition-colors">
                  <span>Play Brand Film</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
