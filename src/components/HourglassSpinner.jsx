import React, { useId } from 'react';
import { cn } from '../lib/utils';

export default function HourglassSpinner({
  size = 32,
  className = "",
  color = "#E31A94",
  glow = true,
  ...props
}) {
  const uid = useId().replace(/:/g, '');
  const topClipId = `hg-top-clip-${uid}`;
  const botClipId = `hg-bot-clip-${uid}`;
  const animKey = `hg-anim-${uid}`;

  return (
    <span
      role="status"
      aria-label="Loading"
      className={cn("inline-flex items-center justify-center select-none", className)}
      style={{
        width: size,
        height: size,
        filter: glow
          ? `drop-shadow(0 0 5px ${color}88) drop-shadow(0 0 10px ${color}44)`
          : undefined,
      }}
      {...props}
    >
      <style>{`
        @keyframes ${animKey}-spin {
          0%, 65% {
            transform: rotate(0deg);
          }
          72% {
            transform: rotate(0deg);
          }
          94%, 100% {
            transform: rotate(180deg);
          }
        }

        @keyframes ${animKey}-drain {
          0% {
            y: 9.5px;
            height: 14px;
          }
          65%, 100% {
            y: 23.5px;
            height: 0px;
          }
        }

        @keyframes ${animKey}-fill {
          0% {
            y: 38.5px;
            height: 0px;
          }
          65%, 94% {
            y: 24.5px;
            height: 14px;
          }
          100% {
            y: 38.5px;
            height: 0px;
          }
        }

        @keyframes ${animKey}-stream {
          0% {
            opacity: 0;
            stroke-dashoffset: 16;
          }
          4%, 60% {
            opacity: 1;
            stroke-dashoffset: 0;
          }
          65%, 100% {
            opacity: 0;
            stroke-dashoffset: -16;
          }
        }

        .${animKey}-root {
          transform-origin: 24px 24px;
          animation: ${animKey}-spin 2.3s cubic-bezier(0.77, 0, 0.175, 1) infinite;
        }

        .${animKey}-top-sand {
          animation: ${animKey}-drain 2.3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .${animKey}-bot-sand {
          animation: ${animKey}-fill 2.3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .${animKey}-stream-line {
          animation: ${animKey}-stream 2.3s linear infinite;
        }
      `}</style>

      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        <defs>
          {/* Top Chamber Clip Mask */}
          <clipPath id={topClipId}>
            <polygon points="11,10 37,10 24,23" />
          </clipPath>

          {/* Bottom Chamber Clip Mask */}
          <clipPath id={botClipId}>
            <polygon points="24,25 37,38 11,38" />
          </clipPath>
        </defs>

        {/* Rotating Hourglass Structure */}
        <g className={`${animKey}-root`}>
          {/* Top Chamber Sand (Draining downward into neck) */}
          <g clipPath={`url(#${topClipId})`}>
            <rect
              x="8"
              width="32"
              fill={color}
              className={`${animKey}-top-sand`}
            />
          </g>

          {/* Bottom Chamber Sand (Filling upward from base) */}
          <g clipPath={`url(#${botClipId})`}>
            <rect
              x="8"
              width="32"
              fill={color}
              className={`${animKey}-bot-sand`}
            />
          </g>

          {/* Central Trickle Stream */}
          <line
            x1="24"
            y1="23"
            x2="24"
            y2="37"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="4 2"
            className={`${animKey}-stream-line`}
          />

          {/* Geometric Hourglass Silhouette: Two opposing hollow triangles joined at tips */}
          <g stroke={color} strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" fill="none">
            {/* Top Chamber Triangle */}
            <polygon points="10,9 38,9 24,23.5" />
            {/* Bottom Chamber Triangle */}
            <polygon points="24,24.5 38,39 10,39" />
          </g>

          {/* Center Joining Ring/Waist accent */}
          <circle cx="24" cy="24" r="1.5" fill={color} />
        </g>
      </svg>
    </span>
  );
}

export { HourglassSpinner };
