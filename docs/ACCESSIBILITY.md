# University of Swat — Accessibility & Inclusive Design Standards
**Document Status**: Official Architecture Specification (Pre-Implementation)  
**Standard**: W3C Web Content Accessibility Guidelines (WCAG) 2.2 Level AA Compliance  
**Rule**: Accessibility is non-negotiable. Every user must have equal, dignified access.

---

## 1. Core Accessibility Mandates

The University of Swat digital experience adheres strictly to the four core WCAG principles: **Perceivable, Operable, Understandable, and Robust**.

```
+-------------------------------------------------------------------------+
| WCAG 2.2 Level AA Core Checklist                                       |
+-------------------------------------------------------------------------+
| [✓] 1.1.1 Non-text Content (Meaningful alt text on all imagery)        |
| [✓] 1.3.1 Info and Relationships (Semantic HTML5 landmarks & headings)  |
| [✓] 1.4.3 Contrast (Minimum 4.5:1 text contrast across all canvases)   |
| [✓] 2.1.1 Keyboard (100% functionality operable via keyboard alone)    |
| [✓] 2.1.2 No Keyboard Trap (Escape dismisses all overlays & restores)  |
| [✓] 2.4.1 Bypass Blocks (Skip to main content link)                    |
| [✓] 2.4.7 Focus Visible (Crisp 2px instant focus outline rings)         |
| [✓] 2.5.5 Target Size (Minimum 48×48px interactive touch targets)       |
| [✓] 3.3.2 Labels or Instructions (Explicit labels on all form controls)|
+-------------------------------------------------------------------------+
```

---

## 2. Instant Visible Focus States (Hallmark Rule 6)

Every interactive button, menu trigger, tab, text link, and form input carries an instantaneous, high-contrast focus indicator that appears on keyboard navigation (`:focus-visible`):

```css
/* Global Focus-Visible Rule */
:focus-visible {
  outline: 2px solid #153B27 !important;
  outline-offset: 2px !important;
  box-shadow: 0 0 0 4px rgba(21, 59, 39, 0.15) !important;
}

/* Dark Section Focus Rule */
.dark-canvas :focus-visible,
[data-theme="dark"] :focus-visible {
  outline: 2px solid #C8A96E !important;
  outline-offset: 2px !important;
  box-shadow: 0 0 0 4px rgba(200, 169, 110, 0.25) !important;
}
```
*Rule*: Focus rings must appear **instantly** without sluggish fade-ins, ensuring keyboard users never lose their place on the page.

---

## 3. Semantic HTML5 Landmark Structure

Every page follows a strict, unbroken landmark hierarchy for assistive technologies (NVDA, JAWS, VoiceOver):

```html
<body class="bg-[#F6F5F0]">
  <!-- Skip Navigation -->
  <a href="#main-content" class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#153B27] focus:text-white focus:rounded-md focus:shadow-lg">
    Skip to main content
  </a>

  <!-- Global Header & Navigation Landmark -->
  <header role="banner" class="sticky top-0 z-40">
    <nav aria-label="Global University Navigation">
      <!-- Menu Triggers & Mega-Menus -->
    </nav>
  </header>

  <!-- Contextual Breadcrumb Landmark -->
  <nav aria-label="Breadcrumb" class="py-2">
    <!-- Breadcrumb List -->
  </nav>

  <!-- Main Content Landmark -->
  <main id="main-content" role="main" tabindex="-1">
    <section aria-labelledby="section-heading-id">
      <h2 id="section-heading-id">...</h2>
      <!-- Section Content -->
    </section>
  </main>

  <!-- Institutional Footer Landmark -->
  <footer role="contentinfo" class="border-t border-stone-200">
    <!-- Quick Portals, Institutional Columns & Legal Bar -->
  </footer>
</body>
```

---

## 4. University Image Alt-Text Standards

Generic, lazy alt text (such as `alt="image"`, `alt="photo"`, or `alt="banner"`) is strictly prohibited across the entire codebase.

### Alt Text Guidelines:
1. **Portraits**: State the individual's full name, academic rank, and context.  
   *Example*: `alt="Official portrait of Prof. Dr. Husnul Amin, Vice Chancellor of University of Swat, at his executive desk"`
2. **Campus Architecture**: State the specific building, campus, and visual feature.  
   *Example*: `alt="Panoramic view of the 130-acre Charbagh Main Campus with the 1.2 MW solar panel array and the Hindu Raj mountains in the background"`
3. **News Events**: State the event title, key participants, and date.  
   *Example*: `alt="Vice Chancellor Prof. Dr. Husnul Amin and Dr. Luca Maria Olivieri signing the Gandharan archaeological research agreement in October 2026"`
4. **Decorative Graphics**: Subtle background crests and ambient glow gradients are explicitly marked with `aria-hidden="true"` or empty `alt=""`.

---

## 5. Touch Target Sizing (48px Rule)

On mobile and touch devices, all buttons, menu triggers, and links comply with WCAG 2.5.5:
- Minimum physical touch target: **48 × 48 CSS pixels**.
- Spacing between adjacent touch targets: Minimum **8px margin** to prevent accidental mis-taps.
- Mobile drawer navigation items feature a minimum height of `h-12` (48px) with full-width clickable tap areas.

---

## 6. Color Independence (Never Color Alone)

Information is never conveyed strictly through color:
- **Merit Lists**: Status (Selected / Waiting / Disqualified) includes explicit text tags and icons (`[✓] Selected`, `[⏳] Waiting List`), not just green or red dots.
- **Form Errors**: Required fields and error messages include explanatory text (`"Please enter a valid CNIC / Form-B number"`) alongside red border rings.
- **Deadlines**: Urgent notifications feature text date pills (`"Deadline: Nov 28, 2026"`), rather than subtle red highlights.
