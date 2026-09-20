import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Film } from 'lucide-react';

export default function MotionPlayer({ className = "", compact = false }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
        setHasStarted(true);
      }).catch(err => {
        console.warn("Video playback was interrupted or prevented:", err);
      });
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen();
    }
  };

  return (
    <div className={`relative rounded-3xl overflow-hidden bg-black border border-white/[0.12] shadow-2xl group ${className}`}>
      
      {/* Video Element */}
      <video
        ref={videoRef}
        src="/comcom-logo-video.mov"
        poster="/comcom-emblem.webp"
        playsInline
        muted={isMuted}
        loop
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className="w-full h-full object-cover"
      />

      {/* Initial Ambient Overlay when not yet started */}
      {!hasStarted && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-between p-6 z-10 pointer-events-none">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-mono text-white">
              <Film className="w-3.5 h-3.5 text-neon-magenta" />
              <span>COMCOM STUDIOS • MOTION IDENT</span>
            </div>
            <span className="text-[10px] font-mono text-pink-300 uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 border border-white/10">
              4K ULTRA-HD
            </span>
          </div>

          <div className="text-center space-y-2">
            <div className="font-heading font-black text-xl sm:text-2xl text-white tracking-tight">
              Official Brand Motion Showcase
            </div>
            <p className="text-xs text-slate-300 font-mono max-w-md mx-auto">
              Visual identity in motion — produced by COMCOM Studios, Dubai
            </p>
          </div>

          <div className="h-4" />
        </div>
      )}

      {/* Central Big Play Button if paused or not started */}
      <button
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause Motion Video" : "Play Motion Video"}
        className={`absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 hover:bg-neon-magenta text-black hover:text-white flex items-center justify-center transition-all duration-300 shadow-2xl z-20 hover:scale-110 ${
          isPlaying ? 'opacity-0 group-hover:opacity-90' : 'opacity-100'
        }`}
      >
        {isPlaying ? (
          <Pause className="w-7 h-7 sm:w-8 sm:h-8 fill-current" />
        ) : (
          <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
        )}
      </button>

      {/* Bottom Floating Control Bar */}
      <div className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/95 via-black/70 to-transparent flex items-center justify-between z-20 transition-opacity duration-300 ${
        isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
      }`}>
        <div className="flex items-center gap-3">
          <button
            onClick={togglePlay}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
          </button>

          <button
            onClick={toggleMute}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-neon-cyan" />}
          </button>

          <span className="text-[11px] font-mono text-slate-300 hidden sm:inline">
            COMCOM Group Brand Motion
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Fullscreen"
          >
            <Maximize className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
}
