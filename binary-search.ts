export function binarySearch(hayStack: number[], needle: number): boolean {
    let lo = 0;
    let hi = hayStack.length;

    do {
        let mid = Math.floor(lo + (hi - lo) / 2);
        const midValue = hayStack[mid];

        if (midValue === needle) {
            return true;
        } else if (midValue > needle) {
            hi = mid;
        } else {
            lo = mid + 1;
        }
    }
    while (lo < hi);
    return false;
}

const hashtack = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const needle = 5;

console.log(binarySearch(hashtack, needle));