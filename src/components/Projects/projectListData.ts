import reduxShop from '../../assets/images/ReduxShop.gif';
import devCollabs from '../../assets/images/DevCollabs.gif';
import bootcampScheduler from '../../assets/images/BootcampScheduler.gif';
import tinyApp from '../../assets/images/TinyApp.gif';
import swiftChat from '../../assets/images/SwiftChat.gif';
import tweeter from '../../assets/images/Tweeter.gif';

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
  }
];

export default projectList;