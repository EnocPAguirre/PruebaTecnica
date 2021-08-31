/*
Ex 2.
Given a sequence of integers as an array, determine whether it is possible to obtain
 a strictly increasing sequence by removing no more than one element from the array.
 2 ≤ sequence.length ≤ 105,
-105 ≤ sequence[i] ≤ 105.
•	[output] boolean
o	Return true if it is possible to remove one element from the array in order to get a strictly increasing sequence, otherwise return false.

*/

export const increasingSequence = (sequence) => {

    let found = 0;

    for (let i = 0; i < sequence.length; i++) {

        if (sequence[i] <= sequence[i - 1]) {
            found++;
            if (found > 1) return false;

            if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) return false;

        };
    };
    return true;
}

