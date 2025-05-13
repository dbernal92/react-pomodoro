import { useState } from "react";
import Button from "../ui/Button";

function Timer() {
    const [userTime, setUserTime] = useState(0);

    const minutes = Math.floor(userTime / 60);
    const seconds = userTime % 60;

    const paddedSeconds = seconds < 10 ? `0${seconds}` : seconds;


    console.log("Minutes:", minutes, "Seconds:", paddedSeconds);


    return (
        <>
            <input type="number"
                value={userTime}
                onChange={(e) => setUserTime(Number(e.target.value))}
            />
            <Button onClick={() => setTimeLeft(userTime * 60)}>
                Start Timer
                </Button>
            <p>{minutes}:{paddedSeconds}</p>
        </>
    );
}

export default Timer;