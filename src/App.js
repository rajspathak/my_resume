import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app-container">
      <Header />

      <Section
        title="Education"
        content={[
          {
            title: "Galgotias University",
            subtitle: "Master of Computer Application",
            location: "Uttar Pradesh (U.P)",
            date: "Sep. 2020 – July 2022",
          },
          {
            title: "B.D College, Patna",
            subtitle: "Bachelor of Computer Application",
            location: "Mithapur, Patna, Bihar",
            date: "Sep. 2016 – Nov. 2019",
          },
        ]}
      />
      
      <Section
        title="Experience"
        content={[
          {
            title: "Ecater Technology",
            subtitle: "React Native Developer",
            location: "Noida, Uttar Pradesh",
            date: "Sep 2022 – Present",
            details: [
              "Working as a React Native developer to develop E-commerce based applications like customer, vendor, and delivery apps.",
              "Deploying applications, monitoring their performance, and maintaining them in production for both platforms.",
              "Utilized Git and Github to provide a continuous integration service in order to automate the entire process of loading the latest build code.",
              "Performed beta testing with TestFlight and android beta channel release.",
              "Experience with RESTful Services and APIs and integrating third-party libraries like Push Notification, React Navigation, AppsFlyer, Facebook and Google SDK/analytics, deep linking, etc.",
              "Knowledge of excellent troubleshooting skills with Jest, Android, and Xcode as well."
            ]
          },
          {
            title: "Source Soft Solution",
            subtitle: "React Native Developer",
            location: "Noida, Uttar Pradesh",
            date: "Feb 2022 – Sep 2022",
            details: [
              "Worked as a React Native developer to develop scalable applications designed with intuitive user interfaces.",
              "Designed UI elements including navigation drawer, search bar/custom icons compatible across multiple platforms.",
              "Write scalable and maintainable code for both platforms (Android/iOS) and user interactions.",
              "Team collaboration using Git repository and ensuring performance optimization."
            ]
          }
        ]}
      />
      
      <Section
        title="Projects"
        content={[
          {
            title: "Bazzaar Your Infinite Shop",
            links: [
              { label: "iOS", url: "https://apps.apple.com/us/app/bazzaar-your-infinite-shop/id123456789" },
              { label: "Android", url: "https://play.google.com/store/apps/details?id=com.bazzaar.app&hl=en&gl=US" }
            ],
            details: [
              "E-commerce application that supports a wide range of products like clothes, accessories, and vehicles.",
              "Implemented features such as Push notifications, payment integrations, social login, map, and AppsFlyer analytics.",
              "Users can purchase items, track orders, and interact with customer support. It also includes a return item (RMA) feature.",
              "Admin has access to view orders and customer activities."
            ]
          },
          {
            title: "Areknet Customer App",
            links: [
              { label: "iOS", url: "https://apps.apple.com/us/app/areknet-customer-nigeria/id6446405747" },
              { label: "Android", url: "https://play.google.com/store/apps/details?id=com.areknetnigeria.app" }
            ],
            details: [
              "Customer-focused application providing easy access to services in Nigeria.",
              "Supports orders, payments, and interactions with the customer care team."
            ]
          },
          {
            title: "Bilamah Customer App",
            links: [
              { label: "iOS", url: "https://apps.apple.com/us/app/bilamah/id1637404132" },
              { label: "Android", url: "https://play.google.com/store/apps/details?id=com.bilamah.customerapp" }
            ],
            details: [
              "Another e-commerce application that provides similar features like product browsing, order tracking, and customer support.",
              "Integrated with various third-party services for push notifications and social logins."
            ]
          },
          {
            title: "CS-Cart Delivery Boy",
            links: [
              { label: "Android", url: "https://play.google.com/store/apps/details?id=com.ecarter.cs_cart_delivery_boy" }
            ],
            details: [
              "Delivery boy app for managing orders and deliveries.",
              "Allows delivery boys to accept orders, track deliveries using Google Maps, and view their earnings and history.",
              "Admins monitor activities and delivery boy status."
            ]
          },
          {
            title: "RXLife Challenge",
            links: [
              { label: "iOS", url: "https://apps.apple.com/us/app/rxlifechallenge/id1663873846" }
            ],
            details: [
              "Fitness challenge app for tracking user progress and fitness assessments.",
              "Users can view challenges, accept them, and monitor their progress.",
              "Helps clients to improve their fitness by offering personalized exercise programs."
            ]
          }
        ]}
      />
      <Section
        title="Technical Skills"
        content={[
          {
            title: "Languages",
            details: ["Java", "C", "JavaScript"]
          },
          {
            title: "IDE Tools",
            details: ["VS Code", "Eclipse", "IntellijIdea", "Android Studio", "Xcode"]
          },
          {
            title: "Technologies/Frameworks",
            details: ["React Native", "ReactJs", "Redux", "NodeJs", "Spring-Boot", "MongoDb", "Git/Github"]
          },
        ]}
      />
      <Section
        title="Certifications"
        content={[
          {
            title: "JAVA Certified",
            subtitle: "Naresh IT Technology, Hyderabad",
            details: [
              "Certified in Java programming by Naresh IT Technology in Hyderabad."
            ]
          }
        ]}
      />
      <Footer />
    </div>
  );
};

export default App;
