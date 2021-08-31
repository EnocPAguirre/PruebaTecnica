import {adjacentElements} from "../Ejercicio1";

describe("Ejercicio 1", ()=> {

    test("Test 1", () => {
        const inputArray = [3, 6, -2, -5, 7, 3];
        expect(adjacentElements(inputArray)).toBe(21)
    });

    test("Test 2", () => {
        const inputArray = [23, 4, -3, 8, -12];
        expect(adjacentElements(inputArray)).toBe(92)
    });
});