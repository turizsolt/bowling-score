const lastFrame = 9;

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
    return add(10,nextRoll(frames, index));
}


function frameScoreWhenStrike(frame, index, frames) {
    return 0;
}

function add(a, b){
    return b==='?'?'?':a+b;
}

function nextRoll(frames: any, index: any) {
    if(index == lastFrame) {
        if(!frames[index][2]) return '?';
        return frames[index][2];
    }
    if(!frames[index+1]) return '?';
    if(frames[index+1][0] === 'X') return 10;
    return frames[index+1][0];
}


