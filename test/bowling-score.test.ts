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
        expect(bowlingScore([[1,3], [2,4], [3,5]])).deep.equal([4, 6, 8]);
    });

    it("A not finished frame", () => {
        expect(bowlingScore([[1,3], [2,4], [3]])).deep.equal([4, 6, 3]);
    });
});

describe("Runs with spare", () => {
    it("One spare", () => {
        expect(bowlingScore([[6, '/'], [2, 3]])).deep.equal([12, 5]);
    });

    it("Multiple spare", () => {
        expect(bowlingScore([[6, '/'], [5, '/'], [4, 2]])).deep.equal([15, 14, 6]);
    });

    it("Spare in the 10th frame", () => {
        expect(bowlingScore([[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [6, '/', 3]])).deep.equal([0, 0, 0, 0, 0, 0, 0, 0, 0, 13]);
    });

    it("Spare in the current frame", () => {
        expect(bowlingScore([[6, '/']])).deep.equal(['?']);
    });

    it("Spare in the current, 10th frame", () => {
        expect(bowlingScore([[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [6, '/']])).deep.equal([0, 0, 0, 0, 0, 0, 0, 0, 0, '?']);
    });
});

describe("Runs with strike", () => {
    it("One strike", () => {
        expect(bowlingScore([['X'], [1, 2]])).deep.equal([13, 3]);
    });

    it("Two strikes", () => {
        expect(bowlingScore([['X'], ['X'], [1, 2]])).deep.equal([21, 13, 3]);
    });

    it("Three strikes", () => {
        expect(bowlingScore([['X'], ['X'], ['X'], [1, 2]])).deep.equal([30, 21, 13, 3]);
    });

    it("One strike ongoing, misses one more", () => {
        expect(bowlingScore([['X'], [1]])).deep.equal(['?', 1]);
    });
});
