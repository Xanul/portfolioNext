export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize effective communication and strong teamwork",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[50vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "computerCode4.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
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
    description: "Constantly learning and evolving",
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
    title: "Currently developing a Next JS Platform for appointment booking",
    description: "Working And Learning",
    className: "md:col-span-3 md:row-span-2",
    imgClassName:
      "absolute right-0 bottom-0 md:w-96 w-60 max-sm:-right-20 max-sm:-bottom-20",
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
    title: "NextDash - NextJS Showcase",
    des: "Built a dynamic web page using Next.js to showcase my expertise in server-side rendering, client-side rendering, and API integration. This project demonstrates my proficiency in optimizing performance, implementing modern development practices, and creating seamless user experiences.",
    img: "portfolio_dashboard.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/postgresql.svg"],
    link: "https://next-js-dashboard-3e7fcb088451.herokuapp.com/dashboard/main",
  },
  {
    id: 2,
    title: "Nike Landing Page",
    des: "Developed a responsive Nike landing page, using techs like React, Tailwind CSS, and JavaScript. This project highlights my focus on performance, scalability, and delivering a visually appealing user experience.",
    img: "portfolio_nike.svg",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/vite.svg"],
    link: "https://lightblue-frog-412232.hostingersite.com/",
  },
  {
    id: 3,
    title: "React Journall App",
    des: "Journal App using React",
    img: "portfolio_journal.svg",
    iconLists: ["/ts.svg"],
    link: "https://leafy-klepon-de245a.netlify.app/auth/login",
  },
  {
    id: 4,
    title: "Vanilla JS BlackJack Game",
    des: "BlackJack Game using Vanilla JS",
    img: "portfolio_black.svg",
    iconLists: ["/js.svg"],
    link: "https://xanul.github.io/blackJackGame/",
  },
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
    title: "Frontend Developer",
    desc: "Developed interactive web applications using React.js and Tailwind CSS as part of my personal portfolio. These projects include the creation of dynamic pages with state management and API integration.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Next.js Development",
    desc: "Built a web application using Next.js, focusing on server-side rendering, static generation, and client-side features. This project showcased modern web development practices with enhanced performance and scalability.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Full-Stack Development",
    desc: "Completed courses on platforms like Udemy, developing skills in React.js, TypeScript and Node. These courses included real-world practices and projects, applying key concepts such as data handling and API integration",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp4.svg",
  },
  {
    id: 4,
    title: "Certifications and Skills",
    desc: "I hold certifications like AZ-900: Azure Fundamentals and Network Basics from Cisco, which have provided me with a solid foundation in cloud infrastructure and networking. Additionally, I have an advanced level of English (C1), enabling me to work in international environments.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Xanul",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://twitter.com/Rivas060",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/rodrigo-rivas-martinez-402133239/",
  },
];
