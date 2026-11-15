/**
 * University of Swat — Academic Faculties & Departments Catalog
 * Extracted from official university pages uswat.edu.pk
 */

export interface FacultyDepartment {
 id: string;
 name: string;
 facultyGroup: string;
 campus: string;
 aims: string;
 description: string;
 programsOffered: string[];
 headOfDepartment?: string;
 facultyMembers?: {
 name: string;
 designation: string;
 qualification?: string;
 image?: string;
 }[];
 contactEmail: string;
}

export interface FacultyCategory {
 name: string;
 slug: string;
 color: string;
 departments: FacultyDepartment[];
}

export const facultiesCatalog: FacultyCategory[] = [
 {
 name: "Faculty of Physical, Numerical & Computational Sciences",
 slug: "physical-computational-sciences",
 color: "#153B27",
 departments: [
 {
 id: "computer-software-technology",
 name: "Department of Computer and Software Technology",
 facultyGroup: "Physical, Numerical & Computational Sciences",
 campus: "Charbagh Main Campus",
 aims: "To provide education and training at all levels to contribute to the national pool of computer scientists who can meet the demands of industry and academia.",
 description: "The Department of Computer and Software Technology offers cutting-edge computing education with fully equipped modern labs, high-speed fiber connectivity, and specialized curriculum aligned with HEC and NCEAC benchmarks.",
 programsOffered: ["BS Computer Science (4 Years)", "BS Software Engineering (4 Years)", "BS Information Technology (4 Years)", "MS Computer Science (2 Years)", "PhD Computer Science"],
 headOfDepartment: "Dr. Niamat Ullah",
  facultyMembers: [
 {  name: "Dr. Niamat Ullah",  designation: "Professor",  qualification: "E-mail: niamat@uswat.edu.pk",  image: "/images/uos/faculty/dr-niamat-ullah-department-of-computer-and-software-technology-1.png" },
 {  name: "Dr. Sana Ullah",  designation: "Professor and Chairman",  qualification: "Postdoc, GYEONGSANG National University South Korea (2019) | Postdoc, ISEP/INESC-TEC, Porto, Portugal (2015) | PhD (Wireless Networks), Inha University, South Korea (2011) | E-mail: sana@uswat.edu.pk",  image: "/images/uos/faculty/dr-sana-ullah-department-of-computer-and-software-technology-1.jpg" },
 {  name: "Dr. Amjad Ali",  designation: "Associate Professor",  qualification: "E-mail: amjad@uswat.edu.pk",  image: "/images/uos/faculty/dr-amjad-ali-department-of-computer-and-software-technology-1.jpg" },
 {  name: "Dr. Kifayat Ullah",  designation: "Assistant Professor",  qualification: "MS Coordinator | E-mail: kifayat@uswat.edu.pk",  image: "/images/uos/faculty/dr-kifayat-ullah-department-of-computer-and-software-technology-1.jpg" },
 {  name: "Dr. Fazal Qudus Khan",  designation: "Assistant Professor",  qualification: "E-mail: fazal.qadus@uswat.edu.pk",  image: "/images/uos/faculty/dr-fazal-qudus-khan-department-of-computer-and-software-technology-1.jpg" },
 {  name: "Mr. Kiramat Rahman",  designation: "Assistant Professor",  qualification: "E-mail: kiramat@uswat.edu.pk",  image: "/images/uos/faculty/mr-kiramat-rahman-department-of-computer-and-software-technology-1.jpg" },
 {  name: "Mr. Fida Hussain",  designation: "Assistant Professor",  qualification: "E-mail: fida@uswat.edu.pk",  image: "/images/uos/faculty/mr-fida-hussain-department-of-computer-and-software-technology-1.jpg" },
 {  name: "Dr. Muzammil Khan",  designation: "Assistant Professor",  qualification: "HEC Approved PhD Supervisor | PhD (Data Science and Text Processing), Preston University Islamabad | E-mail: muzammil@uswat.edu.pk" },
 {  name: "Mr. Umar Ali",  designation: "Lecturer",  qualification: "MS Computer Science (Asian Institute of Technology, Thailand) | E-mail: umarali@uswat.edu.pk",  image: "/images/uos/faculty/mr-umar-ali-department-of-computer-and-software-technology-1.jpg" },
 {  name: "Mr. Naeem Ullah",  designation: "Lecturer",  qualification: "E-mail: naeem@uswat.edu.pk",  image: "/images/uos/faculty/mr-naeem-ullah-department-of-computer-and-software-technology-1.jpg" },
 {  name: "Dr. Usman Ali",  designation: "Lecturer",  qualification: "E-mail: usman@uswat.edu.pk",  image: "/images/uos/faculty/dr-usman-ali-department-of-computer-and-software-technology-1.jpg" },
 {  name: "Mr. Abdul Haq",  designation: "Lecturer",  qualification: "E-mail: abdulhaq@uswat.edu.pk",  image: "/images/uos/faculty/mr-abdul-haq-department-of-computer-and-software-technology-1.png" },
 ],
 contactEmail: "cs@uswat.edu.pk",
 },
 {
 id: "physics",
 name: "Department of Physics",
 facultyGroup: "Physical, Numerical & Computational Sciences",
 campus: "Charbagh Main Campus",
 aims: "To advance fundamental knowledge of the physical universe and prepare researchers in condensed matter, materials science, and optics.",
 description: "Offers rigorous academic training in classical mechanics, quantum theory, electrodynamics, and solid-state physics with dedicated experimental and computational facilities.",
 programsOffered: ["BS Physics (4 Years)", "M.Phil Physics (2 Years)", "Ph.D Physics"],
 headOfDepartment: "Dr. Ihsan Ullah",
 facultyMembers: [
 { name: "Dr. Kefayat Ullah", designation: "Associate Professor/Chairman", qualification: "PhD in Graphene Based Nanomaterials | Department of Advanced Materials Science & Engineering | Hanseo University, South Korea | link | https://scholar.google.com/ | citations?hl=en&user= | bSFoVl4AAAAJ | ResearchGate Link | https://www.researchgate.net/ | profile/Kefayat-Ullah", image: "/images/uos/faculty/dr-kefayat-ullah-department-of-physics-1.jpg" },
 { name: "Dr. Amin Ur Rashid", designation: "Associate Professor", qualification: "PhD in Physics", image: "/images/uos/faculty/dr-amin-ur-rashid-department-of-physics-1.jpg" },
 { name: "Dr. Fazli Hadi", designation: "Professor", qualification: "Associate | PhD in Physics | University of Peshawar", image: "/images/uos/faculty/dr-fazli-hadi-department-of-physics-1.jpg" },
 { name: "Dr. Salah Uddin", designation: "Assistant Professor", qualification: "PhD in Physics | City University of Hong Kong", image: "/images/uos/faculty/dr-salah-uddin-department-of-physics-1.png" },
 { name: "Dr. Rafi ud Din", designation: "Assistant Professor", qualification: "PhD in Physics (Quantum) | Huazhong University of Science and Technology | ResearchGate Link | https://www.researchgate.net/profile/Rafi-Ud-Din", image: "/images/uos/faculty/dr-rafi-ud-din-department-of-physics-1.jpg" }
 ],
 contactEmail: "physics@uswat.edu.pk",
 },
 {
 id: "mathematics-statistics",
 name: "Department of Mathematics and Statistics",
 facultyGroup: "Physical, Numerical & Computational Sciences",
 campus: "Charbagh Main Campus",
 aims: "Developing rigorous numerical intuition, theoretical analysis, and data modeling frameworks for scientific applications.",
 description: "Provides foundation and advanced courses in Pure Mathematics, Applied Mathematics, and Statistical Inference.",
 programsOffered: ["BS Mathematics (4 Years)", "BS Statistics (4 Years)", "M.Phil Mathematics (2 Years)"],
 headOfDepartment: "Dr. Amjad Ali",
 facultyMembers: [
 { name: "Dr. Faiz Muhammad Khan", designation: "", qualification: "Associate Professor & | Chairman | Post Doctorate (Mathematics)", image: "/images/uos/faculty/dr-faiz-muhammad-khan-department-of-mathematics-and-statistics-1.jpg" },
 { name: "Dr. Ghaus ur Rahman", designation: "Associate Professor of Mathematics", qualification: "Post Doctorate (University of Oslo, Norway) | PhD (Mathematics, Abdus Salam School, GCU) | M.Sc. (Mathematics, Gold Medalist)", image: "/images/uos/faculty/dr-ghaus-ur-rahman-department-of-mathematics-and-statistics-1.jpg" },
 { name: "Dr. Amir Khan", designation: "Assistant Professor of Mathematics", image: "/images/uos/faculty/dr-amir-khan-department-of-mathematics-and-statistics-1.jpg" },
 { name: "Dr. Iftikhar Ahmed", designation: "Assistant Professor of Mathematics", image: "/images/uos/faculty/dr-iftikhar-ahmed-department-of-mathematics-and-statistics-1.jpg" },
 { name: "Dr. Gohar Ayub", designation: "", qualification: "Assistant Professor of", image: "/images/uos/faculty/dr-gohar-ayub-department-of-mathematics-and-statistics-1.jpg" },
 { name: "Dr. Amjad Ali", designation: "", qualification: "Gold Medalist | Assistant Professor of | Mathematics", image: "/images/uos/faculty/dr-amjad-ali-department-of-mathematics-and-statistics-1.jpg" },
 { name: "Dr. Mahrukh Anum", designation: "Lecturer in Statistics", image: "/images/uos/faculty/dr-mahrukh-anum-department-of-mathematics-and-statistics-1.jpg" },
 { name: "Dr. Asaf Khan", designation: "", qualification: "Gold Medalist | Lecturer in Mathematics", image: "/images/uos/faculty/dr-asaf-khan-department-of-mathematics-and-statistics-1.jpg" },
 { name: "Mr. Imran Ullah", designation: "Lecturer in Statistics", image: "/images/uos/faculty/mr-imran-ullah-department-of-mathematics-and-statistics-1.jpg" }
 ],
 contactEmail: "math@uswat.edu.pk",
 },
 {
 id: "geology",
 name: "Department of Geology",
 facultyGroup: "Physical, Numerical & Computational Sciences",
 campus: "Charbagh Main Campus",
 aims: "Unlocking geological, mineral, and seismological knowledge of the Hindukush-Himalayan belt.",
 description: "Focuses on structural geology, mineralogy, petrology, hydrogeology, and mud logging for drilling and exploration.",
 programsOffered: ["BS Geology (4 Years)", "M.Phil Geology (2 Years)"],
 headOfDepartment: "Dr. Fazal Rabi",
 contactEmail: "geology@uswat.edu.pk",
 },
 ],
 },
 {
 name: "Faculty of Chemical & Life Sciences",
 slug: "chemical-life-sciences",
 color: "#7F1D1D",
 departments: [
 {
 id: "chemistry",
 name: "Department of Chemistry",
 facultyGroup: "Chemical & Life Sciences",
 campus: "Charbagh Main Campus",
 aims: "Adding to knowledge by discovering new substances and materials at the molecular level, fostering pharmaceutical and industrial chemical research.",
 description: "Features specialized laboratories in Organic, Inorganic, Physical, and Analytical Chemistry, collaborating with national research institutes.",
 programsOffered: ["BS Chemistry (4 Years)", "M.Phil Chemistry (2 Years)", "Ph.D Chemistry"],
 headOfDepartment: "Dr. Najeeb Ur Rehman",
 facultyMembers: [
 { name: "Dr. Najeeb Ur Rehman", designation: "Associate Professor / HoD", image: "/images/departments/department-of-chemistry_0_img.jpeg" },
 { name: "Dr. Fazal Mabood", designation: "Associate Professor", image: "/images/departments/department-of-chemistry_1_img.jpg" },
 { name: "Dr. Muhammad Omer", designation: "Assistant Professor", image: "/images/departments/department-of-chemistry_2_img.jpg" },
 { name: "Dr. Ihsan Ullah", designation: "Assistant Professor", image: "/images/departments/department-of-chemistry_3_img.jpeg" },
 { name: "Dr. Adnan Shahzad", designation: "Assistant Professor", image: "/images/departments/department-of-chemistry_4_img.jpg" },
 ],
 contactEmail: "chemistry@uswat.edu.pk",
 },
 {
 id: "environmental-sciences",
 name: "Department of Environmental Sciences",
 facultyGroup: "Chemical & Life Sciences",
 campus: "Charbagh Main Campus",
 aims: "Leading ecological conservation, climate resilience, and sustainable mountain ecosystem management.",
 description: "Focuses on climate change mitigation, water resource quality, deforestation prevention, and pollution control across northern Pakistan.",
 programsOffered: ["BS Environmental Sciences (4 Years)", "M.Phil Environmental Sciences (2 Years)", "Ph.D Environmental Sciences"],
 headOfDepartment: "Prof. Dr. Muhammad Qasim",
 facultyMembers: [
 { name: "Dr. Muhammad Qasim", designation: "Professor & Chairperson / Pro Vice Chancellor", qualification: "Professor & Chairperson | Pro Vice Chancellor | PhD from the University of Leeds, UK | Post Doc (Hokkaido University Japan)", image: "/images/uos/faculty/dr-muhammad-qasim-department-of-environmental-sciences-1.jpg" },
 { name: "Dr. Javeed Nawab", designation: "Professor", image: "/images/uos/faculty/dr-javeed-nawab-department-of-environmental-sciences-1.png" },
 { name: "Dr. Kifayatullah Khan", designation: "Associate Professor", qualification: "PhD in Environmental Sciences | University of Peshawar", image: "/images/uos/faculty/dr-kifayatullah-khan-department-of-environmental-sciences-1.png" },
 { name: "Dr. Sanaullah", designation: "Assistant Professor", qualification: "MS in Environmental Sciences | (COMSATS University, Abbotabad, Pakistan)", image: "/images/uos/faculty/dr-sanaullah-department-of-environmental-sciences-1.png" },
 { name: "Dr. Anwarzeb Khan", designation: "Assistant Professor", image: "/images/uos/faculty/dr-anwarzeb-khan-department-of-environmental-sciences-1.jpg" },
 { name: "Dr. Wajid Rashid", designation: "Lecturer", qualification: "PhD in Environmental Sciences | (Beijing Normal University, China)", image: "/images/uos/faculty/dr-wajid-rashid-department-of-environmental-sciences-1.png" },
 { name: "Dr. Muhammad Ayaz", designation: "Lecturer", image: "/images/uos/faculty/dr-muhammad-ayaz-department-of-environmental-sciences-1.jpg" },
 { name: "Dr. Khalil Ur Rahman", designation: "Adjunct Faculty", qualification: "Associate Professor | Shandong University, Jinan, China", image: "/images/uos/faculty/dr-khalil-ur-rahman-department-of-environmental-sciences-1.png" }
 ],
 contactEmail: "env@uswat.edu.pk",
 },
 {
 id: "botany",
 name: "Department of Botany",
 facultyGroup: "Chemical & Life Sciences",
 campus: "Charbagh Main Campus",
 aims: "Investigating the rich floral diversity, ethnobotany, and pharmacognosy of Swat Valley.",
 description: "Maintains extensive plant herbaria, tissue culture research facilities, and medicinal plant screening labs.",
 programsOffered: ["BS Botany (4 Years)", "M.Phil Botany (2 Years)", "Ph.D Botany"],
 headOfDepartment: "Dr. Zahid Ullah",
 facultyMembers: [
 { name: "Dr. Hassan Sher", designation: "Professor", qualification: "(SAARC Gold Medalist)", image: "/images/uos/faculty/dr-hassan-sher-department-of-botany-1.jpg" },
 { name: "Dr. Ahmad Ali", designation: "Associate Professor & Director", qualification: ":", image: "/images/uos/faculty/dr-ahmad-ali-department-of-botany-1.jpg" },
 { name: "Dr. Zahid Ullah", designation: "Associate Professor", image: "/images/uos/faculty/dr-zahid-ullah-department-of-botany-1.png" },
 { name: "Dr. Shazia Sakhi", designation: "Associate Professor" },
 { name: "Dr. Junaid Khan", designation: "", qualification: "Assistant Professor", image: "/images/uos/faculty/dr-junaid-khan-department-of-botany-1.jpg" },
 { name: "Dr. Zakia Ahmad", designation: "Assistant Professor" },
 { name: "Dr. Muhammad Adil", designation: "Assistant Professor", image: "/images/uos/faculty/dr-muhammad-adil-department-of-botany-1.jpg" },
 { name: "Dr. Shazia", designation: "Lecturer" },
 { name: "Dr. Shahid Hussain", designation: "Lecturer", image: "/images/uos/faculty/dr-shahid-hussain-department-of-botany-1.jpg" }
 ],
 contactEmail: "botany@uswat.edu.pk",
 },
 {
 id: "agricultural-sciences-forestry",
 name: "Department of Agricultural Sciences and Forestry",
 facultyGroup: "Chemical & Life Sciences",
 campus: "Charbagh Main Campus",
 aims: "Focus on sustainable management and promotion of forest conservation for biological diversity, ecological, recreational, scientific and educational values and quality water production, for the greater good of the people of Pakistan and the world.",
 description: "Established in 2014. Provides quality education with relevance by acquiring highly qualified staff and state-of-the-art equipment and facilities in forestry.",
 programsOffered: ["BS Forestry (4 Years)", "M.Phil. Forestry (2 Years)"],
 headOfDepartment: "",
 facultyMembers: [
 { name: "Dr. Zahid Ullah", designation: "Associate Professor", image: "/images/uos/faculty/dr-zahid-ullah-department-of-agricultural-sciences-and-forestry-1.jpg" },
 { name: "Dr. Naveed Alam", designation: "Assistant Professor", image: "/images/uos/faculty/dr-naveed-alam-department-of-agricultural-sciences-and-forestry-1.jpg" },
 { name: "Dr. Fazal Rabbi", designation: "", qualification: "Assistant Professor", image: "/images/uos/faculty/dr-fazal-rabbi-department-of-agricultural-sciences-and-forestry-1.jpg" },
 { name: "Dr. Bilal Ahmad", designation: "", qualification: "Assistant Professor", image: "/images/uos/faculty/dr-bilal-ahmad-department-of-agricultural-sciences-and-forestry-1.jpg" },
 { name: "Dr. Sher Shah", designation: "", qualification: "Assistant Professor", image: "/images/uos/faculty/dr-sher-shah-department-of-agricultural-sciences-and-forestry-1.jpg" },
 { name: "Mr. Kaleem Mehmood", designation: "Lecturer", image: "/images/uos/faculty/mr-kaleem-mehmood-department-of-agricultural-sciences-and-forestry-1.jpg" },
 { name: "Dr. Sultan Muhammad", designation: "Lecturer", image: "/images/uos/faculty/dr-sultan-muhammad-department-of-agricultural-sciences-and-forestry-1.jpg" },
 { name: "Mr. Hamid-Ur-Rahman", designation: "Lecturer", image: "/images/uos/faculty/mr-hamid-ur-rahman-department-of-agricultural-sciences-and-forestry-1.jpg" }
 ],
 contactEmail: "",
 },
 {
 id: "zoology",
 name: "Department of Zoology",
 facultyGroup: "Chemical & Life Sciences",
 campus: "Charbagh Main Campus",
 aims: "Documenting faunal biodiversity, parasitology, entomology, and aquatic ecosystems of River Swat.",
 description: "Conducts field expeditions, vector-borne disease modeling, and wildlife conservation studies.",
 programsOffered: ["BS Zoology (4 Years)", "M.Phil Zoology (2 Years)", "Ph.D Zoology"],
 headOfDepartment: "Dr. Fazal Maula",
 facultyMembers: [
 { name: "Dr. Akhar Rasool", designation: "", qualification: "In-Charge | Assistant Professor", image: "/images/uos/faculty/dr-akhar-rasool-department-of-zoology-1.png" },
 { name: "Dr. Tanzil Ur Rahman", designation: "", qualification: "Assistant Professor", image: "/images/uos/faculty/dr-tanzil-ur-rahman-department-of-zoology-1.jpg" },
 { name: "Dr. Ghulam Nabi", designation: "", qualification: "Assistant Professor", image: "/images/uos/faculty/dr-ghulam-nabi-department-of-zoology-1.jpg" },
 { name: "Dr. Naseer Ullah", designation: "Lecturer", image: "/images/uos/faculty/dr-naseer-ullah-department-of-zoology-1.jpg" },
 { name: "Ms. Rohi Naz", designation: "Lecturer", qualification: "M.Phil Zoology" },
 { name: "Ms. Shabnam", designation: "Lecturer" },
 { name: "Dr. Muhammad Yousaf", designation: "", qualification: "Assistant Professor (Fixed Pay)", image: "/images/uos/faculty/dr-muhammad-yousaf-department-of-zoology-1.jpg" }
 ],
 contactEmail: "zoology@uswat.edu.pk",
 },
 {
 id: "biotechnology-genetics",
 name: "Department of Biotechnology & Genetics",
 facultyGroup: "Chemical & Life Sciences",
 campus: "Charbagh Main Campus",
 aims: "Harnessing molecular biotechnology, genetic engineering, and forensic biology for health and agricultural development.",
 description: "Equipped with PCR thermocyclers, gel documentation systems, and molecular diagnostics equipment.",
 programsOffered: ["BS Biotechnology (4 Years)", "BS Genetics (4 Years)", "BS Microbiology (4 Years)", "M.Phil Biotechnology (2 Years)"],
 headOfDepartment: "Dr. Akhtar Rasool",
 facultyMembers: [
 { name: "Dr. Muhammad Nazir Ud-Din", designation: "Chairman and Associate Professor", image: "/images/uos/faculty/dr-muhammad-nazir-ud-din-department-of-biotechnology-genetics-forensic-and-micro-1.jpg" },
 { name: "Prof. Dr. Fazal Akbar", designation: "", qualification: "Professor", image: "/images/uos/faculty/prof-dr-fazal-akbar-department-of-biotechnology-genetics-forensic-and-microbiolo-1.jpg" },
 { name: "Prof.Dr. Shahid Ali", designation: "", qualification: "Prof. | Professor", image: "/images/uos/faculty/prof-dr-shahid-ali-department-of-biotechnology-genetics-forensic-and-microbiolog-1.jpg" },
 { name: "Dr. Haji Khan", designation: "", qualification: "Associate Professor", image: "/images/uos/faculty/dr-haji-khan-department-of-biotechnology-genetics-forensic-and-microbiology-1.jpg" },
 { name: "Dr. Muhammad Israr", designation: "", qualification: "Associate Professor", image: "/images/uos/faculty/dr-muhammad-israr-department-of-biotechnology-genetics-forensic-and-microbiology-1.jpg" },
 { name: "Dr. Ali Akbar", designation: "", qualification: "Professor", image: "/images/uos/faculty/dr-ali-akbar-department-of-biotechnology-genetics-forensic-and-microbiology-1.jpg" },
 { name: "Dr. Syed Shujait Ali", designation: "", qualification: "Associate Professor", image: "/images/uos/faculty/dr-syed-shujait-ali-department-of-biotechnology-genetics-forensic-and-microbiolo-1.png" },
 { name: "Dr. Akhar Rasool", designation: "", qualification: "Assistant Professor", image: "/images/uos/faculty/dr-akhar-rasool-department-of-biotechnology-genetics-forensic-and-microbiology-1.png" },
 { name: "Dr. Nisar Ahmad", designation: "", qualification: "Associate Professor", image: "/images/uos/faculty/dr-nisar-ahmad-department-of-biotechnology-genetics-forensic-and-microbiology-1.jpg" },
 { name: "Dr. Zahid Hussain", designation: "", qualification: "Associate Professor", image: "/images/uos/faculty/dr-zahid-hussain-department-of-biotechnology-genetics-forensic-and-microbiology-1.jpg" },
 { name: "Dr. Mohammad Ali", designation: "", qualification: "Associate Professor", image: "/images/uos/faculty/dr-mohammad-ali-department-of-biotechnology-genetics-forensic-and-microbiology-1.jpg" },
 { name: "Dr. Nasib Zaman", designation: "", qualification: "Associate Professor", image: "/images/uos/faculty/dr-nasib-zaman-department-of-biotechnology-genetics-forensic-and-microbiology-1.png" },
 { name: "Dr. Muhammad Rizwan", designation: "", qualification: "Associate Professor (TTS)", image: "/images/uos/faculty/dr-muhammad-rizwan-department-of-biotechnology-genetics-forensic-and-microbiolog-1.jpg" },
 { name: "Dr. Wajid Khan", designation: "", qualification: "Assistant Professor", image: "/images/uos/faculty/dr-wajid-khan-department-of-biotechnology-genetics-forensic-and-microbiology-1.png" },
 { name: "Dr. Muhammad Suleman", designation: "", qualification: "Assistant Professor", image: "/images/uos/faculty/dr-muhammad-suleman-department-of-biotechnology-genetics-forensic-and-microbiolo-1.jpg" },
 { name: "Dr. Zafar Ali", designation: "", qualification: "Assistant Professor", image: "/images/uos/faculty/dr-zafar-ali-department-of-biotechnology-genetics-forensic-and-microbiology-1.jpg" },
 { name: "Dr. Arshad Iqbal", designation: "", qualification: "Assistant Professor of Biotechnology (TTS)", image: "/images/uos/faculty/dr-arshad-iqbal-department-of-biotechnology-genetics-forensic-and-microbiology-1.jpg" },
 { name: "Mr. Ishaq Khan", designation: "", qualification: "Lecturer", image: "/images/uos/faculty/mr-ishaq-khan-department-of-biotechnology-genetics-forensic-and-microbiology-1.png" },
 { name: "Mr. Murad Ali", designation: "", qualification: "Lecturer" },
 { name: "Dr. Sadia Akbar", designation: "", qualification: "Gold Medalist | Lecturer", image: "/images/uos/faculty/dr-sadia-akbar-department-of-biotechnology-genetics-forensic-and-microbiology-1.jpg" },
 { name: "Dr. Murad Rahat", designation: "", qualification: "Assistant Professor (Fixed Pay)", image: "/images/uos/faculty/dr-murad-rahat-department-of-biotechnology-genetics-forensic-and-microbiology-1.jpg" }
 ],
 contactEmail: "biotech@uswat.edu.pk",
 },
 ],
 },
 {
 name: "Faculty of Allied Health Sciences",
 slug: "allied-health-sciences",
 color: "#153B27",
 departments: [
 {
 id: "allied-health-sciences",
 name: "Institute of Allied Health Sciences",
 facultyGroup: "Allied Health Sciences",
 campus: "Charbagh Main Campus",
 aims: "Training world-class rehabilitation, diagnostics, and clinical technologists to meet the critical healthcare needs of northern Pakistan.",
 description: "Equipped with state-of-the-art physiotherapy rehabilitation clinics, hematology laboratories, and clinical training partnerships with Saidu Teaching Hospital.",
 programsOffered: [
 "Doctor of Physical Therapy - DPT (5 Years)",
 "BS Medical Laboratory Technology - MLT (4 Years)",
 "BS Dental Technology (4 Years)",
 "BS Radiology & Imaging Technology (4 Years)",
 ],
 headOfDepartment: "Dr. Muhammad Tariq",
 contactEmail: "healthsciences@uswat.edu.pk",
 },
 ],
 },
 {
 name: "Faculty of Management & Social Sciences",
 slug: "management-social-sciences",
 color: "#B48A3E",
 departments: [
 {
 id: "management-commerce",
 name: "Department of Management & Commerce",
 facultyGroup: "Management & Social Sciences",
 campus: "Charbagh Main Campus",
 aims: "Nurturing executive managers, entrepreneurs, and accountants grounded in ethical commerce and regional economic growth.",
 description: "Accredited business programs focusing on financial analytics, marketing strategy, supply chain management, and entrepreneurship.",
 programsOffered: ["BBA (Hons) (4 Years)", "BS Accounting & Finance (4 Years)", "MBA (2 Years)", "MS Management Sciences (2 Years)"],
 headOfDepartment: "Dr. Tariq Shah",
 facultyMembers: [
 { name: "Dr. Hazrat Bilal", designation: "Director / Professor", qualification: "Director / | Professor | PhD in Management Sciences", image: "/images/uos/faculty/dr-hazrat-bilal-department-of-management-and-commerce-1.jpg" },
 { name: "Dr. Nasir Shaheen", designation: "Associate Professor", qualification: "PhD in Management Sciences", image: "/images/uos/faculty/dr-nasir-shaheen-department-of-management-and-commerce-1.jpg" },
 { name: "Dr. Muhammad Tariq", designation: "Associate Professor", qualification: "PhD in Management Sciences", image: "/images/uos/faculty/dr-muhammad-tariq-department-of-management-and-commerce-1.jpg" },
 { name: "Dr. Lala Rukh", designation: "Associate Professor in Finance", qualification: "PhD in Management Sciences" },
 { name: "Dr. Badshah Hussain", designation: "", qualification: "Assistant Professor | PhD in Management Sciences", image: "/images/uos/faculty/dr-badshah-hussain-department-of-management-and-commerce-1.jpg" },
 { name: "Dr. Jawad Karamat", designation: "Assistant Professor", qualification: "Gold Medalist | Assistant Professor | PhD in Management Sciences", image: "/images/uos/faculty/dr-jawad-karamat-department-of-management-and-commerce-1.jpg" },
 { name: "Dr. Abdul Mateen", designation: "Lecturer in Human Resource Management", qualification: "PhD in Management Sciences", image: "/images/uos/faculty/dr-abdul-mateen-department-of-management-and-commerce-1.jpg" },
 { name: "Dr. Neelam Akbar Marwat", designation: "Lecturer in Marketing" },
 { name: "Mr. Khursheed Ahmad", designation: "Lecturer in Finance", qualification: "PhD in Progress", image: "/images/uos/faculty/mr-khursheed-ahmad-department-of-management-and-commerce-1.jpg" },
 { name: "Dr. Mohammad Sohail", designation: "Lecturer in Finance", image: "/images/uos/faculty/dr-mohammad-sohail-department-of-management-and-commerce-1.jpg" },
 { name: "Dr. Sangeen Khan", designation: "Lecturer in Human Resource", image: "/images/uos/faculty/dr-sangeen-khan-department-of-management-and-commerce-1.jpg" }
 ],
 contactEmail: "management@uswat.edu.pk",
 },
 {
 id: "economics",
 name: "Department of Economics & Development Studies",
 facultyGroup: "Management & Social Sciences",
 campus: "Charbagh Main Campus",
 aims: "Analyzing developmental economics, poverty reduction, fiscal policies, and mountain trade corridors.",
 description: "Pioneering socio-economic surveys and econometric research on northern Pakistan economic integration.",
 programsOffered: ["BS Economics (4 Years)", "BS Development Studies (4 Years)", "M.Phil Economics (2 Years)"],
 headOfDepartment: "Dr. Umar Hayat",
 facultyMembers: [
 { name: "Dr. Anwar Hussain", designation: "Professor and DEAN", qualification: ":", image: "/images/uos/faculty/dr-anwar-hussain-department-of-economics-and-development-studies-1.jpg" },
 { name: "Dr. Umar Hayat", designation: "Professor and Chairman", image: "/images/uos/faculty/dr-umar-hayat-department-of-economics-and-development-studies-1.png" },
 { name: "Dr. Shahid Ali", designation: "Associate Professor", qualification: "", image: "/images/uos/faculty/dr-shahid-ali-department-of-economics-and-development-studies-1.jpg" },
 { name: "Dr. Fazal Rabbi", designation: "Assistant Professor", image: "/images/uos/faculty/dr-fazal-rabbi-department-of-economics-and-development-studies-1.jpg" },
 { name: "Dr. Muhammad Imad Khan", designation: "Lecturer", image: "/images/uos/faculty/dr-muhammad-imad-khan-department-of-economics-and-development-studies-1.jpg" },
 { name: "Mr. Jawad Mohammad", designation: "Lecturer (on study leave)", qualification: "Lecturer | Study Leave", image: "/images/uos/faculty/mr-jawad-mohammad-department-of-economics-and-development-studies-1.jpg" },
 { name: "Mr. Tariq Ziad Khwaja", designation: "Lecturer", image: "/images/uos/faculty/mr-tariq-ziad-khwaja-department-of-economics-and-development-studies-1.webp" },
 { name: "Dr. Naveed Ali", designation: "", qualification: "Gold Medalist | Lecturer" }
 ],
 contactEmail: "economics@uswat.edu.pk",
 },
 {
 id: "tourism-hospitality",
 name: "Institute of Cultural Heritage, Tourism & Hospitality",
 facultyGroup: "Management & Social Sciences",
 campus: "Charbagh Main Campus",
 aims: "Revitalizing Gandhara archaeology, ecotourism, hotel management, and cultural heritage preservation in Swat.",
 description: "Unique institute dedicated to Swat's world-famous heritage sites, international tourist hospitality, and museum curation.",
 programsOffered: ["BS Tourism & Hospitality (4 Years)", "BS Archaeology (4 Years)", "Diploma in Heritage Management (1 Year)"],
 headOfDepartment: "Dr. Sadeeq Akbar",
 facultyMembers: [
 { name: "Dr. Aatif Iqbal", designation: "Assistant Professor & In-charge", qualification: "Gold Medalist | Ph.D in Tourism | School of Business and Economics, Universiti Putra Malaysia", image: "/images/uos/faculty/dr-aatif-iqbal-department-of-tourism-and-hospitality-1.jpg" },
 { name: "Mr. Farhad Nazir", designation: "Lecturer", qualification: "Lecturer | Gold Medalist | M.A in Tourism and Hospitality) | (Hazara University, Mansehra)", image: "/images/uos/faculty/mr-farhad-nazir-department-of-tourism-and-hospitality-1.jpg" }
 ],
 contactEmail: "tourism@uswat.edu.pk",
 },
 {
 id: "education-staff-training",
 name: "Department of Education and Staff Training",
 facultyGroup: "Management & Social Sciences",
 campus: "Charbagh Main Campus",
 aims: "Cater to the needs of prospective school teachers and university faculty through pre-service teacher education programs and training. Produce educational managers, teacher educators and researchers.",
 description: "Established in 2010. Offers B.Ed (4-Year), Associate Degree in Education (2-Year), MPhil Education and PhD in Education.",
 programsOffered: ["B.Ed (Hons) (4 Years)", "ADE (2 Years)", "MPhil Education (2 Years)", "PhD Education"],
 headOfDepartment: "Dr. Nasir Ahmad",
 facultyMembers: [
 { name: "Dr. Nasir Ahmad", designation: "Director / Associate Professor", qualification: "Director | Associate Professor | PhD in Education", image: "/images/uos/faculty/dr-nasir-ahmad-department-of-education-and-staff-training-1.jpg" },
 { name: "Dr. Farooq Nawaz Khan", designation: "Associate Professor", qualification: "PhD in Education", image: "/images/uos/faculty/dr-farooq-nawaz-khan-department-of-education-and-staff-training-1.jpg" },
 { name: "Dr. Sajjad Hussain", designation: "Associate Professor", qualification: "PhD in | Education (Assessment)", image: "/images/uos/faculty/dr-sajjad-hussain-department-of-education-and-staff-training-1.jpg" },
 { name: "Dr. Maryam Imad", designation: "Lecturer", qualification: "PhD in Education" },
 { name: "Dr. Alam Zeb", designation: "Assistant Professor", qualification: "PhD in Education", image: "/images/uos/faculty/dr-alam-zeb-department-of-education-and-staff-training-1.jpg" },
 { name: "Ms. Sadarat", designation: "Lecturer", qualification: "PhD Scholar" }
 ],
 contactEmail: "cest@uswat.edu.pk",
 },
 {
 id: "social-gender-studies",
 name: "Department of Social and Gender Studies",
 facultyGroup: "Management & Social Sciences",
 campus: "Charbagh Main Campus",
 aims: "Multidisciplinary social sciences training; facilitate students academically and professionally; produce socially active and productive citizens.",
 description: "Encompasses multidisciplinary approach from orthodox to heterodox sociological concepts. Offers BS Sociology, BS Criminology, MPhil in Sociology and PhD in Sociology.",
 programsOffered: ["BS Sociology (4 Years)", "BS Criminology (4 Years)", "MPhil Sociology (2 Years)", "PhD Sociology"],
 headOfDepartment: "Dr. Ihsan Ullah Khan",
 facultyMembers: [
 { name: "Dr. Ihsan Ullah Khan", designation: "Assistant Professor in Sociology", qualification: "In-charge | PhD in Sociology (Sociology of Crime) | University of Peshawar", image: "/images/uos/faculty/dr-ihsan-ullah-khan-department-of-social-and-gender-studies-1.jpg" },
 { name: "Dr. Sheraz Ali", designation: "Assistant Professor in Sociology", qualification: "PhD in Sociology, University of Malakand", image: "/images/uos/faculty/dr-sheraz-ali-department-of-social-and-gender-studies-1.jpg" },
 { name: "Dr. Imran", designation: "", qualification: "Gold Medalist | Assistant Professor in Sociology | PhD in Sociology, University of Peshawar", image: "/images/uos/faculty/dr-imran-department-of-social-and-gender-studies-1.jpg" },
 { name: "Dr. Abdullah", designation: "Assistant Professor in Social Work", qualification: "PhD in Social Work, University of Peshawar", image: "/images/uos/faculty/dr-abdullah-department-of-social-and-gender-studies-1.jpg" },
 { name: "Dr. Muhammad Asghar Khan", designation: "", qualification: "Gold Medalist | Assistant Professor | in Sociology | PhD in Sociology, University of Malakand", image: "/images/uos/faculty/dr-muhammad-asghar-khan-department-of-social-and-gender-studies-1.jpg" }
 ],
 contactEmail: "deptsgs@uswat.edu.pk",
 },
 {
 id: "media-communication",
 name: "Department of Media and Communication Studies",
 facultyGroup: "Management & Social Sciences",
 campus: "Charbagh Main Campus",
 aims: "Training investigative journalists, digital media producers, and communications strategists.",
 description: "Operates the university's Campus TV studio, digital editing suites, and community radio initiatives.",
 programsOffered: ["BS Media & Communication (4 Years)", "BS Digital Journalism (4 Years)"],
 headOfDepartment: "Dr. Jamshid Iqbal",
 contactEmail: "media@uswat.edu.pk",
 },
 {
 id: "psychological-studies",
 name: "Department of Psychological Studies",
 facultyGroup: "Management & Social Sciences",
 campus: "Women Campus",
 aims: "Promoting psychological well-being, behavioral science, counseling, and trauma rehabilitation.",
 description: "Operates the University Online Psychology Clinic providing counseling and empirical mental health research at the Women Sub-Campus.",
 programsOffered: ["BS Psychology (4 Years)", "M.Phil Psychology (2 Years)"],
 headOfDepartment: "Dr. Asmat Ali",
 facultyMembers: [
 { name: "Ms.Palwasha Rahim", designation: "", qualification: "Lecturer/In-Charge" },
 { name: "Dr. Faheem Ud Din", designation: "Lecturer", image: "/images/uos/faculty/dr-faheem-ud-din-department-of-psychological-studies-1.jpg" },
 { name: "Ms. Roya Shahhiman Zada", designation: "Lecturer (on study leave)", qualification: "on study Leave | Lecturer | Gold medalist" }
 ],
 contactEmail: "psychology@uswat.edu.pk",
 },
 ],
 },
 {
 name: "Faculty of Languages, Humanities & Law",
 slug: "languages-humanities-law",
 color: "#4B5563",
 departments: [
 {
 id: "law-shariah",
 name: "Department of Law & Shariah",
 facultyGroup: "Languages, Humanities & Law",
 campus: "Charbagh Main Campus",
 aims: "Fostering jurists, advocates, and legal scholars steeped in constitutional law, jurisprudence, and human rights.",
 description: "Recognized by the Pakistan Bar Council, featuring moot courtrooms and clinical legal aid programs.",
 programsOffered: ["LLB (5 Years Integrated)", "LLM (2 Years)"],
 headOfDepartment: "Barrister Farhad Ali",
 facultyMembers: [
 { name: "Mr. Amjad Hilal", designation: "Associate Professor and Chairman", qualification: ":", image: "/images/uos/faculty/mr-amjad-hilal-department-of-law-shari-a-1.png" },
 { name: "Dr. Lutfullah Saqib", designation: "Professor", qualification: "Post Doctorate (Islamic Law) | PhD (Islamic Law and Jurisprudence) | LLM(ICL) LLB(Hons)", image: "/images/uos/faculty/dr-lutfullah-saqib-department-of-law-shari-a-1.png" },
 { name: "Mr. Muhammad Islahuddin", designation: "Assistant Professor", image: "/images/uos/faculty/mr-muhammad-islahuddin-department-of-law-shari-a-1.jpg" },
 { name: "Mr. Qazi Ubaidullah", designation: "", qualification: "Assistant Professor", image: "/images/uos/faculty/mr-qazi-ubaidullah-department-of-law-shari-a-1.png" },
 { name: "Ms. Nazish Inayat", designation: "Lecturer" },
 { name: "Ms. Kalsoom Bibi", designation: "Lecturer" }
 ],
 contactEmail: "law@uswat.edu.pk",
 },
 {
 id: "english-foreign-languages",
 name: "Department of English and Foreign Languages",
 facultyGroup: "Languages, Humanities & Law",
 campus: "Charbagh Main Campus",
 aims: "Cultivating critical inquiry in English literature, applied linguistics, and multilingual translation.",
 description: "Conducts literary forums, drama festivals, and language laboratory training for communicative competence.",
 programsOffered: ["BS English Literature & Linguistics (4 Years)", "M.Phil English (2 Years)"],
 headOfDepartment: "Dr. Nasir Ahmad",
 facultyMembers: [
 { name: "Dr. Syed Hanif Rasool", designation: "Associate Professor & Chairman", image: "/images/uos/faculty/dr-syed-hanif-rasool-department-of-english-and-foreign-languages-1.png" },
 { name: "Dr. Syed Shujaat Ali", designation: "Associate Professor", image: "/images/uos/faculty/dr-syed-shujaat-ali-department-of-english-and-foreign-languages-1.png" },
 { name: "Dr. Imdad Ullah Khan", designation: "", qualification: "Assistant Professor | PhD in Applied Linguistics | University of Auckland, Aotearoa New Zealand", image: "/images/uos/faculty/dr-imdad-ullah-khan-department-of-english-and-foreign-languages-1.png" },
 { name: "Mr. Zakirullah", designation: "", qualification: "Lecturer | M.Phil in English Literature", image: "/images/uos/faculty/mr-zakirullah-department-of-english-and-foreign-languages-1.png" },
 { name: "Mr. Sadiq Hussain", designation: "Lecturer", image: "/images/uos/faculty/mr-sadiq-hussain-department-of-english-and-foreign-languages-1.png" }
 ],
 contactEmail: "english@uswat.edu.pk",
 },
 {
 id: "islamic-arabic-studies",
 name: "Department of Islamic and Arabic Studies",
 facultyGroup: "Languages, Humanities & Law",
 campus: "Charbagh Main Campus",
 aims: "Researching classical Quranic sciences, Hadith literature, Islamic finance, and Arabic linguistics.",
 description: "Promoting interfaith harmony, ethical philosophy, and contemporary Islamic jurisprudence.",
 programsOffered: ["BS Islamic Studies (4 Years)", "M.Phil Islamic Studies (2 Years)", "Ph.D Islamic Studies"],
 headOfDepartment: "Dr. Zia Ur Rehman",
 facultyMembers: [
 { name: "Dr. Muhammad Mushtaq Ahmad", designation: "", qualification: "Associate Professor | Chairman | PhD in Islamic Studies", image: "/images/uos/faculty/dr-muhammad-mushtaq-ahmad-department-of-islamic-and-arabic-studies-1.png" },
 { name: "Dr. Yahya Khan", designation: "", qualification: "Assistant Professor | PhD in Arabic literature", image: "/images/uos/faculty/dr-yahya-khan-department-of-islamic-and-arabic-studies-1.png" },
 { name: "Dr. Javed Khan", designation: "", qualification: "Assistant Professor | PhD in Islamic Studies", image: "/images/uos/faculty/dr-javed-khan-department-of-islamic-and-arabic-studies-1.jpg" },
 { name: "Dr. Muhammad Noman", designation: "", qualification: "Assistant Professor | PhD in Islamic Studies", image: "/images/uos/faculty/dr-muhammad-noman-department-of-islamic-and-arabic-studies-1.png" },
 { name: "Dr. Shafiqa Bushra", designation: "", qualification: "Assistant Professor | PhD in Arabic Literature" },
 { name: "Dr. Zia Ud Din", designation: "", qualification: "Assistant Professor | PhD in Islamic Studies (Seerat)", image: "/images/uos/faculty/dr-zia-ud-din-department-of-islamic-and-arabic-studies-1.jpg" },
 { name: "Dr. Fazle Haq", designation: "Lecturer", qualification: "PhD in Islamic Studies (Seerat)", image: "/images/uos/faculty/dr-fazle-haq-department-of-islamic-and-arabic-studies-1.jpg" }
 ],
 contactEmail: "islamic@uswat.edu.pk",
 },
 {
 id: "pashto-local-languages",
 name: "Department of Pashto and Local Languages",
 facultyGroup: "Languages, Humanities & Law",
 campus: "Charbagh Main Campus",
 aims: "Preserving Pashto folklore, classical poetry, lexicography, and indigenous dialects of the Malakand division.",
 description: "Engages in literary archiving of historical manuscripts and regional language revitalization.",
 programsOffered: ["BS Pashto (4 Years)", "M.Phil Pashto (2 Years)"],
 headOfDepartment: "Dr. Ali Khan",
 facultyMembers: [
 { name: "Dr. Rafi Ullah", designation: "", qualification: "In-charge", image: "/images/uos/faculty/dr-rafi-ullah-department-of-pashto-1.jpg" }
 ],
 contactEmail: "pashto@uswat.edu.pk",
 },
 {
 id: "archaeology",
 name: "Department of Archaeology",
 facultyGroup: "Languages, Humanities & Law",
 campus: "Charbagh Main Campus",
 aims: "Conduct exploration, excavation, conservation and joint research publications with stakeholders, following the HEC New Undergraduate Education Policy. Offers internships, capstone projects, field experiences, museum management training and research paper writing.",
 description: "Formally started academic activities from Fall 2025 in Academic Block-B. Signed MoUs with the Directorate General of Archaeology and Museums, KP, and the Italian Archaeological Mission to Pakistan.",
 programsOffered: ["BS Archaeology (4 Years)"],
 headOfDepartment: "Dr. Zarawar Khan",
 facultyMembers: [
 { name: "Dr. Zarawar Khan", designation: "In-charge", qualification: "Gold Medalist | In-charge | Assistant Professor in Archaeology | PhD in Archaeology", image: "/images/uos/faculty/dr-zarawar-khan-department-of-archaeology-1.jpg" },
 { name: "Mr. Muhammad Waliullah", designation: "Lecturer", qualification: "Lecturer | Gold Medalist", image: "/images/uos/faculty/mr-muhammad-waliullah-department-of-archaeology-1.jpg" }
 ],
 contactEmail: "",
 },
 {
 id: "pakistan-studies",
 name: "Department of Pakistan Studies",
 facultyGroup: "Languages, Humanities & Law",
 campus: "Charbagh Main Campus",
 aims: "Provide excellence in Area Studies, especially Caucasia, Asia and China. Educate, train and produce highly skilled scholars in Pakistan Studies and related areas; promote research and quality education.",
 description: "Newly established multi-disciplinary department. Covers courses from Political Science, International Relations, Geography, History, Law, Arts, Languages, Economics, Sociology and Comparative Religions.",
 programsOffered: ["BS Pakistan Studies (4 Years)", "MS Pakistan Studies (2 Years)"],
 headOfDepartment: "Dr. Sarfaraz Khan",
 facultyMembers: [
 { name: "Dr. Sarfaraz Khan", designation: "Assistant Professor & In-charge", qualification: "PhD in Asian Studies", image: "/images/uos/faculty/dr-sarfaraz-khan-department-of-pakistan-studies-1.jpg" },
 { name: "Mr. Zahid Nasir", designation: "", qualification: "Lecturer", image: "/images/uos/faculty/mr-zahid-nasir-department-of-pakistan-studies-1.jpg" }
 ],
 contactEmail: "",
 },
 {
 id: "urdu",
 name: "Department of Urdu",
 facultyGroup: "Languages, Humanities & Law",
 campus: "Charbagh Main Campus",
 aims: "Cultivate deep appreciation and understanding of Urdu language, literature and culture; equip students with knowledge and skills to engage critically with Urdu literature.",
 description: "Vibrant hub for Urdu studies and scholarship, with distinguished faculty contributing to national and international Urdu studies discourse.",
 programsOffered: ["BS Urdu (4 Years)"],
 headOfDepartment: "",
 facultyMembers: [
 { name: "Dr. Lala Rukh", designation: "Associate Professor in Finance", qualification: "PhD in Management Sciences" }
 ],
 contactEmail: "",
 },
 {
 id: "shangla-subcampus",
 name: "Sub-Campus Shangla (Regional Campus)",
 facultyGroup: "Languages, Humanities & Law",
 campus: "Shangla Campus",
 aims: "Extending higher education access to remote mountain districts of Shangla and surrounding valleys.",
 description: "Offers foundational undergraduate education in computer science, business administration, and English language.",
 programsOffered: ["BS Computer Science (4 Years)", "BBA (4 Years)", "BS English (4 Years)"],
 headOfDepartment: "Dr. Muhammad Shah",
 contactEmail: "shangla@uswat.edu.pk",
 },
 ],
 },
];

export const allDepartments: FacultyDepartment[] = facultiesCatalog.flatMap((f) => f.departments);
