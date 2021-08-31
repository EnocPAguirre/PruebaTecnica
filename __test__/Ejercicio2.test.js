import {increasingSequence} from "../Ejercicio2";

describe("Ejercicio 2", ()=> {
    test("Test sequence [1, 3, 2, 1]", () => {
        const inputArray = [1, 3, 2, 1];
        expect(increasingSequence(inputArray)).toBeFalsy();
    });
    
    test("Test sequence [10, 1, 2, 3, 4, 5]", () => {
        const inputArray = [10, 1, 2, 3, 4, 5];
        expect(increasingSequence(inputArray)).toBeTruthy();
    })
});