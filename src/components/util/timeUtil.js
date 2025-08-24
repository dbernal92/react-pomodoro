//input into seconds

export function digitsToTotalSeconds(digits) {
    if (!digits) return 0;
    const clean = digits.replace(/\D/g, "");
    if (clean.length === 0) return 0;

    const secPart = clean.slice(-2);       // last two digits = seconds
    const minPart = clean.slice(0, -2);    // everything else = minutes
    const minutes = minPart === "" ? 0 : parseInt(minPart, 10);
    const seconds = parseInt(secPart, 10);

    return minutes * 60 + seconds;
}

//seconds into time format
export function formatMMSS(totalSeconds) {
    const mm = Math.floor(totalSeconds / 60);
    const ss = totalSeconds % 60;
    const paddedSS = ss < 10 ? `0${ss}` : String(ss);
    return `${mm}:${paddedSS}`;
}