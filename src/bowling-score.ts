const lastFrame = 9;

export default function bowlingScore(frames) {
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

function isLastFrame(index) {
    return index == lastFrame;
}

function isFrameNotExisting(frames, index) {
    return !frames[index];
}

function valueOrQuestionMark(value) {
    return (value || value === 0) ? value : '?';
}

function frameScoreNormal(frame) {
    return add(valueOrQuestionMark(frame[0]), valueOrQuestionMark(frame[1]));
}

function frameScoreWhenSpare(index, frames) {
    return add(10, nextRoll(frames, index));
}

function frameScoreWhenStrike(index, frames) {
    return add(10, add(nextRoll(frames, index), secondNextRoll(frames, index)));
}

function add(a, b){
    if(a === '?') return '?';
    if(b === '?') return '?';
    if(b === '/') return 10;
    if(a === 'X') a = 10;
    if(b === 'X') return a + 10;
    return a + b;
}

function nextRoll(frames, index) {
    if(isLastFrame(index)) return valueOrQuestionMark(frames[index][isStrike(frames[index])?1:2]);
    if(isFrameNotExisting(frames, index+1)) return '?';
    return valueOrQuestionMark(frames[index+1][0]);
}

function secondNextRoll(frames, index) {
    if(isLastFrame(index)) return valueOrQuestionMark(frames[index][2]);
    if(isFrameNotExisting(frames, index+1)) return '?';
    if(isStrike(frames[index+1])) return nextRoll(frames, index+1);
    return valueOrQuestionMark(frames[index+1][1]);
}
