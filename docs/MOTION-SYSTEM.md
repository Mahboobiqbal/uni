# University of Swat — Motion System & Interaction Physics
**Document Status**: Official Architecture Specification (Pre-Implementation)  
**Standard**: Emil Kowalski Motion Principles & Apple Fluid Interaction Guidelines  
**Compliance**: Hallmark Rule 2 & Rule 7 (Composite-Only Animations & Full Reduced-Motion Support)

---

## 1. Core Motion Philosophy

Motion in the University of Swat digital experience is **quiet, physical, and purposeful**. It serves to orient the user, clarify spatial hierarchy, and provide tactile confirmation—never to display gratuitous visual fireworks.

### The Four Motion Principles
1. **Purpose over Performance**: If removing an animation does not hurt comprehension or tactile feel, remove it.
2. **Composite-Only Properties**: Never animate layout-triggering properties (`width`, `height`, `top`, `left`, `margin`, `padding`). Animate only GPU-accelerated properties: `transform` (scale, translate, rotate) and `opacity`.
3. **Never `transition: all`**: Explicitly declare every animated property (`transition-transform`, `transition-opacity`, `transition-colors`) with exact durations and curves.
4. **Instant Interactivity**: Modals, menus, and drawer triggers must respond within 16ms of user interaction. Sluggish 800ms fade-ins make a university feel bureaucratic and unresponsive.

---

## 2. Easing Curves & Timing Tokens

| Token Name | Curve Definition / Spring | Duration | Typical Application |
|---|---|---|---|
| `--ease-editorial` | `cubic-bezier(0.16, 1, 0.3, 1)` | `250ms` | Mega-menu dropdowns, drawer slide-ins, page header reveals |
| `--ease-hover` | `cubic-bezier(0.2, 0.8, 0.2, 1)` | `180ms` | Card hover lift, button active press, icon translation |
| `--ease-glare` | Linear / Mouse-Tracking | Realtime | Cursor glare on ProfileCard and MagicBento spotlight |
| `--spring-card` | `{ stiffness: 300, damping: 25 }` | Physics | 3D tilt on Vice Chancellor profile card |

---

## 3. Component Interaction Specifications

### A. Vice Chancellor `<ProfileCard />` (Interactive 3D Tilt)
- **Rest State**: 0° tilt, subtle ambient shadow.
- **Mouse Tracking**: Mouse position relative to card center computes rotational angle (max `±12°` on X and Y axes).
- **Specular Glare**: Cursor-following radial gradient overlay (`rgba(255, 255, 255, 0.15)`) creates the illusion of polished glass over the executive portrait.
- **Parallax Separation**: Portrait layer translates 4px faster than the background card frame.
- **Return on Leave**: Smooth elastic spring decay back to resting orientation.

### B. Flagship Campus Bulletin (Auto-Looping Feed & Reader)
- **Auto-Scroll Feed**: Smooth continuous feed progression pausing instantly on `:hover` or touch press.
- **Selection Wave**: Clicking an announcement card halts auto-looping, updates active indicator with a 200ms cubic-bezier pill slide, and crossfades the full reader view with `opacity: 0 → 1` over 150ms.
- **Scroll Edge Fades**: Subtle top/bottom masking gradients indicate scroll depth without jarring cutoffs.

### C. Navigation Mega-Menu Reveals
- **Trigger**: Mouse hover or keyboard focus on top menu item.
- **Reveal Mechanics**: Floating card drops from `translate-y-[-6px]` to `translate-y-0` with simultaneous opacity fade (`opacity: 0 → 1`) over 200ms using `--ease-editorial`.
- **Sub-Item Hover**: Left accent icon shifts 2px right; background shifts to subtle alabaster.

### D. Academic Card Hover & Lift
- **Lift**: `transform: translateY(-2px)`.
- **Border Deepening**: `border-stone-200 → border-[#153B27]/40`.
- **Arrow Translation**: Top-right arrow icon translates 2px northeast (`translate-x-0.5 -translate-y-0.5`).

---

## 4. Mandatory Accessibility & Reduced-Motion Fallbacks
*(Hallmark Rule 7 & WCAG 2.2 Criterion 2.3.3)*

Whenever the user's operating system requests `prefers-reduced-motion: reduce`:

1. **Instant Transitions**: All durations drop to `0.001ms` (instant state change).
2. **Tilt Disabling**: The 3D physics tilt and glare on `<ProfileCard />` and `<MagicBento />` are completely disabled. The card renders in a flat, crisp, static view.
3. **Video Pause**: The homepage background video player halts immediately and presents a high-resolution still frame poster (`/images/campus/charbagh-campus.jpg`).
4. **Continuous Feeds**: Auto-scrolling bulletin loops freeze in place and provide accessible standard scrollbars.

```css
@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
}
```
