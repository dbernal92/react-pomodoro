import { useState } from "react";
import { digitsToTotalSeconds } from "../util/timeUtil";
import { formatMMSS } from "../util/timeUtil";
import Button from "../ui/Button";

function TimerInput() {
    // user input
    const [userTime, setUserTime] = useState("");

    // raw user time to equivalent seconds
    const totalSeconds = digitsToTotalSeconds(userTime);

    // convert seconds into formatted amount of time
    const displayedTime = formatMMSS(totalSeconds);

    function handleChange(e) {
        const digitsOnly = e.target.value.replace(/\D/g, "");
        setUserTime(digitsOnly);
    }

    return (
        <div>
            <input
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="Type digits like 1530"
                value={userTime}
                onChange={handleChange}
            />
            <p>{displayedTime}</p>
        </div>
    );
}

export default TimerInput;