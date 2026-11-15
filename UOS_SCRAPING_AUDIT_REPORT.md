# University of Swat — Scraped Data Integration Audit Report

**Source:** https://uswat.edu.pk (official site, scraped 2026)
**Manifest:** `src/data/uos-scraped-manifest.json`
**Images root:** `public/images/uos/{leadership,faculty,campus-and-events,unassigned-queue}/`

---

## 1. Matched & Integrated Personnel

### Leadership (verified against official office pages)
Integrated into `src/data/leadershipData.ts`:

| Name | Designation | Email | Photo |
|---|---|---|---|
| Prof. Dr. Husnul Amin | Vice Chancellor | vc@uswat.edu.pk | `/images/leadership/vc-prof-dr-husnul-amin.jpeg` |
| Prof. Dr. Muhammad Qasim | Pro-Vice Chancellor | — | `/images/leadership/pro-vc-prof-dr-muhammad-qasim.jpg` |
| Dr. Arshad Ali Khan | Registrar | registrar@uswat.edu.pk | `/images/leadership/registrar-dr-arshad-ali-khan.jpg` |
| Mr. Mahboob Ur Rahman | Treasurer | mahboob@uswat.edu.pk | (placeholder) |
| Aziz ur Rehman | Controller of Examinations | — | (placeholder) |
| Dr. Muhammad Imad Khan | Provost | provost@uswat.edu.pk | (placeholder) |
| Dr. Anwar Hussain | Director ORIC | anwar@uswat.edu.pk | `/images/leadership/oric-dr-anwar-hussain.jpg` |

VC secretariat (pre-existing, retained): Mr. Tariq Kamal, Mr. Naveed Iqbal.

### Faculty (scraped from 23 department pages)
- **149 faculty members** scraped from official department HTML tables (name, designation, qualification, email, photo).
- **131 with verified photos** downloaded to `public/images/uos/faculty/` and wired into `departmentsData.ts`.
- **22 departments** now carry real faculty rosters in the site (16 original + 6 newly added: Agricultural Sciences & Forestry, Archaeology, Education & Staff Training, Pakistan Studies, Social & Gender Studies, Urdu):
  - Biotechnology & Genetics (21)
  - Botany (9)
  - Chemistry (11)
  - Computer and Software Technology (12)
  - Economics & Development Studies (8)
  - English and Foreign Languages (5)
  - Environmental Sciences (8)
  - Islamic and Arabic Studies (7)
  - Law & Shariah (6)
  - Management & Commerce (11)
  - Mathematics and Statistics (9)
  - Pashto and Local Languages (1)
  - Physics (5)
  - Psychological Studies (3)
  - Tourism and Hospitality (2)
  - Zoology (7)

### Campus / Heritage component
`src/components/home/CampusLifeHeritage.tsx` updated to use 5 verified campus-event photos (`campus-event-1..5.jpg`).

---

## 2. Verified Personnel Missing Photos (monogram/crest placeholder used)

18 faculty members have verified names/roles but no usable photo (generic silhouette or missing on official site). They are kept in the data with name + designation + qualification; the UI falls back to a monogram/crest placeholder. No face was guessed or mismatched.

| Name | Designation | Department |
|---|---|---|
| Dr. Shafiqa Bushra | — | Department of Islamic and Arabic Studies |
| Dr. Lala Rukh | Associate Professor in Finance | Department of Urdu |
| Dr. Maryam Imad | Lecturer | Department of Education and Staff Training |
| Ms. Sadarat | Lecturer | Department of Education and Staff Training |
| Ms. Palwasha Rahim | — | Department of Psychological Studies |
| Ms. Roya Shahhiman Zada | on study Leave / Lecturer | Department of Psychological Studies |
| Dr. Naveed Ali | Gold Medalist | Department of Economics and Development Studies |
| Dr. Lala Rukh | Associate Professor in Finance | Department of Management and Commerce |
| Dr. Neelam Akbar Marwat | Lecturer in Marketing | Department of Management and Commerce |
| Ms. Rohi Naz | Lecturer | Department of Zoology |
| Ms. Shabnam | Lecturer | Department of Zoology |
| Dr. Muzammil Khan | Assistant Professor | Department of Computer and Software Technology |
| Ms. Nazish Inayat | Lecturer | Department of Law & Shariah |
| Ms. Kalsoom Bibi | Lecturer | Department of Law & Shariah |
| Mr. Murad Ali | — | Department of Biotechnology, Genetics, Forensic and Microbiology |
| Dr. Shazia Sakhi | Associate Professor | Department of Botany |
| Dr. Zakia Ahmad | Assistant Professor | Department of Botany |
| Dr. Shazia | Lecturer | Department of Botany |

Leadership without photo (placeholder): Mr. Mahboob Ur Rahman (Treasurer), Aziz ur Rehman (Controller of Examinations), Dr. Muhammad Imad Khan (Provost).

---

## 3. Matched & Integrated Campus/Event Images

17 verified campus/event photos downloaded from the official homepage gallery into `public/images/uos/campus-and-events/` (campus-event-1.jpg … campus-event-15.jpg, plus campus-event-20.jpg, campus-event-22.jpg). 5 of them are integrated into `CampusLifeHeritage.tsx`; the rest are available in the manifest for future use.

| File | Status |
|---|---|
| campus-event-1.jpg … campus-event-5.jpg | Integrated into CampusLifeHeritage |
| campus-event-6.jpg … campus-event-15.jpg, campus-event-20.jpg, campus-event-22.jpg | Downloaded & manifest-listed (available) |

---

## 4. Unassigned Image Queue

5 images could not be confidently matched to a person or verified campus use (low-resolution thumbnails / ambiguous). They were placed in `public/images/uos/unassigned-queue/` without guessing an owner.

| File | Reason |
|---|---|
| campus-event-16.jpg (11 KB) | Low-resolution thumbnail |
| campus-event-17.jpg (9 KB) | Low-resolution thumbnail |
| campus-event-18.jpg (16 KB) | Low-resolution thumbnail |
| campus-event-19.jpg (5 KB) | Low-resolution thumbnail |
| campus-event-21.jpg (13 KB) | Low-resolution thumbnail |

---

## Verification
- `npx tsc --noEmit`: 0 errors.
- `npm run build`: compiled successfully, 215/215 static pages generated.
- No fabricated programs, faculty, or statistics; all names/roles sourced from official department tables.
- Accessibility and reduced-motion behavior unchanged.
