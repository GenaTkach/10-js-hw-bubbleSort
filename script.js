const comp = (a, b) => {
    if (typeof a == "string" && typeof b == "string") {
        return a.length - b.length
    } else if (typeof a == "number" && typeof b == "number") {
        return a - b;
    }
}

const arr = [1, 9, 3, 7, 4, 5]; // -> [1, 3, 4, 5, 7, 9]
console.log("===== Bubble Sort =====")
console.log(arr);
bubbleSort(arr);
console.log(arr)

console.log("===== Numbers with comparator =====")
const numbers = [141, 100, 2, 1, 9, 100]
console.log(numbers)
bubbleSortWithComparator(numbers, comp)
console.log(numbers)

console.log("===== Strings with comparator =====")
const arrString = ["aaaa", "cc", "baa", "z", "bz"]
console.log(arrString)
bubbleSortWithComparator(arrString, comp)
console.log(arrString)

function bubbleSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}

function bubbleSortWithComparator(array, comp) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            const res = comp(array[j], array[j + 1]);
            if (res > 0) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}


