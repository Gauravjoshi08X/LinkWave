export const countries = {
  international: {
    title: 'International',
    countries: {
      'australia': {
        name: 'Australia',
        banner: 'aus.jpeg',
        capital: 'Canberra',
        currency: 'Australian Dollar (AUD)',
        languages: 'English',
        whyStudy: 'Australia is home to 7 of the world\'s top 100 universities, offering a world-class education system with a strong focus on research and innovation. The country provides a multicultural environment with students from over 190 countries, making it one of the most diverse study destinations globally.',
        benefits: [
          'Globally recognized qualifications and degrees',
          'Post-study work rights up to 4 years',
          'Part-time work allowed during studies (up to 48 hours/fortnight)',
          'Safe and welcoming multicultural society',
          'Stunning natural landscapes and high quality of life',
          'Strong economy with excellent job prospects'
        ],
        educationSystem: 'Australia follows the Australian Qualifications Framework (AQF), ensuring standardized quality across all institutions. The system includes Vocational Education and Training (VET), undergraduate, postgraduate, and doctoral programs.',
        topUniversities: [
          { name: 'University of Melbourne', rank: 14, url: 'https://www.unimelb.edu.au' },
          { name: 'Australian National University (ANU)', rank: 30, url: 'https://www.anu.edu.au' },
          { name: 'University of Sydney', rank: 18, url: 'https://www.sydney.edu.au' },
          { name: 'University of Queensland', rank: 40, url: 'https://www.uq.edu.au' },
          { name: 'University of New South Wales (UNSW)', rank: 19, url: 'https://www.unsw.edu.au' }
        ],
        popularCourses: ['Business & Management', 'Engineering', 'IT & Computer Science', 'Healthcare & Nursing', 'Hospitality & Tourism'],
        visaRequirements: 'Student Visa (Subclass 500) requires Confirmation of Enrollment (CoE), Genuine Temporary Entrant (GTE) statement, English proficiency (IELTS 5.5+), financial capacity proof, and Overseas Student Health Cover (OSHC).',
        costOfLiving: 'AUD 21,000 - 25,000 per year',
        tuitionFees: 'AUD 20,000 - 45,000 per year depending on course',
        process: [
          'Choose your course and institution',
          'Prepare and submit your application with required documents',
          'Receive Confirmation of Enrollment (CoE)',
          'Apply for Student Visa (Subclass 500)',
          'Arrange accommodation and health insurance',
          'Prepare for departure with pre-departure briefing'
        ]
      },
      'u-k': {
        name: 'United Kingdom',
        banner: 'uk.jpeg',
        capital: 'London',
        currency: 'Pound Sterling (GBP)',
        languages: 'English',
        whyStudy: 'The UK boasts some of the oldest and most prestigious universities in the world, including Oxford and Cambridge. With a history of academic excellence spanning centuries, UK degrees are globally respected. The country offers shorter course durations compared to other destinations—3 years for undergraduate and 1 year for master\'s programs.',
        benefits: [
          'World-renowned universities with centuries of academic tradition',
          'Shorter course duration saves time and money',
          '2-year post-study work visa (Graduate Route)',
          'Access to world-class research facilities',
          'Rich cultural heritage and diverse student life',
          'NHS healthcare access for international students'
        ],
        educationSystem: 'The UK education system is known for its rigorous quality assurance. Universities are independent and self-governing. Courses emphasize independent study, critical thinking, and practical skills.',
        topUniversities: [
          { name: 'University of Oxford', rank: 1, url: 'https://www.ox.ac.uk' },
          { name: 'University of Cambridge', rank: 2, url: 'https://www.cam.ac.uk' },
          { name: 'Imperial College London', rank: 6, url: 'https://www.imperial.ac.uk' },
          { name: 'UCL (University College London)', rank: 9, url: 'https://www.ucl.ac.uk' },
          { name: 'University of Edinburgh', rank: 22, url: 'https://www.ed.ac.uk' }
        ],
        popularCourses: ['Business & MBA', 'Law', 'Engineering', 'Medicine', 'Arts & Humanities'],
        visaRequirements: 'Student Route Visa requires Confirmation of Acceptance for Studies (CAS), English proficiency (IELTS for UKVI), financial evidence, and Immigration Health Surcharge payment.',
        costOfLiving: 'GBP 12,000 - 15,000 per year (London higher)',
        tuitionFees: 'GBP 11,000 - 38,000 per year',
        process: [
          'Choose university and course',
          'Apply through UCAS or directly',
          'Receive CAS from university',
          'Complete visa application online',
          'Attend biometric appointment',
          'Book accommodation and travel'
        ]
      },
      'canada': {
        name: 'Canada',
        capital: 'Ottawa',
        banner: 'canada.jpeg',
        currency: 'Canadian Dollar (CAD)',
        languages: 'English, French',
        whyStudy: 'Canada is consistently ranked among the best countries for quality of life and education. Known for its welcoming immigration policies, Canada offers clear pathways from study to permanent residency. The education system emphasizes practical learning, research, and innovation with affordable tuition compared to other English-speaking countries.',
        benefits: [
          'Clear pathway to Permanent Residency through Express Entry',
          'Affordable tuition fees compared to US/UK',
          'Post-Graduation Work Permit up to 3 years',
          'Safe and peaceful environment',
          'Bilingual country (English and French)',
          'Co-op and internship opportunities'
        ],
        educationSystem: 'Canadian education is provincially regulated with high standards. Institutions include universities, colleges, and polytechnics offering degrees, diplomas, and certificates.',
        topUniversities: [
          { name: 'University of Toronto', rank: 21, url: 'https://www.utoronto.ca' },
          { name: 'University of British Columbia (UBC)', rank: 34, url: 'https://www.ubc.ca' },
          { name: 'McGill University', rank: 30, url: 'https://www.mcgill.ca' },
          { name: 'University of Alberta', rank: 96, url: 'https://www.ualberta.ca' },
          { name: 'University of Waterloo', rank: 112, url: 'https://uwaterloo.ca' }
        ],
        popularCourses: ['Computer Science & IT', 'Engineering', 'Business', 'Healthcare', 'Environmental Science'],
        visaRequirements: 'Study Permit requires Letter of Acceptance from DLI, proof of funds (CAD 10,000+ for living expenses), medical exam, and police clearance. SDS stream available for faster processing.',
        costOfLiving: 'CAD 12,000 - 15,000 per year',
        tuitionFees: 'CAD 15,000 - 35,000 per year',
        process: [
          'Choose designated learning institution (DLI)',
          'Apply and receive letter of acceptance',
          'Gather financial and supporting documents',
          'Apply for study permit (online or at VAC)',
          'Complete biometrics and medical exam',
          'Receive Port of Entry introduction letter'
        ]
      },
      'new-zealand': {
        name: 'New Zealand',
        banner: 'nz.jpeg',
        capital: 'Wellington',
        currency: 'New Zealand Dollar (NZD)',
        languages: 'English, Māori',
        whyStudy: 'New Zealand offers a unique blend of world-class education and breathtaking natural beauty. All 8 universities rank in the top 3% globally. The country is known for its innovative teaching methods, research excellence, and safe, welcoming environment for international students.',
        benefits: [
          'All 8 universities in global top 3%',
          'Post-study work visa up to 3 years',
          'Pathway to residency',
          'Safe and politically stable country',
          'Work while studying (20 hours/week)',
          'Affordable living cost in many regions'
        ],
        educationSystem: 'New Zealand follows the British-based education model with strong quality assurance by NZQA. Offers a wide range of programs from certificates to doctoral degrees.',
        topUniversities: [
          { name: 'University of Auckland', rank: 68, url: 'https://www.auckland.ac.nz' },
          { name: 'University of Otago', rank: 206, url: 'https://www.otago.ac.nz' },
          { name: 'Victoria University of Wellington', rank: 241, url: 'https://www.wgtn.ac.nz' },
          { name: 'University of Canterbury', rank: 256, url: 'https://www.canterbury.ac.nz' },
          { name: 'Massey University', rank: 239, url: 'https://www.massey.ac.nz' }
        ],
        popularCourses: ['Agriculture & Forestry', 'Engineering', 'Business', 'Tourism & Hospitality', 'IT'],
        visaRequirements: 'Fee Paying Student Visa requires offer of place from approved institution, proof of funds (NZD 15,000/year), medical and travel insurance, and English proficiency.',
        costOfLiving: 'NZD 15,000 - 20,000 per year',
        tuitionFees: 'NZD 22,000 - 35,000 per year',
        process: [
          'Select institution and program',
          'Submit application with documents',
          'Receive offer of place',
          'Apply for student visa online',
          'Arrange accommodation and insurance',
          'Plan travel and orientation'
        ]
      },
      'u-s': {
        name: 'United States',
        capital: 'Washington, D.C.',
        currency: 'US Dollar (USD)',
        banner: 'us.jpeg',
        languages: 'English',
        whyStudy: 'The United States hosts more international students than any other country, with over 4,000 universities and colleges. American institutions lead in research, innovation, and technology. The flexible education system allows students to explore different subjects before declaring a major.',
        benefits: [
          'Largest number of top-ranked universities globally',
          'Flexible education system with diverse course options',
          'Optional Practical Training (OPT) up to 3 years for STEM',
          'Cutting-edge research and technology facilities',
          'Extensive scholarship and funding opportunities',
          'Diverse campus life and cultural experiences'
        ],
        educationSystem: 'The US follows a credit-based system with liberal arts approach. Students can change majors, transfer credits, and customize their education path.',
        topUniversities: [
          { name: 'Harvard University', rank: 1, url: 'https://www.harvard.edu' },
          { name: 'Stanford University', rank: 3, url: 'https://www.stanford.edu' },
          { name: 'Massachusetts Institute of Technology (MIT)', rank: 2, url: 'https://www.mit.edu' },
          { name: 'University of California, Berkeley', rank: 10, url: 'https://www.berkeley.edu' },
          { name: 'Columbia University', rank: 7, url: 'https://www.columbia.edu' }
        ],
        popularCourses: ['Computer Science', 'Business Administration', 'Engineering', 'Medicine', 'Social Sciences'],
        visaRequirements: 'F-1 Student Visa requires I-20 form from SEVP-approved school, SEVIS fee payment, DS-160 form, visa interview, proof of financial support, and English proficiency.',
        costOfLiving: 'USD 12,000 - 18,000 per year',
        tuitionFees: 'USD 25,000 - 55,000 per year',
        process: [
          'Research and shortlist universities',
          'Take standardized tests (SAT/GRE/GMAT/TOEFL)',
          'Submit applications with essays and recommendations',
          'Receive I-20 from accepted university',
          'Pay SEVIS fee and complete DS-160',
          'Attend visa interview at US Embassy'
        ]
      }
    }
  }
};


export function getAllCountries() {
  const all = {};
  Object.values(countries).forEach(continent => {
    Object.entries(continent.countries).forEach(([slug, data]) => {
      all[slug] = { ...data, continent: continent.title };
    });
  });
  return all;
}

export function getCountryBySlug(slug) {
  for (const continent of Object.values(countries)) {
    if (continent.countries[slug]) {
      return { 
        ...continent.countries[slug], 
        continent: continent.title,
        banner: continent.countries[slug].banner || '/images/banners/placeholder.jpg'
      };
    }
  }
  return null;
}

export function getAllCountrySlugs() {
  const slugs = [];
  Object.values(countries).forEach(continent => {
    slugs.push(...Object.keys(continent.countries));
  });
  return slugs;
}