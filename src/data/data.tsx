import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
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
  description: `Hey there! I’m a third-year Computer Science and AI student at HKUST, 
  with a passion for transforming ideas into innovative solutions through code.
  I specialize in building intuitive, scalable systems that merge technical expertise with business insight.
  Whether I’m developing apps, diving into AI, or brainstorming the next big startup idea, 
    I’m always focused on creating impactful tech that’s both fun and accessible. Outside of coding,
     I love exploring different cultures and collaborating on exciting projects. Let’s connect and make something great together!`,
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
        className="text-blue-900 font-bold text-lg hover:text-blue-700"
        href="https://home.kpmg/"
        rel="noopener noreferrer"
        target="_blank">
        KPMG, China
      </a>
    ),
    title: 'Cyber Security and Technology Risk Summer Intern - Advisory',
    content: (
      <p>
        Conducted ethical hacking simulations, penetration tests, and security reviews, identifying vulnerabilities like
        SQL injection and XSS. Collaborated on cloud security and DevSecOps transformations, and provided strategic
        cybersecurity guidance to CISOs to enhance organizational defenses.
      </p>
    ),
  },
  {
    date: 'March 2024 - May 2024',
    location: (
      <a
        className="text-blue-900 font-bold text-lg hover:text-blue-700"
        href="https://www.metalympics.org/"
        rel="noopener noreferrer"
        target="_blank">
        Metalympics Limited, Hong Kong
      </a>
    ),
    title: 'Software Engineer',
    content: (
      <p>
        Developed user-centric iOS applications using ReactJS and React Native, integrating backend services like AWS
        Amplify. Improved app performance and reliability by addressing bugs, optimizing features, and aligning UI/UX
        designs with business strategies. Leveraged Swift, TypeScript, and DevOps tools to ensure scalability and
        usability.
      </p>
    ),
  },
  {
    date: 'December 2023 - January 2024',
    location: (
      <a
        className="text-blue-900 font-bold text-lg hover:text-blue-700"
        href="https://www.oxbridge-econ.com"
        rel="noopener noreferrer"
        target="_blank">
        Oxbridge Economics Limited, Hong Kong
      </a>
    ),
    title: 'Software Engineer',
    content: (
      <p>
        Enhanced data retrieval efficiency by 10% with a fuzzy search algorithm. Improved user experience by integrating
        backend and frontend services (JSON, REST, SQL, Kotlin, Java) and creating a React dashboard powered by Plotly's
        AI/ML tools. Gained expertise in AWS technologies, including S3, Lambda, CloudWatch, and Shell scripting with
        Python.
      </p>
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
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
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
      type: ContactType.Location,
      text: 'Clear Water Bay, Hong Kong',
      href: 'hhttps://www.google.com/maps/place/Clear+Water+Bay,+Hong+Kong/@22.3092909,114.0969113,11z/data=!3m1!4b1!4m14!1m7!3m6!1s0x3404030c2054f63b:0x4b8623a3ca4e3b08!2sClear+Water+Bay!8m2!3d22.2851406!4d114.2940282!16zL20vMDN4NGdt!3m5!1s0x340403f324a97f77:0x4d488ecc4b81b6dc!8m2!3d22.3207164!4d114.2713158!16s%2Fg%2F12xq7v8ny?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D',
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
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/yehan-ranasinghe/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/r_yehan/'},
  {label: 'X', Icon: TwitterIcon, href: 'https://x.com/lakvindutm'},
];
