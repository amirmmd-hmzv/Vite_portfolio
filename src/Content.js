// import images
import Hero_person from "./assets/images/Hero/myHero (1) (1).webp"
import Tailwind from "./assets/images/Skills/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8 (2).svg"
import next from "./assets/images/Skills/nextjs-icon.svg"
import ts from "./assets/images/Skills/tss.png"
import reactjs from "./assets/images/Skills/react.png"
import mui from "./assets/images/Skills/mui.png"
import js from "./assets/images/Skills/JavaScript-logo.png"
import git from "./assets/images/Skills/Git-Icon-1788C.png"
import box4u from "./assets/images/pj/box4u.webp"
import project1 from "./assets/images/pj/netflix.webp"
import project2 from "./assets/images/pj/shopping.webp"
import project3 from "./assets/images/pj/Captureghazachi.webp"
import project4 from "./assets/images/pj/crypto.webp"
import project5 from "./assets/images/pj/HypoMelk.webp"

import Hireme_person2 from "./assets/images/Hireme/seat (1).webp"

// import icons from react-icons
import { GrMail } from "react-icons/gr"
import { MdArrowForward, MdCall } from "react-icons/md"
import { BsInstagram } from "react-icons/bs"
import { TbSmartHome } from "react-icons/tb"
import { BiUser } from "react-icons/bi"
import { RiProjectorLine } from "react-icons/ri"
import { MdOutlinePermContactCalendar } from "react-icons/md"
import {
  FaGitAlt,
  FaGoogleDrive,
  FaLinkedin,
  FaMap,
  FaMapMarkerAlt,
} from "react-icons/fa"
const emailAddress = "amirhamzavi44@gmail.com"
const subject = encodeURIComponent("Job Opportunity")
const body = encodeURIComponent(
  "Hello, I am interested in discussing potential job opportunities with you."
)

const mailtoLink = `mailto:${emailAddress}?subject=${subject}&body=${body}`
export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },

    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Front End Developer",
    firstName: "Amir Mohammad",
    LastName: "Hmazavi",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "2+",
        text: "Years of Experinse in Front",
      },
      {
        count: "",
        text: "",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "",
    skills_content: [
      {
        name: "Tailwind",
        para: "",
        logo: Tailwind,
      },
      {
        name: "Git",
        para: "",
        logo: git,
      },
      {
        name: "TypeScript",
        para: "",
        logo: ts,
      },
      {
        name: "React js",
        para: "",
        logo: reactjs,
      },
      {
        name: "Next js",
        para: "",
        logo: next,
      },
      {
        name: "Javascript",
        para: "",
        logo: js,
      },
    ],
    icon: MdArrowForward,
  },

  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: Hireme_person2,
    project_content: [
      {
        title: "Box4U",
        image: box4u,
        link: `https://box4u.co/`,
        desc: `Discover the perfect blend of creativity and precision with Boxu4. Unleash your design potential using our meticulously crafted DXF files. Elevate your projects effortlessly - explore, create, and transform with Boxu4 today!`,
      },

      {
        title: "HypoMelk",
        image: project5,
        link: `https://hypo-melk.vercel.app/`,
        desc: `Step into a visually stunning real estate experience with my frontend portfolio's homepage UI. Immerse yourself in sleek design and seamless navigation as you explore properties. Elevate your property search with an interface that blends elegance and functionality, making every click a step closer to finding your dream home.

        `,
      },

      
      {
        title: "Ghazachi Shop (jsut UI)",
        image: project3,
        link: `https://restaurant-ghazachi.vercel.app/`,
      },
      {
        title: "Crypto website",
        image: project4,
        link: `https://crypto-app-darkmode.vercel.app/`,
        desc: `Discover the world of cryptocurrencies on our simple yet effective website. Get real-time updates on digital coin prices, empowering you with the information you need. Stay aware, make informed decisions – because in the digital economy, knowledge is your greatest asset.

        `,
      },
    ],
  },

  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "amirhamzavi44@gmail.com",
        icon: GrMail,
        link: `${mailtoLink}`,
      },

      {
        text: "+98 922 131 2297",
        icon: MdCall,
        link: "tel:+98 922 131 2297",
      },
      {
        text: "Iran Mazandaran Amol",
        icon: FaMapMarkerAlt,
        link: "https://www.google.com/maps/place/%D8%A7%D8%B3%D8%AA%D8%A7%D9%86+%D9%85%D8%A7%D8%B2%D9%86%D8%AF%D8%B1%D8%A7%D9%86+%D8%A7%D9%85%D9%84%E2%80%AD/@36.4697495,52.3539761,14z/data=!4m6!3m5!1s0x3f8fa3fd34ab2acd:0x65e662ff07b22c2a!8m2!3d36.475244!4d52.345022!16s%2Fg%2F11s9ltvx08?entry=ttu",
      },
      {
        text: "amir_hmzv",
        icon: BsInstagram,
        link: "https://www.instagram.com/amir_hmzv/",
      },
      {
        text: "My Linkedin Profile",
        icon: FaLinkedin,
        link: "https://www.linkedin.com/in/amir-mohammad-hamzavi-97ab82279?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BGJhbdi3uSOyR1itiuMXYBQ%3D%3D",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
}
