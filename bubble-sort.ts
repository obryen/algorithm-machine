// unsorted array  

// big O notation: O(n^2)

export function bubbleSort(arr: number[]): number[] {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const tmpItem1 = arr[j]
                arr[j] = arr[j + 1];
                arr[j + 1] = tmpItem1
            }
        }
    }

    return arr;
}


const items: number[] = [1, 2, 15, 16, 95, 1105, 4, 7, 2, 590, 87, 6]

console.log(bubbleSort(items))