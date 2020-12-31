import reduxShop from '../../assets/images/ReduxShop.jpg';
import devCollabs from '../../assets/images/DevCollabs.jpg';
import bootcampScheduler from '../../assets/images/BootcampScheduler.jpg';
import tinyApp from '../../assets/images/TinyApp.jpg';
import swiftChat from '../../assets/images/SwiftChat.jpg';
import tweeter from '../../assets/images/Tweeter.jpg';
import cryptoMarketplace from '../../assets/images/CryptoMarketplace.jpg';
import dockerClone from '../../assets/images/dockerClone.jpg';

const projectList = [
  {
    id: 0,
    title: 'Redux Online Shop',
    link: 'https://redux-online-shop.herokuapp.com/',
    imageUrl: reduxShop,
    description: 'An e-commerce website using Firebase for authentication and Redux for state management. Users can check out their cart using the Stripe API.'
  },
  {
    id: 1,
    title: 'DevCollabs',
    link: 'https://dev-collabs.netlify.app/',
    imageUrl: devCollabs,
    description: 'A collaboration app for developers to easily form their own hackathon groups, and live code with each other.'
  },
  {
    id: 2,
    title: 'Interview Scheduler',
    link: 'https://bootcamp-scheduler.netlify.app/', 
    imageUrl: bootcampScheduler,
    description: 'A single-page application allowing users to schedule or delete interviews based on their availability.'
  },
  {
    id: 3,
    title: 'TinyApp',
    link: 'https://tiny-uri-app.herokuapp.com/', 
    imageUrl: tinyApp,
    description: 'Allows users to shorten long URLs (similar to bit.ly). There are custom tracking analytics to track visitors via their Visitor ID and timestamp.'
  },
  {
    id: 4,
    title: 'SwiftChat',
    link: 'https://swift-chat-app.herokuapp.com/',
    imageUrl: swiftChat,
    description: 'A family-friendly chat app that prohibits profanity, made for users to quickly communicate in dedicated rooms.'
  },
  {
    id: 5,
    title: 'Tweeter',
    link: 'https://tweeter-board.herokuapp.com/', 
    imageUrl: tweeter,
    description: 'A single-page AJAX-based Twitter clone where users can create new tweets within the tweet board.'
  },
  {
    id: 6,
    title: 'Crypto Marketplace',
    link: 'https://crypto-marketplace.herokuapp.com', 
    imageUrl: cryptoMarketplace,
    description: 'An online marketplace where users can trade their favourite crytpocurrencies.'
  },
  {
    id: 7,
    title: 'Docker Clone',
    link: 'https://fun-with-react.herokuapp.com/docker', 
    imageUrl: dockerClone,
    description: "A replica of Docker's Documentation landing page with customized transitions."
  }
];

export default projectList;