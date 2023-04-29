import HOC from "../../public/svg/hoc.png";
import Analytics from "../../public/svg/analytics.png";
import TechTime from "../../public/svg/TechTime.png";
import Quiz from "../../public/svg/Quiz.png";
import Airbnb from "../../public/svg/Airbnb.png";
import Quidroo from "../../public/svg/quidroo.png";
import WasteCoin from "../../public/svg/wastecoin.png";
import Geynius from "../../public/svg/Geynius.png";
import Widget from "../../public/svg/widget.png";
import Voom from "../../public/svg/Voom.png";

export const ResumeLink =
  "https://docs.google.com/document/d/1LhRf_kYoqCP9dTXZQ47qZx5UCGEkoa-D/edit";
export const navbarArr = [
  {
    id: 1,
    label: "Projects",
    url: "/Projects",
  },
  {
    id: 2,
    label: "Resume",
    url: "#",
  },
  {
    id: 3,
    label: "About",
    url: "/About",
  },
  {
    id: 4,
    label: "Blog",
    url: "/Blog",
  },
];

export const aboutArr = [
  {
    id: 1,
    text: "Daniel is  a full-stack software engineer, writer and co-founder from Nigeria 🇳🇬 🎉, graduated from the University of Uyo with a degree in Petroleum Engineering. After graduating, he decided to venture into the field of Information Technology and have been doing so for the past five years. Initially, he started with HTML, CSS, PHP, and JavaScript. Now, he is proficient in React on the frontend and Django on the backend, and he is learning more JavaScript frameworks such as NextJs. ",
  },
  {
    id: 2,
    text: "He has written several articles and created a React library called React-user-analytics which has garnered many downloads. Additionally, he volunteers and contribute to the Stellar Blockchain Ecosystem, acting as both a project reviewer and mentor. Outside of software engineering, he is the Alternate Young Professional Chair of the Society of Petroleum Engineers, Section 199.",
  },
  {
    id: 3,
    text: "His passion for environmental sustainability has led him to create WasteCoin, an initiative focused on improving plastic recycling. In the past, he has also engaged in research, collaborating and actively writing four academic papers and one conference paper.",
  },
  {
    id: 4,
    text: "In his spare time, he enjoy playing video games, cooking and singing, as it helps him to relax when feeling frustrated.",
  },
];

export const blogArr = [
  {
    id: 1,
    title: "Understanding HOCs in ReactJS using charts",
    img: HOC,
    writeup:
      "This article explains how to use Higher Order Components (HOCs) in ReactJS by using examples and visualisations to illustrate the concept.",
    hashtags: ["#reactjs", "#HOC", "#charts"],
    link: "https://medium.com/@todak2000/understanding-higher-order-components-in-reactjs-using-charts-b2bcb2d02fc4",
  },
  {
    id: 2,
    title: "Building a Single Page Application Embeddable Widget",
    img: Widget,
    writeup:
      "This article examines the steps involved in constructing an embeddable widget for single page applications, with spotlight on the components and the application's implementation.",
    hashtags: ["#spa", "#js", "#widget"],
    link: "https://medium.com/@todak2000/building-a-single-page-application-embeddable-widget-47c95a7bfbfa",
  },
  {
    id: 3,
    title:
      "Unlocking the Power of Automation: Creating a Python Bot to Extract Data from LinkedIn",
    img: HOC,
    writeup:
      "This article discusses how to create a Python bot to automate the process of extracting data from LinkedIn.",
    hashtags: ["#python", "#bot", "#automation"],
    link: "https://medium.com/@todak2000/unlocking-the-power-of-automation-creating-a-python-bot-to-extract-data-from-linkedin-61a47372fc57",
  },

  {
    id: 4,
    title:
      "Factors contributing to the massive adoption of Cryptocurrency in Africa ",
    img: Widget,
    writeup:
      "This article examines how cryptocurrency is becoming increasingly popular in Africa, due to several factors.",
    hashtags: ["#blockchain", "#crypto"],
    link: "https://breach.club/publications/the-blockchain-series/factors-contributing-to-the-massive-adoption-of-cryptocurrency-in-africa",
  },
  {
    id: 5,
    title: "Blockchain, Cryptocurrency – What is the distinction? ",
    img: HOC,
    writeup:
      "The article explains the differences between blockchain and cryptocurrency, and how they are related.",
    hashtags: ["#blockchain", "#crypto"],
    link: "https://breach.club/publications/the-blockchain-series/blockchain-cryptocurrency-what-is-the-distinction",
  },
  {
    id: 6,
    title: " From Idea to Reality: Create and Publish your React Hook on NPM",
    img: Widget,
    writeup:
      "This article explains how to create and publish a React Hook on npm to turn an idea into reality.",
    hashtags: ["#hooks", "#react", "#library"],
    link: "https://medium.com/@todak2000/from-idea-to-reality-create-and-publish-your-react-hook-on-npm-870c93dc67f9",
  },
];
export const projectArr = [
  {
    id: 1,
    title: "WasteCoin",
    img: WasteCoin,
    writeup:
      "A mobile app that educates and rewards users for their recycling effort with the wastecoin token which can be used to purchase products, services, and fund charities",
    hashtags: ["#reactjs", "#django", "#cleantech"],
    link: "https://wastecoin.co.uk/",
  },
  {
    id: 2,
    title: "Quidroo",
    img: Quidroo,
    writeup:
      "An online factoring platform where transactions are streamlined and SMEs get paid within 72 hours by selling their invoices to investors to get fast cash at favorable rates",
    hashtags: ["#reactjs", "#django", "#fintech"],
    link: "https://quidroo.com/",
  },
  {
    id: 3,
    title: "Geynius",
    img: Geynius,
    writeup: "Geynius is an AI platform that helps you create Professional Resume, Portfolio and cover letter in minutes.",
    hashtags: ["#reactjs", "#typescript", "#chatgpt"],
    link: "https://geynius.com/",
  },
  {
    id: 4,
    title: "TechTime",
    img: TechTime,
    writeup:
      "Build your future with our quality education. the best and largest all-in-one online tutoring platform in the world ",
    hashtags: ["#nextjs", "#typescript"],
    link: "https://techtime-226q.onrender.com/",
  },
  {
    id: 5,
    title: "React-user-analytics",
    img: Analytics,
    writeup:
      "A public react library that all developers to manage certain users’ analytics data such as is collected by google analytics (user device, user location, pages visited etc",
    hashtags: ["#reactjs", "#hook", "user-analytics"],
    link: "https://www.npmjs.com/package/@todak2000/react-user-analytics",
  },
  {
    id: 6,
    title: "Interactive Quiz",
    img: Quiz,
    writeup:
      "An interactive quiz game that allows users to answer multiple-choice questions",
    hashtags: ["#nextjs", "#typescript"],
    link: "https://interactivequiz.onrender.com/",
  },
  {
    id: 7,
    title: "Voom",
    img: Voom,
    writeup:
      "Voom is the perfect video calling and chat app for staying connected with friends and family.",
    hashtags: ["#nextjs", "#typescript", '#webrtc', 'socket.io'],
    link: "https://voom-g85y.onrender.com",
  },
  {
    id: 8,
    title: "AirBnB clone",
    img: Airbnb,
    writeup: "A simple clone of the AirBnB landing page UI",
    hashtags: ["#reactjs", "#javascript"],
    link: "https://airbnb-j958.onrender.com",
  },
];
export const firstText = "Hi! I'm";
export const name = "Daniel Olagunju";
export const writeup =
  "Full Stack Developer with over 3 years of experience in building web and mobile applications. I'm proficient in technologies such as React, React Native, and Python. I have a passion for building apps that are both user friendly and secure. I'm also a self-starter and a problem solver.";
