const lastFrame = 9;

export default function bowlingScore(frames) {
    console.log(frames);
    return frames.map((frame, index) => frameScore(frame, index, frames));
}

function frameScore(frame, index, frames) {
    if(isSpare(frame)) return frameScoreWhenSpare(index, frames);
    if(isStrike(frame)) return frameScoreWhenStrike(index, frames);
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

function frameScoreWhenSpare(index, frames) {
    return add(10,nextRoll(frames, index));
}


function frameScoreWhenStrike(index, frames) {
    return add(10, add(nextRoll(frames, index), secondNextRoll(frames, index)));
}

function add(a, b){
    if(a === 'X') a = 10;
    if(b === '/') return 10;
    if(b === 'X') return a+10;
    return b==='?'?'?':a+b;
}

function nextRoll(frames: any, index: any) {
    if(index == lastFrame) {
        if(frames[index][0] === 'X') {
            if(!frames[index][1]) return '?';
            return frames[index][1];
        }

        if(!frames[index][2]) return '?';
        return frames[index][2];
    }
    if(!frames[index+1]) return '?';
    return frames[index+1][0];
}

function secondNextRoll(frames: any, index: any) {
    if(index == lastFrame) {
        if(!frames[index][2]) return '?';
        return frames[index][2];
    }

    if(!frames[index+1]) return '?';
    if(frames[index+1][0] === 'X') return nextRoll(frames, index+1);

    if(!frames[index+1] || !frames[index+1][1]) return '?';
    return frames[index+1][1];
}
