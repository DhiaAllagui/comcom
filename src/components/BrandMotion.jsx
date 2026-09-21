import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw, Sparkles, Film, Shield, Globe } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function BrandMotion() {
  const [sectionRef, isVisible] = useReveal(0.2);
  const videoRef = useRef(null);
  const progressBarRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [duration, setDuration] = useState('0:07');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedQuality, setSelectedQuality] = useState('1080p');

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (!video.duration) return;
      const current = video.currentTime;
      const total = video.duration;
      setProgress((current / total) * 100);

      const curSec = Math.floor(current % 60);
      const curMin = Math.floor(current / 60);
      setCurrentTime(`${curMin}:${curSec < 10 ? '0' : ''}${curSec}`);

      const durSec = Math.floor(total % 60);
      const durMin = Math.floor(total / 60);
      setDuration(`${durMin}:${durSec < 10 ? '0' : ''}${durSec}`);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => video.removeEventListener('timeupdate', handleTimeUpdate);
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleSeek = (e) => {
    const video = videoRef.current;
    const bar = progressBarRef.current;
    if (!video || !bar) return;
    const rect = bar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newProgress = Math.max(0, Math.min(1, clickX / rect.width));
    video.currentTime = newProgress * video.duration;
    setProgress(newProgress * 100);
  };

  const handleRestart = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.play().then(() => setIsPlaying(true)).catch(() => {});
  };

  const toggleFullscreen = () => {
    const videoContainer = videoRef.current?.parentElement;
    if (!videoContainer) return;
    if (!document.fullscreenElement) {
      videoContainer.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  return (
    <section id="brand-motion" className="relative py-28 bg-void border-t border-border-subtle overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-accent/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div ref={sectionRef} className={`reveal ${isVisible ? 'is-visible' : ''} text-center max-w-3xl mx-auto mb-16 space-y-4`}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm badge-mono">
            <Film className="w-3.5 h-3.5 text-accent-strong" />
            <span>Brand Motion Architecture · Dubai Master Ident</span>
          </div>

          <h2 className="font-display font-medium text-3xl sm:text-5xl md:text-6xl text-ink-primary tracking-tight">
            The Living Emblem <span className="text-accent-strong">In Motion.</span>
          </h2>

          <p className="text-ink-secondary text-base sm:text-lg leading-relaxed font-normal">
            Produced in-house by <span className="text-ink-primary font-medium">COMCOM Studios</span>. An architectural 3D camera sweep revealing the dimensional typography, vertical light conduits, and official Free Zone seal of COMCOM Group.
          </p>
        </div>

        {/* Cinema Video Container */}
        <div className="relative max-w-5xl mx-auto rounded-sm overflow-hidden border border-border-default bg-surface-base shadow-2xl group">

          {/* Top Video Header Bar */}
          <div className="absolute top-0 left-0 right-0 z-30 p-4 sm:p-5 flex items-center justify-between bg-gradient-to-b from-void/90 via-void/50 to-transparent pointer-events-none">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-sm bg-void border border-border-subtle flex items-center justify-center p-1">
                <img src="/comcom-emblem-square.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="text-xs font-mono font-medium text-ink-primary tracking-wider uppercase">
                  COMCOM GROUP · FZC LLC
                </div>
                <div className="text-[10px] font-mono text-ink-tertiary">
                  Official 4K Motion Ident (7.5s)
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="badge-mono text-[10px] !py-0.5 !px-2 bg-accent/15 border-accent/30 text-accent-strong">
                UHD 4K MASTER
              </span>
              <span className="font-mono text-[10px] text-ink-tertiary px-2 py-0.5 rounded-sm border border-border-subtle bg-void/50">
                30 FPS
              </span>
            </div>
          </div>

          {/* Main Video Element */}
          <div className="relative aspect-video w-full bg-black flex items-center justify-center cursor-pointer" onClick={togglePlay}>
            <video
              ref={videoRef}
              src={selectedQuality === '720p' ? '/comcom-logo-mobile.mp4' : '/comcom-logo.mp4'}
              poster="/comcom-video-poster.jpg"
              playsInline
              loop
              muted={isMuted}
              preload="metadata"
              className="w-full h-full object-cover"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* Central Glow Play Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
              aria-label={isPlaying ? "Pause video" : "Play video"}
              className={`absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent hover:bg-accent-strong text-white flex items-center justify-center transition-all duration-300 shadow-[0_0_30px_rgba(227,26,148,0.6)] z-20 hover:scale-110 ${
                isPlaying ? 'opacity-0 pointer-events-none group-hover:opacity-80 group-hover:pointer-events-auto' : 'opacity-100'
              }`}
            >
              {isPlaying ? (
                <Pause className="w-7 h-7 fill-current" />
              ) : (
                <Play className="w-7 h-7 fill-current ml-1" />
              )}
            </button>
          </div>

          {/* Bottom Custom Control Bar */}
          <div className="relative bg-surface-elevated border-t border-border-subtle p-3 sm:p-4 z-20">
            {/* Scrubber */}
            <div
              ref={progressBarRef}
              onClick={handleSeek}
              className="relative w-full h-1.5 bg-white/10 hover:h-2.5 transition-all cursor-pointer rounded-full mb-3 overflow-hidden group/bar"
            >
              <div
                className="h-full bg-accent relative transition-all"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-md opacity-0 group-hover/bar:opacity-100 transition-opacity" />
              </div>
            </div>

            {/* Controls Row */}
            <div className="flex items-center justify-between gap-4">
              
              {/* Left: Play/Pause, Restart, Timer */}
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="p-2 rounded-sm bg-white/[0.06] hover:bg-white/[0.12] text-ink-primary transition-colors"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                </button>

                <button
                  onClick={handleRestart}
                  className="p-2 rounded-sm bg-white/[0.06] hover:bg-white/[0.12] text-ink-secondary hover:text-ink-primary transition-colors"
                  title="Replay from start"
                  aria-label="Replay"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                <button
                  onClick={toggleMute}
                  className="p-2 rounded-sm bg-white/[0.06] hover:bg-white/[0.12] text-ink-secondary hover:text-ink-primary transition-colors"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-accent-strong" />}
                </button>

                <div className="font-mono text-xs text-ink-secondary tracking-wider pl-1">
                  <span className="text-ink-primary">{currentTime}</span>
                  <span className="text-ink-tertiary"> / </span>
                  <span className="text-ink-tertiary">{duration}</span>
                </div>
              </div>

              {/* Right: Quality selector, Fullscreen */}
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="hidden sm:flex items-center border border-border-subtle rounded-sm overflow-hidden text-[11px] font-mono">
                  <button
                    onClick={() => setSelectedQuality('1080p')}
                    className={`px-2.5 py-1 transition-colors ${selectedQuality === '1080p' ? 'bg-accent text-white' : 'text-ink-secondary hover:text-ink-primary'}`}
                  >
                    1080p HD
                  </button>
                  <button
                    onClick={() => setSelectedQuality('720p')}
                    className={`px-2.5 py-1 transition-colors ${selectedQuality === '720p' ? 'bg-accent text-white' : 'text-ink-secondary hover:text-ink-primary'}`}
                  >
                    720p Fast
                  </button>
                </div>

                <button
                  onClick={toggleFullscreen}
                  className="p-2 rounded-sm bg-white/[0.06] hover:bg-white/[0.12] text-ink-secondary hover:text-ink-primary transition-colors"
                  aria-label="Toggle Fullscreen"
                >
                  <Maximize className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Design Pillars Revealed by the Video */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-12">
          
          <div className="card-surface p-5 space-y-2 border-l-2 border-l-accent">
            <div className="font-mono text-[11px] text-accent-strong uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>01 · 3D Extrusion</span>
            </div>
            <div className="font-display font-medium text-base text-ink-primary">
              Architectural Typography
            </div>
            <p className="text-xs text-ink-tertiary leading-relaxed">
              Geometric vertical arches and fine conduit lines engineered with camera depth-of-field precision.
            </p>
          </div>

          <div className="card-surface p-5 space-y-2 border-l-2 border-l-accent">
            <div className="font-mono text-[11px] text-accent-strong uppercase tracking-wider flex items-center gap-1.5">
              <Film className="w-3.5 h-3.5" />
              <span>02 · Electric Magenta</span>
            </div>
            <div className="font-display font-medium text-base text-ink-primary">
              Signature Illumination
            </div>
            <p className="text-xs text-ink-tertiary leading-relaxed">
              The signature #E31A94 neon laser core radiating through obsidian space, signifying relentless creative energy.
            </p>
          </div>

          <div className="card-surface p-5 space-y-2 border-l-2 border-l-accent">
            <div className="font-mono text-[11px] text-accent-strong uppercase tracking-wider flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" />
              <span>03 · تقدم (Presents)</span>
            </div>
            <div className="font-display font-medium text-base text-ink-primary">
              Dual Heritage &amp; Global Reach
            </div>
            <p className="text-xs text-ink-tertiary leading-relaxed">
              Rooted in the UAE with bilingual identity, delivering international-standard production across Dubai and worldwide.
            </p>
          </div>

          <div className="card-surface p-5 space-y-2 border-l-2 border-l-accent">
            <div className="font-mono text-[11px] text-accent-strong uppercase tracking-wider flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5" />
              <span>04 · FZC LLC Holding</span>
            </div>
            <div className="font-display font-medium text-base text-ink-primary">
              Accredited Entity
            </div>
            <p className="text-xs text-ink-tertiary leading-relaxed">
              Legally established Free Zone Company orchestrating specialized studios, expos, advertising, and venture academies.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
