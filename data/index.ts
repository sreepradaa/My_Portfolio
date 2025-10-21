import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#Experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Learning and applying knowledge through hands-on projects ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I ensure smooth collaboration and adapt quickly",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Exploring AI Concepts and Technologies",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Sakhi – Women Alley in Safety",
    des: "Developed Sakhi, a comprehensive women’s safety platform with SOS alerts, live location, forums, and secure authentication.",
    img: "/sakhi.png",
    iconLists: ["/html3.png", "/css3.png", "/react.svg", "/nodejs.svg","next.svg","mongodb.svg"],
    link: "https://sakhi7.vercel.app/",
  },
  {
    id: 2,
    title: "Real-Time Traffic Violation Detection System",
    des: "Built a deep learning system with YOLOv8 and OpenCV for helmet, seatbelt violations and ANPR dashboard.",
    img: "traffic.png",
    iconLists: ["/python.svg", "opencv.png", "/streamlit.png"],
    link: "https://github.com/sreepradaa/Traffic-Violation-Detection-using-YOLOv8-and-OpenCV.git",
  },
  {
    id: 3,
    title: "Remote Testing of Avionic Systems (DRDO)",
    des: "Developed missile testing software with Python-C client-server model and socket programming",
    img: "drdo.png",
    iconLists: ["/python.svg", "C.png"],
  },
  /*{
    id: 4,
    title: "Research Assistant-Extention",
    des: "Built an AI-based research assistant using Spring Boot, React, and Gemini API.",
    img: "/p5.png",
    iconLists: ["/react.svg", "/spring.svg"],
    link: "https://github.com/pranavi2/research-assistant",
  },*/
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];



export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Project Intern – DRDO (Defence Research and Development Organization)",
    timeline: "Feb'25 – June'25",
    desc: [
      "Developed a GUI-based client-server testing system for aerospace subsystems using Python (PyQt) and C.",
      "Implemented socket-based communication protocols for real-time simulation and validation."
    ],
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Content Writing Intern – BranDigitalize",
    timeline: "May'24 – July'24",
    desc: ["Created SEO-optimized technical content for digital campaigns",
    "Helped improve client website traffic by 25% through research-driven articles."
  ],
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
 {
     id: 3,
     title: "Co Founder - GearUp",
      timeline: "Aug'25 – Present",
     desc: "Co-founded an automation agency at 19, delivering tailored solutions to businesses, enhancing operational efficiency through custom automations which 10x their growth.",
     className: "md:col-span-2", // change to md:col-span-2
     thumbnail: "/exp3.svg",
 },
  // {
  //   id: 4,
  //   title: "Lead Frontend Developer",
  //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/sreepradaa",
  },

  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/sreeprada-r-676282282/",
  },
];
