export default function bowlingScore(frames) {
    var result = [];

    // iterating through all the frames
    for(var i=0;i<frames.length;i++) {

        // basic case
        result[i] = frames[i][0]+frames[i][1];
        if(i < 9) {
            // extras during non-last frames
            if(frames[i][1] === '/') { // spare
                result[i] = 10 + frames[i+1][0];
            }
        } else {
            // extras during the last frame
            if(frames[i][1] === '/') { // spare
                result[i] = 10 + frames[i][2];
            }
        }
    }
    return result;
}