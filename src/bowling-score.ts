export default function bowlingScore(frames) {
    var result = [];
    for(var i=0;i<frames.length;i++) {
        result[i] = frames[i][0]+frames[i][1];
        if(frames[i][1] === '/') {
            result[i] = 10 + frames[i+1][0];
        }
    }
    return result;
}