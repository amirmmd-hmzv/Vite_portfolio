// import images
import Hero_person from "./assets/images/Hero/myHero (1) (1).webp";
import Hireme_person2 from "./assets/images/Hireme/desk laptop image.jpg";
import project3 from "./assets/images/pj/Captureghazachi.webp";
import project4 from "./assets/images/pj/crypto.webp";
import project5 from "./assets/images/pj/HypoMelk.webp";
import tiget from "./assets/images/pj/tiget.webp";
import git from "./assets/images/Skills/Git-Icon-1788C.png";
import js from "./assets/images/Skills/JavaScript-logo.png";
import next from "./assets/images/Skills/nextjs-icon.svg";
import reactjs from "./assets/images/Skills/react.png";
import Tailwind from "./assets/images/Skills/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8 (2).svg";
import ts from "./assets/images/Skills/tss.png";
import webflowIcon from "./assets/images/Skills/webflow icon.svg";

// webflow
import calendar from "./assets/images/pj/calendar space.png";
import elean from "./assets/images/pj/elean studio.png";
import lugar from "./assets/images/pj/lugar.png";
import nextcent from "./assets/images/pj/nextcent.png";

// front
import arka from "./assets/images/pj/arka.png";
import explorista from "./assets/images/pj/exploristacofinal.png";
import hasty from "./assets/images/pj/Hasty.jpg";
import tehran from "./assets/images/pj/tehran.jpg";

// import icons from react-icons
import { BiUser } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import {
  MdArrowForward,
  MdCall,
  MdOutlinePermContactCalendar,
} from "react-icons/md";
import { RiProjectorLine } from "react-icons/ri";
import { TbSmartHome } from "react-icons/tb";
const emailAddress = "amirhamzavi44@gmail.com";
const subject = encodeURIComponent("Job Opportunity");
const body = encodeURIComponent(
  "Hello, I am interested in discussing potential job opportunities with you."
);

const mailtoLink = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
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
    title: "Front End & Webflow Developer",
    firstName: "Amir Mohammad",
    LastName: "Hmazavi",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "2+",
        text: "Years of Experinse in Web Development",
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
      {
        name: "Webflow",
        para: "",
        logo: webflowIcon,
      },
    ],
    icon: MdArrowForward,
  },

  Projects: {
    title: "Projects",
    subtitle: "Developing",
    image: Hireme_person2,
    project_content: [
      {
        title: "Explorista",
        image: explorista,
        link: `https://app.explorista.co/`,
        desc: `Discover the perfect blend of creativity and precision with Boxu4. Unleash your design potential using our meticulously crafted DXF files. Elevate your projects effortlessly - explore, create, and transform with Boxu4 today!`,
      },
      {
        title: "hasty",
        image: hasty,
        link: `https://app.hastyielts.ir/`,
        desc: `"Empowering Engagement: A website I developed seamlessly merges ticket sales and advertisements, offering users a streamlined experience to purchase tickets while providing advertisers with a platform to reach their target audience effectively. Through intuitive design and strategic integration, this site exemplifies my ability to blend functionality with user-centric design, catering to both business objectives and user needs in a dynamic online environment."

        `,
      },
      {
        title: "Apple Araka",
        image: arka,
        link: `http://app.applearka.com/`,
        desc: `Step into a visually stunning real estate experience with my frontend portfolio's homepage UI. Immerse yourself in sleek design and seamless navigation as you explore properties. Elevate your property search with an interface that blends elegance and functionality, making every click a step closer to finding your dream home.

        `,
      },

      {
        title: "Tehran mode",
        image: tehran,
        link: `https://tehran-mod.com/`,
      },
      ,
      {
        title: "Tiget",
        image: tiget,
        link: `https://tiget.org/`,
        desc: `"Empowering Engagement: A website I developed seamlessly merges ticket sales and advertisements, offering users a streamlined experience to purchase tickets while providing advertisers with a platform to reach their target audience effectively. Through intuitive design and strategic integration, this site exemplifies my ability to blend functionality with user-centric design, catering to both business objectives and user needs in a dynamic online environment."

        `,
      },
      // {
      //   title: "HypoMelk",
      //   image: project5,
      //   link: `https://hypo-melk.vercel.app/`,
      //   desc: `Step into a visually stunning real estate experience with my frontend portfolio's homepage UI. Immerse yourself in sleek design and seamless navigation as you explore properties. Elevate your property search with an interface that blends elegance and functionality, making every click a step closer to finding your dream home.

      //   `,
      // },

      // {
      //   title: "Crypto website",
      //   image: project4,
      //   link: `https://crypto-app-darkmode.vercel.app/`,
      //   desc: `Discover the world of cryptocurrencies on our simple yet effective website. Get real-time updates on digital coin prices, empowering you with the information you need. Stay aware, make informed decisions – because in the digital economy, knowledge is your greatest asset.

      //   `,
      // },
    ],
  },
  ProjectsWebflow: {
    title: "Projects",
    subtitle: "Webflow",
    image: Hireme_person2,
    project_content: [
      {
        title: "Nextcent",
        image: nextcent,
        link: `https://next-cent.webflow.io/`,
        desc: `Discover the perfect blend of creativity and precision with Boxu4. Unleash your design potential using our meticulously crafted DXF files. Elevate your projects effortlessly - explore, create, and transform with Boxu4 today!`,
      },
      {
        title: "Lugar",
        image: lugar,
        link: `https://lugar.webflow.io/`,
        desc: `"Empowering Engagement: A website I developed seamlessly merges ticket sales and advertisements, offering users a streamlined experience to purchase tickets while providing advertisers with a platform to reach their target audience effectively. Through intuitive design and strategic integration, this site exemplifies my ability to blend functionality with user-centric design, catering to both business objectives and user needs in a dynamic online environment."

        `,
      },
      {
        title: "Elean Studio",
        image: elean,
        link: `https://eleanstudio.webflow.io/`,
        desc: `Step into a visually stunning real estate experience with my frontend portfolio's homepage UI. Immerse yourself in sleek design and seamless navigation as you explore properties. Elevate your property search with an interface that blends elegance and functionality, making every click a step closer to finding your dream home.

        `,
      },

      {
        title: "Calendar Space",
        image: calendar,
        link: `https://thespace-calendar.webflow.io/`,
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

      // {
      //   text: "+98 922 131 2297",
      //   icon: MdCall,
      //   link: "tel:+98 922 131 2297",
      // },
      // {
      //   text: "Iran Mazandaran",
      //   icon: FaMapMarkerAlt,
      //   link: "https://www.google.com/maps/place/%D8%A7%D8%B3%D8%AA%D8%A7%D9%86+%D9%85%D8%A7%D8%B2%D9%86%D8%AF%D8%B1%D8%A7%D9%86+%D8%A7%D9%85%D9%84%E2%80%AD/@36.4697495,52.3539761,14z/data=!4m6!3m5!1s0x3f8fa3fd34ab2acd:0x65e662ff07b22c2a!8m2!3d36.475244!4d52.345022!16s%2Fg%2F11s9ltvx08?entry=ttu",
      // },
      {
        text: "amirmmd_hmzv",
        icon: BsInstagram,
        link: "https://www.instagram.com/amirmmd_hmzv/",
      },
      {
        text: "My Linkedin Profile",
        icon: FaLinkedin,
        link: "https://www.linkedin.com/in/amirmohammad-hamzavi-b0a570373",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
