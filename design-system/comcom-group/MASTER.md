# COMCOM Group — UI/UX Pro Max Design System (MASTER.md)

> Generated via UI/UX Pro Max Design Intelligence System
> Archetype: **Cyber-Glassmorphism & OLED Cinema Nightlife** (Bento Box + Liquid Glass + HUD Telemetry)
> Technology Stack: React + Tailwind CSS + Lucide Icons + Canvas Confetti

---

## 1. Design Dials
- **Variance**: `8/10` (Asymmetric Bento Grid, high contrast scale, bold typography)
- **Motion**: `7/10` (Smooth spring physics, gradient border shimmer, glowing ambient aura, prefers-reduced-motion safe)
- **Density**: `5/10` (Generous showcase breathing room, paired with high-density data telemetry in technical panels)

---

## 2. Color Palette & WCAG AAA/AA Contrast Compliance

```css
:root {
  /* Surfaces */
  --surface-abyss: #07070A;       /* Pure OLED background */
  --surface-base: #0B0B0F;        /* Base canvas */
  --surface-card: #12121A;        /* Elevated card layer */
  --surface-card-hover: #181826;  /* Active hover surface */
  
  /* Primary Neon Violet / Magenta */
  --neon-magenta: #D926A9;        /* Primary brand accent */
  --neon-magenta-glow: rgba(217, 38, 169, 0.45);
  --neon-violet: #8A2BE2;         /* Deep atmospheric gradient */
  
  /* Secondary Electric Cyan & Blue */
  --neon-cyan: #00D2FF;           /* Telemetry & interactive callouts */
  --neon-cyan-glow: rgba(0, 210, 255, 0.4);
  --neon-blue: #4361EE;           /* Stagecraft blue */
  
  /* Accents */
  --neon-amber: #FFAA00;          /* VIP badges & headline artists */
  --accent-emerald: #10B981;      /* WhatsApp hotline & System Ready */

  /* Text Typography Contrast */
  --text-heading: #FFFFFF;        /* Contrast ratio > 15:1 */
  --text-body: #E2E8F0;           /* Contrast ratio > 9.5:1 */
  --text-muted: #94A3B8;          /* Contrast ratio > 4.8:1 (AA compliant) */
  --border-glass: rgba(255, 255, 255, 0.10);
  --border-glass-hover: rgba(217, 38, 169, 0.45);
}
```

---

## 3. Typography Hierarchy
- **Display Headings**: `Syne` (Weights: 700 Bold, 800 ExtraBold) — modern, futuristic swagger.
- **Body & Editorial**: `Plus Jakarta Sans` (Weights: 400, 500, 600) — clean geometric readability.
- **Telemetry & Technical Metrics**: `Space Grotesk` (Weights: 500, 700) — monospaced-style technical telemetry.

---

## 4. Bento Grid & Layout Principles
- **Asymmetric Visual Weight**: Highlight the flagship case study (*Influencers Night* feat. Nordo & Sirine Miled) spanning 2 columns with rich badge hierarchy.
- **Micro-interactions**: Subtle 3D lift (`transform: translateY(-4px)`), gradient border shine on hover, and custom ambient glow pointer.
- **Touch Targets**: Minimum 44×44px interactive area for all buttons and interactive tabs.
- **Accessibility**: ARIA labels, semantic landmark tags (`<header>`, `<main>`, `<section>`, `<aside>`, `<footer>`), keyboard trap handling in modals, and `prefers-reduced-motion` fallbacks.
