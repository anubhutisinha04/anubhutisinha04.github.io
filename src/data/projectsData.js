import Omnifood from "./../assets/portfolioImages/omnifood.png";
import TravelList from "./../assets/portfolioImages/travel.jpeg";
import Splitwise from "./../assets/portfolioImages/splitwise.jpeg";
import Popcorn from "./../assets/portfolioImages/popcorn.jpeg";
//import landingPage from "./../assets/portfolioImages/url.jpg";

const ProjectsData = [
  {
    id: "popcorn",
    img: Popcorn,
    name: "Popcorn and Chill",
    stack: ["< RESTful API />", "< Bootstrap v5 />", "< React.js />"],
    live: "https://popcorn-n-chill.netlify.app/",
    source: "https://github.com/anubhutisinha04/popcorn-n-chill",
    description:
      "SPA (Single Page Application) using the OMDB API to fetch real-time movie data. Users can assign star ratings to the movies they've watched and store their ratings in a dedicated list using localStorage for persistent storage. Built with ReactJS, OMDB API, custom star rating hook and CSS for styling. It is responsive.",
  },
  {
    id: "splitwise",
    img: Splitwise,
    name: "Mini Splitwise Application",
    stack: ["< RESTful API />", "< Bootstrap v5 />", "< React.js />"],
    live: "https://mini-splitwise.netlify.app/",
    source: "https://github.com/anubhutisinha04/eat-n-split",
    description:
      "Mini-Splitwise is a web application designed to manage shared expenses among groups of people. It allows users to track and split bills, ensuring everyone pays their fair share. The project leverages React.js for it's development and is hosted on Netlify. This tech stack provides a robust, responsive, and efficient platform for handling expense management tasks.",
  },
  {
    id: "travel-list",
    img: TravelList,
    name: "Dynamic Travel List",
    stack: ["< RESTful API />", "< Bootstrap v5 />", "< React.js />"],
    live: "https://dynamic-travel-list-react.netlify.app/",
    source: "https://github.com/anubhutisinha04/travel-list",
    description:
      "The website, developed using React, is a dynamic travel list application that showcases various features like adding, removing, and editing items for your packing needs. It highlights the use of React for the user interface and state management for maintaining the list's dynamic functionalities.",
  },

  {
    id: "omnifood",
    img: Omnifood,
    name: "Omnifood - AI meal",
    stack: ["< React.js />", "< CSS3 />"],
    live: "https://responsive-omni.netlify.app/",
    source: "https://github.com/anubhutisinha04/Omnifood-Website",
    description:
      "A single page website written only in HTML and CSS to display responsive behaviour and design principles.",
  },
];

const InprogressProjectsData = [
  // {
  //   id: "url-short",
  //   img: landingPage,
  //   name: "URL shortening API landing page",
  //   stack: ["< JavaScript />", "< NodeJS />"],
  //   live: "",
  //   source: "https://github.com/rimshub/URL-shortening-API-landing-page",
  //   description:
  //     "Integrate with the shrtcode URL shortening API and play with browser storage in this landing page challenge",
  // },
];

export default { ProjectsData, InprogressProjectsData };
