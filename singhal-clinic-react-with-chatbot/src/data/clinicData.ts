export interface ServiceItem {
  id: string;
  name: string;
  badge: string;
  shortDescription: string;
  details: string[];
  iconName: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  reviewText: string;
  aspects: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export const CLINIC_INFO = {
  name: "Singhal Clinic",
  doctor: "Dr Amit Singhal",
  tagline: "Quality Care. Clear Guidance. Easy Access.",
  introduction: "Singhal Clinic is a modern neighbourhood clinic in Rohini, Delhi, designed to make everyday healthcare access simple, clear, and convenient.",
  phone: "078270 26512",
  phoneRaw: "07827026512",
  whatsappNumber: "917827026512",
  closingTime: "Closes 8:30 pm",
  hours: "Monday – Sunday: Morning & Evening Consultations (Closes 8:30 pm)",
  address: "41,GF, Park Plaza Market, CSC-6, near Metro Pillar No. 400, Rajapur, Pocket 6, Sector 9, Rohini, Delhi, 110085",
  shortAddress: "Park Plaza Market, Sector 9, Rohini, Delhi",
  landmarks: "Near Metro Pillar No. 400, Park Plaza Market, CSC-6",
  googleRating: "5.0",
  googleReviewsCount: "2,590",
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.7289012345!2d77.1234!3d28.7123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d018678901234%3A0x1234567890abcdef!2sSector%209%2C%20Rohini%2C%20Delhi%2C%20110085!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  googleMapsDirectionsUrl: "https://maps.google.com/?q=41+GF+Park+Plaza+Market+CSC-6+near+Metro+Pillar+No+400+Sector+9+Rohini+Delhi+110085"
};

export const SERVICES: ServiceItem[] = [
  {
    id: "ecg",
    name: "ECG",
    badge: "In-Clinic Diagnostic",
    shortDescription: "In-clinic 12-lead Electrocardiogram recording for heart rhythm and cardiac evaluation.",
    details: [
      "Immediate on-site ECG recording",
      "Pristine diagnostic environment",
      "Direct doctor review and evaluation",
      "Printed test record provided"
    ],
    iconName: "Activity"
  },
  {
    id: "vaccination",
    name: "Vaccination",
    badge: "Preventive Care",
    shortDescription: "Routine, seasonal, and preventive immunizations administered under strict cold-chain standards.",
    details: [
      "Cold-chain stored vaccines",
      "Routine adult & pediatric immunization",
      "Pre-vaccination health guidance",
      "Clean & hygienic administration"
    ],
    iconName: "ShieldCheck"
  },
  {
    id: "nebulization",
    name: "Nebulization",
    badge: "Respiratory Support",
    shortDescription: "In-clinic nebulizer administration for respiratory relief and airway clearance support.",
    details: [
      "Sterile single-use accessories",
      "Calm & comfortable posture setting",
      "Continuous monitoring during therapy",
      "Clear post-nebulization guidance"
    ],
    iconName: "Wind"
  },
  {
    id: "blood-sample",
    name: "Blood Sample Collection",
    badge: "Diagnostic Collection",
    shortDescription: "Hygienic phlebotomy and blood sample collection for routine and diagnostic laboratory panels.",
    details: [
      "Gentle phlebotomy technique",
      "Sterile single-use vacutainer equipment",
      "Organized sample labeling & processing",
      "Comfortable sample draw station"
    ],
    iconName: "Droplets"
  },
  {
    id: "radiology",
    name: "Radiology",
    badge: "Diagnostic Guidance",
    shortDescription: "Clinical advice and structured referral coordination for necessary radiology and imaging scans.",
    details: [
      "Clinical need evaluation for scans",
      "Guidance on specific radiology protocols",
      "Clear explanation of radiology findings",
      "Seamless diagnostic pathway coordination"
    ],
    iconName: "Scan"
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Praveen Sharma",
    location: "Rohini Sector 9, Delhi",
    rating: 5,
    date: "Verified Google Review",
    reviewText: "Dr Amit Singhal gives ample time to listen to all health concerns. He explains everything in very clear and simple language without making you anxious. The clinic is spotless, calm, and located conveniently near Metro Pillar 400.",
    aspects: ["Attentive Listening", "Clear Guidance", "Hygienic Environment"]
  },
  {
    id: "rev-2",
    author: "Sunita Gupta",
    location: "Rohini Sector 13, Delhi",
    rating: 5,
    date: "Verified Google Review",
    reviewText: "Had a very seamless experience for blood sample collection and ECG. Everything was handled professionally with complete cleanliness. No unnecessary waiting, and Dr. Singhal's guidance was extremely clear.",
    aspects: ["Fast Sample Draw", "Punctual Care", "Clear Explanation"]
  },
  {
    id: "rev-3",
    author: "Rajesh Kumar",
    location: "Rajapur, Rohini, Delhi",
    rating: 5,
    date: "Verified Google Review",
    reviewText: "Singhal Clinic is truly a reliable neighbourhood clinic in Park Plaza Market. Easy to reach, polite staff, and Dr Amit Singhal provides honest, practical advice. Highly recommended for family healthcare in Rohini.",
    aspects: ["Easy Location Access", "Polite Staff", "High Trust"]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Dr. Amit Singhal - Consultation Desk",
    category: "Consultation Environment",
    imageUrl: "/images/doctor-hero.jpg",
    description: "Dignified, professional consultation space designed for patient comfort and focused listening."
  },
  {
    id: "gal-2",
    title: "Reception & Waiting Lounge",
    category: "Clinic Facility",
    imageUrl: "/images/clinic-reception.jpg",
    description: "Quiet, comfortable, and immaculate waiting lounge with warm indirect lighting and serene ambience."
  },
  {
    id: "gal-3",
    title: "Doctor - Patient Guidance",
    category: "Care & Guidance",
    imageUrl: "/images/doctor-consulting.jpg",
    description: "Clear and compassionate medical communication ensuring patients understand every step of their health journey."
  },
  {
    id: "gal-4",
    title: "Consultation & Diagnostics Room",
    category: "Consultation Environment",
    imageUrl: "/images/consultation-room.jpg",
    description: "Clean consultation setup equipped with modern diagnostic tools and patient examination space."
  },
  {
    id: "gal-5",
    title: "In-Clinic ECG Station",
    category: "Medical Diagnostics",
    imageUrl: "/images/ecg-equipment.jpg",
    description: "Dedicated 12-lead ECG equipment station maintained under pristine hygiene standards."
  },
  {
    id: "gal-6",
    title: "Sterile Sample Collection Counter",
    category: "Phlebotomy & Lab",
    imageUrl: "/images/sample-collection.jpg",
    description: "Clean phlebotomy collection counter organized with sterile vacutainers and single-use supplies."
  }
];

export const FAQS = [
  {
    q: "Where is Singhal Clinic located in Rohini?",
    a: "Singhal Clinic is located at 41, GF, Park Plaza Market, CSC-6, near Metro Pillar No. 400, Rajapur, Pocket 6, Sector 9, Rohini, Delhi, 110085. It is easily reachable from Metro Pillar 400 and Sector 9 Metro Station."
  },
  {
    q: "What are the clinic timings?",
    a: "Singhal Clinic is open daily and closes at 8:30 pm. You can visit during morning and evening consultation hours."
  },
  {
    q: "Do I need a prior appointment for ECG or Blood Sample Collection?",
    a: "While walk-in visits are accommodated during clinic hours, requesting a preferred appointment slot helps ensure minimum waiting time for ECG, blood sample collection, or consultation."
  },
  {
    q: "How can I contact Dr Amit Singhal or the clinic?",
    a: "You can call the clinic directly at 078270 26512 or send a message via WhatsApp for appointment requests and visit directions."
  }
];
