# University of Swat — Canonical URL Map & Redirect Architecture
**Document Status**: Official Architecture Specification (Pre-Implementation)  
**Standard**: RFC 3986 (URI Generic Syntax) & Google Search Central Guidelines  
**Routing Engine**: Next.js 16.4+ App Router

---

## 1. Clean Canonical URL Architecture

All routes follow a clean, semantic, hierarchical URL structure without query strings, file extensions (`.php`, `.html`), or arbitrary database IDs.

```
https://uswat.edu.pk/
├── about/
├── leadership/
│   ├── vice-chancellor/
│   └── [slug]/                   # registeror-office, treasurer-office, etc.
├── faculty/
├── departments/
│   └── [slug]/                   # computer-software-technology, physics, etc.
├── programs/
│   └── [slug]/                   # bs-computer-science, bba-honors, etc.
├── academics/
│   ├── calendar/
│   └── downloads/
├── admissions/
│   ├── fee-structure/
│   └── merit-lists/
├── research/
│   ├── oric/
│   └── asrb/
├── campuses/
│   ├── main-campus/
│   └── women-campus/
├── campus-life/
├── news/
│   └── [slug]/                   # appointment-prof-dr-husnul-amin-vc, etc.
├── events/
├── affiliated-colleges/
├── contact/
└── portal/
```

---

## 2. Legacy URL Redirect Table (301 Permanent Redirects)

Based on the 258 pages crawled from the old WordPress installation (`uswat.edu.pk`), the following permanent 301 redirects preserve search engine equity, prevent 404 errors, and map historical traffic to the new editorial routes:

| Legacy WordPress / Old URL Pattern | New Canonical Route | HTTP Status | Rationale |
|---|---|---|---|
| `/` or `/index.php` or `/home` | `/` | 200 (Direct) | Root homepage |
| `/?page_id=2` or `/about-us/` or `/overview/` | `/about` | 301 | Canonical institutional overview |
| `/?page_id=104` or `/vice-chancellor-message/` | `/leadership/vice-chancellor` | 301 | Preserves VC discourse links |
| `/administration/` or `/officers/` | `/leadership` | 301 | University leadership directory |
| `/registrar/` or `/?page_id=452` | `/leadership/registeror-office` | 301 | Statutory Registrar office |
| `/treasurer/` or `/?page_id=453` | `/leadership/treasurer-office` | 301 | Statutory Treasurer office |
| `/controller-of-examinations/` or `/?page_id=454` | `/leadership/controller-examinations` | 301 | Statutory Controller office |
| `/provost/` or `/?page_id=455` | `/leadership/provost-office` | 301 | Statutory Provost office |
| `/faculties/` or `/academic-faculties/` | `/faculty` | 301 | Consolidated faculties hub |
| `/departments/department-of-computer-science/` | `/departments/computer-software-technology` | 301 | Standardized departmental slug |
| `/dept-physics/` or `/?page_id=891` | `/departments/physics` | 301 | Clean departmental slug |
| `/dept-chemistry/` or `/?page_id=892` | `/departments/chemistry` | 301 | Clean departmental slug |
| `/dept-management-sciences/` | `/departments/management-sciences` | 301 | Clean departmental slug |
| `/law-college/` or `/law-department/` | `/departments/law-legal-studies` | 301 | Clean departmental slug |
| `/programs-offered/` or `/courses/` | `/programs` | 301 | Academic programs catalog |
| `/bs-computer-science/` or `/curriculum-cs/` | `/programs/bs-computer-science` | 301 | Detailed syllabus route |
| `/admissions-2026/` or `/admissions/` | `/admissions` | 301 | Canonical admissions hub |
| `/fee-structure/` or `/?page_id=1200` | `/admissions/fee-structure` | 301 | Transparent fee schedule |
| `/merit-lists/` or `/category/merit-lists/` | `/admissions/merit-lists` | 301 | Dynamic merit gazette |
| `/academic-calendar/` or `/?page_id=1140` | `/academics/calendar` | 301 | Official academic calendar |
| `/downloads/` or `/forms/` or `/proformas/` | `/academics/downloads` | 301 | Downloadable forms repository |
| `/oric/` or `/research-and-innovation/` | `/research/oric` | 301 | ORIC division profile |
| `/asrb/` or `/advanced-studies/` | `/research/asrb` | 301 | ASRB postgraduate rules |
| `/main-campus/` or `/charbagh-campus/` | `/campuses/main-campus` | 301 | Main campus photographic tour |
| `/women-campus/` or `/sub-campus/` | `/campuses/women-campus` | 301 | Women sub-campus showcase |
| `/campus-facilities/` or `/hostels/` | `/campus-life` | 301 | Campus facilities hub |
| `/category/news/` or `/press-releases/` | `/news` | 301 | Press bureau archive |
| `/category/events/` or `/upcoming-events/` | `/events` | 301 | Events and symposia calendar |
| `/affiliated-colleges-list/` | `/affiliated-colleges` | 301 | Registered colleges directory |
| `/contact-us/` or `/telephone-directory/` | `/contact` | 301 | Central telephone directory |
| `/cms/` or `/lms/` or `/student-portal/` | `/portal` | 301 | Unified single-sign-on hub |

---

## 3. URL Normalization & SEO Rules

1. **Lowercase Only**: All routes are strictly case-insensitive on ingress and 301-redirected to lowercase.
2. **Trailing Slash Stripping**: Next.js configuration is set to `trailingSlash: false`. Any trailing slashes (e.g., `/faculty/`) automatically 308-redirect to `/faculty`.
3. **Canonical Tags**: Every page automatically renders a `<link rel="canonical" href="https://uswat.edu.pk[route]" />` via Next.js metadata.
4. **Open Graph & Twitter Cards**: Each canonical URL maps to distinct Open Graph metadata with title, description, and high-res social image fallback.
