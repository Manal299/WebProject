import React, { useEffect, useState } from 'react';
import './creds.css';

const Creds: React.FC = () => {
    const [counts, setCounts] = useState([
        { title: "Flower Types", target: 102, count: 0 },
        { title: "Happy Customers", target: 5000, count: 0 },
        { title: "Employers", target: 20, count: 0 },
        { title: "Flowers", target: 400, count: 0 }
    ]);

    useEffect(() => {
        const updateCounters = () => {
            setCounts(prevCounts => (
                prevCounts.map(({ title, target }) => {
                    return { title, target, count: Math.ceil(target / 200) };
                })
            ));
        };

        updateCounters();
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setCounts(prevCounts => (
                prevCounts.map(({ title, target, count }) => {
                    if (count >= target) {
                        clearInterval(timer);
                        return { title, target, count: target };
                    }
                    return { title, target, count: count + Math.ceil(target / 200) };
                })
            ));
        }, 20);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="counter-section">
            <div className="container">
                <div className="row">
                    {counts.map(({ title, count }, index) => (
                        <div key={index} className="col-md-3 col-sm-6 bottom-margin text-center counter-box">
                            <div className="counter-icon">
                                <i className={`fa ${index === 0 ? "fa-leaf" : index === 1 ? "fa-smile-o" : index === 2 ? "fa-users" : "fa-flower"} medium-icon`} />
                            </div>
                            <div className="counter-content">
                                <span className="counter">{count}</span>
                                <p className="counter-title">{title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Creds;
