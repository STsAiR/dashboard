import { useState, useEffect } from "react";

const TimeDiff = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(intervalId); // Cleanup on component unmount
    }, []);

    return (
        <div>
            <h1>{`you have been emoing for ${seconds} seconds`}</h1>
        </div>
    );
};

export default TimeDiff;
