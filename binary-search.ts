// assumes haystack is ordered
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

// Big O Notation = O(log n)

// problem: logic breaks down when array does not start from 0

const hashtack = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const needle = 15;

const before = performance.now();
console.log(binarySearch(hashtack, needle));
const after = performance.now();

console.log(`Time elapsed: ${(after - before) / 1000} seconds.`);