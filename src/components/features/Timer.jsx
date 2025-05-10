function Timer() {
    const userTime = 2300;

    const minutes = Math.floor(userTime / 60);
    const seconds = userTime % 60;

    console.log("Minutes:", minutes, "Seconds:", seconds);

    return <p>{minutes}:{seconds}</p>
}

export default Timer;