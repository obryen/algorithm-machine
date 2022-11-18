// Given two crystal balls that will break in a high enough distance , determine the exact spot 
// in which it will break in the most optimized way.  

export function twoCrystalBalls(breaks: boolean[]): number {

    const jumps = Math.floor(Math.sqrt(breaks.length));

    let i = jumps;

    for (; i < breaks.length, i += jumps;) {
        if (breaks[i]) {
            break;
        }
    }

    i -= jumps;
    for (let j = 0; j < jumps && i < breaks.length; j++, i++) {
        if (breaks[i]) {
            return i;
        }
    }
    return -1
}

const breaks = [false, false, false, false, false, false, false, true, true, true];

console.log(twoCrystalBalls(breaks))