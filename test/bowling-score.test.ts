import {expect} from "chai";
import bowlingScore from "../src/bowling-score";

describe("Simple runs", () => {
    it("Empty", () => {
        expect(bowlingScore([])).deep.equal([]);
    });

    it("Single frame", () => {
        expect(bowlingScore([[1,3]])).deep.equal([4]);
    });

    it("Multiple frames", () => {
        expect(bowlingScore([[1,3], [2,4], [3,5]])).deep.equal([4,6,8]);
    });
});
