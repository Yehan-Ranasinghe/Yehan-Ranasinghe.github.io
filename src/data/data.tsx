// External imports
import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';

// Component imports
import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';

// Data imports
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Yehan Ranasinghe Personal Website',
  description: "Site built by Yehan Ranasinghe with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Yehan Ranasinghe`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Software Engineer | AI enthusiast | Finance Enthusiast{' '}
      </p>
      <p> </p>

      {/* <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">Muay Thai</strong>,
        plucking my <strong className="text-stone-100">banjo</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Vancouver Island</strong>.
      </p> */}
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Hey! I’m a 3rd-year Computer Science and AI student at HKUST, passionate about turning ideas into innovative solutions through code. 
  I specialize in building intuitive, scalable systems that blend technical skills with business insight. 
  Whether it’s developing apps, exploring AI, or brainstorming the next big startup idea, I love creating impactful and fun tech. 
  Outside of coding, I enjoy exploring different cultures and collaborating on exciting projects. Let’s connect and build something awesome!`,
  aboutItems: [
    {label: 'Location', text: 'Clear Water Bay, Hong Kong', Icon: MapIcon},
    {label: 'Age', text: '20', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Sri Lankan', Icon: FlagIcon},
    {label: 'Interests', text: 'Cars, Golf, Reading', Icon: SparklesIcon},
    {label: 'Study', text: 'The Hong Kong University of Science and Technology (HKUST)', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Student | ex Cybersecurity intern at KPMG', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Sinhala',
        level: 10,
      },
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Spanish',
        level: 6,
      },
      {
        name: 'Mandarin',
        level: 2,
      },
    ],
  },

  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 8,
      },
      {
        name: 'Typescript',
        level: 6,
      },
      {
        name: 'Angular',
        level: 5,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Python',
        level: 7,
      },
      {
        name: 'Rust',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Java',
        level: 6,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Smart Charge – 1st Runner-Up (Student Stream)',
    description: '',
    url: 'https://www.gs1hk.org/sites/default/files/2024-05/2024_IOT_Data_Hackathon_E-brochure.pdf',
    image: porfolioImage1,
  },
  {
    title: 'Smart Charge – 1st Runner-Up (Student Stream)',
    description:
      'Our team developed Smart Charge, a scalable solution for optimizing EV charging management and user experience. It addresses issues like underutilized stations, misuse, and imbalanced AC/DC chargers. Key features include dynamic pricing for optimal utilization, real-time availability checks, reservation systems, and integration with smart grids to promote sustainability. Smart Charge enhances profitability for property managers and affordability for users, paving the way for a greener future in EV charging.',
    url: 'https://www.gs1hk.org/sites/default/files/2024-05/2024_IOT_Data_Hackathon_E-brochure.pdf',
    image: porfolioImage2,
  },
  {
    title: 'Personal Website',
    description: 'Built a responsive, modern portfolio using React and Tailwind.',
    url: 'https://yehan-ranasinghe.vercel.app/',
    image: porfolioImage4, // Replace with an actual image
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Sep 2022 - Present (June 2026)',
    location: 'The Hong Kong University of Science and Technology (HKUST)',
    title: 'BEng of Computer Science and AI + minor in Business',
    content: (
      <p>
        At HKUST, I’ve mastered the boring basics and dived into the exciting stuff-algorithms, programming, and all
        things AI. From hackathons to hands-on projects, it’s been a journey of turning theories into real-world
        problem-solving.
      </p>
    ),
  },
  // {
  //   date: 'March 2003',
  //   location: 'School of Business',
  //   title: 'What did you study 101',
  //   content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  // },
];

export const experience: TimelineItem[] = [
  {
    date: 'June 2024 - July 2024',
    location: (
      <a
        className="text-blue-900 font-bold text-xl hover:text-blue-700 flex items-center space-x-4"
        href="https://home.kpmg/"
        rel="noopener noreferrer"
        target="_blank">
        <img
          alt="KPMG Logo"
          className="w-12 h-12 hover:scale-110 transition-all duration-300 ease-in-out shadow-md"
          src="/kpmg-logo.svg"
        />
        <span>KPMG, China</span>
      </a>
    ),
    title: 'Cyber Security & Technology Risk Intern - Advisory',
    content: (
      <ul className="list-disc ml-6 space-y-1 text-lg">
        <li>Executed ethical hacking simulations, penetration testing, and security architecture reviews.</li>
        <li>Identified vulnerabilities such as SQL injection, XSS, and session fixation.</li>
        <li>Worked on cloud security, DevSecOps transformation, and cybersecurity strategy for CISOs.</li>
        <li>Researched Distributed Ledger Technology (DLT) risks in financial institutions.</li>
      </ul>
    ),
  },
  {
    date: 'March 2024 - May 2024',
    location: (
      <a
        className="text-blue-900 font-bold text-xl hover:text-blue-700 flex items-center space-x-4"
        href="https://www.metalympics.org/"
        rel="noopener noreferrer"
        target="_blank">
        <img
          alt="Metalympics Logo"
          className="w-12 h-12 hover:scale-110 transition-all duration-300 ease-in-out shadow-md"
          src="/metalympics-logo.png"
        />
        <span>Metalympics Limited, Hong Kong</span>
      </a>
    ),
    title: 'Software Engineer',
    content: (
      <ul className="list-disc ml-6 space-y-1 text-lg">
        <li>Developed user-friendly iOS applications using ReactJS and React Native.</li>
        <li>Integrated backend services with AWS Amplify for seamless data flow.</li>
        <li>Enhanced app performance and UI/UX based on business needs and user feedback.</li>
        <li>Worked with Swift, TypeScript, and DevOps tools to optimize scalability and usability.</li>
      </ul>
    ),
  },
  {
    date: 'December 2023 - January 2024',
    location: (
      <a
        className="text-blue-900 font-bold text-xl hover:text-blue-700 flex items-center space-x-4"
        href="https://www.oxbridge-econ.com"
        rel="noopener noreferrer"
        target="_blank">
        <img
          alt="Oxbridge Economics Logo"
          className="w-12 h-12 hover:scale-110 transition-all duration-300 ease-in-out shadow-md"
          src="/oxbridge-logo.png"
        />
        <span>Oxbridge Economics Limited, Hong Kong</span>
      </a>
    ),
    title: 'Software Engineer',
    content: (
      <ul className="list-disc ml-6 space-y-1 text-lg">
        <li>Boosted data retrieval efficiency by 10% using a fuzzy search algorithm.</li>
        <li>Developed a React dashboard integrating AI/ML tools from Plotly.</li>
        <li>Connected frontend and backend services (JSON, REST, SQL, Kotlin, Java) for a seamless experience.</li>
        <li>Gained hands-on experience with AWS (S3, Lambda, CloudWatch) and Python scripting.</li>
      </ul>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Impact on the future',
      text: 'I’m driven by the idea that the work I do today can have a lasting impact on the future. Whether it’s shaping the future of AI or contributing to environmental sustainability through technology, I’m excited to be part of the change',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Helping others',
      text: 'What motivates me is the potential to help others through technology. Whether it’s by making everyday tasks easier or creating solutions that address important issues like sustainability, knowing that my work can improve lives is my greatest driving force.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'I would Love To Connect With You.',
  description: 'Let me get to know more about you.',
  items: [
    {
      type: ContactType.Email,
      text: 'lakvinduyehan@gmail.com',
      href: 'mailto:lakvinduyehan@gmail.com',
    },
    {
      type: ContactType.LinkedIn,
      text: 'linkedin.com/in/yehan-ranasinghe',
      href: 'https://www.linkedin.com/in/yehan-ranasinghe/',
    },
    {
      type: ContactType.Location,
      text: 'Clear Water Bay, Hong Kong',
      href: 'https://www.google.com/maps/place/Clear+Water+Bay,+Hong+Kong/@22.3092909,114.0969113,11z/data=!3m1!4b1!4m14!1m7!3m6!1s0x3404030c2054f63b:0x4b8623a3ca4e3b08!2sClear+Water+Bay!8m2!3d22.2851406!4d114.2940282!16zL20vMDN4NGdt!3m5!1s0x340403f324a97f77:0x4d488ecc4b81b6dc!8m2!3d22.3207164!4d114.2713158!16s%2Fg%2F12xq7v8ny?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D',
    },
    {
      type: ContactType.Instagram,
      text: '@r_yehan',
      href: 'https://www.instagram.com/r_yehan/',
    },
    {
      type: ContactType.Github,
      text: 'Yehan-Ranasinghe',
      href: 'https://github.com/Yehan-Ranasinghe',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Yehan-Ranasinghe'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/yehan-ranasinghe/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/r_yehan/'},
  {label: 'X', Icon: TwitterIcon, href: 'https://x.com/lakvindutm'},
];
