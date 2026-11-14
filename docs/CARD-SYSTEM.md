# University of Swat — Reusable Card System & Component Specifications
**Document Status**: Official Architecture Specification (Pre-Implementation)  
**Standard**: Accessible Purposeful Card Architecture (WCAG 2.2 AA)  
**Rule**: Cards are strictly reserved for repeatable content units. Never use cards as arbitrary decorative wrappers.

---

## 1. Card System Philosophy & Ground Rules

1. **Purpose First**: A card exists solely to group structured, related data for a single discrete entity (a program, a faculty member, a news story, a notice).
2. **Never a Card Inside a Card**: Nested cards introduce visual clutter and nesting confusion. Cards must remain flat and atomic.
3. **Restrained Hover Physics**: Cards lift subtly (`translate-y-[-2px]`), border color transitions to Deep Forest Green (`#153B27/40`) or University Crimson (`#7F1D1D/40`), and specular sheens sweep gently. No frantic bouncy scaling.
4. **Accessible Hit Areas**: The entire card is clickable via an internal stretched link or explicit action button, preventing tricky hover traps on mobile.

---

## 2. The 14 Reusable Card Specifications

### 1. Program Card
- **Purpose**: Showcase an academic degree credential in directories and search results.
- **When to Use**: `/programs` catalog, department program listings.
- **When NOT to Use**: On narrative about pages or simple bulleted lists.
- **Required Fields**: Program Title, Degree Level (BS/MS/PhD), Duration, Department, Link.
- **Optional Fields**: Credit Hours, Fee per semester, Accreditation chip.
- **Image Ratio**: No image (typography-led for academic clarity) or 16:9 banner for featured degrees.
- **Typography Hierarchy**: Level Chip (11px uppercase bold) → Title (Serif 20px bold) → Department (13px stone-500) → Duration/Fee (12px bold).
- **Grid Placement**: 2-column or 3-column responsive grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`).
- **Hover Behavior**: Subtle border glow (`border-[#153B27]/40`), title shifts to Forest Green, arrow icon translates 2px northeast.
- **Mobile Layout**: Full-width card with stacked metadata.
- **Accessibility**: Title wrapped in `<h3>`, outer container has `role="article"`, high-contrast text.
- **Example**:
  *Level*: `UNDERGRADUATE (BS)`  
  *Title*: `BS Computer Science (BSCS)`  
  *Department*: `Dept. of Computer & Software Technology`  
  *Details*: `4 Years (8 Semesters) · 132 Credit Hours · PKR 32,500/Sem`

---

### 2. Faculty Member Card
- **Purpose**: Present academic credentials, rank, and contact channels for a professor or lecturer.
- **When to Use**: Department faculty rosters (`/departments/[slug]`), leadership directories.
- **When NOT to Use**: In general university staff lists or non-academic personnel listings.
- **Required Fields**: Name, Academic Rank (e.g., Professor BPS-21), Terminal Degree/Qualification.
- **Optional Fields**: Portrait Photograph, Email, Research Specialization.
- **Image Ratio**: 1:1 square or 4:5 portrait with subtle rounded corners (`rounded-2xl`).
- **Typography Hierarchy**: Name (16px font-serif font-bold text-stone-900) → Designation (12px uppercase tracking-wider text-[#7F1D1D]) → Qualification (13px text-stone-600) → Email link (12px text-[#153B27]).
- **Grid Placement**: 3-column or 4-column grid (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`).
- **Hover Behavior**: Image zooms 3% (`scale-[1.03]`), border deepens to stone-300.
- **Mobile Layout**: Compact horizontal card (photo left 64px, text right) or 2-column grid.
- **Accessibility**: Image carries descriptive alt text (`alt="Portrait of Dr. Niamat Ullah"`).

---

### 3. Department Card
- **Purpose**: Represent an academic department within a faculty cluster.
- **When to Use**: `/faculty` hub, campus overviews.
- **When NOT to Use**: On individual course syllabi.
- **Required Fields**: Department Name, Faculty Group, Degree Count, Head of Department, Link.
- **Optional Fields**: Aims snippet, Key Lab count.
- **Image Ratio**: Typographic card with decorative left accent border (`border-l-4 border-[#153B27]`).
- **Typography Hierarchy**: Faculty Eyebrow (11px uppercase) → Department Name (Serif 22px bold) → Aims excerpt (13px stone-600) → Program tags (11px pills) → Action link.
- **Grid Placement**: 2-column grid (`grid-cols-1 lg:grid-cols-2`).
- **Hover Behavior**: Accent border expands slightly, container shadow elevates to `shadow-md`.
- **Mobile Layout**: Full-width stacked tile.
- **Accessibility**: Focus ring visible on keyboard tab, screen reader reads full department name.

---

### 4. News Card
- **Purpose**: Display an authenticated university press release or research milestone.
- **When to Use**: `/news` hub, homepage news highlights.
- **When NOT to Use**: For short administrative circulars (use Announcement Card instead).
- **Required Fields**: Headline, Date, Category Chip, Excerpt, Image, Link.
- **Optional Fields**: Author / Press Bureau tag, Reading Time.
- **Image Ratio**: 16:10 or 3:2 landscape photograph.
- **Typography Hierarchy**: Category Chip (10px uppercase crimson) + Date (12px stone-400) → Headline (Serif 18-20px bold) → Excerpt (13px stone-600 line-clamp-2) → "Read Full Release →".
- **Grid Placement**: 3-column grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`).
- **Hover Behavior**: Image smoothly scales, headline shifts color to Deep Forest Green.
- **Mobile Layout**: Single column stacked card.
- **Accessibility**: Time tag `<time datetime="2026-10-24">`, semantic link covering the title.

---

### 5. Event Card
- **Purpose**: Showcase scheduled academic symposia, convocations, and sports galas.
- **When to Use**: `/events` hub, academic calendar sidebars.
- **When NOT to Use**: For past press coverage (use News Card).
- **Required Fields**: Event Title, Date Block (Day + Month box), Time, Venue, Category.
- **Optional Fields**: Registration deadline, Organizer, Action button.
- **Image Ratio**: Compact card with bold calendar date badge (`w-16 h-16 bg-[#153B27] text-white`).
- **Typography Hierarchy**: Date Box (Large numeral + Month abbrev) → Title (Serif 18px) → Venue & Time (12px stone-500) → Category chip.
- **Grid Placement**: 2-column or list layout.
- **Hover Behavior**: Date box deepens, card shifts up 2px.
- **Mobile Layout**: Horizontal row with date box on left and details on right.
- **Accessibility**: Accessible calendar date readout for screen readers (`aria-label="Event date: November 28, 2026"`).

---

### 6. Research & ORIC Grant Card
- **Purpose**: Feature competitive research grants, patents, and laboratory discoveries.
- **When to Use**: `/research`, `/research/oric`, department research sections.
- **When NOT to Use**: For undergraduate course descriptions.
- **Required Fields**: Project Title, Principal Investigator (PI), Funding Body, Department.
- **Optional Fields**: Grant Amount (PKR / USD), Duration, International Partner.
- **Image Ratio**: 16:9 lab photo or icon badge container.
- **Typography Hierarchy**: Funding Agency (11px uppercase) → Project Title (Serif 18px) → PI & Team (13px) → Impact metric pill.
- **Grid Placement**: 2-column or 3-column grid.
- **Hover Behavior**: Border transitions to crimson accent, PI name highlighted.
- **Mobile Layout**: Full-width stacked card.
- **Accessibility**: Clear label indicating funded grant.

---

### 7. Campus Life & Facility Card
- **Purpose**: Showcase physical facilities (Library, Sports Stadium, Hostels, Solar Array).
- **When to Use**: `/campus-life`, `/campuses/[slug]`.
- **When NOT to Use**: For academic faculty bios.
- **Required Fields**: Facility Name, Campus, Key Feature / Metric, High-Res Photograph.
- **Optional Fields**: Operating hours, Capacity, Location coordinates.
- **Image Ratio**: 4:3 or 16:9 high-resolution landscape.
- **Typography Hierarchy**: Campus Chip (11px white overlay) → Facility Name (Serif 20px) → Key specification (13px).
- **Grid Placement**: Asymmetric bento grid (span 2×2 for flagship facility, span 1×1 for standard).
- **Hover Behavior**: Frosted caption slides up smoothly, image reveals slight zoom.
- **Mobile Layout**: Full-width photograph card with persistent text caption below.
- **Accessibility**: High-contrast scrim behind text overlays to guarantee WCAG 4.5:1 contrast.

---

### 8. Stat & Achievement Scorecard Tile
- **Purpose**: Communicate an institutional metric or verified accreditation score.
- **When to Use**: `/` Ranking Section, `/about`, `/research`.
- **When NOT to Use**: With unverified, vanity, or invented metrics.
- **Required Fields**: Numerical Metric (e.g. "91.4%"), Label (e.g. "HEC W-Category Standing"), Verifying Body (e.g. "Higher Education Commission QAC").
- **Optional Fields**: Trend indicator, Sparkline graph, Ranking badge.
- **Image Ratio**: No image; crisp typography and embedded SVG graph.
- **Typography Hierarchy**: Verifier Pill (10px uppercase) → Big Stat Numeral (Serif 36px–48px bold text-[#14291D]) → Label (14px stone-700 font-semibold) → Context note (12px stone-500).
- **Grid Placement**: 4-column stat strip or bento tile.
- **Hover Behavior**: Subtle border sheen sweep, glow effect.
- **Mobile Layout**: 2×2 grid on mobile portrait.
- **Accessibility**: Screen-reader friendly metric reading (`aria-label="HEC Quality Assurance Committee Score: 91.4 percent"`).

---

### 9. Quick-Link Portal Card
- **Purpose**: Direct users to high-frequency digital workflows (CMS, LMS, SUJRIS).
- **When to Use**: Homepage Footer Portal Strip, `/portal` launchpad.
- **When NOT to Use**: In the middle of academic longform prose.
- **Required Fields**: Portal Name, Brief Action Description, Icon, URL.
- **Optional Fields**: Status pill (e.g. "Active · SSO").
- **Image Ratio**: Minimalist card with 44px rounded icon container.
- **Typography Hierarchy**: Name (16px bold text-stone-900) → Description (13px text-stone-500) → Action icon.
- **Grid Placement**: 4-column horizontal strip (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`).
- **Hover Behavior**: Background lifts from white to subtle alabaster, icon turns emerald.
- **Mobile Layout**: Stacked or 2-column grid.
- **Accessibility**: Explicit label on link (`aria-label="Open Student CMS Portal in new tab"`).

---

### 10. Student & Scholar Testimonial / Story Card
- **Purpose**: Present authentic scholar reflections and alumni career stories.
- **When to Use**: `/admissions`, `/about`, `/campuses/women-campus`.
- **When NOT to Use**: Never with invented quotes or fake stock person portraits.
- **Required Fields**: Authentic Quote, Scholar Name, Degree / Department, Year of Graduation.
- **Optional Fields**: Current Employer / Role, Authentic Photo.
- **Image Ratio**: 1:1 portrait avatar (56px) or 4:5 editorial portrait.
- **Typography Hierarchy**: Pull Quote (Serif 18px italic text-stone-800) → Name (14px bold) → Credential (12px text-stone-500).
- **Grid Placement**: 2-column or carousel format.
- **Hover Behavior**: Subtle elevation, quote marks glow softly.
- **Mobile Layout**: Full-width card with comfortable internal padding.
- **Accessibility**: Proper semantic `<blockquote>` markup with `<cite>` tag.

---

### 11. Official Announcement Card (Bulletin Tile)
- **Purpose**: Deliver urgent notices, holiday notifications, and semester schedules.
- **When to Use**: `/` Campus Bulletin feed, departmental noticeboards.
- **When NOT to Use**: For formal multi-page news reports.
- **Required Fields**: Notification Title, Date, Official Reference Code, Category Tab.
- **Optional Fields**: Urgent badge, PDF attachment indicator.
- **Image Ratio**: Pure typographic tile with left status stripe.
- **Typography Hierarchy**: Category Tag + Ref Code (11px uppercase) → Title (14px font-medium text-stone-800 line-clamp-2) → Date (11px text-stone-400).
- **Grid Placement**: Vertical scrolling feed list.
- **Hover Behavior**: Background shifts to `#F8F7F4`, active tile highlights with emerald border.
- **Mobile Layout**: Single-column compact list items.
- **Accessibility**: Keyboard navigable list with active state indicators.

---

### 12. Admission Deadline & Step Card
- **Purpose**: Guide prospective applicants through sequential application milestones.
- **When to Use**: `/admissions`, `/admissions/how-to-apply`.
- **When NOT to Use**: On non-admissions informational pages.
- **Required Fields**: Step Number (e.g. "01"), Step Title, Description, Deadline Date.
- **Optional Fields**: Action button (e.g. "Download Challan Form"), Prerequisite check.
- **Image Ratio**: Typographic card with large Roman or Arabic numeral badge.
- **Typography Hierarchy**: Step Numeral (Serif 32px text-[#C8A96E]) → Title (18px bold) → Description (13px stone-600) → Date pill (12px font-bold text-[#7F1D1D]).
- **Grid Placement**: 4-column linear progression grid or vertical timeline.
- **Hover Behavior**: Numeral color transitions to gold, border deepens.
- **Mobile Layout**: Vertical connected timeline.
- **Accessibility**: Ordered list semantics `<ol>` and `<li>`.

---

### 13. Location & Sub-Campus Card
- **Purpose**: Provide campus location details, driving transit routes, and acreage.
- **When to Use**: `/contact`, `/campuses/[slug]`.
- **When NOT to Use**: For general administrative announcements.
- **Required Fields**: Campus Name, Address, Phone PBX, Email, Map Coordinates.
- **Optional Fields**: Bus route stops, Landmark photo, Google Maps deep link.
- **Image Ratio**: 16:9 aerial campus photograph.
- **Typography Hierarchy**: Campus Title (Serif 22px) → Address (14px stone-600) → Contact numbers (13px) → Action ("View Transit Directions →").
- **Grid Placement**: 2-column grid (`grid-cols-1 md:grid-cols-2`).
- **Hover Behavior**: Image subtle zoom, directions link highlights.
- **Mobile Layout**: Full-width stacked card.
- **Accessibility**: Address formatted in `<address>` tag with direct tel: and mailto: links.

---

### 14. Document Download Card
- **Purpose**: Deliver downloadable administrative proformas, syllabus PDFs, and gazettes.
- **When to Use**: `/academics/downloads`, `/admissions/merit-lists`.
- **When NOT to Use**: For general page navigation.
- **Required Fields**: Document Name, Category, File Format Badge (PDF/DOCX), File Size, Download Trigger.
- **Optional Fields**: Last updated date, Office of origin.
- **Image Ratio**: Clean document icon tile (PDF red emblem / DOCX blue emblem).
- **Typography Hierarchy**: Category Tag (10px uppercase) → Document Title (14px font-semibold text-stone-800) → Metadata (12px text-stone-400: Format · Size · Date) → Download button.
- **Grid Placement**: 2-column or 3-column grid, or compact table row.
- **Hover Behavior**: Download button fills with `#153B27`, icon bounces subtly downward.
- **Mobile Layout**: Horizontal row with download icon on right.
- **Accessibility**: Button has clear accessible name: `aria-label="Download Migration Proforma PDF (1.2 MB)"`.
