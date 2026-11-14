# University of Swat — Comprehensive Site Architecture & Sitemap
**Document Status**: Official Architecture Specification (Pre-Implementation)  
**Standard**: ISO/IEC Information Architecture & W3C Semantic Hierarchy  
**Scope**: Full Multi-Page Institutional Ecosystem (64 Prerendered Static Paths)

---

## 1. High-Level Hub Hierarchy

The University of Swat website is organized around 10 primary institutional hubs:

```
University of Swat (Root)
│
├── 1.0 Home (Flagship Portal & Discourse)
│
├── 2.0 About University (Statutory Governance & Heritage)
│   ├── 2.1 Institutional Heritage & Charter
│   ├── 2.2 Vice Chancellor's Secretariat & Discourse
│   ├── 2.3 Statutory Officers & Administrative Directory
│   └── 2.4 Affiliated Colleges & Regional Network
│
├── 3.0 Academics & Faculties
│   ├── 3.1 All Faculties & Institutes (Directory)
│   ├── 3.2 Academic Departments (28 Dynamic Profiles)
│   ├── 3.3 Degree Programs Catalog (BS / MS / PhD)
│   ├── 3.4 Detailed Syllabi Specifications (Flagship Degrees)
│   ├── 3.5 Academic Calendar (Semesters & Gazettes)
│   └── 3.6 Official Downloads & Regulatory Forms
│
├── 4.0 Admissions & Student Finance
│   ├── 4.1 Admissions Overview & Step-by-Step Procedure
│   ├── 4.2 Official Fee Structure (Regular & Self-Finance)
│   ├── 4.3 Departmental Merit Lists & Quota Gazettes
│   └── 4.4 Scholarships & Financial Aid (HEC / KPEF)
│
├── 5.0 Research, Innovation & Postgraduate Studies
│   ├── 5.1 Research Pillars & Impact Overview
│   ├── 5.2 Office of Research, Innovation & Commercialization (ORIC)
│   ├── 5.3 Advanced Studies & Research Board (ASRB - MS/PhD)
│   └── 5.4 SUJRIS Research Journals & International Field Missions
│
├── 6.0 Campuses & Campus Life
│   ├── 6.1 Campus Life, Hostels & Student Facilities
│   ├── 6.2 Charbagh Main Campus (100% Solar Park & Masterplan)
│   └── 6.3 Women Sub-Campus (Safe Female Higher Education)
│
├── 7.0 News, Press Bureau & Symposia
│   ├── 7.1 University News Bureau & Press Releases
│   ├── 7.2 Individual Press Release Articles (Dynamic)
│   └── 7.3 Academic Conferences, Events & Sports Galas
│
├── 8.0 Alumni, Industry & Careers
│   ├── 8.1 Alumni Association & Degree Verification
│   └── 8.2 Corporate Partnerships & Swat Chamber (SCCI)
│
├── 9.0 Contact & Official Enquiries
│   ├── 9.1 Departmental Telephone & Email Directory
│   └── 9.2 Campus Locations, Maps & Transit Directions
│
└── 10.0 University Portals (Single Sign-On Hub)
    ├── 10.1 Student CMS (Course Enrollment & Transcripts)
    ├── 10.2 Learning Management System (LMS)
    ├── 10.3 Staff e-Office & Intranet
    └── 10.4 Online Admission Portal
```

---

## 2. Complete Page-by-Page Sitemap Table

| ID | Page Name | Canonical URL | Hub | Template Type | Priority | Depth |
|---|---|---|---|---|---|---|
| 1.0 | University Homepage | `/` | Home | Homepage | 1.0 | 0 |
| 2.0 | About the University | `/about` | About | Narrative / History | 0.8 | 1 |
| 2.1 | University Leadership Directory | `/leadership` | About | Directory | 0.8 | 1 |
| 2.2 | Vice Chancellor's Profile & Discourse | `/leadership/vice-chancellor` | About | Executive Profile | 0.9 | 2 |
| 2.3 | Statutory Officer (Registrar) | `/leadership/registeror-office` | About | Administrative Detail | 0.7 | 2 |
| 2.4 | Statutory Officer (Treasurer) | `/leadership/treasurer-office` | About | Administrative Detail | 0.7 | 2 |
| 2.5 | Statutory Officer (Controller) | `/leadership/controller-examinations` | About | Administrative Detail | 0.7 | 2 |
| 2.6 | Statutory Officer (Provost) | `/leadership/provost-office` | About | Administrative Detail | 0.7 | 2 |
| 2.7 | Affiliated Colleges Network | `/affiliated-colleges` | About | Directory Index | 0.7 | 1 |
| 3.0 | Academics Hub | `/academics` | Academics | Hub / Council | 0.8 | 1 |
| 3.1 | Academic Calendar 2026–2027 | `/academics/calendar` | Academics | Timeline / Calendar | 0.8 | 2 |
| 3.2 | Official Downloads & Forms | `/academics/downloads` | Academics | Document Repository | 0.8 | 2 |
| 3.3 | Faculties & Departments Directory | `/faculty` | Academics | Academic Directory | 0.9 | 1 |
| 3.4 | Dept: Computer & Software Tech | `/departments/computer-software-technology` | Academics | Department Profile | 0.85 | 2 |
| 3.5 | Dept: Physics | `/departments/physics` | Academics | Department Profile | 0.8 | 2 |
| 3.6 | Dept: Chemistry | `/departments/chemistry` | Academics | Department Profile | 0.8 | 2 |
| 3.7 | Dept: Management Sciences | `/departments/management-sciences` | Academics | Department Profile | 0.8 | 2 |
| 3.8 | Dept: Law & Legal Studies | `/departments/law-legal-studies` | Academics | Department Profile | 0.8 | 2 |
| 3.9 | Dept: Environmental Sciences | `/departments/environmental-sciences` | Academics | Department Profile | 0.8 | 2 |
| 3.10| Dept: Botany | `/departments/botany` | Academics | Department Profile | 0.8 | 2 |
| 3.11| Dept: Zoology | `/departments/zoology` | Academics | Department Profile | 0.8 | 2 |
| 3.12| Dept: Mathematics | `/departments/mathematics` | Academics | Department Profile | 0.75 | 2 |
| 3.13| Dept: English Language & Lit | `/departments/english` | Academics | Department Profile | 0.75 | 2 |
| 3.14| Dept: Centre for Archaeology | `/departments/centre-for-archaeology` | Academics | Department Profile | 0.85 | 2 |
| 3.15| All Remaining 17 Departments | `/departments/[slug]` (17 Paths) | Academics | Department Profile | 0.75 | 2 |
| 3.16| Academic Degrees Catalog | `/programs` | Academics | Program Directory | 0.9 | 1 |
| 3.17| BS Computer Science Syllabus | `/programs/bs-computer-science` | Academics | Detailed Syllabus | 0.9 | 2 |
| 3.18| BS Software Engineering Syllabus| `/programs/bs-software-engineering` | Academics | Detailed Syllabus | 0.9 | 2 |
| 3.19| BBA (Honors) Syllabus | `/programs/bba-honors` | Academics | Detailed Syllabus | 0.85 | 2 |
| 3.20| BS Chemistry Syllabus | `/programs/bs-chemistry` | Academics | Detailed Syllabus | 0.85 | 2 |
| 3.21| Bachelor of Laws (LLB 5-Yr) | `/programs/llb-5-years` | Academics | Detailed Syllabus | 0.85 | 2 |
| 3.22| BS Environmental Sciences | `/programs/bs-environmental-sciences` | Academics | Detailed Syllabus | 0.85 | 2 |
| 4.0 | Admissions Hub | `/admissions` | Admissions | Admissions Hub | 0.9 | 1 |
| 4.1 | Transparent Fee Structure | `/admissions/fee-structure` | Admissions | Financial Table | 0.9 | 2 |
| 4.2 | Departmental Merit Lists | `/admissions/merit-lists` | Admissions | Gazette Reader | 0.9 | 2 |
| 5.0 | Research & Innovation Hub | `/research` | Research | Research Hub | 0.85 | 1 |
| 5.1 | ORIC (Innovation & Incubation) | `/research/oric` | Research | Division Profile | 0.85 | 2 |
| 5.2 | ASRB (Postgraduate Directorate)| `/research/asrb` | Research | Policy / Regulatory | 0.85 | 2 |
| 6.0 | Campus Life & Facilities Hub | `/campus-life` | Campus Life | Student Life Hub | 0.8 | 1 |
| 6.1 | Charbagh Main Campus Tour | `/campuses/main-campus` | Campus Life | Campus Showcase | 0.85 | 2 |
| 6.2 | Women Sub-Campus Showcase | `/campuses/women-campus` | Campus Life | Campus Showcase | 0.85 | 2 |
| 7.0 | Press Bureau & News | `/news` | News & Events | News Magazine | 0.8 | 1 |
| 7.1 | News: Appointment of VC Prof. Dr. Husnul Amin | `/news/appointment-prof-dr-husnul-amin-vc` | News & Events | Article Editorial | 0.75 | 2 |
| 7.2 | News: 100% Solarization Project Launch | `/news/solarization-project-launch` | News & Events | Article Editorial | 0.75 | 2 |
| 7.3 | News: Gandhara Archaeological MoU | `/news/gandhara-archaeology-mou-sri-lanka` | News & Events | Article Editorial | 0.75 | 2 |
| 7.4 | News: Italian Archaeological Mission | `/news/italian-archaeological-mission-symposium` | News & Events | Article Editorial | 0.75 | 2 |
| 7.5 | News: DLSEI 3.0 Digital Scholarships | `/news/dlsei-digital-scholarships-launch` | News & Events | Article Editorial | 0.75 | 2 |
| 7.6 | News: Mountain Climate Resilience Conf | `/news/mountain-climate-resilience-conference` | News & Events | Article Editorial | 0.75 | 2 |
| 7.7 | Events & Academic Symposia | `/events` | News & Events | Event Calendar | 0.75 | 1 |
| 8.0 | Alumni & Corporate Liaison | `/portal` (Integrated) | Alumni | Engagement Hub | 0.7 | 1 |
| 9.0 | Contact & Directory Hub | `/contact` | Contact | Directory / Map | 0.8 | 1 |
| 10.0| University Portals Gateway | `/portal` | Portals | Gateway / Dashboard | 0.85 | 1 |
| 11.0| 404 Institutional Recovery | `/_not-found` | System | Error Recovery | 0.1 | 1 |

---

## 3. Structural Rules & Clean Routing Policies

1. **Max Depth of 2 Levels**: Every page is reachable within 2 clicks from the homepage or global mega-menu. No deeply nested, labyrinthine URLs (e.g., `/academics/departments/faculties/dept/page.html` is strictly flattened to `/departments/[slug]`).
2. **Predictable URL Slugs**: All slugs use lowercase kebab-case naming matching official departments and degrees (`bs-computer-science`, `women-campus`, `vice-chancellor`).
3. **No Orphan Pages**: Every static and dynamic page is registered in `generateStaticParams()` and hyperlinked from at least two parent or peer hubs.
