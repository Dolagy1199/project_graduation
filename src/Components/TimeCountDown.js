import React from "react";
import { useEffect } from "react";

export default function TimeCountDown({
    hour
    , sethour
    , minutes,
    setMinutes,
    seconds,
    setSeconds
}) {
    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    if (hour === 0)
                        clearInterval(myInterval);
                    else {
                        sethour(hour - 1);
                        setMinutes(59);
                        setSeconds(59);
                    }
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000);
        return () => {
            clearInterval(myInterval);
        };
    });

    return (
        <div>
            expires within {" "}
            <span>
                {hour < 10 ? (hour === 0 ? null : `0${hour} :`) : `${hour}:`}
                {minutes < 10 ? `0${minutes}` : minutes}:
                {seconds < 10 ? `0${seconds}` : seconds}
            </span>
        </div>
    );
}