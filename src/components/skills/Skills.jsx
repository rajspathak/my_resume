import React from 'react';
import "./skills.css";
import {
  HiOutlineDeviceMobile,
  HiOutlineCode,
  HiOutlineDesktopComputer,
  HiOutlineDatabase,
  HiOutlineSwitchHorizontal,
  HiOutlineServer,
  HiOutlineBadgeCheck,
  HiOutlineCloudUpload,
  HiOutlinePuzzle,
  HiOutlineCog,
} from "react-icons/hi";

// span = columns out of 6 on desktop; groups are ordered so each row adds up to 6
const skillGroups = [
  {
    icon: HiOutlineDeviceMobile,
    title: "Mobile",
    span: 3,
    wide: true,
    skills: ["React Native (CLI & Expo)", "Expo EAS Build & OTA Updates", "iOS", "Android", "Native Modules", "React Native for Web", "Deep Linking", "Push Notifications", "Offline Mode"],
  },
  {
    icon: HiOutlinePuzzle,
    title: "SDKs & Integrations",
    span: 3,
    wide: true,
    skills: ["Firebase", "Google Analytics", "AppsFlyer", "Adjust", "Facebook SDK & Events", "Push Notifications", "Social Login", "In-App Purchases", "Google Play Billing", "Google Maps"],
  },
  {
    icon: HiOutlineCloudUpload,
    title: "CI/CD & Release",
    span: 4,
    wide: true,
    skills: ["GitHub Actions", "Fastlane", "Expo EAS CLI", "CodePush", "Google Play Console", "App Store Connect", "TestFlight", "Huawei AppGallery", "Git/GitHub"],
  },
  {
    icon: HiOutlineCog,
    title: "Tools",
    span: 2,
    wide: true,
    skills: ["VS Code", "Android Studio", "Xcode", "Figma", "Adobe XD"],
  },
  {
    icon: HiOutlineDesktopComputer,
    title: "Web",
    span: 2,
    skills: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Responsive Design"],
  },
  {
    icon: HiOutlineSwitchHorizontal,
    title: "State & APIs",
    span: 2,
    skills: ["Redux", "Redux Toolkit", "Redux Saga", "Redux Thunk", "REST APIs", "GraphQL"],
  },
  {
    icon: HiOutlineDatabase,
    title: "Databases",
    span: 2,
    skills: ["SQLite", "RealmDB", "WatermelonDB", "MongoDB", "MySQL"],
  },
  {
    icon: HiOutlineCode,
    title: "Languages",
    span: 2,
    skills: ["JavaScript", "TypeScript", "Java"],
  },
  {
    icon: HiOutlineServer,
    title: "Backend & AI",
    span: 2,
    skills: ["Node.js", "Spring Boot", "AI model integration"],
  },
  {
    icon: HiOutlineBadgeCheck,
    title: "Testing",
    span: 2,
    skills: ["Jest", "Enzyme", "Unit Testing"],
  },
];

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <span className="section__subtitle">Skills</span>
        <h2 className="section__title">What I work with</h2>
        <div className="skills__container container grid">
            {skillGroups.map(({ icon: Icon, title, skills, span, wide }) => (
                <div
                    className={wide ? "skills__content skills__content--wide card" : "skills__content card"}
                    style={{ "--span": span }}
                    key={title}
                >
                    <div className="skills__header">
                        <span className="skills__icon-box">
                            <Icon className="skills__icon" />
                        </span>
                        <h3 className="skills__title">{title}</h3>
                    </div>
                    <ul className="skills__tags">
                        {skills.map((skill) => <li key={skill}>{skill}</li>)}
                    </ul>
                </div>
            ))}
        </div>
    </section>
  );
}

export default Skills;
