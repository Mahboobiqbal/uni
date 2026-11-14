# University of Swat — Comprehensive Page Blueprints (22 Templates)
**Document Status**: Official Architecture Specification (Pre-Implementation)  
**Standard**: Modular Editorial Component Architecture  
**Scope**: Complete Blueprint System for all 22 Institutional Page Archetypes

---

## 1. Homepage (`/`)
- **Page Objective**: Establish institutional prestige, convey the university's mission and Gandharan/mountain heritage, provide instant access to academic programs, and deliver real-time notices via the master-detail bulletin.
- **Primary Audience**: Prospective students, parents, international partners, current students.
- **Content Blocks in Exact Order**:
  1. *Global Navigation Overlay*: Frosted glass, official crest, 6 academic mega-menus, Student Portal CTA.
  2. *Hero Section*: Full-viewport cinematic video, display serif H1 (*"Shaping Scholars & Innovators in the Heart of Swat"*), dual CTA, and 3 crimson architectural cards (*Quality, Leadership, Experience*) overlapping into the section below.
  3. *Voice of the Vice Chancellor*: Full-width Warm Alabaster section, 420px 3D tilt `<ProfileCard />` with Prof. Dr. Husnul Amin's portrait, inaugural message, stone achievement badges, and signature.
  4. *Flagship Campus Bulletin*: 2-column master-detail section with sliding category rail (7 tabs), auto-looping notice feed, and full official notice reader with share/download actions.
  5. *Academic Breadth & Faculties Grid*: Split header and 5 interactive faculty cards with degree counts, level chips, accent borders, and program links.
  6. *Campus Life & Heritage Bento Gallery*: Featured Charbagh Main Campus tile (span 2×2) beside a 2×2 grid of Women Campus, Central Library, Sports Arena, and Buddhist Heritage tiles.
  7. *Academic Ranking & Scorecard*: React Bits `<MagicBento />` grid with embedded charts (HEC 91.4% W-Category, GreenMetric Top 15, THE 301–400, #1 Malakand).
  8. *Deep Institutional Footer*: Quick Portals card row (CMS, SUJRIS, e-Office, TV), 4 institutional columns, and statutory legal bar.
- **Visual Hierarchy**: Hero display serif H1 (56px) → Section headers (36px serif) → Card headlines (20px bold) → Body copy (15px sans).
- **Image Treatment**: Video loop with dark multi-stop vignette, authentic portraits, and architectural photography.
- **Calls to Action**: "Explore Programs", "Virtual Campus Tour", "Student Portal", "Read Notice".
- **Internal Links**: Direct paths to `/programs`, `/campuses/main-campus`, `/faculty`, `/portal`, `/admissions`.
- **Mobile Behavior**: 3 crimson cards stack vertically, Campus Bulletin collapses to single column with notice drawer, bento gallery scrolls smoothly.
- **Accessibility**: Skip-to-content link, WCAG 4.5:1 text contrast, reduced-motion video pause fallback.
- **Empty-State Treatment**: Bulletin shows cached official notifications if feed is unavailable.

---

## 2. About University (`/about`)
- **Page Objective**: Communicate university history from its 2010 charter, statutory governance, mission, and valley recovery.
- **Primary Audience**: Accreditations officers, prospective faculty, civic community, historical researchers.
- **Content Blocks in Exact Order**:
  1. *PageHeader*: Tag "Institutional Heritage", serif H1 *"A Citadel of Scholarship in the Swat Valley"*, back link to Home.
  2. *Narrative Lead Section*: 2-column split with historic charter narrative and high-res photograph of the Swat River valley.
  3. *Core Mission & Vision Cards*: 3-column card grid (Mission, Vision, Strategic Core Values).
  4. *Timeline of Milestones (2010–2026)*: Vertical chronological timeline tracking the 2010 charter, land acquisition, Charbagh opening, 100% solarization, and appointment of Prof. Dr. Husnul Amin.
  5. *Statutory Governance Bodies*: Overview of the Senate, Syndicate, Academic Council, and ASRB.
  6. *Accreditation & Quality Assurance*: Verified HEC W-Category standing, NCEAC, PCB, and PBC badges.
  7. *Call to Action Banner*: "Discover Our Leadership Directory" and "Explore Academic Faculties".
- **Visual Hierarchy**: PageHeader H1 (48px) → Mission pull quotes (24px serif italic) → Timeline year badges (18px bold gold).
- **Image Treatment**: Historical charter photographs, archival valley images, and modern campus masonry.
- **Calls to Action**: "View Leadership Directory", "Download University Act PDF".
- **Mobile Behavior**: Timeline shifts to single left-aligned rail; 3-column value cards stack.
- **Accessibility**: Semantic `<time>` tags in timeline, ordered lists for governance bodies.

---

## 3. Academics Hub (`/academics`)
- **Page Objective**: Provide a top-level orienting hub for all educational offerings, faculties, academic calendars, and downloads.
- **Primary Audience**: Prospective and enrolled students, visiting scholars.
- **Content Blocks in Exact Order**:
  1. *PageHeader*: Tag "Academics", serif H1 *"Academic Breadth & Curricular Excellence"*.
  2. *Curricular Pillars Overview*: 4-column feature row (Undergraduate, Graduate, Professional, Research).
  3. *Faculties Directory Navigation*: Quick jumps to the 4 faculties with department counts.
  4. *Academic Calendar Spotlight*: Current semester milestones, mid-term dates, and gazette links.
  5. *Download Center Highlight*: Direct link to downloadable forms and proformas.
  6. *Affiliated Degree Colleges Strip*: Summary of regional college network.
- **Visual Hierarchy**: PageHeader H1 → Pillar cards → Faculty cluster blocks.
- **Image Treatment**: Student lab work, library reading halls, outdoor seminar photography.
- **Calls to Action**: "Browse All 45+ Programs", "Download Academic Calendar PDF".
- **Mobile Behavior**: Grid cards collapse to 1-column with clear icon touch targets.

---

## 4. Faculty / School Hub (`/faculty`)
- **Page Objective**: Present the complete institutional catalog of all 4 official faculties and 28 academic departments.
- **Primary Audience**: Prospective students, inter-departmental researchers.
- **Content Blocks in Exact Order**:
  1. *PageHeader*: Tag "Faculties & Institutes", serif H1 *"Four Pillars of Scholarly Inquiry"*.
  2. *Faculty Filter Rail*: Fast jump buttons for the 4 faculties.
  3. *Faculty Sections (Repeated for all 4)*:
     - Faculty Header (Name, Dean, Mission Statement).
     - Department Card Grid (Department Name, HoD, Degree Count, Link to Profile).
  4. *Cross-Disciplinary Centres*: Centre for Archaeology and Heritage, Centre for Plant Sciences.
- **Visual Hierarchy**: Faculty Title (32px serif) → Department Card Title (20px bold) → HoD metadata.
- **Image Treatment**: Subtle watermarked crests, laboratory icons, no stock imagery.
- **Calls to Action**: "Explore Department Profile", "View Faculty Roster".
- **Mobile Behavior**: Sticky category jump pill bar; 2-column department cards become 1-column.

---

## 5. Program Listing (`/programs`)
- **Page Objective**: Allow prospective applicants to discover, filter, and compare all undergraduate, graduate, and doctoral degrees.
- **Primary Audience**: High school seniors, graduate applicants.
- **Content Blocks in Exact Order**:
  1. *PageHeader*: Tag "Degree Offerings", serif H1 *"Academic Programs Catalog"*.
  2. *Live Filter Bar*: Search input + Tier filters (*All*, *Undergraduate BS*, *Graduate MS/MPhil*, *Doctoral PhD*).
  3. *Interactive Degree Card Grid*: Responsive cards displaying program title, duration, credits, department, and semester fees.
  4. *Admissions Help Box*: Side callout with admissions desk phone, email, and link to fee structure.
- **Visual Hierarchy**: Degree title (Serif 20px) → Department line (13px) → Duration and fee pills.
- **Image Treatment**: Clean typographic cards with subtle accent top borders.
- **Calls to Action**: "View Detailed Syllabus", "Apply Online".
- **Mobile Behavior**: Filter bar converts to horizontal scrolling pill carousel; cards span full width.
- **Empty-State Treatment**: "No degrees found matching your search. Try resetting filters."

---

## 6. Individual Program Detail (`/programs/[slug]`)
- **Page Objective**: Deliver a comprehensive curriculum specification for a specific degree (e.g. BSCS, BS Chemistry).
- **Primary Audience**: Enrolled students planning semesters, prospective applicants evaluating curriculum.
- **Content Blocks in Exact Order**:
  1. *PageHeader*: Degree Name, Degree Level, Department, Breadcrumb trail.
  2. *Program At-A-Glance Metric Strip*: 4 metrics (Duration, Total Credit Hours, Semesters, Degree Type).
  3. *Degree Overview & Mission*: Detailed academic narrative (200 words).
  4. *Eligibility & Entry Criteria*: Exact percentage thresholds (e.g. 50% in F.Sc Pre-Eng/ICS), test requirements.
  5. *Learning Outcomes & Core Competencies*: 5 bullet points with checkmark icons.
  6. *Career & Industrial Prospects*: Employment roles and higher education opportunities.
  7. *8-Semester Curriculum Table Matrix*: Interactive semester-by-semester cards with complete course codes and titles.
  8. *Transparent Fee Schedule*: Semester tuition, admission fee, and security deposits.
  9. *Department Connection Card*: Link to parent department, faculty list, and inquiry email.
- **Visual Hierarchy**: Program title H1 (40px) → Section headers (24px) → Semester tabs (16px bold).
- **Image Treatment**: Lab equipment and study hall hero photo.
- **Calls to Action**: "Apply for this Degree", "Download Scheme of Studies PDF".
- **Mobile Behavior**: Semester cards stack vertically with clean course rows; metric strip wraps to 2×2.

---

## 7. Department Page (`/departments/[slug]`)
- **Page Objective**: Provide the complete official profile of an academic department, including leadership, aims, degrees, and faculty roster.
- **Primary Audience**: Students in the department, visiting researchers, parents.
- **Content Blocks in Exact Order**:
  1. *PageHeader*: Department Name, Parent Faculty Tag, HoD Name.
  2. *Aims & Departmental Narrative*: Research focus, laboratory equipment, history.
  3. *Degrees Offered*: List of BS, MS, and PhD degrees with direct links to syllabi.
  4. *Official Faculty Directory*: Grid of faculty member cards with authentic portrait photos, designations, and qualifications.
  5. *Laboratories & Facilities*: Special hardware, wet labs, computer centers.
  6. *Departmental Contact & Location*: Building name, room number, telephone extension, email.
- **Visual Hierarchy**: Department Name H1 → Faculty photos and names → Degree program pills.
- **Image Treatment**: Authentic faculty portraits with 1:1 ratio, photo of department building.
- **Calls to Action**: "Explore Degree Syllabi", "Contact Department Chairman".
- **Mobile Behavior**: Faculty cards render in clean 2-column or 1-column format with direct mailto: buttons.

---

## 8. Faculty Member Profile
- **Page Objective**: Showcase an individual professor's credentials, research specializations, and publications.
- **Primary Audience**: Research collaborators, postgraduate students seeking supervisors.
- **Content Blocks in Exact Order**:
  1. *Executive Profile Card*: Authentic portrait photo, academic rank, department, contact links.
  2. *Biography & Scholarly Background*: Academic history and terminal degree institutions.
  3. *Research Specializations*: Key fields (e.g. Distributed Computing, Alpine Ethnobotany).
  4. *Recent Publications & Research Projects*: HEC recognized journal papers and funded grants.
  5. *Courses Taught*: Current semester teaching schedule.
- **Visual Hierarchy**: Professor Name (30px serif) → Rank & Designation (14px uppercase crimson) → Publication list.
- **Calls to Action**: "Email Professor", "View ResearchGate / Google Scholar Profile".

---

## 9. Admissions Hub (`/admissions`)
- **Page Objective**: Act as the primary gateway for prospective applicants, detailing eligibility, timelines, fees, and procedures.
- **Primary Audience**: High school graduates, parents, transfer students.
- **Content Blocks in Exact Order**:
  1. *PageHeader*: Tag "Admissions 2026", serif H1 *"Begin Your Scholarly Journey"*.
  2. *Admissions At-A-Glance Grid*: Application Open Date, Entry Test Dates, Closing Deadline, Quota summary.
  3. *Step-by-Step Application Pipeline*: 4 sequential cards (Register Online → Pay Challan → Submit Documents → Merit List).
  4. *Eligibility Criteria Quick Reference*: BS, MS/MPhil, PhD percentage rules.
  5. *Scholarship Opportunities*: HEC Need-Based, Ehsaas Undergraduate, KPEF, Merit awards.
  6. *Helpline & Guidance Desk*: Directorate of Admissions telephone numbers and office hours.
- **Visual Hierarchy**: PageHeader H1 → Step numerals (32px gold) → Deadline callout box.
- **Calls to Action**: "Apply Online Now", "View Fee Structure", "Check Merit Lists".
- **Mobile Behavior**: 4-step pipeline becomes vertical timeline; callout cards stack cleanly.

---

## 10. Admission Process & How to Apply (`/admissions/how-to-apply`)
- **Page Objective**: Provide detailed tactical instructions for completing the online application, bank payment, and document upload.
- **Primary Audience**: First-time applicants navigating university admissions.
- **Content Blocks in Exact Order**:
  1. *PageHeader*: Tag "Admissions Guide", serif H1 *"Step-by-Step Application Procedure"*.
  2. *Required Documents Checklist*: Matric certificate, F.Sc DMC, CNIC/Form-B, photographs, domicile certificate.
  3. *Fee Payment Instructions*: Designated bank branches (Allied Bank, Habib Bank), online mobile app payment steps.
  4. *Quota Guidelines*: Explanation of Open Merit, District Swat Quota, Merged Areas (FATA), Sports, and Disabled quotas.
  5. *Frequently Asked Questions (Accordion)*: Answers on test dates, transfer requests, and document verification.
- **Calls to Action**: "Proceed to Online Portal", "Download Challan Form".

---

## 11. Research Hub (`/research`)
- **Page Objective**: Highlight university research excellence, international archaeological excavations, SUJRIS journal, and ORIC commercialization.
- **Primary Audience**: International research partners, funding bodies (HEC, PSF), postgraduate scholars.
- **Content Blocks in Exact Order**:
  1. *PageHeader*: Tag "Research & Discovery", serif H1 *"Innovation, Archaeology & Mountain Science"*.
  2. *Two Flagship Pillars Split*:
     - Office of Research, Innovation & Commercialization (ORIC).
     - Advanced Studies & Research Board (ASRB).
  3. *Key Research Clusters*: Gandhara Archaeology, High-Altitude Medicinal Botany, Renewable Solar Grid, Alpine Hydrology.
  4. *SUJRIS Research Journal Showcase*: HEC category standing, ISSN, current volume download, call for papers.
  5. *International Collaborative Missions*: Italian Archaeological Mission (ISMEO), Sri Lankan NIIBS partnership.
- **Calls to Action**: "Visit ORIC Division", "View ASRB Guidelines", "Submit to SUJRIS".

---

## 12. Research Project / ORIC Division (`/research/oric`)
- **Page Objective**: Provide full details on business incubation, patent filings, research grants, and industry links with Swat Chamber (SCCI).
- **Primary Audience**: Student entrepreneurs, industrial partners, grant applicants.
- **Content Blocks in Exact Order**:
  1. *PageHeader*: Tag "ORIC Division", serif H1 *"Office of Research, Innovation & Commercialization"*.
  2. *Director's Message*: Statement by Director Dr. Anwar Hussain.
  3. *ORIC Focus Pillars*: Research Operations, Technology Transfer, Business Incubation Center (BIC).
  4. *Funded Projects & Grants Register*: Table of ongoing HEC and international research grants.
  5. *Industry Collaboration*: Swat Chamber of Commerce & Industry (SCCI) partnership details.
- **Calls to Action**: "Download Grant Application Proforma", "Submit Incubation Pitch".

---

## 13. Campus Life Hub (`/campus-life`)
- **Page Objective**: Showcase the vibrant, healthy, and culturally rich student environment across university campuses.
- **Primary Audience**: Prospective students and parents assessing student well-being.
- **Content Blocks in Exact Order**:
  1. *PageHeader*: Tag "Campus Experience", serif H1 *"Student Life in the Swat Valley"*.
  2. *Campus Grounds Overview*: Charbagh Main Campus and Women Sub-Campus introduction.
  3. *Student Facilities Bento*: Sports Complex & Cricket Stadium, Central Library, Hostels, Transport Fleet.
  4. *Clubs & Student Societies*: Debating Society, Literary Club, Environmental Society, Adventure & Hiking Club.
  5. *Health & Counseling Services*: On-campus medical unit and student advisor office.
- **Calls to Action**: "Explore Main Campus", "Tour Women Campus", "Join a Student Society".

---

## 14. Student Service / Hostels Page (`/campus-life/hostels`)
- **Page Objective**: Deliver detailed information on residential dormitories, dining halls, security, and room allotment rules.
- **Primary Audience**: Students from distant regions requiring campus accommodation.
- **Content Blocks in Exact Order**:
  1. *PageHeader*: Tag "Student Accommodation", serif H1 *"Campus Hostels & Residential Services"*.
  2. *Hostel Capacity & Blocks*: Boys' Hostel (Charbagh), Girls' Hostel (Charbagh & Women Campus).
  3. *Room Amenities & Facilities*: High-speed Wi-Fi, 24/7 solar power, dining mess, study rooms, CCTV security.
  4. *Allotment Procedure & Dues*: Allotment criteria, annual fee, security deposit, and hostel rules.
  5. *Download Hostel Form*: Direct PDF proforma trigger.
- **Calls to Action**: "Download Hostel Allotment Form", "Contact Provost Office".

---

## 15. News Hub (`/news`)
- **Page Objective**: Serve as the official university press bureau, featuring verified press dispatches and academic breakthroughs.
- **Primary Audience**: Journalists, students, faculty, civic community.
- **Content Blocks in Exact Order**:
  1. *PageHeader*: Tag "Press Bureau", serif H1 *"University News & Official Dispatches"*.
  2. *Featured Story Banner*: Large editorial card for the latest major university announcement.
  3. *Topic Filter Bar*: *All*, *Leadership*, *Sustainability*, *Research*, *Academics*.
  4. *News Article Grid*: 3-column card grid with authentic photographs, categories, and excerpts.
  5. *Media Contact Box*: University Public Relations Officer (PRO) contact details.
- **Calls to Action**: "Read Press Release", "Contact Media Office".

---

## 16. Individual News Article (`/news/[slug]`)
- **Page Objective**: Deliver an authoritative, high-readability press release with verified photography and official quotes.
- **Primary Audience**: Media outlets, community stakeholders, students.
- **Content Blocks in Exact Order**:
  1. *Article Breadcrumbs*: Home → News → Article Title.
  2. *Category Chip & Date*: Topic badge, publication date, read time.
  3. *Editorial Headline*: Serif display headline (36–44px).
  4. *Drophead / Standfirst*: Bold 2-sentence summary.
  5. *Hero Photograph*: Full-bleed authentic photo with italic caption and photo credit.
  6. *Article Body*: Multi-paragraph prose with drop caps, pull quotes, and bold subsections.
  7. *Official Statement Block*: Quotation box featuring remarks from the Vice Chancellor or statutory officer.
  8. *Related Press Releases*: 3 related story cards at the bottom.
- **Calls to Action**: "Share on Social Media", "Back to News Hub".

---

## 17. Events Hub (`/events`)
- **Page Objective**: Present upcoming academic symposia, sports tournaments, convocation dates, and examination schedules.
- **Primary Audience**: Attendees, paper presenters, student athletes.
- **Content Blocks in Exact Order**:
  1. *PageHeader*: Tag "University Events", serif H1 *"Symposia, Convocations & Academic Gatherings"*.
  2. *Upcoming Events Spotlight*: Featured upcoming conference with registration trigger.
  3. *Monthly Calendar View / Card Register*: Date-badged cards displaying time, venue, and organizer.
  4. *Past Event Archives*: Summaries and photos from prior academic conferences.
- **Calls to Action**: "Register for Event", "Submit Research Abstract".

---

## 18. Event Detail Page (`/events/[slug]`)
- **Page Objective**: Provide complete logistics, schedule, keynote speakers, and registration details for a specific event.
- **Primary Audience**: Conference delegates, attendees.
- **Content Blocks in Exact Order**:
  1. *Event Header*: Title, Category, Date, Venue.
  2. *Keynote Speakers & Organizers*: Bio cards of chief guests and chairpersons.
  3. *Schedule & Session Breakdown*: Detailed hour-by-hour program timetable.
  4. *Registration & Fees*: Registration deadlines, delegate categories, and payment options.
  5. *Venue & Accommodation Info*: Driving directions and guest house booking links.
- **Calls to Action**: "Complete Registration Form", "Download Conference Program PDF".

---

## 19. Alumni & Careers (`/portal` or `/alumni`)
- **Page Objective**: Connect graduates with university initiatives, provide degree verification, and promote career placement.
- **Primary Audience**: Alumni, regional employers (Swat Chamber of Commerce, IT software houses).
- **Content Blocks in Exact Order**:
  1. *PageHeader*: Tag "Graduates Network", serif H1 *"Alumni Community & Career Placement"*.
  2. *Online Degree & Transcript Verification*: Direct gateway for credential verification.
  3. *Alumni Success Highlights*: Profiles of notable alumni in research, civil service, and tech.
  4. *Career Services & Job Fair*: Employment partnerships and campus recruitment dates.
  5. *Alumni Registration Form*: Update contact details and join regional alumni chapters.
- **Calls to Action**: "Verify Degree Online", "Register in Alumni Directory".

---

## 20. Contact & Official Directory (`/contact`)
- **Page Objective**: Provide an exhaustive departmental telephone directory, verified emails, campus maps, and inquiry forms.
- **Primary Audience**: Public, students, applicants seeking direct contact.
- **Content Blocks in Exact Order**:
  1. *PageHeader*: Tag "Contact Directory", serif H1 *"Official Enquiries & Campus Directory"*.
  2. *High-Priority Helplines*: 3 cards (Admissions Helpline, Examination Inquiry, Vice Chancellor Secretariat).
  3. *Departmental Directory Table*: Searchable table listing departments, heads, telephone extensions, and emails.
  4. *Campus Locations & Interactive Map*: Charbagh Main Campus and Women Sub-Campus directions.
  5. *Online Official Inquiry Form*: Name, email, category dropdown, subject, and message field.
- **Calls to Action**: "Call Admissions Office", "Submit Online Enquiry".

---

## 21. Search Results Template (`/search`)
- **Page Objective**: Return fast, relevant results across programs, departments, faculty, news, and downloadable forms.
- **Primary Audience**: Any visitor searching for a specific topic.
- **Content Blocks in Exact Order**:
  1. *Search Input Header*: Prominent search box with query pre-filled.
  2. *Facet Filters*: *All Results*, *Programs*, *Departments*, *Faculty*, *Downloads*, *News*.
  3. *Search Result Items*: Card rows displaying entity tag, title, excerpt, and URL link.
  4. *Empty State*: "No results found for '[query]'. Suggestions: Check spelling, try broader keywords, or browse Programs."
- **Calls to Action**: "Refine Search", "Browse Academic Programs".

---

## 22. 404 Institutional Recovery Template (`/_not-found`)
- **Page Objective**: Gracefully guide lost visitors back to active institutional hubs without frustration.
- **Primary Audience**: Visitors with broken links or outdated bookmarks.
- **Content Blocks in Exact Order**:
  1. *Editorial Header*: Serif 404 numeral, headline *"Page Not Found in the University Archives"*.
  2. *Explanatory Note*: Dignified message explaining that the page may have moved during the 2026 website reorganization.
  3. *High-Priority Recovery Hubs*: 4 clear navigation buttons:
     - Home (`/`)
     - Academic Programs (`/programs`)
     - Admissions 2026 (`/admissions`)
     - Official Downloads (`/academics/downloads`)
  4. *Direct Search Input*: Embedded search bar to immediately find desired content.
- **Calls to Action**: "Return to Homepage", "Search University Site".
