export default function bowlingScore(frames) {
    var result = [];

    // iterating through all the frames
    for(var i=0;i<frames.length;i++) {

        // basic case
        result[i] = frames[i][0]+(frames[i][1]?frames[i][1]:0);
        if(i < 9) {
            // extras during non-last frames
            if(frames[i][1] === '/') { // spare
                if(frames[i+1]) { result[i] = 10 + frames[i+1][0]; }
                else { result[i] = '?'; }
            }
        } else {
            // extras during the last frame
            if(frames[i][1] === '/') { // spare
                if(frames[i][2]) { result[i] = 10 + frames[i][2]; }
                else { result[i] = '?'; }
            }
        }
    }
    return result;
}