import React, { useState } from 'react';
import './services.css';
import { HiOutlineDeviceMobile, HiOutlineCode, HiOutlineSparkles, HiOutlineArrowSmRight, HiOutlineCheckCircle, HiX } from 'react-icons/hi';

const services = [
    {
        icon: HiOutlineDeviceMobile,
        title: "Mobile App Development",
        summary: "Cross-platform React Native apps for iOS and Android with analytics, push notifications and social login built in, taken all the way to the stores.",
        items: [
            "Cross-platform apps with React Native & TypeScript",
            "Native modules in Swift and Android",
            "Firebase & Google Analytics integration",
            "AppsFlyer, Adjust & Facebook event tracking",
            "Push notifications & social login",
            "Receipt printer integration over wireless, USB & Ethernet",
            "App Store & Google Play release management",
        ],
    },
    {
        icon: HiOutlineCode,
        title: "Web Development",
        summary: "Fast, responsive web apps with React.js and Next.js, backed by Node.js APIs.",
        items: [
            "React.js & Next.js web applications",
            "REST & GraphQL APIs with Node.js",
            "MySQL data modelling and integration",
            "Receipt printer integration over wireless, USB & Ethernet",
        ],
    },
    {
        icon: HiOutlineSparkles,
        title: "Payments & AI Integration",
        summary: "Monetisation and smart features: in-app purchases, subscriptions and AI models.",
        items: [
            "In-app purchases & subscriptions (iOS)",
            "Google Play Billing integration",
            "AI model and feature integration",
        ],
    },
];

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    return (
    <section className="services section" id="services">
        <span className="section__subtitle">Services</span>
        <h2 className="section__title">What I can do for you</h2>

        <div className="services__container container grid">
            {services.map(({ icon: Icon, title, summary, items }, index) => (
                <div className="services__content card" key={title}>
                    <div className="services__icon-box">
                        <Icon className="services__icon" />
                    </div>
                    <h3 className="services__title">{title}</h3>
                    <p className="services__summary">{summary}</p>
                    <span className="services__button" onClick={() => setToggleState(index + 1)}>
                        View more
                        <HiOutlineArrowSmRight className="services__button-icon" />
                    </span>

                    <div
                        className={toggleState === index + 1 ? "services__modal active-modal" : "services__modal"}
                        onClick={() => setToggleState(0)}
                    >
                        <div className="services__modal-content" onClick={(e) => e.stopPropagation()}>
                            <HiX onClick={() => setToggleState(0)} className="services__modal-close" />
                            <h3 className="services__modal-title">{title}</h3>
                            <p className="services__modal-description">{summary}</p>
                            <ul className="services__modal-services grid">
                                {items.map((item) => (
                                    <li className="services__modal-service" key={item}>
                                        <HiOutlineCheckCircle className="services__modal-icon" />
                                        <p className="services__modal-info">{item}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
  );
}

export default Services;
