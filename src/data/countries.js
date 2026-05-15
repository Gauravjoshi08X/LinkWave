// Working university campus images from Unsplash
function getUniImage(name) {
  const images = {
    'Harvard University': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpKtac-bnj1GJCgrGAmr2nPe8GeNIft6ZgsA&s',
    'Stanford University': 'https://images.shiksha.com/mediadata/images/1533535408phpRuopAS.jpeg',
    'Massachusetts Institute of Technology (MIT)': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdM5ksmAFMHhM9XaNNnqDfxCFxFb3LfBXLjA&s',
    'University of California, Berkeley': 'https://www.tclf.org/sites/default/files/thumbnails/image/CA_Berkeley_UniversityOfCaliforniaAtBerkeley_byCharlieNguyen-Flickr_2008_001_Sig.jpg',
    'Columbia University': 'https://www.appily.com/sites/default/files/styles/max_1200/public/images/hero/college/190150_hero.jpg?itok=xJZlqHGh',
    'University of Oxford': 'https://accommodationforstudents.com/cdn-cgi/image/f=auto,q=85,w=1200/https://images.accommodationforstudents.com/website/university-guides/gb/university-of-oxford/uni.jpg',
    'University of Cambridge': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRekVTkSDef8mA9TJ685PoaFyh6pWOPg20vvA&s',
    'Imperial College London': 'https://archglobals.com/wp-content/uploads/2024/03/Imperial-venues.jpg',
    'UCL (University College London)': 'https://www.russellgroup.ac.uk/sites/default/files/2025-01/UCLs%20Summer%20Celebration-153%20%281%29.jpg',
    'University of Edinburgh': 'https://accommodationforstudents.com/cdn-cgi/image/f=auto,q=85,w=960/https://images.accommodationforstudents.com/website/university-guides/gb/university-of-edinburgh/uni.jpg',
    'University of Toronto': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSprR09-3imgHb8Urp1KE4QUfb_-sEHYPAwRA&s',
    'University of British Columbia (UBC)': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmAY9jhbjNVLv3o3BaLFev2exFQDgq8taRRA&s',
    'McGill University': 'https://historicplacesdays.ca/wp-content/uploads/2023/07/R-95_kindlephoto-105116543.jpg',
    'University of Alberta': 'https://images.shiksha.com/mediadata/images/1533646004phpFUNLK4.jpeg',
    'University of Waterloo': 'https://www.applyboard.com/_next/image?url=https%3A%2F%2Fphotos.applyboard.com%2Fschool_photos%2F000%2F014%2F138%2Fphotos%2Foptimized%2FUniversity-of-Waterloo-Campus-Aerial-July2020.webp%3F1659723993&w=3840&q=75',
    'University of Melbourne': 'https://cdn.britannica.com/96/130496-050-1443F0BC/Main-Building-University-of-Melbourne-Ormond-College.jpg',
    'Australian National University (ANU)': 'https://www.applyboard.com/wp-content/uploads/2021/11/australian-national-university.webp',
    'University of Sydney': 'https://images.shiksha.com/mediadata/images/1515481785phpZsgL9D.png',
    'University of Queensland': 'https://www.avanse.com/blogs/images/st-louis-missouri-08222022-brookings-hall-danforth-campus-washington-university-st-louis_1048944-21621914.jpeg',
    'University of New South Wales (UNSW)': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkco-i79714teplZ6LtXOqp1ZHVopMelIL3w&s',
    'University of Auckland': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCsUUvDzRsx7XdBmvInJeoJiKZlGC7UwnLng&s',
    'University of Otago': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVudkkjGlw780BI_8AGRxvi8XXOCO0eYdrwA&s',
    'Victoria University of Wellington': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCwfn9NMRpio52mkkgCvlcxsYAhTjvO9WwiA&s',
    'University of Canterbury': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCKzZjKcVMrR_WE3LJVgDFo2WTIJtqx77UKg&s',
    'Massey University': 'https://images.shiksha.com/mediadata/images/1535363251phpAsBq5s.png',
  };
  return images[name] || null;
}

export const countries = {
  international: {
    title: 'International',
    countries: {
      'australia': {
        name: 'Australia',
        flag: '🇦🇺',
        banner: '/LinkWave/aus.jpeg',
        capital: 'Canberra',
        currency: 'Australian Dollar (AUD)',
        languages: 'English',
        whyStudy: 'Australia is home to 7 of the world\'s top 100 universities, offering a world-class education system with a strong focus on research and innovation. The country provides a multicultural environment with students from over 190 countries.',
        benefits: [
          'Globally recognized qualifications and degrees',
          'Post-study work rights up to 4 years',
          'Part-time work allowed during studies',
          'Safe and welcoming multicultural society',
          'Stunning natural landscapes and high quality of life',
          'Strong economy with excellent job prospects'
        ],
        educationSystem: 'Australia follows the Australian Qualifications Framework (AQF), ensuring standardized quality across all institutions. The system includes Vocational Education and Training (VET), undergraduate, postgraduate, and doctoral programs.',
        topUniversities: [
          { name: 'University of Melbourne', rank: 14, url: 'https://www.unimelb.edu.au', image: getUniImage('University of Melbourne') },
          { name: 'Australian National University (ANU)', rank: 30, url: 'https://www.anu.edu.au', image: getUniImage('Australian National University (ANU)') },
          { name: 'University of Sydney', rank: 18, url: 'https://www.sydney.edu.au', image: getUniImage('University of Sydney') },
          { name: 'University of Queensland', rank: 40, url: 'https://www.uq.edu.au', image: getUniImage('University of Queensland') },
          { name: 'University of New South Wales (UNSW)', rank: 19, url: 'https://www.unsw.edu.au', image: getUniImage('University of New South Wales (UNSW)') }
        ],
        popularCourses: ['Business & Management', 'Engineering', 'IT & Computer Science', 'Healthcare & Nursing', 'Hospitality & Tourism'],
        visaRequirements: 'Student Visa (Subclass 500) requires Confirmation of Enrollment (CoE), Genuine Temporary Entrant (GTE) statement, English proficiency (IELTS 5.5+), financial capacity proof, and Overseas Student Health Cover (OSHC).',
        costOfLiving: 'AUD 21,000 - 25,000 per year',
        tuitionFees: 'AUD 20,000 - 45,000 per year depending on course',
        process: ['Choose your course and institution', 'Prepare and submit your application', 'Receive Confirmation of Enrollment (CoE)', 'Apply for Student Visa (Subclass 500)', 'Arrange accommodation and health insurance', 'Prepare for departure']
      },
      'u-k': {
        name: 'United Kingdom',
        flag: '🇬🇧',
        banner: '/LinkWave/uk.jpeg',
        capital: 'London',
        currency: 'Pound Sterling (GBP)',
        languages: 'English',
        whyStudy: 'The UK boasts some of the oldest and most prestigious universities in the world, including Oxford and Cambridge. UK degrees are globally respected with shorter course durations—3 years for undergraduate and 1 year for master\'s programs.',
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
          { name: 'University of Oxford', rank: 1, url: 'https://www.ox.ac.uk', image: getUniImage('University of Oxford') },
          { name: 'University of Cambridge', rank: 2, url: 'https://www.cam.ac.uk', image: getUniImage('University of Cambridge') },
          { name: 'Imperial College London', rank: 6, url: 'https://www.imperial.ac.uk', image: getUniImage('Imperial College London') },
          { name: 'UCL (University College London)', rank: 9, url: 'https://www.ucl.ac.uk', image: getUniImage('UCL (University College London)') },
          { name: 'University of Edinburgh', rank: 22, url: 'https://www.ed.ac.uk', image: getUniImage('University of Edinburgh') }
        ],
        popularCourses: ['Business & MBA', 'Law', 'Engineering', 'Medicine', 'Arts & Humanities'],
        visaRequirements: 'Student Route Visa requires Confirmation of Acceptance for Studies (CAS), English proficiency (IELTS for UKVI), financial evidence, and Immigration Health Surcharge payment.',
        costOfLiving: 'GBP 12,000 - 15,000 per year (London higher)',
        tuitionFees: 'GBP 11,000 - 38,000 per year',
        process: ['Choose university and course', 'Apply through UCAS or directly', 'Receive CAS from university', 'Complete visa application online', 'Attend biometric appointment', 'Book accommodation and travel']
      },
      'canada': {
        name: 'Canada',
        flag: '🇨🇦',
        capital: 'Ottawa',
        banner: '/LinkWave/canada.jpeg',
        currency: 'Canadian Dollar (CAD)',
        languages: 'English, French',
        whyStudy: 'Canada is consistently ranked among the best countries for quality of life and education. Known for welcoming immigration policies, Canada offers clear pathways from study to permanent residency.',
        benefits: [
          'Clear pathway to Permanent Residency',
          'Affordable tuition fees compared to US/UK',
          'Post-Graduation Work Permit up to 3 years',
          'Safe and peaceful environment',
          'Bilingual country (English and French)',
          'Co-op and internship opportunities'
        ],
        educationSystem: 'Canadian education is provincially regulated with high standards. Institutions include universities, colleges, and polytechnics offering degrees, diplomas, and certificates.',
        topUniversities: [
          { name: 'University of Toronto', rank: 21, url: 'https://www.utoronto.ca', image: getUniImage('University of Toronto') },
          { name: 'University of British Columbia (UBC)', rank: 34, url: 'https://www.ubc.ca', image: getUniImage('University of British Columbia (UBC)') },
          { name: 'McGill University', rank: 30, url: 'https://www.mcgill.ca', image: getUniImage('McGill University') },
          { name: 'University of Alberta', rank: 96, url: 'https://www.ualberta.ca', image: getUniImage('University of Alberta') },
          { name: 'University of Waterloo', rank: 112, url: 'https://uwaterloo.ca', image: getUniImage('University of Waterloo') }
        ],
        popularCourses: ['Computer Science & IT', 'Engineering', 'Business', 'Healthcare', 'Environmental Science'],
        visaRequirements: 'Study Permit requires Letter of Acceptance from DLI, proof of funds (CAD 10,000+), medical exam, and police clearance. SDS stream available for faster processing.',
        costOfLiving: 'CAD 12,000 - 15,000 per year',
        tuitionFees: 'CAD 15,000 - 35,000 per year',
        process: ['Choose designated learning institution (DLI)', 'Apply and receive letter of acceptance', 'Gather financial and supporting documents', 'Apply for study permit', 'Complete biometrics and medical exam', 'Receive Port of Entry letter']
      },
      'new-zealand': {
        name: 'New Zealand',
        flag: '🇳🇿',
        capital: 'Wellington',
        currency: 'New Zealand Dollar (NZD)',
        banner: '/LinkWave/nz.jpeg',
        languages: 'English, Māori',
        whyStudy: 'New Zealand offers a unique blend of world-class education and breathtaking natural beauty. All 8 universities rank in the top 3% globally with innovative teaching methods and a safe environment.',
        benefits: [
          'All 8 universities in global top 3%',
          'Post-study work visa up to 3 years',
          'Pathway to residency',
          'Safe and politically stable country',
          'Work while studying (20 hours/week)',
          'Affordable living cost in many regions'
        ],
        educationSystem: 'New Zealand follows the British-based education model with strong quality assurance by NZQA. Offers programs from certificates to doctoral degrees.',
        topUniversities: [
          { name: 'University of Auckland', rank: 68, url: 'https://www.auckland.ac.nz', image: getUniImage('University of Auckland') },
          { name: 'University of Otago', rank: 206, url: 'https://www.otago.ac.nz', image: getUniImage('University of Otago') },
          { name: 'Victoria University of Wellington', rank: 241, url: 'https://www.wgtn.ac.nz', image: getUniImage('Victoria University of Wellington') },
          { name: 'University of Canterbury', rank: 256, url: 'https://www.canterbury.ac.nz', image: getUniImage('University of Canterbury') },
          { name: 'Massey University', rank: 239, url: 'https://www.massey.ac.nz', image: getUniImage('Massey University') }
        ],
        popularCourses: ['Agriculture & Forestry', 'Engineering', 'Business', 'Tourism & Hospitality', 'IT'],
        visaRequirements: 'Fee Paying Student Visa requires offer of place from approved institution, proof of funds (NZD 15,000/year), medical and travel insurance, and English proficiency.',
        costOfLiving: 'NZD 15,000 - 20,000 per year',
        tuitionFees: 'NZD 22,000 - 35,000 per year',
        process: ['Select institution and program', 'Submit application with documents', 'Receive offer of place', 'Apply for student visa online', 'Arrange accommodation and insurance', 'Plan travel and orientation']
      },
      'u-s': {
        name: 'United States',
        flag: '🇺🇸',
        banner: '/LinkWave/us.jpeg',
        capital: 'Washington, D.C.',
        currency: 'US Dollar (USD)',
        languages: 'English',
        whyStudy: 'The United States hosts more international students than any other country, with over 4,000 universities and colleges. American institutions lead in research, innovation, and technology with a flexible education system.',
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
          { name: 'Harvard University', rank: 1, url: 'https://www.harvard.edu', image: getUniImage('Harvard University') },
          { name: 'Stanford University', rank: 3, url: 'https://www.stanford.edu', image: getUniImage('Stanford University') },
          { name: 'Massachusetts Institute of Technology (MIT)', rank: 2, url: 'https://www.mit.edu', image: getUniImage('Massachusetts Institute of Technology (MIT)') },
          { name: 'University of California, Berkeley', rank: 10, url: 'https://www.berkeley.edu', image: getUniImage('University of California, Berkeley') },
          { name: 'Columbia University', rank: 7, url: 'https://www.columbia.edu', image: getUniImage('Columbia University') }
        ],
        popularCourses: ['Computer Science', 'Business Administration', 'Engineering', 'Medicine', 'Social Sciences'],
        visaRequirements: 'F-1 Student Visa requires I-20 form from SEVP-approved school, SEVIS fee payment, DS-160 form, visa interview, proof of financial support, and English proficiency.',
        costOfLiving: 'USD 12,000 - 18,000 per year',
        tuitionFees: 'USD 25,000 - 55,000 per year',
        process: ['Research and shortlist universities', 'Take standardized tests (SAT/GRE/GMAT/TOEFL)', 'Submit applications with essays', 'Receive I-20 from accepted university', 'Pay SEVIS fee and complete DS-160', 'Attend visa interview at US Embassy']
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
      return { ...continent.countries[slug], continent: continent.title };
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