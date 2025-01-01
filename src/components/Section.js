import React from 'react';

const Section = ({ title, content }) => (
    <section className="section">
        <h2>{title}</h2>
        {content?.map((item, index) => (
            <div key={index} style={{ marginBottom: "15px" }}>
                <h3>{item.title}</h3>
                <p><strong>{item.subtitle}</strong></p>
                {(item?.location || item?.date) && (
                    <p>{item.location} {item.location && item.date && ' | '} {item.date}</p>
                )}
                <ul>
                    {item?.details?.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                    ))}
                </ul>
            </div>
        ))}
    </section>
);

export default Section;
