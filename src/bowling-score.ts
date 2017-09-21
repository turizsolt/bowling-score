export default function bowlingScore(frames) {
    return frames.map((frame, index) => frameScore(frame, index, frames));
}

function frameScore(frame, index, frames) {
    if(isSpare(frame)) return frameScoreWhenSpare(frame, index, frames);
    if(isStrike(frame)) return frameScoreWhenStrike(frame, index, frames);
    return frameScoreNormal(frame);
}

function isSpare(frame) {
    return (frame[1] === '/');
}

function isStrike(frame) {
    return (frame[0] === 'X');
}

function valueOrZero(value) {
    return value?value:0;
}

function frameScoreNormal(frame) {
    return valueOrZero(frame[0])+valueOrZero(frame[1]);
}

function frameScoreWhenSpare(frame, index, frames) {
    return 0;
}


function frameScoreWhenStrike(frame, index, frames) {
    return 0;
}



