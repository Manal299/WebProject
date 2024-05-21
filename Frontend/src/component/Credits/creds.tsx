import React, { useEffect, useState } from 'react';
import './creds.css';
import { PiFlowerLotusLight } from "react-icons/pi";
import { IoHappyOutline } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { TbBasketHeart } from "react-icons/tb";

const Creds: React.FC = () => {
    const [counts, setCounts] = useState([
        { title: "Flower Types", target: 102, count: 0 },
        { title: "Happy Customers", target: 5000, count: 0 },
        { title: "Employers", target: 20, count: 0 },
        { title: "Orders Placed", target: 7500, count: 0 }
    ]);

    useEffect(() => {
        const timer = setInterval(() => {
            setCounts(prevCounts => (
                prevCounts.map(({ title, target, count }) => {
                    if (count < target) {
                        return { title, target, count: count + Math.ceil(target / 200) };
                    }
                    return { title, target, count };
                })
            ));
        }, 20);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        setCounts(prevCounts => (
            prevCounts.map(({ title, target }) => {
                return { title, target, count: 0 };
            })
        ));
    }, []);

    return (
        <section className="counter-section">
            
                <div className="row">
                    {counts.map(({ title, count }, index) => (
                        <div key={index} className="col-md-3 col-sm-6 bottom-margin text-center counter-box">
                            <div className="counter-icon">
                                {index === 0 && <PiFlowerLotusLight className="medium-icon" />}
                                {index === 1 && <IoHappyOutline className="medium-icon" />}
                                {index === 2 && <FaUserFriends className="medium-icon" />}
                                {index === 3 && <TbBasketHeart className="medium-icon" />}
                            </div>
                            <div className="counter-content">
                                <span className="counter">{count}</span>
                                <p className="counter-title">{title}</p>
                            </div>
                        </div>
                    ))}
                </div>
           
        </section>
    );
};

export default Creds;
