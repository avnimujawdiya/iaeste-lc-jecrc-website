// =====================================================================
//  ALL CONTENT LIVES HERE.
//  Source: "Beyond Borders" IAESTE LC JECRC brochure.
// =====================================================================

export const OFFICIAL_SITE = "https://www.iaestelcjecrc.com";

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/#about" },
  { label: "Opportunities", href: OFFICIAL_SITE }, // TODO: exact official URL
  { label: "Departments", to: "/departments" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/#contact" },
];

export const LOGIN_URL = OFFICIAL_SITE; // TODO: official login URL
export const JOIN_URL = OFFICIAL_SITE;  // TODO: official join / membership URL

export const features = [
  { icon: "Globe", title: "Global Exposure", text: "Work alongside people from different countries and see how your field operates worldwide." },
  { icon: "Briefcase", title: "International Internships", text: "Paid, course-related STEM internships abroad matched to your field of study." },
  { icon: "GraduationCap", title: "Professional Development", text: "Build teamwork, problem-solving and adaptability in a global context." },
  { icon: "Languages", title: "Cultural Exchange", text: "Immerse yourself in a new culture and build lifelong friendships." },
];

// Brochure: "we have hosted 109 Incoming interns ... and 78 of our students
// have stepped into the global hemisphere". Total Exchanges = 109 + 78.
export const stats = [
  { label: "Total Incoming Interns", value: 109 },
  { label: "Total Outgoing Interns", value: 78 },
  { label: "Total Exchanges", value: 187 },
  { label: "Departments", value: 7 },
];

export const departments = [
  {
    id: "human-resources-alumni",
    icon: "Users",
    name: "Human Resources and Alumni",
    short: "Looks after human resource management and keeps the work across teams running smoothly.",
    responsibilities: ["Human resource management", "Smooth working across all teams", "Alumni connection"],
    more: "The Human Resources and Alumni Department looks after human resource management and ensures that all the work within the team takes place smoothly.",
  },
  {
    id: "marketing",
    icon: "Megaphone",
    name: "Marketing",
    short: "Takes care of all promotion and runs the social platforms as the face of IAESTE.",
    responsibilities: ["Promotion of the initiative", "Handling all social platforms", "Being the face of IAESTE"],
    more: "The Marketing Department takes care of all the promotion of the initiative and handles all its social platforms by being the face of IAESTE.",
  },
  {
    id: "incoming-exchange",
    icon: "PlaneLanding",
    name: "Incoming Exchange",
    short: "Manages documentation and the affairs of international interns hosted at IAESTE.",
    responsibilities: ["Documentation for incoming interns", "Smooth and convenient stay", "Representing IAESTE LC JECRC to interns"],
    more: "The Incoming Exchange Department manages the documentation process and the affairs related to the international interns hosted at IAESTE, ensuring they have a smooth and convenient stay. They represent IAESTE LC JECRC in front of the international interns, being the face of IAESTE.",
  },
  {
    id: "outgoing-exchange",
    icon: "PlaneTakeoff",
    name: "Outgoing Exchange",
    short: "Helps outgoing candidates prepare nomination packets and apply for internships abroad.",
    responsibilities: ["Nomination packet preparation", "Guiding the application procedure", "Following the exchange process"],
    more: "The Outgoing Exchange Department helps the outgoing candidates prepare the nomination packets and the procedure for applying for an internship.",
  },
  {
    id: "administration",
    icon: "ClipboardList",
    name: "Administration",
    short: "Generates internship offers from schools within JECRC University and selects candidates.",
    responsibilities: ["Generating offers from JECRC schools", "Selecting deserving candidates", "Supporting international internships"],
    more: "The Administration Department plays a crucial role in generating offers from various schools within JECRC University and selecting deserving candidates for international internships.",
  },
  {
    id: "design",
    icon: "Palette",
    name: "Design",
    short: "Creates the visuals that present IAESTE LC JECRC to members and social media followers.",
    responsibilities: ["Visuals for the committee", "Social media creatives", "Visual presentation of IAESTE LC JECRC"],
    more: "The Design Department provides the committee with visuals that enhance the presentation of IAESTE LC JECRC to members and followers on social media.",
  },
  {
    id: "corporate-relations",
    icon: "Handshake",
    name: "Corporate Relations",
    short: "The link between students and the corporate world for hands-on experience.",
    responsibilities: ["Connecting students with the corporate world", "Hands-on experience", "Preparing students for global careers"],
    more: "The Corporate Relations Department is an important link that connects students with the corporate world. It helps provide hands-on experience that helps students enhance and prepare better for global careers.",
  },
];

// Testimonials: from the brochure's Internship Success Stories.
export const testimonials = [
  {
    name: "Anshika Tejwani",
    country: "Oman",
    type: "Outgoing",
    short: "My technical internship in Oman was an enriching experience. This journey helped me grow both personally and professionally.",
    full: "My technical internship in Oman was an enriching experience. The Omantel team helped me overcome cultural and language differences with their support. At Dhofar University, I felt at home, thanks to the warm hospitality. This journey helped me grow both personally and professionally.",
    photo: "",
  },
  {
    name: "Emna",
    country: "Tunisia",
    type: "Incoming",
    short: "My time at JECRC University, Jaipur, was truly unforgettable. From the vibrant culture to hands-on technical learning, every moment was enriching.",
    full: "My time at JECRC University, Jaipur, was truly unforgettable. From the vibrant culture to hands-on technical learning, every moment was enriching. My supervisor guided me through impactful projects, and the friendships I built made me feel at home. IAESTE LC JECRC made my stay rewarding, and I look forward to returning to my second home.",
    photo: "",
  },
  {
    name: "Doaa",
    country: "Palestine",
    type: "Incoming",
    short: "My two month internship at JECRC University was a life-changing experience.",
    full: "My two month internship at JECRC University was a life-changing experience. I explored bamboo as a sustainable building material in civil engineering while immersing myself in India's rich culture. The warmth and kindness of the people made me feel at home, and I built strong friendships that I will always cherish. I am grateful to JECRC University and IAESTE for this incredible opportunity.",
    photo: "",
  },
];

export const journey = [
  { title: "Discover Opportunities", text: "Learn what IAESTE offers." },
  { title: "Become a Member", text: "Join the LC and meet the team." },
  { title: "Explore Internships", text: "Browse offers that fit your field." },
  { title: "Experience International Exposure", text: "Work and live abroad." },
  { title: "Share Your Journey", text: "Inspire the next student." },
];

// Based on the brochure's department roles and exchange process.
export const workflow = [
  { dept: "Administration and Corporate Relations", text: "Generate offers from JECRC schools and connect students with the corporate world." },
  { dept: "Marketing and Design", text: "Promote IAESTE and create the visuals that reach members and social media followers." },
  { dept: "Outgoing Exchange", text: "Helps selected candidates prepare nomination packets and apply for internships abroad." },
  { dept: "Incoming Exchange", text: "Handles documentation and looks after international interns hosted at IAESTE." },
  { dept: "Human Resources and Alumni", text: "Looks after the people and makes sure the work across teams runs smoothly." },
];

export const contact = {
  email: "support@iaestelcjecrc.com",
  address: "3rd Floor, Nyay Bhawan (Science Block), JECRC University, Jaipur, Rajasthan-303905",
};

// Brochure shows the handle @iaestelcjecrc. Add LinkedIn / Facebook links here
// only after you confirm the official URLs.
export const socials = [
  { icon: "Instagram", label: "Instagram", href: "https://www.instagram.com/iaestelcjecrc/" },
];

// Gallery photos extracted from the brochure.
// Please check each caption against the brochure before submitting.
export const galleryFilters = ["All", "Team", "Culture", "Community", "Events"];

export const galleryPhotos = [
  { src: "/gallery/team.jpg", title: "Team IAESTE LC JECRC", category: "Team" },
  { src: "/gallery/national-conference.jpg", title: "National Conference of IAESTE India", category: "Team" },
  { src: "/gallery/cultural-celebration.jpg", title: "Interns celebrating Indian culture", category: "Culture" },
  { src: "/gallery/exploring-jaipur.jpg", title: "Exploring Jaipur", category: "Culture" },
  { src: "/gallery/aatithya-1.jpg", title: "IAESTE Aatithya", category: "Culture" },
  { src: "/gallery/aatithya-2.jpg", title: "IAESTE Aatithya", category: "Culture" },
  { src: "/gallery/aatithya-3.jpg", title: "IAESTE Aatithya", category: "Culture" },
  { src: "/gallery/teej.jpg", title: "Teej Festival procession", category: "Culture" },
  { src: "/gallery/delhi-trip.jpg", title: "Trip to Agra and Delhi", category: "Culture" },
  { src: "/gallery/museum-visit.jpg", title: "Interns on a cultural outing", category: "Culture" },
  { src: "/gallery/plantation-1.jpg", title: "IAESTE Green Exchange", category: "Community" },
  { src: "/gallery/plantation-2.jpg", title: "IAESTE Green Exchange", category: "Community" },
  { src: "/gallery/yoga.jpg", title: "Global Minds, Peaceful Hearts", category: "Community" },
  { src: "/gallery/group-event.jpg", title: "IAESTE LC JECRC gathering", category: "Events" },
  { src: "/gallery/iaeste-letters-1.jpg", title: "IAESTE LC JECRC", category: "Events" },
  { src: "/gallery/iaeste-letters-2.jpg", title: "IAESTE LC JECRC", category: "Events" },
  { src: "/gallery/stall-1.jpg", title: "IAESTE stall", category: "Events" },
  { src: "/gallery/stall-2.jpg", title: "IAESTE stall", category: "Events" },
];