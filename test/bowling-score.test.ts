import {expect} from "chai";
import bowlingScore from "../src/bowling-score";

describe("Simple runs", () => {
    it("Empty", () => {
        expect(bowlingScore([])).deep.equal([]);
    });

});
