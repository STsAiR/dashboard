import { useState, useEffect } from "react";

const CurrentTime = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(intervalId); // Cleanup on component unmount
    }, []);

    return (
        <div>
            <h1>Current Time</h1>
            <p>{time}</p>
        </div>
    );
};

export default CurrentTime;
